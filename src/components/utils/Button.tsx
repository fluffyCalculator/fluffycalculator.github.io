import clsx from "clsx";
import React from "react";

interface Props {
  onClick?: (e?: any) => void;
  className?: string;
  label: string;
  variant?: "small";
}

function Button({ onClick, className, label, variant }: Props) {
  return (
    <input
      type="button"
      className={clsx(
        className,
        variant === "small"
          ? "p-1 text-xs sm:text-base"
          : " text-sm sm:text-base p-2",
        "self-center bg-secondary border border-solid border-accent rounded focus:outline-none shadow cursor-pointer select-none"
      )}
      onClick={onClick}
      value={label}
    />
  );
}

export default Button;
