import React from "react";
import Carousel from "semantic-ui-carousel-react";
import { Image, Button } from "semantic-ui-react";
import "../styles/Featured.css";
const Featured = () => {
  let elements = [
    {
      render: () => {
        return <Button className="fd">FEATURED DATASET 1</Button>;
      },
    },
    {
      render: () => {
        return <Button className="fd">FEATURED DATASET 2</Button>;
      },
    },
  ];
  return (
    <div className="c">
      <div className="cs">
        <Carousel
          elements={elements}
          duration={3000}
          animation="slide left"
          showNextPrev={false}
          showIndicators={true}
        />
      </div>
    </div>
  );
};
export default Featured;
