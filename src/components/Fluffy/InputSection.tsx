import React from "react";
import { fluffyInstance } from "../../calculators/fluffy";
import Button from "../utils/Button";
import Input from "../utils/Input";

interface Props {
  index: number;
  instance: fluffyInstance;
  update?: boolean;
}

function InputSection({ index, instance, update }: Props) {
  console.log("rendered Input Section", index);
  // console.log(instance);

  return (
    <>
      <div className="grid gap-4 grid-cols-2 items-end w-full">
        {/* U1 */}
        {/*  Set mins and max's later */}

        {instance?.name !== "init" && (
          <>
            <Input
              label="Capable Level"
              min={1}
              max={10}
              variant="fluffy"
              defaultValue={instance?.portal?.Capable?.level || 0}
            />

            <Input
              label="Cunning Level"
              variant="fluffy"
              defaultValue={instance?.portal?.Cunning?.level || 0}
            />

            {!instance.portal.Curious.locked && (
              <Input
                label="Curious Level"
                variant="fluffy"
                defaultValue={instance?.portal?.Curious?.level || 0}
              />
            )}

            {!instance.portal.Classy.locked && (
              <Input
                label="Classy Level"
                variant="fluffy"
                defaultValue={instance?.portal?.Classy?.level || 0}
              />
            )}

            <Input
              label="Zone You Portal"
              min={instance.getMinZoneForExp()}
              variant="fluffy"
              defaultValue={instance?.zoneYouPortal || 0}
            />

            <Input
              label="Daily Bonus"
              variant="fluffy"
              defaultValue={Math.round(instance?.dailyBonus * 100) - 100 || 0}
            />
            <Input
              label="Heirloom Bonus"
              variant="fluffy"
              defaultValue={
                Math.round(instance?.heirloomBonus * 100) - 100 || 0
              }
            />

            <Input label="List of Spire Clears" />
            {!instance?.traps.locked && (
              <>
                <Input
                  label="Knowledge Towers"
                  variant="fluffy"
                  defaultValue={instance?.traps.owned || 0}
                />
                <Input
                  label="Knowledge Level"
                  variant="fluffy"
                  defaultValue={instance?.traps.level || 0}
                />
              </>
            )}

            {/* This is a yes/no button */}
            <Input
              label="Ice Enlightenment"
              type="button"
              defaultValue="Yes"
              className="cursor-pointer"
            />
            <hr className="col-span-2 border-bgthirdary" />

            <Input label="Minutes Per Run" variant="fluffy" />
            <Button className="col-span-2 text-center">Calculate</Button>
          </>
        )}
      </div>
    </>
  );
}

export default React.memo(InputSection);
