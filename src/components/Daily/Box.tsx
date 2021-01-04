import clsx from "clsx";
import React from "react";
import { DailyType } from "../../calculators/daily";

export function WeekBox({ text }: { text: string }) {
  return (
    <div className="md:h-24 md:w-24 md:text-base my-auto flex justify-center items-center h-16 w-16 text-xs select-none">
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
    return <div className="md:h-24 md:w-24 h-16 w-16"></div>;
  return (
    <div
      className={clsx(
        `bg-tier${tier}`,
        "md:h-24 md:w-24 md:text-base my-auto flex text-black justify-center items-center h-16 w-16 text-xs flex flex-col rounded shadow-lg relative p-1"
      )}
      id={String(seed)}
    >
      <div className="absolute top-0 md:text-xs text-xxs">{date}</div>
      <div className="md:text-xl text-mt">{value.toFixed(1)}%</div>
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
