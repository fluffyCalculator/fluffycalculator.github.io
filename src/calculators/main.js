export var dailyModifiers = {
  minDamage: {
    description: function (str) {
      return (
        "Trimp min damage reduced by " +
        prettify(this.getMult(str) * 100) +
        "% (additive)."
      );
    },
    getMult: function (str) {
      return 0.1 + (str - 1) * 0.01;
    },
    getWeight: function (str) {
      return 1 / ((1.2 + (1 - this.getMult(str))) / 2 / 1.1) - 1;
    },
    minMaxStep: [41, 90, 1],
    chance: 1,
  },
  maxDamage: {
    description: function (str) {
      return (
        "Trimp max damage increased by " +
        prettify(this.getMult(str) * 100) +
        "% (additive)."
      );
    },
    getMult: function (str) {
      return str;
    },
    getWeight: function (str) {
      return 1 - (1.2 + (1 + str)) / 2 / 1.1;
    },
    minMaxStep: [1, 5, 0.25],
    chance: 1,
  },
  plague: {
    //Half of electricity
    description: function (str) {
      return (
        "Enemies stack a debuff with each attack, damaging Trimps for " +
        prettify(this.getMult(str, 1) * 100) +
        "% of total health per turn per stack, resets on Trimp death."
      );
    },
    getMult: function (str, stacks) {
      return 0.01 * str * stacks;
    },
    getWeight: function (str) {
      var count = Math.ceil((1 + Math.sqrt(1 + 800 / str)) / 2);
      return (6 - 0.1 * count + 0.8 / count + str / 8) / 1.75;
    },
    minMaxStep: [1, 10, 1],
    chance: 0.3,
    icon: "*bug2",
    incompatible: ["rampage", "weakness"],
    stackDesc: function (str, stacks) {
      return (
        "Your Trimps are taking " +
        prettify(this.getMult(str, stacks) * 100) +
        "% damage after each attack."
      );
    },
  },
  weakness: {
    description: function (str) {
      return (
        "Enemies stack a debuff with each attack, reducing Trimp attack by " +
        prettify(100 - this.getMult(str, 1) * 100) +
        "% per stack. Stacks cap at 9 and reset on Trimp death."
      );
    },
    getMult: function (str, stacks) {
      return 1 - 0.01 * str * stacks;
    },
    getWeight: function (str) {
      return str / 4;
    },
    minMaxStep: [1, 10, 1],
    chance: 0.6,
    icon: "fire",
    incompatible: ["bogged", "plague"],
    stackDesc: function (str, stacks) {
      return (
        "Your Trimps have " +
        prettify(100 - this.getMult(str, stacks) * 100) +
        "% less attack."
      );
    },
  },
  large: {
    description: function (str) {
      return (
        "All housing can store " +
        prettify(100 - this.getMult(str) * 100) +
        "% fewer Trimps"
      );
    },
    getMult: function (str) {
      return 1 - 0.01 * str;
    },
    getWeight: function (str) {
      return (1 / this.getMult(str) - 1) * 2;
    },
    minMaxStep: [10, 60, 1],
    chance: 1,
  },
  dedication: {
    description: function (str) {
      return (
        "Gain " +
        prettify(this.getMult(str) * 100 - 100) +
        "% more resources from gathering"
      );
    },
    getMult: function (str) {
      return 1 + 0.1 * str;
    },
    getWeight: function (str) {
      return 0.075 * str * -1;
    },
    incompatible: ["famine"],
    minMaxStep: [5, 40, 1],
    chance: 0.75,
  },
  famine: {
    description: function (str) {
      return (
        "Gain " +
        prettify(100 - this.getMult(str) * 100) +
        "% less Metal, Food, Wood, and Gems from all sources"
      );
    },
    getMult: function (str) {
      return 1 - 0.01 * str;
    },
    getWeight: function (str) {
      return (1 / this.getMult(str) - 1) / 2;
    },
    incompatible: ["dedication"],
    minMaxStep: [40, 80, 1],
    chance: 2,
  },
  badStrength: {
    description: function (str) {
      return (
        "Enemy attack increased by " +
        prettify(this.getMult(str) * 100 - 100) +
        "%."
      );
    },
    getMult: function (str) {
      return 1 + 0.2 * str;
    },
    getWeight: function (str) {
      return 0.1 * str;
    },
    minMaxStep: [5, 15, 1],
    chance: 1,
  },
  badHealth: {
    description: function (str) {
      return (
        "Enemy health increased by " +
        prettify(this.getMult(str) * 100 - 100) +
        "%."
      );
    },
    getMult: function (str) {
      return 1 + 0.2 * str;
    },
    getWeight: function (str) {
      return 0.2 * str;
    },
    minMaxStep: [3, 15, 1],
    chance: 1,
  },
  badMapStrength: {
    description: function (str) {
      return (
        "Enemy attack in maps increased by " +
        prettify(this.getMult(str) * 100 - 100) +
        "%."
      );
    },
    getMult: function (str) {
      return 1 + 0.3 * str;
    },
    getWeight: function (str) {
      return 0.1 * (1 + 1 / 3) * str;
    },
    minMaxStep: [3, 15, 1],
    chance: 1,
  },
  badMapHealth: {
    description: function (str) {
      return (
        "Enemy health in maps increased by " +
        prettify(this.getMult(str) * 100 - 100) +
        "%."
      );
    },
    getMult: function (str) {
      return 1 + 0.3 * str;
    },
    getWeight: function (str) {
      return 0.3 * str * (5 / 8);
    },
    minMaxStep: [3, 10, 1],
    chance: 1,
  },
  crits: {
    description: function (str) {
      return (
        "Enemies have a 25% chance to crit for " +
        prettify(this.getMult(str) * 100) +
        "% of normal damage."
      );
    },
    getMult: function (str) {
      return 1 + 0.5 * str;
    },
    getWeight: function (str) {
      return 0.15 * this.getMult(str);
    },
    minMaxStep: [1, 24, 1],
    chance: 0.75,
  },
  trimpCritChanceUp: {
    description: function (str) {
      return (
        "Your Trimps have +" +
        prettify(this.getMult(str) * 100) +
        "% Crit Chance."
      );
    },
    getMult: function (str) {
      return str / 10;
    },
    getWeight: function (str) {
      return 0.25 * str * -1;
    },
    minMaxStep: [5, 10, 1],
    incompatible: ["trimpCritChanceDown"],
    chance: 1.25,
  },
  trimpCritChanceDown: {
    description: function (str) {
      return (
        "Your Trimps have -" +
        prettify(this.getMult(str) * 100) +
        "% Crit Chance."
      );
    },
    getMult: function (str) {
      return str / 10;
    },
    getWeight: function (str) {
      return str / 4.5;
    },
    minMaxStep: [2, 7, 1],
    incompatible: ["trimpCritChanceUp"],
    chance: 0.75,
  },
  bogged: {
    description: function (str) {
      return (
        "Your Trimps lose " +
        prettify(this.getMult(str) * 100) +
        "% of their max health after each attack."
      );
    },
    getMult: function (str) {
      return 0.01 * str;
    },
    getWeight: function (str) {
      var count = Math.ceil(1 / this.getMult(str));
      return (
        (6 -
          (0.2 * (count > 60 ? 60 : count)) / 2 +
          ((500 * count + 400) / count / 500 - 1)) /
        1.5
      );
    },
    incompatible: ["rampage", "weakness"],
    minMaxStep: [1, 5, 1],
    chance: 0.3,
  },
  dysfunctional: {
    description: function (str) {
      return (
        "Your Trimps breed " +
        prettify(100 - this.getMult(str) * 100) +
        "% slower"
      );
    },
    getMult: function (str) {
      return 1 - str * 0.05;
    },
    getWeight: function (str) {
      return (1 / this.getMult(str) - 1) / 6;
    },
    minMaxStep: [10, 18, 1],
    chance: 1,
  },
  oddTrimpNerf: {
    description: function (str) {
      return (
        "Trimps have " +
        prettify(100 - this.getMult(str) * 100) +
        "% less attack on odd numbered Zones"
      );
    },
    getMult: function (str) {
      return 1 - str * 0.02;
    },
    getWeight: function (str) {
      return (1 / this.getMult(str) - 1) / 1.5;
    },
    minMaxStep: [15, 40, 1],
    chance: 1,
  },
  evenTrimpBuff: {
    description: function (str) {
      return (
        "Trimps have " +
        prettify(this.getMult(str) * 100 - 100) +
        "% more attack on even numbered Zones"
      );
    },
    getMult: function (str) {
      return 1 + str * 0.2;
    },
    getWeight: function (str) {
      return (this.getMult(str) - 1) * -1;
    },
    minMaxStep: [1, 10, 1],
    chance: 1,
  },
  karma: {
    description: function (str) {
      return (
        "Gain a stack after killing an enemy, increasing all non " +
        heliumOrRadon(false, true) +
        " loot by " +
        prettify(this.getMult(str, 1) * 100 - 100) +
        "%. Stacks cap at " +
        this.getMaxStacks(str) +
        ", and reset after clearing a Zone."
      );
    },
    stackDesc: function (str, stacks) {
      return (
        "Your Trimps are finding " +
        prettify(this.getMult(str, stacks) * 100 - 100) +
        "% more loot!"
      );
    },
    getMaxStacks: function (str) {
      return Math.floor((str % 9) * 25) + 300;
    },
    getMult: function (str, stacks) {
      var realStrength = Math.ceil(str / 9);
      return 1 + 0.0015 * realStrength * stacks;
    },
    getWeight: function (str) {
      return (this.getMult(str, this.getMaxStacks(str)) - 1) / -2;
    },
    icon: "*arrow-up",
    minMaxStep: [1, 45, 1],
    chance: 1,
  },
  toxic: {
    description: function (str) {
      return (
        "Gain a stack after killing an enemy, reducing breed speed by " +
        prettify(100 - this.getMult(str, 1) * 100) +
        "% (compounding). Stacks cap at " +
        this.getMaxStacks(str) +
        ", and reset after clearing a Zone."
      );
    },
    stackDesc: function (str, stacks) {
      return (
        "Your Trimps are breeding " +
        prettify(100 - this.getMult(str, stacks) * 100) +
        "% slower."
      );
    },
    getMaxStacks: function (str) {
      return Math.floor((str % 9) * 25) + 300;
    },
    getMult: function (str, stacks) {
      var realStrength = Math.ceil(str / 9);
      return Math.pow(1 - 0.001 * realStrength, stacks);
    },
    getWeight: function (str) {
      return (1 / this.getMult(str, this.getMaxStacks(str)) - 1) / 6;
    },
    icon: "*radioactive",
    minMaxStep: [1, 45, 1],
    chance: 1,
  },
  bloodthirst: {
    description: function (str) {
      return (
        "Enemies gain a stack of Bloodthirst whenever Trimps die. Every " +
        this.getFreq(str) +
        " stacks, enemies will heal to full and gain an additive 50% attack. Stacks cap at " +
        this.getMaxStacks(str) +
        " and reset after killing an enemy."
      );
    },
    stackDesc: function (str, stacks) {
      var freq = this.getFreq(str);
      var max = this.getMaxStacks(str);
      var text = "This Bad Guy";
      if (stacks < max) {
        var next = freq - (stacks % freq);
        text +=
          " will heal to full and gain attack in " +
          next +
          " stack" +
          (next === 1 ? "" : "s") +
          ", " +
          (stacks >= freq ? "" : " and") +
          " gains 1 stack whenever Trimps die";
      }
      if (stacks >= freq) {
        if (stacks < max) text += ", and";
        text +=
          " currently has " +
          prettify(this.getMult(str, stacks) * 100 - 100) +
          "% more attack";
      }
      text += ".";
      return text;
    },
    getMaxStacks: function (str) {
      return this.getFreq(str) * (2 + Math.floor(str / 2));
    },
    getFreq: function (str) {
      return 10 - str;
    },
    getMult: function (str, stacks) {
      var count = Math.floor(stacks / this.getFreq(str));
      return 1 + 0.5 * count;
    },
    getWeight: function (str) {
      return 0.5 + 0.25 * Math.floor(str / 2);
    },
    minMaxStep: [1, 7, 1],
    chance: 1,
    icon: "*flask",
    iconOnEnemy: true,
  },
  explosive: {
    description: function (str) {
      var text =
        "Enemies instantly deal " +
        prettify(this.getMult(str) * 100) +
        "% of their attack damage when killed";
      if (str > 15) {
        text += " unless your block is as high as your maximum health";
      }
      text += ".";
      return text;
    },
    getMult: function (str) {
      return str;
    },
    getWeight: function (str) {
      var mult = this.getMult(str);
      if (str <= 15) {
        return (3 / 20) * mult + 1 / 4;
      } else {
        return (1 / 14) * mult - 1 / 7;
      }
    },
    get minMaxStep() {
      if (window.daily_universe === 1) return [5, 30, 1];
      return [5, 10, 1];
    },
    chance: 1,
  },
  slippery: {
    description: function (str) {
      return (
        "Enemies have a " +
        prettify(this.getMult(str) * 100) +
        "% chance to dodge your attacks on " +
        (str <= 15 ? "odd" : "even") +
        " Zones."
      );
    },
    getMult: function (str) {
      if (str > 15) str -= 15;
      return 0.02 * str;
    },
    getWeight: function (str) {
      return ((1 / (1 - this.getMult(str)) - 1) * 10) / 1.5;
    },
    minMaxStep: [1, 30, 1],
    chance: 1,
  },
  rampage: {
    description: function (str) {
      return (
        "Gain a stack after killing an enemy, increasing Trimp attack by " +
        prettify(this.getMult(str, 1) * 100 - 100) +
        "% (additive). Stacks cap at " +
        this.getMaxStacks(str) +
        ", and reset when your Trimps die."
      );
    },
    stackDesc: function (str, stacks) {
      return (
        "Your Trimps are dealing " +
        prettify(this.getMult(str, stacks) * 100 - 100) +
        "% more damage."
      );
    },
    getMaxStacks: function (str) {
      return Math.floor(((str % 10) + 1) * 10);
    },
    getMult: function (str, stacks) {
      var realStrength = Math.ceil(str / 10);
      return 1 + 0.01 * realStrength * stacks;
    },
    getWeight: function (str) {
      return (1 - this.getMult(str, 1)) * this.getMaxStacks(str);
    },
    icon: "*fire",
    incompatible: ["plague", "bogged"],
    minMaxStep: [1, 40, 1],
    chance: 1,
  },
  mutimps: {
    description: function (str) {
      var size = str % 5;
      if (size === 0) size = "";
      else size = "the first " + prettify(size * 2) + " rows of";

      var name = str < 4 ? "Mutimps" : "Hulking Mutimps";
      return (
        "40% of Bad Guys in " +
        size +
        " the World will be mutated into " +
        name +
        "."
      );
    },
    getWeight: function (str) {
      return (str / 10) * 1.5;
    },
    getMaxCellNum: function (str) {
      if (str > 5) str -= 5;
      str--;
      var values = [19, 39, 59, 79, 99];
      return values[str];
    },
    minMaxStep: [1, 10, 1],
    chance: 1,
  },
  empower: {
    description: function (str) {
      var s = str === 1 ? "" : "s";
      return (
        "All enemies gain " +
        str +
        " stack" +
        s +
        " of Empower whenever your Trimps die in the World. Empower increases the attack and health of Bad Guys in the World by 0.2% per stack, can stack to 9999, and never resets."
      );
    },
    getWeight: function (str) {
      return (str / 6) * 2;
    },
    stackDesc: function (str, stacks) {
      return (
        "This Bad Guy is Empowered and has " +
        prettify(this.getMult(str, stacks) * 100 - 100) +
        "% more health and attack."
      );
    },
    stacksToAdd: function (str) {
      return str;
    },
    getMult: function (str, stacks) {
      return 1 + 0.002 * stacks;
    },
    getMaxStacks: function (str) {
      return 9999;
    },
    worldStacksOnly: true,
    iconOnEnemy: true,
    icon: "baby-formula",
    minMaxStep: [1, 10, 1],
    chance: 1,
  },
  pressure: {
    description: function (str) {
      return (
        "Trimps gain a stack of Pressure every " +
        Math.round(this.timePerStack(str)) +
        " seconds. Each stack of pressure reduces Trimp health by 1%. Max of " +
        Math.round(this.getMaxStacks(str)) +
        " stacks, stacks reset after clearing a Zone."
      );
    },
    getWeight: function (str) {
      var time = 105 - this.timePerStack(str);
      var stacks = this.getMaxStacks(str);
      return (time * 1.3 + stacks) / 200;
    },
    getMult: function (str, stacks) {
      return Math.pow(0.99, stacks);
    },
    timePerStack: function (str) {
      var thisStr = Math.ceil(str / 4) - 1;
      return 45 + thisStr * 5;
    },
    stackDesc: function (str, stacks) {
      return (
        "Your Trimps are under a lot of pressure. Maximum health is reduced by " +
        prettify((1 - this.getMult(str, stacks)) * 100) +
        "%."
      );
    },
    getMaxStacks: function (str) {
      var thisStr = Math.floor(str % 4);
      return 45 + thisStr * 5;
    },
    icon: "*heart3",
    minMaxStep: [1, 16, 1],
    chance: 1,
  },
  mirrored: {
    description: function (str) {
      var reflectChance = this.getReflectChance(str);
      return (
        "Enemies have a" +
        (reflectChance.toString()[0] === "8" ? "n" : "") +
        " " +
        prettify(reflectChance) +
        "% chance to reflect an attack, dealing " +
        prettify(this.getMult(str) * 100) +
        "% of damage taken back to your Trimps."
      );
    },
    getReflectChance: function (str) {
      return Math.ceil(str / 10) * 10;
    },
    getMult: function (str) {
      return ((str % 10) + 1) / 10;
    },
    getWeight: function (str) {
      return (
        ((this.getReflectChance(str) + 90) / 100) *
        0.85 *
        ((this.getMult(str) + 0.9) * 0.85)
      );
    },
    testWeights: function () {
      var min = 0;
      var max = 0;
      var results = [];
      for (
        var x = this.minMaxStep[0];
        x <= this.minMaxStep[1];
        x += this.minMaxStep[2]
      ) {
        var result = this.getWeight(x);
        if (min === 0) min = result;
        else if (result < min) min = result;
        if (result > max) max = result;
        results.push(result);
      }
      return "Min: " + min + ", Max: " + max;
    },
    reflectDamage: function (str, attack) {
      if (Math.floor(Math.random() * 100) >= this.getReflectChance(str))
        return 0;
      return this.getMult(str) * attack;
    },
    minMaxStep: [1, 100, 1],
    chance: 1,
  },
  metallicThumb: {
    description: function (str) {
      return (
        "Equipment is " + prettify((1 - this.getMult(str)) * 100) + "% cheaper."
      );
    },
    getWeight: function (str) {
      return (str + 3) / 26;
    },
    getMult: function (str) {
      return 1 - (str / 100) * 5;
    },
    minMaxStep: [1, 10, 1],
    chance: 1,
  },
  hemmorrhage: {
    description: function (str) {
      var res = this.getResources(str);
      var text = "Every 15 seconds, your stored ";
      for (var x = 1; x < res.length; x++) {
        if (x === 2) {
          if (res.length === 3) text += " and ";
          else text += ", ";
        } else if (x === 3) {
          text += ", and ";
        }
        text += res[x].charAt(0).toUpperCase() + res[x].slice(1);
      }
      text += " is reduced by " + prettify(res[0]) + "%";
      return text;
    },
    getResources: function (str) {
      str = str + "";
      var strength = str.length >= 4 ? parseInt(str[3], 0) : 0;
      strength = 25 + strength * 5;
      var res = [strength];
      if (parseInt(str[0], 10) < 7) res.push("food");
      if (str.length < 2) {
        if (res.length < 2) res.push("food");
        return res;
      }
      if (parseInt(str[1], 10) < 7) res.push("wood");
      if (str.length < 3) {
        if (res.length < 2) res.push("wood");
        return res;
      }
      if (parseInt(str[2], 10) < 7) res.push("metal");
      if (res.length < 2) res.push("metal");
      return res;
    },
    getWeight: function (str) {
      var res = this.getResources(str);
      var base = 0.3 * res.length * (1 + res[0] / 50);
      return base;
    },
    blockU1: true,
    minMaxStep: [0, 9999, 1],
    chance: 2,
  },
  /* 		disarmed: {
			equipmentList: ["Boots", "Mace", "Helmet", "Polearm", "Pants", "Battleaxe", "Shoulderguards", "Greatsword", "Breastplate", "Arbalest", "Gambeson"],
			description: function (str) {
				return "You can't use something"
			},
			getBannedEquipment(str, checkOne){
				if (checkOne) return (this.equipmentList.indexOf(checkOne) < str);
			},
			minMaxStep: [1, 11, 1],
			chance: 1
		} */
};

