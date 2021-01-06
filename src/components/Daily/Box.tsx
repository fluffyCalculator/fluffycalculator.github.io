import clsx from "clsx";
import React from "react";
import { DailyType } from "../../calculators/daily";

export const WeekBox =
//  React.memo(
  function WeekBox({ text }: { text: string }) {
    return (
      <div className="flex items-center justify-center my-auto w-11 h-11 text-xxs select-none md:w-24 md:h-24 md:text-base">
        {text}
      </div>
    );
  }
//   ,
//   (prevProps, nextProps) => {
//     return prevProps.text === nextProps.text;
//   }
// );

interface Props {
  object: DailyType;
}

function Box({ object }: Props) {
  const { value, date, next, preview, tier, seed } = object;
  if (value === undefined)
    return <div className="w-11 h-11 md:w-24 md:h-24"></div>;
  return (
    <div
      className={clsx(
        `bg-tier${tier}`,
        "relative flex flex-col items-center justify-center my-auto w-11 h-11 text-black text-xs rounded shadow-lg select-none pointer-events-none md:w-24 md:h-24 md:text-base"
      )}
      id={String(seed)}
    >
      <div className="absolute top-0 text-xxxxs md:text-xs">{date}</div>
      <div className="text-xxs md:text-xl">{`${value.toFixed(1)}%`}</div>
      <div className="absolute bottom-0 text-xxxs md:text-xs">
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

export default Box

// export default React.memo(Box, (prevProps, nextProps) => {
  // return prevProps.object?.value === nextProps.object?.value;
// });
