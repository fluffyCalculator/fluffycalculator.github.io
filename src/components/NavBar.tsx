import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const TITLES = { "/fluffy": "Fluffy Calculator", "/daily": "Daily Seeker" };

function Tab({ location, current }: { location: string; current: boolean }) {
  return (
    <Link to={location} className={clsx(current && "text-prpl border-b-2 border-prpl", "p-3 pb-1 inline-block text-base font-extrabold")}>
      {TITLES[location]}
    </Link>
  );
}

function NavBar() {
  const location: Location = useLocation();

  const currentLocation = location?.pathname;

  document.title = TITLES[currentLocation] || "Fluffy Calculator";

  return (
    <div className="width-full text-center bg-thirdary shadow-2xl">
      <Tab location="/fluffy" current={currentLocation === "/fluffy"} />
      <Tab location="/daily" current={currentLocation === "/daily"} />
    </div>
  );
}

export default NavBar;