export function prettify(number) {
  var numberTmp = number;
  // if (!isFinite(number)) return "<span class='icomoon icon-infinity'></span>";
  if (number >= 1000 && number < 10000) return Math.floor(number);
  if (number === 0) return prettifySub(0);
  if (number < 0) return "-" + prettify(-number);
  if (number < 0.005) return (+number).toExponential(2);

  var base = Math.floor(Math.log(number) / Math.log(1000));
  if (base <= 0) return prettifySub(number);

  if (game.options.menu.standardNotation.enabled === 5) {
    //Thanks ZXV
    var logBase = game.global.logNotBase;
    var exponent = Math.log(number) / Math.log(logBase);
    return prettifySub(exponent) + "L" + logBase;
  }

  number /= Math.pow(1000, base);
  if (number >= 999.5) {
    // 999.5 rounds to 1000 and we don’t want to show “1000K” or such
    number /= 1000;
    ++base;
  }
  if (game.options.menu.standardNotation.enabled === 3) {
    var suffices = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    if (base <= suffices.length) var suffix = suffices[base - 1];
    else {
      var suf2 = (base % suffices.length) - 1;
      if (suf2 < 0) suf2 = suffices.length - 1;
      suffix = suffices[Math.ceil(base / suffices.length) - 2] + suffices[suf2];
    }
  } else {
    suffices = [
      "K",
      "M",
      "B",
      "T",
      "Qa",
      "Qi",
      "Sx",
      "Sp",
      "Oc",
      "No",
      "Dc",
      "Ud",
      "Dd",
      "Td",
      "Qad",
      "Qid",
      "Sxd",
      "Spd",
      "Od",
      "Nd",
      "V",
      "Uv",
      "Dv",
      "Tv",
      "Qav",
      "Qiv",
      "Sxv",
      "Spv",
      "Ov",
      "Nv",
      "Tg",
      "Utg",
      "Dtg",
      "Ttg",
      "Qatg",
      "Qitg",
      "Sxtg",
      "Sptg",
      "Otg",
      "Ntg",
      "Qaa",
      "Uqa",
      "Dqa",
      "Tqa",
      "Qaqa",
      "Qiqa",
      "Sxqa",
      "Spqa",
      "Oqa",
      "Nqa",
      "Qia",
      "Uqi",
      "Dqi",
      "Tqi",
      "Qaqi",
      "Qiqi",
      "Sxqi",
      "Spqi",
      "Oqi",
      "Nqi",
      "Sxa",
      "Usx",
      "Dsx",
      "Tsx",
      "Qasx",
      "Qisx",
      "Sxsx",
      "Spsx",
      "Osx",
      "Nsx",
      "Spa",
      "Usp",
      "Dsp",
      "Tsp",
      "Qasp",
      "Qisp",
      "Sxsp",
      "Spsp",
      "Osp",
      "Nsp",
      "Og",
      "Uog",
      "Dog",
      "Tog",
      "Qaog",
      "Qiog",
      "Sxog",
      "Spog",
      "Oog",
      "Nog",
      "Na",
      "Un",
      "Dn",
      "Tn",
      "Qan",
      "Qin",
      "Sxn",
      "Spn",
      "On",
      "Nn",
      "Ct",
      "Uc",
    ];
    if (
      game.options.menu.standardNotation.enabled === 2 ||
      (game.options.menu.standardNotation.enabled === 1 &&
        base > suffices.length) ||
      (game.options.menu.standardNotation.enabled === 4 && base > 31)
    )
      suffix = "e" + base * 3;
    else if (
      game.options.menu.standardNotation.enabled &&
      base <= suffices.length
    )
      suffix = suffices[base - 1];
    else {
      exponent = parseFloat(numberTmp).toExponential(2);
      exponent = exponent.replace("+", "");
      return exponent;
    }
  }
  return prettifySub(number) + suffix;
}

