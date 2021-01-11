import clsx from "clsx";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const TITLES = { "/fluffy": "Fluffy Calculator", "/daily": "Daily Seeker" };

const swapTheme = (to: string) => {
  if (to === "light-theme") {
    localStorage.setItem("fluffy-theme", "light-theme");
    document.body.classList.replace("dark-theme", "light-theme");
  } else {
    localStorage.setItem("fluffy-theme", "dark-theme");
    document.body.classList.replace("light-theme", "dark-theme");
  }
};

function ThemeSwitcher() {
  return (
    <div
      className="absolute right-0 top-0 m-1 p-1 text-primary bg-secondary border border-solid border-green-400 shadow-xl cursor-pointer select-none"
      onClick={() => {
        if (document.body.classList.contains("light-theme")) {
          swapTheme("dark-theme");
        } else {
          swapTheme("light-theme");
        }
      }}
    >
      Swap Theme
    </div>
  );
}

function Tab({ location, current }: { location: string; current: boolean }) {
  return (
    <Link
      to={location}
      className={clsx(
        current && "text-prpl border-b-2 border-prpl",
        "inline-block p-3 pb-1 text-base font-extrabold"
      )}
    >
      {TITLES[location]}
    </Link>
  );
}

function NavBar() {
  useEffect(() => {
    swapTheme(localStorage.getItem("fluffy-theme"));
  }, []);

  const location: Location = useLocation();

  const currentLocation = location?.pathname;

  document.title = TITLES[currentLocation] || "Fluffy Calculator";

  return (
    <div className="width-full text-center bg-thirdary shadow-md">
      <Tab
        location="/fluffy"
        current={currentLocation === "/" || currentLocation === "/fluffy"}
      />
      <Tab location="/daily" current={currentLocation === "/daily"} />

      <ThemeSwitcher />
    </div>
  );
}

export default NavBar;
