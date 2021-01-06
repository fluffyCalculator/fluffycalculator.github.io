import clsx from "clsx";
import React from "react";

interface Props {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

function Button({ onClick, className, children }: Props) {
  return (
    <div className={clsx(className, "p-2 bg-secondary border border-solid border-prpl rounded cursor-pointer select-none shadow self-center text-sm sm:text-base")} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
