import { decompressFromBase64 } from "lz-string";
// import { testSave1 } from "../test/testSave1.js";
import { countDailyWeightDaily, DailyMods } from "./daily";
import { AutoBattleData, mutationData, GameObject, Portal, Traps } from "./GameObject.d";
import { getDailyHeliumValue, isRewardActive } from "./main";

const extend = require("node.extend/lib/extend");
// const {
// getUniverseChange,
// getLevel,
// getDailyBonus,
// getExpBonus,
// } = require("./fluffy");
// const { getHeirloomValue } = require("./main");

export function handle_paste(ev): { game: GameObject; string: string } | false {
  var save_string = ev.clipboardData.getData("text/plain").replace(/\s/g, "");
  const game = JSON.parse(decompressFromBase64(save_string)) ?? null;
  if (game?.global === undefined) return false;

  return {
    game,
    string: save_string,
  };
}

const growth = 4;
const baseExp = 50;
const prestigeExpModifier = 5;
const baseFirstLevel = 1000;
const maxEvolution = 10;

export interface displayData {
  xpPerRun: number;
  currentZone: number;
  table: [number[]];
  levelUpTable: {};
  percentToLevel: number;
  bonesToLevel: number;
  XPhr: number;
  name: string;
}

export class fluffyInstance {
  string: string;

  name = "init"; // getUniverseChange
  firstLevel = 1000;
  level = 0; // getLevel

  iceBonus = 0;
  expBonus = 0;

  exp = 0; // game.global.fluffyExp/2 // getUniverseChange
  evolution = 0; // game.global.fluffyPrestige/2 // getUniverseChange

  purchasedFluffyPrestigeBonus = false;
  purchasedFluffyExpBonus = false;

  // Edit in inputs
  universe = 1; // getUniverseChange
  zoneYouPortal = 0; // getUniverseChange
  dailyBonus = 0;
  heirloomBonus = 0;
  graphNextIce = false;
  spiresCompleted = [];
  instantUpdating = false;
  minutesPerRun = 14;
  averageWorshippers = 0;
  frigidCompletions = 0;
  //
  currentExp = 0;

  traps: Traps; // game.playerSpire.traps.Knowledge

  autoBattle: AutoBattleData;
  mutations: mutationData;

  daily: DailyMods; // game.global.dailyChallenge

  portal: Portal;

  displayData: displayData = {
    xpPerRun: 0,
    currentZone: 0,
    table: [[]],
    levelUpTable: {},
    percentToLevel: 0,
    bonesToLevel: 0,
    XPhr: 0,
    name: "init",
  };

  save = {
    fluffyExp: 0,
    fluffyExp2: 0,
    fluffyPrestige: 0,
    fluffyPrestige2: 0,
    lastPortal: 0, // game.global.lastPortal
    lastRadonPortal: 0, // game.global.lastRadonPortal
    bestFluffyExp: 0,
    zone: [0, 0],
    heirloomBonus: 0,
  };

  atMaxEvo = () => {
    if (this.universe === 2) return true;
    if (this.evolution === maxEvolution) return true;
    return false;
  };

  getLevel = (evolution: number, exp: number) => {
    return Math.floor(
      Math.log((exp / this.getFirstLevel(evolution)) * (growth - 1) + 1) /
      Math.log(growth)
    );
  };

  getFirstLevel = (evolution: number) => {
    return baseFirstLevel * Math.pow(prestigeExpModifier, evolution);
  };

  removeExp = (evolution: number, level: number) => {
    if (level === 10) return 0;
    return Math.floor(
      this.firstLevel *
      Math.pow(prestigeExpModifier, evolution) *
      ((Math.pow(growth, level) - 1) / (growth - 1))
    );
  };

  getExpBonus = () => {
    let num = 1;
    if (this.universe === 1) {
      num *= this.getExpGrowth();
    }
    if (this.dailyBonus > 1) {
      num *= this.dailyBonus;
    }
    if (this.heirloomBonus > 1) {
      num *= this.heirloomBonus;
    }
    if (this.purchasedFluffyExpBonus) {
      num *= 0.25 * this.evolution + 1;
    }
    if (this.traps.owned > 0) {
      num *= (0.15 + (this.traps.level - 1) * 0.075) * this.traps.owned + 1;
    }
    if (this.graphNextIce && this.iceBonus > 1) {
      num *= this.iceBonus;
    }
    if (this.universe === 1 && this.frigidCompletions > 0) {
      num *= 1 + (((this.frigidCompletions / 2) * (this.frigidCompletions + 1)) / 40);
    }

    if (this.universe === 2) {
      if (this.averageWorshippers > 0) {
        num *= this.averageWorshippers * 0.05 * 0.375 + 1;
      }

      if (this.autoBattle.oneTimers.Battlescruff) {
        num *= 1 + (this.autoBattle.maxEnemyLevel - 1) / 50;
      }

      if (this.mutations.Scruffy) {
        num *= 1.3;
      }
    }

    return num;
  };

