import React, { createContext, useState } from "react";
import { fluffyInstance } from "../../calculators/fluffy";

interface ContextType {
  fluffyInstances?: { [index: string]: fluffyInstance };
  anotherInstance?: () => void;
  shown?: number[];
}

export const FluffyContext = createContext<ContextType>({});
// const initial_dailies = maybeMakeDaily(365);
const FluffyProvider = ({ children }: { children: React.ReactNode }) => {
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
    });
    console.log(fluffyInstances);
  };

  return (
    <FluffyContext.Provider
      value={{
        fluffyInstances,
        anotherInstance,
        shown,
      }}
    >
      {children}
    </FluffyContext.Provider>
  );
};

export default FluffyProvider;
