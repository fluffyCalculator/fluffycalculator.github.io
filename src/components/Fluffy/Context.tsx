import React, { createContext, useState } from "react";
import { fluffyInstance } from "../../calculators/fluffy";
import { GameObject } from "../../calculators/GameObject";

interface ContextType {
  fluffyInstances?: { [index: number]: fluffyInstance };
  anotherInstance?: () => void;
  pasteSave?: (save: GameObject, index: number) => void;
  getInstance?: (index: number) => fluffyInstance;
  shown?: number[];
}

export const FluffyContext = createContext<ContextType>({});
// const initial_dailies = maybeMakeDaily(365);
const FluffyProvider = ({ children }) => {
  const [fluffyInstances, setFluffyInstance] = useState({
    0: new fluffyInstance(),
  });

  const [shown, setShown] = useState([0]);

  console.log("fluffyInstances", fluffyInstances);

  const anotherInstance = () => {
    console.log("clicking another instance");
    setShown((old) => [...old, old.length - 1]);
    setFluffyInstance((old) => {
      return { ...old, [Object.keys(old).length]: new fluffyInstance() };
      // old.push(new fluffyInstance());
    });
    console.log(fluffyInstances);
  };

  const pasteSave = (save: GameObject, index: number) => {
    setFluffyInstance((old) => {
      old[index].pasteSaveActions(save);
      return { ...old };
    });

    // fluffyInstances[index].pasteSaveActions(save);
  };

  const getInstance = (index: number): fluffyInstance => {
    return fluffyInstances[index];
  };

  return (
    <FluffyContext.Provider
      value={{
        fluffyInstances,
        anotherInstance,
        pasteSave,
        getInstance,
        shown,
      }}
    >
      {children}
    </FluffyContext.Provider>
  );
};

export default FluffyProvider;
