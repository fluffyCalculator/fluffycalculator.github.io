import clsx from "clsx";
import React from "react";
import { DailyType } from "../../calculators/daily";

export function WeekBox({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center my-auto w-16 h-16 text-xs select-none md:w-24 md:h-24 md:text-base">
      {text}
    </div>
  );
}

interface Props {
  object: DailyType;
}

function Box({ object }: Props) {
  const { value, date, next, preview, tier, seed } = object;
  if (value === undefined)
    return <div className="w-16 h-16 md:w-24 md:h-24"></div>;
  return (
    <div
      className={clsx(
        `bg-tier${tier}`,
        "relative flex flex flex-col items-center justify-center my-auto p-1 w-16 h-16 text-black text-xs rounded shadow-lg md:w-24 md:h-24 md:text-base"
      )}
      id={String(seed)}
    >
      <div className="absolute top-0 text-xxs md:text-xs">{date}</div>
      <div className="text-mt md:text-xl">{value.toFixed(1)}%</div>
      <div className="absolute bottom-0 text-xs">
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
