import clsx from "clsx";
import React from "react";

function UniverseSwitch({
  onClick,
  universe,
}: {
  onClick: (u: number) => void;
  universe: number;
}) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let clickedNumber = Number((e.target as HTMLDivElement).title);
    onClick(clickedNumber);
  };

  return (
    <div className="flex mx-auto w-max shadow-md">
      <div
        className={clsx(
          universe === 1
            ? "bg-blue-500 text-white"
            : "bg-secondary text-primary",
          "p-1 text-xs border border-r-0 border-solid border-prpl rounded rounded-r-none cursor-pointer select-none sm:text-base"
        )}
        onClick={handleClick}
        title="1"
      >
        Universe 1
      </div>
      <div
        className={clsx(
          universe === 2
            ? "bg-pink-500 text-white"
            : "bg-secondary text-primary",
          "p-1 text-xs border border-l-0 border-solid border-prpl rounded rounded-l-none cursor-pointer select-none sm:text-base"
        )}
        onClick={handleClick}
        title="2"
      >
        Universe 2
      </div>
    </div>
  );
}

export default React.memo(UniverseSwitch);
