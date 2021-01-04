import clsx from "clsx";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DailyProvider from "./components/Daily/Context";
import Daily from "./components/Daily/Daily";
import NavBar from "./components/NavBar";

function App() {
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <Router>
      <main
        className={clsx(
          lightTheme ? "light-theme" : "dark-theme",
          "w-full text-primary bg-primary"
        )}
      >
        <NavBar />
        <Switch>
          <Route path="/fluffy"> daily fisher </Route>
          <Route path="/(daily|)">
            {" "}
            <Daily />{" "}
          </Route>
        </Switch>

        <div
          className="absolute right-0 top-0 m-3 p-3 text-primary bg-secondary border border-solid border-green-400 shadow-xl cursor-pointer select-none"
          onClick={() => setLightTheme(!lightTheme)}
        >
          Swap Theme
        </div>
      </main>
    </Router>
  );
}

export default App;
