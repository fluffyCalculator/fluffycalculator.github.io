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
        {shown!.map((x, index) => {
          return (
            <Template
              index={index}
              key={index}
              instance={fluffyInstances![index]}
            />
          );
        })}

        <div className="w-full">
          <div
            className="relative m-auto w-32 h-32 text-primary fill-current cursor-pointer select-none"
            onClick={() => {
              anotherInstance!();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            <div className="absolute bottom-0 w-full text-center">
              Add Instance
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fluffy;
