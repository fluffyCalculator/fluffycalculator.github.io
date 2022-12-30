import clsx from "clsx";
import React, { useContext, useState } from "react";
import Button from "../utils/Button";
import Input from "../utils/Input";
import Label from "../utils/Label";
import { DailyContext } from "./Context";

export var filterTypes = {
  minDamage: 0,
  maxDamage: 0,
  plague: 0,
  weakness: 0,
  large: 0,
  dedication: 0,
  famine: 0,
  badStrength: 0,
  badHealth: 0,
  badMapStrength: 0,
  badMapHealth: 0,
  crits: 0,
  bogged: 0,
  dysfunctional: 0,
  oddTrimpNerf: 0,
  evenTrimpBuff: 0,
  karma: 0,
  toxic: 0,
  bloodthirst: 0,
  explosive: 0,
  slippery: 0,
  rampage: 0,
  mutimps: 0,
  empower: 0,
  pressure: 0,
  mirrored: 0,
  metallicThumb: 0,
  trimpCritChanceUp: 0,
  trimpCritChanceDown: 0,
  hemmorrhage: 0,
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
          filterTypes[type] < 0 ? "bg-tier3" : filterTypes[type] ? "bg-tier1" : "bg-grey",
          "m-0.5 p-1 w-min text-black text-xxs shadow cursor-pointer select-none sm:text-xs md:text-sm"
        )}
        onClick={() => {
          filterTypes[type] = ((filterTypes[type] + 2) % 3) - 1;

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
        label="Filter"
      />

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
              label="Flip All"
            />
            <Label className="ml-2 w-24">
              Match Atleast
              <Input
                type="number"
                onChange={(e) => {
                  toMatch = Number(e.target.value);
                  updateDailiesFiltered();
                }}
                defaultValue={toMatch}
              />
            </Label>
          </div>
        </div>
      )}
    </>
  );
}

export default Filter;
