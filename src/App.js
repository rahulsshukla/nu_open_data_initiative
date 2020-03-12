import React from "react";

//component imports
import MainPage from "../src/components/MainPage";
import Banner from "../src/components/Banner";

//firebase imports

//react + css

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Banner></Banner>
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </Router>
  );
};

export default App;
