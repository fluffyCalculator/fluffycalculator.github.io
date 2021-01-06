import clsx from "clsx";
import React, { useState } from "react";
import { DailyType } from "../../calculators/daily";
import { dailyModifiers } from "../../calculators/main";

export const WeekBox =
  //  React.memo(
  function WeekBox({ text }: { text: string }) {
    return (
      <div
        className={clsx(
          baseBox,
          "flex items-center justify-center text-xxs select-none sm:text-xs md:text-base"
        )}
      >
        {text}
      </div>
    );
  };
//   ,
//   (prevProps, nextProps) => {
//     return prevProps.text === nextProps.text;
//   }
// );

const baseBox = "w-11 h-11 sm:h-16 sm:w-16 md:w-24 md:h-24";

interface Props {
  object: DailyType;
}

function Box({ object }: Props) {
  const [expanded, setExpanded] = useState(false);

  const { value, date, next, preview, tier, seed, mods } = object;

  if (value === undefined) return <div className={baseBox}></div>;

  return (
    <>
      <div
        className={clsx(
          `bg-tier${tier}`,
          baseBox,
          "relative flex flex-col items-center justify-center text-black rounded shadow cursor-pointer select-none"
        )}
        onClick={() => setExpanded(!expanded)}
        id={String(seed)}
      >
        <div className="absolute top-0 text-xxxxs sm:text-xxs md:text-xs">
          {date}
        </div>
        <div className="text-xxs sm:text-base md:text-xl">{`${value.toFixed(
          1
        )}%`}</div>
        <div className="absolute bottom-0 text-xxxs md:text-xs">
          {preview.join("")}
          {next && (
            <span role="img" title="This is the next daily">
              ⭐
            </span>
          )}
        </div>
      </div>

      {expanded && (
        <span className="col-span-7 justify-self-center p-2 w-de bg-secondary border border-solid border-prpl rounded sm:w-deSM md:w-deMD">
          <p className="whitespace-pre-wrap text-xxxs sm:text-xs md:text-base">
            {date + "\n"}
            {Object.keys(mods).map((x, i) => {
              return (
                " → " + dailyModifiers[x].description(mods[x].strength) + "\n"
              );
            })}
            {"Bonus is " + value.toFixed(1) + "%"}
          </p>
        </span>
      )}
    </>
  );
}

export default Box;

// export default React.memo(Box, (prevProps, nextProps) => {
// return prevProps.object?.value === nextProps.object?.value;
// });
