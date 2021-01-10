import React, { useContext } from "react";
import { FluffyContext } from "./Context";
import Template from "./Template";

// interface Props {

// }

function Fluffy() {
  const { fluffyInstances, anotherInstance, shown } = useContext(FluffyContext);

  return (
    <>
      <div className="p-5">
        {shown.map((x, index) => {
          return (
            <Template
              index={index}
              key={index}
              instance={fluffyInstances[index]}
            />
          );
        })}
      </div>
      <div className="flex justify-center text-center">
        <div
          className="w-32 h-32 text-primary text-9xl cursor-pointer select-none"
          onClick={() => {
            anotherInstance();
          }}
        >
          +
        </div>
      </div>
    </>
  );
}

export default Fluffy;