  getUpgradeExp = (evolution: number, level: number, expInLevel: number) => {
    if (level === 10) {
      return this.currentExp;
    }
    return Math.floor(
      this.firstLevel *
      Math.pow(prestigeExpModifier, evolution) *
      ((Math.pow(growth, level + 1) - 1) / (growth - 1)) -
      this.removeExp(evolution, level)
    );
  };

  getMinZoneForExp = () => {
    if (this.universe === 1) {
      var zone = 301;
      if (this.portal.Classy.level) zone -= this.portal.Classy.level * 3;
      return Math.floor(zone);
    } else {
      return 0;
    }
  };

  getExpGrowth = () => {
    if (this.universe === 2) return 1.02;
    return 1.015;
  };

  getBaseExp = () => {
    if (this.universe === 2) return 2.5;
    return 50;
  };

  xpFromZone = (start: number, end: number): number => {
    const minimumZone = this.getMinZoneForExp();
    // If ending before you're actually allowed to get xp then return nothing.
    let mcalc1: number, mcalc2: number;

    if (end < minimumZone) {
      return 0;
    }
    // If starting before you're allowed to get xp, set start to min zone.
    if (start < minimumZone) {
      start = minimumZone;
    }

    if (this.universe === 1) {
      mcalc1 =
        (Math.pow(this.getExpGrowth(), end - minimumZone) - 1) /
        (this.getExpGrowth() - 1);
      mcalc2 =
        (this.getBaseExp() + this.portal.Curious.level * 80) *
        (1 + this.portal.Cunning.level * 0.25) *
        this.expBonus;
    } else {
      mcalc1 =
        (Math.pow(Math.pow(this.getExpGrowth(), 3), end) - 1) /
        (Math.pow(this.getExpGrowth(), 3) - 1);
      mcalc2 = this.getBaseExp() * this.expBonus;
    }

    let addSpireBonus = 0;

    if (this.universe === 1 && this.spiresCompleted.length > 0) {
      const spiresCompletedZones = this.spiresCompleted.map(
        (spireNumber) => (spireNumber + 1) * 100
      );

      addSpireBonus = spiresCompletedZones.reduce((total, zone) => {
        if (start < zone && end > zone) return total + this.spireXP(zone);

        return total;
      }, 0);
    }

    // Minus all of the previous zone xp.
    if (start > minimumZone) {
      return (
        mcalc1 * mcalc2 + addSpireBonus - this.xpFromZone(minimumZone, start)
      );
    } else {
      let calc = mcalc1 * mcalc2 + addSpireBonus;
      if (this.universe === 2) calc -= mcalc2;
      return calc;
    }
  };

  spireXP = (zone: number) => {
    var reward =
      (baseExp + this.portal.Curious.level * 80) *
      Math.pow(this.getExpGrowth(), zone - this.getMinZoneForExp() - 1) *
      (1 + this.portal.Cunning.level * 0.25);
    return reward * this.expBonus * this.getExpGrowth();
  };

  getHeirloomValue = (
    bonus: number,
    universe: number,
    evolution: number,
    level: number,
    boughtEarly: boolean
  ) => {
    var b = bonus / 100 + 1;
    if (
      universe === 2 &&
      !isRewardActive("heirloopy", universe, evolution, level, boughtEarly)
    )
      b = (b - 1) * 0.1 + 1;
    if (b > 1) {
      return b;
    } else if (b === 1) {
      return 1;
    }
  };

  getTableCell = (evolution: number, level: number, prevRuns: number) => {
    if (this.evolution === evolution && this.level > level) {
      return 0;
    }

    const xpPerRun = this.displayData.xpPerRun;

    const currentExp = this.evolution === evolution ? this.currentExp : 0;

    const neededExpForLevel = this.getUpgradeExp(evolution, level, currentExp);

    const runs = (neededExpForLevel - currentExp) / xpPerRun;
    return runs + prevRuns;
  };

