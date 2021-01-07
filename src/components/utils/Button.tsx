import clsx from "clsx";
import React from "react";

interface Props {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  variant?: "retrieve";
}

function Button({ onClick, className, children, variant }: Props) {
  return (
    <div
      className={clsx(
        className,
        variant === "retrieve" ? "p-1 text-sm" : " text-sm sm:text-base p-2",
        "self-center bg-secondary border border-solid border-prpl rounded shadow cursor-pointer select-none"
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
