import React from "react";

//component imports
import MainPage from "../src/components/MainPage";
import Banner from "../src/components/Banner";
import AboutUs from "../src/components/AboutUs";
import Contribute from "../src/components/Contribute";
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
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/contribute" exact component={Contribute} />
      </Switch>
    </Router>
  );
};

export default App;
