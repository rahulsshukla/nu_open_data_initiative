import React from "react";

//component imports
import MainPage from "../src/components/MainPage";

//firebase imports

//react + css

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </Router>
  );
};

export default App;
