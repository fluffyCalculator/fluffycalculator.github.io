import clsx from "clsx";
import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { fluffyInstance, handle_paste } from "../../calculators/fluffy";
import { testSave1 } from "../../testsaves/one";
import Button from "../utils/Button";
import InputSection from "./InputSection";
import LevelUpTable from "./LevelUpTable";
import RunTimeTable from "./RunTimeTable";
import Stats from "./Stats";
import UniverseSwitch from "./UniverseSwitch";

// This keeps all update props.

function SaveBox({
  onPaste,
  save,
}: {
  onPaste: (e: React.ClipboardEvent<HTMLTextAreaElement>) => void;
  save?: string;
}) {
  const [show, setShow] = useState(true);
  const textRef = useRef() as MutableRefObject<HTMLTextAreaElement>;
  return (
    <>
      {save && show && (
        <Button
          variant="small"
          className="col-span-2 self-center mb-4"
          onClick={() => {
            textRef.current.innerText = save;
            setShow(!show);
          }}
          label="Retrieve save"
        />
      )}
      <textarea
        className="p-2 w-full text-sm bg-secondary border border-solid border-accent rounded outline-none shadow-md resize-none"
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
  console.log("rendering instance", instance);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    if (!true) {
      instance.pasteSaveActions(testSave1);
      setUpdate(!update);
    }
  }, []);

  if (instance.name === "init") {
    instance.getLocalStorage();
  }

  const forceRefresh = useCallback(() => {
    setUpdate((prev) => !prev);
  }, [setUpdate]);

  const changeUniverse = useCallback(
    (universe: number) => {
      console.log("in this DDDD");
      if (universe === instance.universe) return;

      instance.updateUniverse(universe);
      instance.expBonus = instance.getExpBonus();
      instance.updateDisplayData();
      forceRefresh();
    },
    [instance, forceRefresh]
  );

  const getPaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    let save = handle_paste(e);
    if (save === false) return;
    instance.pasteSaveActions(save.game);
    instance.string = save.string;

    forceRefresh();
  };

  return (
    <>
      <div className="grid gap-2 grid-cols-1 content-center py-10 sm:grid-cols-2 md:gap-5 md:grid-cols-4 xl:grid-cols-10">
        {/* INPUT AREA */}
        <div
          className={clsx(
            instance.name === "init"
              ? "col-span-10 justify-self-center w-1/2"
              : "self-center xl:col-span-2 xl:col-start-2",
            "flex flex-wrap justify-center"
          )}
        >
          <MemoSaveBox onPaste={getPaste} save={instance.string ?? null} />
          {instance.name !== "init" && (
            <InputSection
              index={index}
              instance={instance}
              universe={instance.universe}
              renderParent={forceRefresh}
            />
          )}
        </div>
        {instance.name !== "init" && (
          <>
            {/* TABLE AREA */}
            <div className="text-center md:col-span-2 xl:col-span-4">
              <UniverseSwitch
                universe={instance.universe}
                onClick={changeUniverse}
              />

              <RunTimeTable
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
            <div className="text-center sm:col-span-2 sm:mt-3 md:col-span-1 md:mt-0 xl:col-span-2">
              <div className="m-auto w-1/2 md:w-auto">
                <Stats data={instance.displayData} />
              </div>
            </div>
            {Object.keys(instance.displayData.levelUpTable).length > 0 && (
              <div className="col-span-1 m-auto sm:col-span-2 md:col-span-4 xl:col-span-10">
                <LevelUpTable table={instance.displayData.levelUpTable} />
              </div>
            )}
          </>
        )}
      </div>
      <hr className="m-auto w-4/6 border-prpl shadow" />
    </>
  );
}

export default React.memo(Template, (prevProps, nextProps) => {
  return prevProps.index === nextProps.index;
});
