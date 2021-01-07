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

import React, { ReactElement, useContext, useRef, useState } from "react";
import { fluffyInstance, handle_paste } from "../../calculators/fluffy";
import { GameObject } from "../../calculators/GameObject";
import Button from "../utils/Button";
import Input from "../utils/Input";
import { FluffyContext } from "./Context";
import InputSection from "./InputSection";

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
        className="mb-4 p-2 w-full text-xl bg-secondary border border-solid border-prpl rounded outline-none shadow-md resize-none"
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
  const [update, setUpdate] = useState(true);

  const instantUpdating = instance.instantUpdating;

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
      <div className="grid gap-4 grid-cols-10 content-center py-10 border-b-2 border-solid border-prpl">
        <div className="flex flex-wrap col-span-2 col-start-2 justify-center">
          <MemoSaveBox onPaste={getPaste} save={instance.string ?? null} />

          {/* <textarea
            className="mb-4 p-3 w-full text-xl bg-secondary border border-solid border-prpl rounded outline-none shadow-md resize-none"
            onPaste={getPaste}
            ref={textRef}
            placeholder="Paste your save..."
            // defaultValue={instance?.string}
            />
            {instance.string  && (
              <Button
                variant="retrieve"
                className="col-span-2 self-center mb-4"
                onClick={() => {
                  textRef.current.innerText = instance?.string;
                }}
              >
                Retrieve save
              </Button>
            )} */}
          <InputSection index={index} instance={instance} update={update} />
        </div>

        <div className="col-span-4 text-center">
          This is where the table will be
        </div>

        <div className="col-span-2 col-start-8 text-center">Extra Stats</div>
      </div>
    </>
  );
}

export default React.memo(Template, (prevProps, nextProps) => {
  return prevProps.index === nextProps.index;
});
