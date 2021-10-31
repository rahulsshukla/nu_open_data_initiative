import React from "react";
import ReactGA from "react-ga";

//component imports
import AboutUs from "../src/components/AboutUs";
import Banner from "../src/components/Banner";
import Contribute from "../src/components/Contribute";
import Datasets from "../src/components/Datasets";
import Footer from "../src/components/Footer";
import Home from "../src/components/Home"
import MainPage from "../src/components/MainPage";
import TempMainPage from "../src/components/TempMainPage";

//firebase imports

//react + css

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  initializeReactGA();
  return (
    <Router>
      <Banner></Banner>
      <Switch>
        <Route path="/" exact component={TempMainPage} />
        <Route path="/home" exact component={Home} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/contribute" exact component={Contribute} />
        <Route path="/datasets" exact component={Datasets} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
};

function initializeReactGA() {
  ReactGA.initialize("UA-179153158-1");
  ReactGA.pageview("/homepage");
}

export default App;
