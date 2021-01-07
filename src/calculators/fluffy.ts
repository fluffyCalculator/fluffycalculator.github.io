import { decompressFromBase64 } from "lz-string";
// import { testSave1 } from "../test/testSave1.js";
import { countDailyWeightDaily, DailyMods } from "./daily";
import { GameObject, Portal, TrapProperties } from "./GameObject.d";
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
  console.log("game", game);
  if (game?.global === undefined) return false;

  return {
    game,
    string: save_string,
  };
}

const growth = 4;
const expGrowth = 1.015;
const baseExp = 50;
const prestigeExpModifier = 5;
const baseFirstLevel = 1000;
const maxEvolution = ["filler", 10, 1];

export class fluffyInstance {
  string: string;

  name = "init"; // getUniverseChange
  firstLevel = 1000;
  expInLevel = 0;
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

  //
  currentExp = 0;

  traps: TrapProperties; // game.playerSpire.traps.Knowledge

  daily: DailyMods; // game.global.dailyChallenge

  portal: Portal;

  save = {
    fluffyExp: 0,
    fluffyExp2: 0,
    fluffyPrestige: 0,
    fluffyPrestige2: 0,
    lastPortal: 0, // game.global.lastPortal
    lastRadonPortal: 0, // game.global.lastRadonPortal
  };

  displayData = {
    xpPerRun: 0,
  };

  getLevel = (evolution, exp) => {
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
      num *= expGrowth;
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
    return num;
  };

  updateUniverse = (universe: number) => {
    this.universe = universe;
    this.name = universe === 1 ? "Fluffy" : "Scruffy";

    this.evolution =
      universe === 1 ? this.save.fluffyPrestige : this.save.fluffyPrestige2;

    this.exp = universe === 1 ? this.save.fluffyExp : this.save.fluffyExp2;

    this.zoneYouPortal =
      universe === 1 ? this.save.lastPortal : this.save.lastRadonPortal;
  };

  getUpgradeExp = (
    evolution: number,
    level: number,
    firstLevel: number,
    expInLevel: number
  ) => {
    if (level === 10) {
      return expInLevel;
    }
    return Math.floor(
      firstLevel *
        Math.pow(prestigeExpModifier, evolution) *
        ((Math.pow(growth, level + 1) - 1) / (growth - 1)) -
        this.removeExp(evolution, level)
    );
  };

  getDailyBonus = (
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

  getMinZoneForExp = () => {
    if (this.universe === 1) {
      var zone = 301;
      if (this.portal.Classy.level) zone -= this.portal.Classy.level * 3;
      return Math.floor(zone);
    } else {
      return 0;
    }
  };

  xpFromZone = (start: number, end: number) => {
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
      mcalc1 = (Math.pow(expGrowth, end - minimumZone) - 1) / (expGrowth - 1);
      mcalc2 =
        (baseExp + this.portal.Curious.level * 60) *
        (1 + this.portal.Cunning.level * 0.25) *
        this.expBonus;
    } else {
      mcalc1 =
        (Math.pow(Math.pow(expGrowth, 3), end) - 1) /
        (Math.pow(expGrowth, 3) - 1);
      mcalc2 = 2.5 * this.expBonus;
    }

    let addSpireBonus = 0;

    if (this.universe === 1 && this.spiresCompleted.length > 0) {
      const spiresCompletedZones = this.spiresCompleted.map(
        (spireNumber) => (spireNumber + 1) * 100
      );

      console.log("spiresCompletedZones", spiresCompletedZones);

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
      return mcalc1 * mcalc2 + addSpireBonus;
    }
  };

  spireXP = (zone: number) => {
    var reward =
      (baseExp + this.portal.Curious.level * 60) *
      Math.pow(expGrowth, zone - this.getMinZoneForExp() - 1) *
      (1 + this.portal.Cunning.level * 0.25);
    return reward * this.expBonus * expGrowth;
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

  updateDisplayData = () => {
    this.displayData = {
      xpPerRun: Math.round(this.xpFromZone(0, this.zoneYouPortal)),
    };
  };

  pasteSaveActions = (gameSave: GameObject) => {
    this.save = {
      fluffyExp: gameSave.global.fluffyExp,
      fluffyExp2: gameSave.global.fluffyExp2,
      fluffyPrestige: gameSave.global.fluffyPrestige,
      fluffyPrestige2: gameSave.global.fluffyPrestige2,
      lastPortal: gameSave.global.lastPortal, // game.global.lastPortal
      lastRadonPortal: gameSave.global.lastRadonPortal, // game.global.lastRadonPortal
    };

    this.updateUniverse(gameSave.global.universe);

    this.level = this.getLevel(this.evolution, this.exp);

    this.daily = extend(true, {}, gameSave.global.dailyChallenge);
    this.portal = extend(true, {}, gameSave.portal);

    this.purchasedFluffyExpBonus = gameSave.talents.fluffyExp.purchased;

    this.purchasedFluffyPrestigeBonus =
      gameSave.talents.fluffyAbility.purchased;

    this.dailyBonus = this.getDailyBonus(
      this.daily,
      this.universe,
      this.evolution,
      this.level,
      this.purchasedFluffyExpBonus
    );

    this.heirloomBonus = this.getHeirloomValue(
      gameSave.heirlooms.Staff.FluffyExp.currentBonus,
      this.universe,
      this.evolution,
      this.level,
      this.purchasedFluffyExpBonus
    );

    this.traps = extend(true, {}, gameSave.playerSpire.traps.Knowledge);

    this.iceBonus =
      this.universe === 1 ? 1 + 0.0025 * gameSave.empowerments.Ice.level : 1;

    this.currentExp = Math.ceil(
      this.exp - this.removeExp(this.evolution, this.level)
    );
    console.log("this.currentExp", this.currentExp);

    this.expBonus = this.getExpBonus();

    this.updateDisplayData();

    console.log(this);
  };
}

// const test = pasteSaveActions(testSave1);
// console.log("test", test);

// TODO

// ADD CURRENT ZONE
// ADD NEEDEDEXP
// ADD EXPINLEVEL
