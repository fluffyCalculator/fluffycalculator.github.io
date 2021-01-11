import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Daily from "./components/Daily/Daily";
import Fluffy from "./components/Fluffy/Fluffy";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <main>
        <NavBar />
        <Switch>
          <Route path="/(fluffy|)" component={Fluffy} />
          <Route path="/daily" component={Daily} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
