import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../styles/AboutUs.css";

const Home = () => {
  return (
    <div>
      <div className="ui four column grid" id="one">
          <div className="row start" id="header">
            Our Story
          </div>
          <div className="middle aligned row first">
            <div className="info">
            The Northwestern Open Data Initiative (NODI) is a student group committed to the idea of 
            <a href="https://theodi.org/article/what-is-open-data-and-why-should-we-care/">open data</a>.
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