  getTableData = () => {
    let evolution = this.evolution;

    this.displayData.xpPerRun = Math.round(
      this.xpFromZone(0, this.zoneYouPortal)
    );

    let data = [];

    let runs = 0;

    let startingLevel = this.universe === 2 ? this.level : 0;

    for (let lev = startingLevel; lev < startingLevel + 10; lev++) {
      runs = this.getTableCell(evolution, lev, runs);
      data[lev] = [runs];
    }

    if (!this.atMaxEvo()) {
      for (let lev = 0; lev < 10; lev++) {
        runs = this.getTableCell(evolution + 1, lev, runs);
        data[lev].push(runs);
      }
    }

    return data as [number[]];
  };

  getLevelUpTable = (): Partial<{ [key: string]: number }> => {
    let evolution = this.evolution;
    let level = this.level;

    let zone = this.universe === this.save.zone[0] ? this.save.zone[1] : 0;

    let data = {};

    let maxZone = this.zoneYouPortal + 100;
    let zoneLastLeveled = zone;

    // prettier-ignore
    const currentRelativeExp = this.evolution === evolution ? this.currentExp : 0;
    // prettier-ignore
    let neededExpForLevel = this.getUpgradeExp(evolution, level, currentRelativeExp);

    neededExpForLevel = neededExpForLevel - currentRelativeExp;

    if (this.xpFromZone(zoneLastLeveled, maxZone) > neededExpForLevel) {
      for (var z = zone; z < maxZone; z++) {
        let collectedExp = this.xpFromZone(zoneLastLeveled, z + 1);
        if (collectedExp >= neededExpForLevel) {
          zoneLastLeveled = z;

          if (level === 9) {
            if (this.universe === 1 && evolution === maxEvolution) break;
            evolution++;
            level = 0;
          } else {
            level++;
          }

          let key: string;
          if (this.universe === 2) {
            key = "";
          } else {
            key = `E${evolution}`;
          }

          key += `L${level}`;

          data = { ...data, [key]: z };

          // prettier-ignore
          neededExpForLevel = this.getUpgradeExp(evolution, level, currentRelativeExp);
        } else {
          continue;
        }
      }
    }
    return data;
  };

  updateUniverse = (universe: number) => {
    this.universe = universe;
    this.name = universe === 1 ? "Fluffy" : "Scruffy";

    this.evolution =
      universe === 1 ? this.save.fluffyPrestige : this.save.fluffyPrestige2;

    this.exp = universe === 1 ? this.save.fluffyExp : this.save.fluffyExp2;

    this.zoneYouPortal =
      universe === 1 ? this.save.lastPortal : this.save.lastRadonPortal;

    this.level = this.getLevel(this.evolution, this.exp);

    this.currentExp = Math.ceil(
      this.exp - this.removeExp(this.evolution, this.level)
    );

    this.heirloomBonus = getHeirloomValue(
      this.save.heirloomBonus,
      this.universe,
      this.evolution,
      this.level,
      this.purchasedFluffyExpBonus
    );

    this.dailyBonus = getDailyBonus(
      this.daily,
      this.universe,
      this.evolution,
      this.level,
      this.purchasedFluffyExpBonus
    );
  };

  updateDisplayData = () => {
    const neededExpForLevel = this.getUpgradeExp(this.evolution, this.level, 0);
    const xpPerRun = Math.round(this.xpFromZone(0, this.zoneYouPortal));
    const currentZone =
      this.universe === this.save.zone[0] ? this.save.zone[1] : 0;

    this.displayData = {
      xpPerRun: xpPerRun,
      table: this.getTableData(),
      levelUpTable: this.getLevelUpTable(),
      currentZone: currentZone,
      percentToLevel: Number(
        ((this.currentExp / neededExpForLevel) * 100).toFixed(2)
      ),
      bonesToLevel:
        this.universe === 1
          ? Math.ceil(
            (neededExpForLevel - this.currentExp) / this.save.bestFluffyExp
          ) * 100
          : 0,
      XPhr:
        this.minutesPerRun > 0
          ? Math.round((xpPerRun / this.minutesPerRun) * 60)
          : 0,

      name: this.name,
    };
  };

