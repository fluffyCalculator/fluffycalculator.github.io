import clsx from "clsx";
import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Daily from "./components/Daily/Daily";
import NavBar from "./components/NavBar";

function App() {
  const ref = useRef(null);

  return (
    <Router>
      <main
        className={clsx(
          localStorage.getItem("fluffy-theme") || "light-theme",
          "w-full text-primary bg-primary"
        )}
        ref={ref}
      >
        <NavBar />
        <Switch>
          <Route path="/fluffy"> daily fisher </Route>
          <Route path="/(daily|)">
            <Daily />
          </Route>
        </Switch>

        <div
          className="absolute right-0 top-0 m-1 p-1 text-primary bg-secondary border border-solid border-green-400 shadow-xl cursor-pointer select-none"
          onClick={() => {
            if (ref.current.classList.contains("light-theme")) {
              localStorage.setItem("fluffy-theme", "dark-theme");
              ref.current.classList.replace("light-theme", "dark-theme");
            } else {
              localStorage.setItem("fluffy-theme", "light-theme");
              ref.current.classList.replace("dark-theme", "light-theme");
            }
          }}
        >
          Swap Theme
        </div>
      </main>
    </Router>
  );
}

export default App;
