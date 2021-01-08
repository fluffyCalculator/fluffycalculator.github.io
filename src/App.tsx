import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Daily from "./components/Daily/Daily";
import Fluffy from "./components/Fluffy/Fluffy";
import NavBar from "./components/NavBar";

function App() {
  const swapTheme = (to: string) => {
    if (to === "light-theme") {
      localStorage.setItem("fluffy-theme", "light-theme");
      document.body.classList.replace("dark-theme", "light-theme");
    } else {
      localStorage.setItem("fluffy-theme", "dark-theme");
      document.body.classList.replace("light-theme", "dark-theme");
    }
  };

  useEffect(() => {
    swapTheme(localStorage.getItem("fluffy-theme"));
  }, []);

  return (
    <Router>
      <main>
        <NavBar />
        <Switch>
          <Route path="/fluffy">
            <Fluffy />
          </Route>
          <Route path="/(daily|)">
            <Daily />
          </Route>
        </Switch>

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
      </main>
    </Router>
  );
}

export default App;
