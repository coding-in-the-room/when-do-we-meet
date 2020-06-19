import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Layout from "./component/layout";
import Main from "./view/main";

function App() {
  return (
    <>
      <Layout />
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
