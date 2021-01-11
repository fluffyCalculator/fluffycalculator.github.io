import { dailyModifiers } from "./main";

var mods = {
  empower: "E",
  explosive: "e",
  toxic: "T",
  pressure: "P",
  plague: "p",
  bogged: "B",
  trimpCritChanceUp: "+",
  trimpCritChanceDown: "-",
  weakness: "W",
  minDamage: "m",
  maxDamage: "M",
  badHealth: "H",
  rampage: "D",
  karma: "K",
  hemmorrhage: "h",
};

declare const window: any;
window.daily_universe = 1;

export type DailyType = {
  value?: number;
  date?: string;
  next?: boolean;
  mods?: Partial<DailyMods>;
  preview?: string[];
  tier?: 1 | 2 | 3;
  seed?: number;
};

export function makeDaily(times): Partial<DailyType>[] {
  console.log("making dailies", times);
  let returnable: DailyType[] = [];
  var todayOfWeek: number = getDailyTimeString(0, true);
  for (var z = 0; z < 8; z++) {
    var dayIndex = todayOfWeek * -1 + z;
    if (dayIndex > -1) {
      dayIndex = z - todayOfWeek - 7;
    }
  }
  var lastWeek = dayIndex - 7;
  var blank = lastWeek - dayIndex + 1;
  if (lastWeek === -13) {
    lastWeek = -6;
    blank = -7;
  }

  for (var x = lastWeek; x < times; x++) {
    let dailyObj = getDailyChallenge(x);
    let seed = dailyObj.seed;
    delete dailyObj["seed"];
    let dailyValue = getDailyHeliumValueDaily(countDailyWeightDaily(dailyObj));
    if (x < blank) {
      returnable.push({});
      continue;
    }
    // console.log(dailyObj);
    returnable.push({
      value: dailyValue,
      date: getPrettyTimeString(x),
      next: x === 1 ? true : false,
      mods: dailyObj,
      preview: Object.keys(dailyObj).reduce((prev, curr) => {
        if (curr === "seed") return prev;
        if (mods.hasOwnProperty(curr)) {
          prev.push(mods[curr]);
        }
        return prev;
      }, []),
      tier: findColor(dailyValue),
      seed: seed,
    });
    // console.log(returnable);
  }
  return returnable;
}

var tiers = [225, 335, 425];

function findColor(value) {
  if (value <= tiers[0]) {
    return 1;
  } else if (value <= tiers[1] && value > tiers[0]) {
    return 2;
  } else if (value > tiers[1]) {
    return 3;
  }
}

function getDailyTimeString(add: number, getDayOfWeek?: boolean): number {
  var today = new Date();
  if (!add) add = 0;
  today.setUTCDate(today.getUTCDate() + add);
  if (getDayOfWeek) return today.getUTCDay();
  var year = today.getUTCFullYear();
  var month: string | number = today.getUTCMonth() + 1; //For some reason January is month 0? Why u do dis?
  if (month < 10) month = "0" + month;
  var day: string | number = today.getUTCDate();
  if (day < 10) day = "0" + day;
  var seedStr: string | number = String(year) + String(month) + String(day);
  seedStr = parseInt(seedStr);
  return seedStr;
}

function getPrettyTimeString(add: number): string {
  var today = new Date();
  if (!add) add = 0;
  today.setUTCDate(today.getUTCDate() + add);
  var year = today.getUTCFullYear();
  var month: number | string = today.getUTCMonth() + 1; //For some reason January is month 0? Why u do dis?
  if (month < 10) month = "0" + month;
  var day: number | string = today.getUTCDate();
  if (day < 10) day = "0" + day;
  return year + "-" + month + "-" + day;
}

function getRandomIntSeeded(seed: number, minIncl: number, maxExcl: number) {
  var toReturn = Math.floor(seededRandom(seed) * (maxExcl - minIncl)) + minIncl;
  return toReturn === maxExcl ? minIncl : toReturn;
}

function seededRandom(seed: number) {
  var x = Math.sin(seed++) * 10000;
  return parseFloat((x - Math.floor(x)).toFixed(7));
}

function everythingInArrayGreaterEqual(smaller, bigger) {
  if (bigger.length < smaller.length) return false;
  for (var x = 0; x < smaller.length; x++) {
    if (smaller[x] > bigger[x]) return false;
  }
  return true;
}

export type DailyMods = {
  seed: number;
  empower?: object;
  explosive?: object;
  toxic?: object;
  pressure?: object;
  plague?: object;
  bogged?: object;
  trimpCritChanceUp?: object;
  trimpCritChanceDown?: object;
  weakness?: object;
  minDamage?: object;
  maxDamage?: object;
  badHealth?: object;
  rampage?: object;
  karma?: object;
  hemmorrhage?: object;
};

