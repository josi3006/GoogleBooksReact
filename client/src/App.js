import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navComponent";
import Jumbo from "./components/jumboComponent";
import Search from "./pages/search";
import Saved from "./pages/saved";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbo />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path={"/saved"}>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