function prettifySub(number) {
  number = parseFloat(number);
  var floor = Math.floor(number);
  if (number === floor)
    // number is an integer, just show it as-is
    return number;
  // var precision = 3 - floor.toString().length; // use the right number of digits

  return number.toFixed(3 - floor.toString().length);
}
function heliumOrRadon() {
  return window.daily_universe === 1 ? "Helium" : "Radon";
}

var game = {
  options: {
    menu: {
      standardNotation: {
        enabled: 4,
      },
    },
  },
};

var rewards = [
  "stickler",
  "helium",
  "liquid",
  "purifier",
  "lucky",
  "void",
  "helium",
  "liquid",
  "eliminator",
  "overkiller",
];
var prestigeRewards = [
  "dailies",
  "voidance",
  "overkiller",
  "critChance",
  "megaCrit",
  "superVoid",
  "voidelicious",
  "naturesWrath",
  "voidSiphon",
  "plaguebrought",
];
var rewardsU2 = [
  "trapper",
  "prism",
  "heirloopy",
  "radortle",
  "healthy",
  "wealthy",
  "critChance",
  "gatherer",
  "dailies",
  "exotic",
  "shieldlayer",
  "tenacity",
  "megaCrit",
  "critChance",
  "smithy",
  "biggerbetterheirlooms",
];

// Heirloopy
// universe === 2 => level === 3 or 2 (depending on talent)

// Dailies
// universe === 2 => level === 9 or 8 (depending on talent);
// universe === 1 => 11 - prestige - (?1) >= 0

export function isRewardActive(
  reward,
  universe,
  evolution,
  level,
  boughtEarly
) {
  let minus = boughtEarly ? 1 : 0;
  switch (reward) {
    case "dailies":
      if (universe === 1) {
        if (11 - evolution - minus - level <= 0) {
          return true;
        }
      } else {
        if (level >= 9 - minus) {
          return true;
        }
      }
      break;
    case "heirloopy":
      if (universe === 2) {
        if (level >= 3 - minus) {
          return true;
        }
      }
      break;
    default:
  }
  return false;
}

export function getDailyHeliumValue(weight, active) {
  var value = 75 * weight + 20;
  if (value < 100) value = 100;
  else if (value > 500) value = 500;
  if (active) value += 100;
  return value;
}