function getDailyChallenge(add: number) {
  // checkCompleteDailies();
  var dateSeed = getDailyTimeString(add);
  var seedStr = getRandomIntSeeded(Number(dateSeed) + 2, 1, 1e9);
  //seedStr = getRandomIntSeeded(seedStr, 1, 1e9);
  var weightTarget = getRandomIntSeeded(seedStr++, 25, 51) / 10;
  //Build a list of all modifiers to choose from
  var modifierList = [];
  var totalChance = 0;
  var dailyObject: Partial<DailyMods> = {};
  for (var item in dailyModifiers) {
    if (window.daily_universe === 1 && dailyModifiers[item].blockU1) continue;
    modifierList.push(item);
    totalChance += dailyModifiers[item].chance;
  }
  var chanceMod = 1000 / totalChance;
  var currentWeight = 0;
  var maxLoops = modifierList.length;
  var sizeCount = [0, 0, 0]; // < 0.3, < 1, >= 1
  var sizeTarget = [
    getRandomIntSeeded(seedStr++, 0, 2),
    getRandomIntSeeded(seedStr++, 1, 5),
    getRandomIntSeeded(seedStr++, 2, 6),
  ];
  if (weightTarget < 2.75) {
    sizeTarget[2] = 0;
    sizeTarget[0] += 2;
  }
  mainLoop: for (var x = 0; x < maxLoops; x++) {
    var maxZLoops = modifierList.length;
    var firstChoice = [];
    for (var z = 0; z < maxZLoops; z++) {
      var roll = getRandomIntSeeded(seedStr++, 0, 1000);
      var selectedIndex;
      var checkedTotal = 0;
      for (var y = 0; y < modifierList.length; y++) {
        checkedTotal += dailyModifiers[modifierList[y]].chance * chanceMod;
        if (roll < checkedTotal || y === modifierList.length - 1) {
          totalChance -= dailyModifiers[modifierList[y]].chance;
          chanceMod = 1000 / totalChance;
          selectedIndex = y;
          break;
        }
      }
      var selectedMod = modifierList[selectedIndex];
      var modObj = dailyModifiers[selectedMod];
      var str =
        modObj.minMaxStep[0] +
        getRandomIntSeeded(
          seedStr++,
          0,
          Math.floor(
            (modObj.minMaxStep[1] + modObj.minMaxStep[2]) *
              (1 / modObj.minMaxStep[2])
          ) - modObj.minMaxStep[0]
        ) *
          modObj.minMaxStep[2];
      var modWeight = modObj.getWeight(str);
      var modSize = modWeight < 0.85 ? 0 : modWeight < 1.85 ? 1 : 2;
      if (modWeight + currentWeight > weightTarget + 1) continue;
      if (everythingInArrayGreaterEqual(sizeTarget, sizeCount)) {
        //use it and stuff
      } else if (
        sizeCount[modSize] >= sizeTarget[modSize] &&
        z !== maxZLoops - 1
      ) {
        if (!firstChoice.length)
          firstChoice = [selectedMod, str, selectedIndex, modSize, modWeight];
        continue;
      } else if (z === maxZLoops - 1 && firstChoice.length) {
        selectedMod = firstChoice[0];
        modObj = dailyModifiers[selectedMod];
        selectedIndex = firstChoice[2];
        str = firstChoice[1];
        modSize = firstChoice[3];
        modWeight = firstChoice[4];
      }
      //It's been officially selected by this point
      sizeCount[modSize]++;
      dailyObject[modifierList[selectedIndex]] = {
        strength: str,
        stacks: 0,
      };
      currentWeight += modWeight;
      if (
        x > 0 &&
        (currentWeight > weightTarget ||
          (currentWeight >= weightTarget - 0.5 &&
            currentWeight <= weightTarget + 0.5))
      ) {
        break mainLoop;
      }
      modifierList.splice(selectedIndex, 1);
      if (modObj.incompatible) {
        for (let x = 0; x < modObj.incompatible.length; x++) {
          //jshint ignore:line
          var incompatibleIndex = modifierList.indexOf(modObj.incompatible[x]);
          if (incompatibleIndex >= 0) {
            modifierList.splice(incompatibleIndex, 1);
          }
        }
      }
      break;
    }
  }
  dailyObject.seed = Number(dateSeed);
  // console.log(dailyObject);
  return dailyObject;
}

export function countDailyWeightDaily(daily) {
  var weight = 0;
  let dailyObj = daily;
  for (var item in dailyObj) {
    if (item === "seed") continue;
    weight += dailyModifiers[item].getWeight(dailyObj[item].strength);
  }
  return weight;
}

export function getDailyHeliumValueDaily(weight) {
  var value = 75 * weight + 20;
  if (value < 100) value = 100;
  else if (value > 500) value = 500;
  return value;
}

let lastSeed;

export function maybeMakeDaily(times, force) {
  let newestSeed = getDailyTimeString(0);
  if (lastSeed === newestSeed && force === false) {
    return [];
  } else {
    let dailies = makeDaily(times);
    lastSeed = newestSeed;
    console.log("made dailies i guess lawl", times, dailies);
    return dailies;
  }
}

makeDaily(24);
