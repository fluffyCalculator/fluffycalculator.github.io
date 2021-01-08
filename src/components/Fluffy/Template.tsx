// import React, { useEffect, useState } from "react";
// import { fluffyInstance, handle_paste } from "../../calculators/fluffy";

// export default function Template({ index }) {
//   const [data, updateData] = useState({ ins: new fluffyInstance() });

//   // const getPaste = (e) => {
//   //   let save = handle_paste(e);
//   //   if (save === false) return;
//   //   updateData((old) => {
//   //     return {
//   //       ins: old.ins.updateSave(save),
//   //     };
//   //   });
//   //   return;
//   // };

//   useEffect(()=>{
//     return()=>{
//       console.log('UNMOUNTED');
//     }
//   })

//   return (
//     <>
//       <textarea
//         onPaste={(e) => {
//           getPaste(e);
//         }}
//       ></textarea>
//       <p>{data.ins.currentExp}</p> - {Math.random()} <br />
//     </>
//   );
// }

import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { fluffyInstance, handle_paste } from "../../calculators/fluffy";
import { testSave1 } from "../../testsaves/one";
import Button from "../utils/Button";
import Input from "../utils/Input";
import InputSection from "./InputSection";
import Table from "./Table";

// This keeps all update props.

function SaveBox({ onPaste, save }: { onPaste: (e) => void; save?: string }) {
  const [show, setShow] = useState(true);
  const textRef = useRef(null);
  return (
    <>
      {save && show && (
        <Button
          variant="retrieve"
          className="col-span-2 self-center mb-4"
          onClick={() => {
            textRef.current.innerText = save;
            setShow(!show);
          }}
        >
          Retrieve save
        </Button>
      )}
      <textarea
        className="border-accent p-2 w-full text-xl bg-secondary border border-solid rounded outline-none shadow-md resize-none"
        onPaste={onPaste}
        ref={textRef}
        placeholder="Paste your save..."
        // defaultValue={instance?.string}
      />
    </>
  );
}

const MemoSaveBox = React.memo(SaveBox, (prevProps, nextProps) => {
  return true;
});

function Template({
  index,
  instance,
}: {
  index: number;
  instance: fluffyInstance;
}) {
  console.log("instance", instance);
  const [update, setUpdate] = useState(true);

  const instantUpdating = instance.instantUpdating;

  useEffect(() => {
    instance.pasteSaveActions(testSave1);
    setUpdate(!update);
  }, []);

  const getPaste = (e) => {
    console.log(e);
    let save = handle_paste(e);
    if (save === false) return;

    instance.pasteSaveActions(save.game);

    setUpdate(!update);

    instance.string = save.string;
  };

  return (
    <>
      <div className="grid gap-5 grid-cols-10 content-center py-10">
        {/* INPUT AREA */}
        <div
          className={clsx(
            instance.name === "init"
              ? "col-span-10 justify-self-center w-1/2"
              : "col-span-2 col-start-2 self-center",
            "flex flex-wrap justify-center"
          )}
        >
          <MemoSaveBox onPaste={getPaste} save={instance.string ?? null} />
          {instance.name !== "init" && (
            <InputSection index={index} instance={instance} update={update} />
          )}
        </div>
        {instance.name !== "init" && (
          <>
            {/* TABLE AREA */}
            <div className="col-span-4 text-center">
              <Table
                second={!instance.atMaxEvo()}
                time={instance.minutesPerRun}
                data={{
                  evolution: instance.evolution,
                  level: instance.level,
                  table: instance.displayData.table,
                }}
              />
            </div>

            {/* STATS AREA */}
            <div className="col-span-2 col-start-8 text-center">
              <div>
                Extra Stats
                <hr className="m-auto my-2 w-3/5 border-prpl shadow" />
              </div>
              {instance?.displayData?.xpPerRun > 0 && (
                <Input
                  label="XP Per Run"
                  defaultValue={addCommas(instance?.displayData?.xpPerRun)}
                  disabled={true}
                  className="bg-thirdary"
                />
              )}
            </div>
          </>
        )}
      </div>
      <hr className="m-auto w-3/6 border-prpl shadow" />
    </>
  );
}

export default React.memo(Template, (prevProps, nextProps) => {
  return prevProps.index === nextProps.index;
});

function addCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