  pasteSaveActions = (gameSave: GameObject) => {
    this.save = {
      fluffyExp: gameSave.global.fluffyExp,
      fluffyExp2: gameSave.global.fluffyExp2,
      fluffyPrestige: gameSave.global.fluffyPrestige,
      fluffyPrestige2: gameSave.global.fluffyPrestige2,
      lastPortal: gameSave.global.lastPortal,
      lastRadonPortal: gameSave.global.lastRadonPortal,
      bestFluffyExp: gameSave.stats.bestFluffyExp.valueTotal,
      zone: [gameSave.global.universe, gameSave.global.world],
      heirloomBonus: gameSave.heirlooms.Staff.FluffyExp.currentBonus,
    };

    this.autoBattle = gameSave.global.autoBattleData;
    this.mutations = gameSave.global.u2MutationData;

    this.daily = extend(true, {}, gameSave.global.dailyChallenge);
    this.portal = extend(true, {}, gameSave.portal);

    this.updateUniverse(gameSave.global.universe);

    this.purchasedFluffyExpBonus = gameSave.talents.fluffyExp.purchased;

    this.averageWorshippers =
      this.universe === 2 ? gameSave.jobs.Worshipper.owned : 0;

    this.purchasedFluffyPrestigeBonus =
      gameSave.talents.fluffyAbility.purchased;

    this.traps = extend(true, {}, gameSave.playerSpire.traps.Knowledge);

    this.graphNextIce = gameSave.global.uberNature === "Ice";

    this.iceBonus =
      this.universe === 1 ? 1 + 0.0025 * gameSave.empowerments.Ice.level : 1;

    this.frigidCompletions = gameSave.global.frigidCompletions;

    this.expBonus = this.getExpBonus();

    this.updateDisplayData();
  };

  saveLocalStorage = () => {
    localStorage.setItem(
      "fluffy-fluffy",
      JSON.stringify({
        instantUpdating: this.instantUpdating,
        minutesPerRun: this.minutesPerRun,
        spiresCompleted: this.spiresCompleted,
      })
    );
  };

  getLocalStorage = () => {
    let saveObj = JSON.parse(localStorage.getItem("fluffy-fluffy"));

    this.instantUpdating = saveObj?.instantUpdating ?? false;
    this.minutesPerRun = saveObj?.minutesPerRun ?? 0;
    this.spiresCompleted = saveObj?.spiresCompleted ?? [];
  };

  changeVar = (label: string, value: string) => {
    switch (label) {
      case "Capable Level":
        this.portal.Capable.level = Number(value);
        break;
      case "Cunning Level":
        this.portal.Cunning.level = Number(value);
        break;
      case "Curious Level":
        this.portal.Curious.level = Number(value);
        break;
      case "Classy Level":
        this.portal.Classy.level = Number(value);
        break;
      case "Zone You Portal":
        this.zoneYouPortal = Number(value);
        break;
      case "Daily Bonus":
        this.dailyBonus = Number(value) / 100 + 1;
        this.expBonus = this.getExpBonus();
        break;
      case "Heirloom Bonus":
        this.heirloomBonus = Number(value) / 100 + 1;
        this.expBonus = this.getExpBonus();
        break;
      case "List of Spire Clears":
        this.spiresCompleted = value.split(",").map(Number);
        this.saveLocalStorage();
        break;
      case "Knowledge Towers":
        this.traps.owned = Number(value);
        this.expBonus = this.getExpBonus();
        break;
      case "Knowledge Level":
        this.traps.level = Number(value);
        this.expBonus = this.getExpBonus();
        break;
      case "Frigid Completions":
        this.frigidCompletions = Number(value);
        this.expBonus = this.getExpBonus();
        break;
      case "Average Worshippers":
        this.averageWorshippers = Number(value);
        this.expBonus = this.getExpBonus();
        break;
      case "Minutes Per Run":
        this.minutesPerRun = Number(value);
        this.saveLocalStorage();
        break;
    }
  };
}

const getHeirloomValue = (
  bonus: number,
  universe: number,
  evolution: number,
  level: number,
  boughtEarly: boolean
) => {
  var b = bonus / 100 + 1;
  if (
    universe === 2 &&
    !isRewardActive("heirloopy", universe, evolution, level, boughtEarly)
  )
    b = (b - 1) * 0.1 + 1;
  if (b > 1) {
    return b;
  } else if (b === 1) {
    return 1;
  }
};

const getDailyBonus = (
  daily: DailyMods,
  universe: number,
  evolution: number,
  level: number,
  boughtEarly: boolean
) => {
  if (daily.seed) {
    return (
      getDailyHeliumValue(
        countDailyWeightDaily(daily),
        isRewardActive("dailies", universe, evolution, level, boughtEarly)
      ) /
      100 +
      1
    );
  } else {
    return 1;
  }
};
