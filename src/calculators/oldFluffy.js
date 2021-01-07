// import { defaultState, pasteSaveActions } from "./test";
import LZString from "lz-string";
import extend from "node.extend";
import { countDailyWeightDaily } from "./daily";
import { getDailyHeliumValue, isRewardActive } from "./main";
// import { testSave1 } from "../test/testSave1.js"

export function handle_paste(ev) {
  var save_string = ev.clipboardData.getData("text/plain").replace(/\s/g, "");
  const game = JSON.parse(LZString.decompressFromBase64(save_string));
  console.log("game", game);
  if (game === undefined) return false;
  return game;
}

export function fluffyInstance() {
  this.name = "Init";
  // FIXED STUFF
  this.firstLevel = 1000;
  this.growth = 4;
  this.expGrowth = 1.015;
  this.maxEvolution = ["filler", 10, 1];
  this.prestigeExpModifier = 5;

  // FUNCTION CHANGE
  this.currentLevel = 0;
  this.startToEarn = ["filler", 301, 0];
  this.expBonus = 1;
  this.currentExp = 0;
  this.neededExp = 0;
  this.xpPerRun = 0;
  this.specialBonus = 1;
  this.currentZone = 0;

  // EDIT IN INPUTS
  this.universe = 1;
  this.fluffyExp = 0;
  this.fluffyPrestige = 0;

  this.zoneYouPortal = 0;
  this.dailyBonus = 0;
  this.heirloomBonus = 0;
  this.graphNextIce = false;

  this.portal = {};
  this.traps = {};

  this.spiresCompleted = [];

  this.instantUpdating = false;
  this.minutesPerRun = 0;

  console.log("init1");

  //
  this.updateSave = (save) => {
    this.save = save;
    // console.log(save);
    this.portal = extend(true, {}, save.portal);
    this.traps = extend(true, {}, save.playerSpire.traps.Knowledge);
    this.universe = save.global.universe;
    this.setFluffyExp();
    this.updateZone();

    this.iceBonus =
      this.universe === 1 ? 1 + 0.0025 * save.empowerments.Ice.level : 1;
    this.graphNextIce = save.global.uberNature === "Ice";

    this.getDailyChallenge();

    this.currentExp = Math.ceil(
      this.fluffyExp -
        this.removeExp(this.fluffyPrestige, this.calculateLevel())
    );

    this.heirloomBonus = getHeirloomValue(this);

    this.neededExp = this.upgrade(this.fluffyPrestige, this.currentLevel);

    this.currentZone = save.global.world;

    this.getExpBonus();

    // console.log(save);
    this.save = save;

    return this;
  };

  this.calculateLevel = () => {
    var level = Math.floor(
      Math.log(
        (this.fluffyExp / this.getFirstLevel()) * (this.growth - 1) + 1
      ) / Math.log(this.growth)
    );
    this.currentLevel = level;
    return level;
  };

  this.getFirstLevel = () => {
    var prestigeRequire = Math.pow(
      this.prestigeExpModifier,
      this.fluffyPrestige
    );
    return this.firstLevel * prestigeRequire;
  };

  this.removeExp = (e, l) => {
    if (l === 10) return 0;
    return Math.floor(
      this.firstLevel *
        Math.pow(this.prestigeExpModifier, e) *
        ((Math.pow(this.growth, l) - 1) / (this.growth - 1))
    );
  };

  this.getExpBonus = () => {
    let returnN = 1;
    //dailyBonus
    if (this.dailyBonus > 1) {
      returnN *= this.dailyBonus;
    }

    // specialBonus
    if (this.specialBonus > 1) {
      returnN *= this.specialBonus;
    }

    //expGrowth
    if (this.universe === 1) {
      returnN *= this.expGrowth;
    }

    // heirloomBonus
    if (this.heirloomBonus > 1) {
      returnN *= this.heirloomBonus;
    }
    // console.log("this.heirloomBonus",this.heirloomBonus)
    // console.log(returnN,this.heirloomBonus > 1);
    //evolutionXP
    if (this.save.talents.fluffyExp.purchased) {
      returnN *= 0.25 * this.fluffyPrestige + 1;
    }

    //knowledgeBonus
    if (this.save.playerSpire != null) {
      if (this.traps.owned > 0) {
        returnN *=
          (0.15 + (this.traps.level - 1) * 0.075) * this.traps.owned + 1;
      }
    }

    // iceBonus
    if (this.iceBonus > 1 && this.graphNextIce) {
      returnN *= this.iceBonus;
    }

    this.expBonus = returnN;
  };

  this.setFluffyExp = () => {
    if (this.universe === 1) {
      this.name = "Fluffy";
      this.fluffyExp = this.save.global.fluffyExp;
      this.fluffyPrestige = this.save.global.fluffyPrestige;
    } else {
      this.name = "Scruffy";
      this.fluffyExp = this.save.global.fluffyExp2;
      this.fluffyPrestige = this.save.global.fluffyPrestige2;
    }
  };
  this.upgrade = (e, l) => {
    if (l === 10) {
      return this.currentExp;
    }
    return Math.floor(
      this.firstLevel *
        Math.pow(this.prestigeExpModifier, e) *
        ((Math.pow(this.growth, l + 1) - 1) / (this.growth - 1)) -
        this.removeExp(e, l)
    );
  };

  this.updateZone = () => {
    this.zoneYouPortal =
      this.universe === 1
        ? this.save.global.lastPortal
        : this.save.global.lastRadonPortal;
  };

  this.getDailyChallenge = () => {
    if (this.save.global.dailyChallenge.seed) {
      this.dailyBonus =
        getDailyHeliumValue(
          countDailyWeightDaily(this.save.global.dailyChallenge),
          isRewardActive("dailies", this)
        ) /
          100 +
        1;
    } else {
      this.dailyBonus = 1;
    }
  };
}

