import React, { createContext, useState } from "react";
import { DailyType, maybeMakeDaily } from "../../calculators/daily";
import { filterTypes, toMatch } from "./Filter";

interface ContextType {
  dailies?: DailyType[];
  updateDailies?: any;
  updateDailiesFiltered?: any;
  forceDailies?: any;
}

export const DailyContext = createContext<ContextType>({});
// const initial_dailies = maybeMakeDaily(365);
const DailyProvider = ({ children }) => {
  const [dailies, setDailies] = useState(() => maybeMakeDaily(365, true));

  const updateDailies = () => {
    const updateDailies = maybeMakeDaily(365, false);
    if (updateDailies.length === 0) {
      return;
    }
    setDailies(updateDailies);
  };

  const updateDailiesFiltered = () => {
    const goodMods = Object.keys(filterTypes).filter((x) => filterTypes[x] > 0);
    const badMods = Object.keys(filterTypes).filter((x) => filterTypes[x] < 0);
    for (var x = 0; x < dailies.length; x++) {
      if (Object.keys(dailies[x]).length === 0) continue;

      let matched = badMods.length;

      Object.keys(dailies[x].mods).forEach((y, i) => {
        if (goodMods.indexOf(y) !== -1) {
          matched += 1;
        }
        if (badMods.indexOf(y) !== -1) {
          matched -= 1;
        }
      });

      if (matched >= toMatch) {
        document.getElementById(String(dailies[x].seed)).style.visibility = "";
      } else {
        document.getElementById(String(dailies[x].seed)).style.visibility =
          "hidden";
      }
    }
  };

  const forceDailies = () => {
    setDailies(maybeMakeDaily(365, true));
  };

  return (
    <DailyContext.Provider
      value={{ dailies, updateDailies, updateDailiesFiltered, forceDailies }}
    >
      {children}
    </DailyContext.Provider>
  );
};

export default DailyProvider;
