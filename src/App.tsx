import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Daily from "./components/Daily/Daily";
import Fluffy from "./components/Fluffy/Fluffy";
import NavBar from "./components/NavBar";

function App() {
  return (
    <HashRouter basename="/" hashType="noslash">
      <main>
        <NavBar />
        <Switch>
          <Route path="/daily" component={Daily} />
          <Route path="/(fluffy|)" component={Fluffy} />
        </Switch>
      </main>
    </HashRouter>
  );
}

export default App;