// const r = new fluffyInstance();
// r.updateSave(testSave1);
// console.log(r);

export const getLevel = (evolution, exp) => {
  return Math.floor(
    Math.log((exp / getFirstLevel(evolution)) * (growth - 1) + 1) /
      Math.log(growth)
  );
};

export const getFirstLevel = (prestige) => {
  return baseFirstLevel * Math.pow(prestigeExpModifier, prestige);
};

export const removeExp = (evolution, level, firstLevel) => {
  if (level === 10) return 0;
  return Math.floor(
    firstLevel *
      Math.pow(prestigeExpModifier, evolution) *
      ((Math.pow(growth, level) - 1) / (growth - 1))
  );
};

export const getExpBonus = (instance) => {
  let num = 1;
  if (instance.universe === 1) {
    num *= expGrowth;
  }
  if (instance.dailyBonus > 1) {
    num *= instance.dailyBonus;
  }
  if (instance.heirloomBonus > 1) {
    num *= instance.heirloomBonus;
  }
  if (instance.purchasedfluffyExp) {
    num *= 0.25 * instance.evolution + 1;
  }
  if (instance.traps.owned > 0) {
    num *=
      (0.15 + (instance.traps.level - 1) * 0.075) * instance.traps.owned + 1;
  }
  if (instance.graphNextIce && instance.iceBonus > 1) {
    num *= instance.iceBonus;
  }
  return num;
};

export const getUniverseChange = (
  universe,
  fluffyPrestige,
  fluffyExp,
  lastPortals
) => {
  return {
    universe: universe,
    name: universe === 1 ? "Fluffy" : "Scruffy",
    exp: universe === 1 ? fluffyExp[0] : fluffyExp[1],
    evolution: universe === 1 ? fluffyPrestige[0] : fluffyPrestige[1],
    zoneYouPortal: universe === 1 ? lastPortals[0] : lastPortals[1],
  };
};

export const getUpgradeExp = (evolution, level, firstLevel, expInLevel) => {
  if (level === 10) {
    return expInLevel;
  }
  return Math.floor(
    firstLevel *
      Math.pow(prestigeExpModifier, evolution) *
      ((Math.pow(growth, level + 1) - 1) / (growth - 1)) -
      removeExp(evolution, level, firstLevel)
  );
};

export const getDailyBonus = (
  daily,
  universe,
  evolution,
  level,
  boughtEarly
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

// const r = new fluffyInstance();
// r.updateSave(testSave1);
// console.log(r);

export function getHeirloomValue(
  bonus,
  universe,
  evolution,
  level,
  boughtEarly
) {
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
}

const growth = 4;
const expGrowth = 1.015;
const baseExp = 50;
const prestigeExpModifier = 5;
const baseFirstLevel = 1000;
const maxEvolution = ["filler", 10, 1];

// const test = pasteSaveActions(testSave1);
// console.log("test", test);

// console.log("testKeys", Object.keys(test))
// console.log("defaultStateKeys", Object.keys(defaultState))
// console.log("difference",Object.keys(test).filter(x => !Object.keys(defaultState).includes(x)));
