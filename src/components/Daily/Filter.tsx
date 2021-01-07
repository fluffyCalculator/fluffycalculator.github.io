import clsx from "clsx";
import React, { useContext, useState } from "react";
import Button from "../utils/Button";
import Input from "../utils/Input";
import { DailyContext } from "./Context";

export var filterTypes = {
  minDamage: true,
  maxDamage: true,
  plague: true,
  weakness: true,
  large: true,
  dedication: true,
  famine: true,
  badStrength: true,
  badHealth: true,
  badMapStrength: true,
  badMapHealth: true,
  crits: true,
  bogged: true,
  dysfunctional: true,
  oddTrimpNerf: true,
  evenTrimpBuff: true,
  karma: true,
  toxic: true,
  bloodthirst: true,
  explosive: true,
  slippery: true,
  rampage: true,
  mutimps: true,
  empower: true,
  pressure: true,
  mirrored: true,
  metallicThumb: true,
  trimpCritChanceUp: true,
  trimpCritChanceDown: true,
  hemmorrhage: true,
};

declare const window: any;

export var toMatch = 2;

function FilterBox({ type }: { type: string }) {
  const { updateDailiesFiltered } = useContext(DailyContext);
  const [enabled, setEnabled] = useState(filterTypes[type]);

  return (
    <>
      <div
        className={clsx(
          filterTypes[type] ? "bg-tier3" : "bg-tier1",
          "m-0.5 p-1 w-min text-black text-xxs shadow cursor-pointer select-none sm:text-xs md:text-sm"
        )}
        onClick={() => {
          filterTypes[type] = !filterTypes[type];

          updateDailiesFiltered();

          setEnabled(!enabled);
        }}
      >
        {type}
      </div>
    </>
  );
}

function Filter() {
  
  const [showFilter, setShowFilter] = useState(false);
  const { updateDailiesFiltered } = useContext(DailyContext);

  // Specifically for forcing component to rerender when updating filter types.
  const [flipAll, setFlipAll] = useState(false);

  return (
    <>
      <Button
        className="my-2"
        onClick={() => {
          setShowFilter(!showFilter);
        }}
      >
        Filter
      </Button>

      {showFilter && (
        <div className="w-11/12 text-center sm:w-9/12 md:w-3/4 lg:w-5/12">
          <div className="flex flex-wrap justify-center">
            {Object.keys(filterTypes)
              .filter(
                (type) =>
                  (type === "hemmorrhage" && window.daily_universe === 1) ===
                  false
              )
              .map((type, idx) => {
                return <FilterBox key={idx} type={type} />;
              })}
          </div>
          <div className="flex justify-center mt-2">
            <Button
              className="mr-2"
              onClick={() => {
                for (var type in filterTypes) {
                  filterTypes[type] = !filterTypes[type];
                }

                setFlipAll(!flipAll);

                updateDailiesFiltered();
              }}
            >
              Flip All
            </Button>

            <Input
              label="Match Atleast"
              type="number"
              onChange={(e) => {
                toMatch = Number(e.target.value);
                updateDailiesFiltered();
              }}
              parentClassName="ml-2 w-24"
              defaultValue={toMatch}
            ></Input>
          </div>
        </div>
      )}
    </>
  );
}

export default Filter;
