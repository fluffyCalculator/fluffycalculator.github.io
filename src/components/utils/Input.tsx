import clsx from "clsx";
import React from "react";

interface Props {
  onChange?: (e) => void;
  className?: string;
  defaultValue?: string | number;
  value?: string | number;
  type?: string;
  min?: number;
  max?: number;
  variant?: "fluffy";
  disabled?: true;
}

const Input = ({
  onChange,
  className,
  defaultValue,
  value,
  type,
  min,
  max,
  variant,
  disabled,
}: Props) => {
  return (
    <div className="relative mt-0.5 rounded shadow">
      <input
        type={variant === "fluffy" ? (type ? type : "number") : null}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        min={variant === "fluffy" ? (min ? min : 0) : null}
        max={max}
        disabled={disabled ?? null}
        className={clsx(
          className,
          "block p-1 pl-2 w-full text-xs bg-secondary border border-solid border-accent rounded focus:outline-none sm:text-base"
        )}
      />
    </div>
  );
};

export const MemoInput = React.memo(Input);

export default Input;
