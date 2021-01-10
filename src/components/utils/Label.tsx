import clsx from "clsx";
import React, { ReactElement } from "react";

interface Props {
  children: React.ReactChild | React.ReactChild[];
  className?: string;
}

export default function Label({ children, className }: Props): ReactElement {
  return (
    <label className={clsx(className, "block text-left text-xxs sm:text-xs")}>
      {children}
    </label>
  );
}
