import React, { ReactElement } from "react";
import { displayData } from "../../calculators/fluffy";
import { MemoInput as Input } from "../utils/Input";
import Label from "../utils/Label";

interface Props {
  data: displayData;
}

function Stats({ data }: Props): ReactElement {
  return (
    <>
      Extra Stats
      <hr className="m-auto my-2 w-3/5 border-accent" />
      <div className="grid gap-3 grid-cols-2">
        {data.xpPerRun > 0 && (
          <Label className="col-span-2">
            XP Per Run
            <Input
              value={addCommas(data.xpPerRun)}
              disabled={true}
              className="bg-thirdary"
            />
          </Label>
        )}
        <Label className="col-span-2">
          Percent Of Level - {data.percentToLevel}%
          <div className="flex w-full bg-thirdary border border-solid border-accent rounded">
            <div
              className="flex flex-col p-1 text-xs bg-green-500 rounded sm:text-base"
              style={{ width: `${data.percentToLevel}%` }}
            >
              &nbsp;
            </div>
          </div>
        </Label>
        <Label>
          Current Zone
          <Input
            value={data.currentZone}
            disabled={true}
            className="bg-thirdary"
          />
        </Label>
        {data.bonesToLevel > 0 && (
          <Label>
            Bones To Level
            <Input
              value={data.bonesToLevel}
              disabled={true}
              className="bg-thirdary"
            />
          </Label>
        )}

        {data.XPhr > 0 && (
          <Label className="col-span-2">
            {data.name} XP/hr
            <Input
              value={addCommas(data.XPhr)}
              disabled={true}
              className="bg-thirdary"
            />
          </Label>
        )}
      </div>
    </>
  );
}

export default Stats;

function addCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
