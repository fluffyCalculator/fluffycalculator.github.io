import clsx from "clsx";
import React, { useState } from "react";
import { fluffyInstance } from "../../calculators/fluffy";
import Button from "../utils/Button";
import Input from "../utils/Input";
import Label from "../utils/Label";

const TrueFalseButton = ({
  colors,
  onClick,
  active,
}: {
  colors: boolean;
  onClick: () => void;
  active: boolean;
}) => {
  const [isActive, setIsActive] = useState(active);

  let colorClasses: string = "";

  if (colors) {
    if (isActive) {
      colorClasses = "bg-tier3 text-black";
    } else {
      colorClasses = "bg-tier1 text-black";
    }
  }

  return (
    <>
      <div
        onClick={() => {
          onClick();
          setIsActive((prev) => !prev);
        }}
        className={clsx(
          colors ? colorClasses : "bg-secondary",
          "p-1 pl-2 text-xs border border-solid border-accent rounded shadow cursor-pointer select-none sm:text-base"
        )}
      >
        {isActive ? "True" : "False"}
      </div>
    </>
  );
};

const MemoTrueFalseButton = React.memo(TrueFalseButton);

interface Props {
  index: number;
  instance: fluffyInstance;
  universe: number;
  renderParent: () => void;
}

function InputSection({ index, instance, universe, renderParent }: Props) {
  console.log("rendered Input Section", index);
  // console.log(instance);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.target;

    const label = target.labels![0].innerText;
    const value = target.value;

    instance.changeVar(label, value);

    if (instance.instantUpdating) {
      instance.updateDisplayData();
      renderParent();
    }
  };

  const handleClick = (type: string) => {
    if (type === "Instant Updating") {
      instance.instantUpdating = !instance.instantUpdating;
      instance.saveLocalStorage();
    }

    if (type === "Ice") {
      instance.graphNextIce = !instance.graphNextIce;

      if (instance.instantUpdating) {
        instance.expBonus = instance.getExpBonus();
        instance.updateDisplayData();
        renderParent();
      }
    }

    if (type === "Calculate") {
      instance.updateDisplayData();
      renderParent();
    }
  };

  return (
    <>
      <div
        className="grid gap-4 grid-cols-2 items-end mt-4 w-full"
        onChange={(e) => handleInput(e as React.ChangeEvent<HTMLInputElement>)}
        key={instance.universe}
      >
        {/* U1 */}
        {/*  Set mins and max's later */}
        {instance?.name !== "init" && (
          <>
            <hr className="col-span-2 m-auto w-3/4 border-accent" />
            {universe === 1 && (
              <>
                <Label>
                  Capable Level
                  <Input
                    min={1}
                    max={10}
                    variant="fluffy"
                    defaultValue={instance?.portal?.Capable?.level || 0}
                  />
                </Label>
                <Label>
                  Cunning Level
                  <Input
                    variant="fluffy"
                    defaultValue={instance?.portal?.Cunning?.level || 0}
                  />
                </Label>

                {!instance.portal.Curious.locked && (
                  <Label>
                    Curious Level
                    <Input
                      variant="fluffy"
                      defaultValue={instance?.portal?.Curious?.level || 0}
                    />
                  </Label>
                )}

                {!instance.portal.Classy.locked && (
                  <Label>
                    Classy Level
                    <Input
                      variant="fluffy"
                      defaultValue={instance?.portal?.Classy?.level || 0}
                    />
                  </Label>
                )}
              </>
            )}
            <Label>
              Zone You Portal
              <Input
                min={instance.getMinZoneForExp()}
                variant="fluffy"
                defaultValue={instance?.zoneYouPortal || 0}
              />
            </Label>
            <Label>
              Daily Bonus
              <Input
                variant="fluffy"
                defaultValue={Math.round(instance?.dailyBonus * 100) - 100 || 0}
              />
            </Label>
            <Label>
              Heirloom Bonus
              <Input
                variant="fluffy"
                defaultValue={
                  Math.round(instance?.heirloomBonus * 100) - 100 || 0
                }
              />
            </Label>
            {universe === 1 && (
              <Label>
                List of Spire Clears
                <Input defaultValue={String(instance.spiresCompleted || "")} />
              </Label>
            )}

            {!instance?.traps.locked && (
              <>
                <Label>
                  Knowledge Towers
                  <Input
                    variant="fluffy"
                    defaultValue={instance?.traps.owned || 0}
                  />
                </Label>
                <Label>
                  Knowledge Level
                  <Input
                    variant="fluffy"
                    defaultValue={instance?.traps.level || 0}
                  />
                </Label>
              </>
            )}

            {/* This is a yes/no button */}
            <Label>
              Ice Enlightenment
              <MemoTrueFalseButton
                colors={false}
                active={instance.graphNextIce}
                onClick={() => {
                  handleClick("Ice");
                }}
              />
            </Label>
            <hr className="col-span-2 m-auto w-3/4 border-accent" />

            <Label>
              Minutes Per Run
              <Input variant="fluffy" defaultValue={instance.minutesPerRun} />
            </Label>

            <Label>
              Instant Updating
              <MemoTrueFalseButton
                colors={true}
                active={instance.instantUpdating}
                onClick={() => handleClick("Instant Updating")}
              />
            </Label>

            <Button
              className="col-span-2 text-center"
              label="Calculate"
              onClick={() => handleClick("Calculate")}
            />
          </>
        )}
      </div>
    </>
  );
}

export default React.memo(InputSection, (prevProps, nextProps) => {
  return prevProps.universe === nextProps.universe;
});
