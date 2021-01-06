import clsx from "clsx";
import React from "react";
import { DailyType } from "../../calculators/daily";

export const WeekBox =
  //  React.memo(
  function WeekBox({ text }: { text: string }) {
    return (
      <div
        className={clsx(
          baseBox,
          "flex items-center justify-center my-auto text-xxs select-none sm:text-xs"
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

const baseBox = "w-11 h-11 sm:h-16 sm:w-16 md:w-24 md:h-24 md:text-base";

interface Props {
  object: DailyType;
}

function Box({ object }: Props) {
  const { value, date, next, preview, tier, seed } = object;
  if (value === undefined) return <div className={baseBox}></div>;
  return (
    <div
      className={clsx(
        `bg-tier${tier}`,
        baseBox,
        "relative flex flex-col items-center justify-center my-auto text-black text-xs rounded shadow pointer-events-none select-none"
      )}
      id={String(seed)}
    >
      <div className="text-xxxxs absolute top-0 sm:text-xxs md:text-xs">
        {date}
      </div>
      <div className="text-xxs sm:text-sm md:text-xl">{`${value.toFixed(
        1
      )}%`}</div>
      <div className="text-xxxs absolute bottom-0 md:text-xs">
        {preview.join("")}
        {next && (
          <span role="img" title="This is the next daily">
            ⭐
          </span>
        )}
      </div>
    </div>
  );
}

export default Box;

// export default React.memo(Box, (prevProps, nextProps) => {
// return prevProps.object?.value === nextProps.object?.value;
// });
