import clsx from "clsx";
import React from "react";

interface Props {
  label: string;
  onChange?: (e) => void;
  onClick?: (e) => void;
  className?: string;
  defaultValue?: string | number;
  type?: string;
  parentClassName?: string;
  min?: number;
  max?: number;
  variant?: "fluffy";
  disabled?: true;
}

const Input = ({
  label,
  onChange,
  onClick,
  className,
  defaultValue,
  type,
  parentClassName,
  min,
  max,
  variant,
  disabled,
}: Props) => {
  console.log("rendered input");

  return (
    <label
      className={clsx(parentClassName, "block text-left text-xxs sm:text-xs")}
    >
      {label}
      <div className="relative mt-0.5 rounded shadow">
        <input
          type={variant === "fluffy" ? (type ? type : "number") : null}
          onChange={onChange}
          onClick={onClick}
          defaultValue={defaultValue}
          min={variant === "fluffy" ? (min ? min : 0) : null}
          max={max}
          disabled={disabled ?? null}
          className={clsx(
            className,
            "border-accent block p-1 pl-2 w-full text-xs bg-secondary border border-solid rounded focus:outline-none sm:text-base"
          )}
        />
      </div>
    </label>
  );
};

export default Input;
