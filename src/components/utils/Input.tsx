import clsx from "clsx";
import React from "react";

interface Props {
  label: string;
  onChange?: (e) => void;
  className?: string;
  defaultValue?: string | number;
  type?: string;
  parentClassName?: string;
}

const Input = ({
  label,
  onChange,
  className,
  defaultValue,
  type,
  parentClassName,
}: Props) => {
  return (
    <label
      className={clsx(parentClassName, "block text-left text-xxs sm:text-xs")}
    >
      {label}
      <div className="relative mt-0.5 rounded shadow">
        <input
          type={type}
          onChange={onChange}
          defaultValue={defaultValue}
          className={clsx(
            className,
            "sm:text-base block p-1 text-xs bg-secondary border border-solid border-prpl rounded focus:outline-none"
          )}
        />
      </div>
    </label>
  );
};

export default Input;
