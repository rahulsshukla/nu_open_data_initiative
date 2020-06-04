import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import {
  Grid,
  Header,
  Icon,
  Divider,
  Accordion,
  Form,
  Input,
  Menu,
  Label,
} from "semantic-ui-react";
import "../styles/Featured.css";

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 100;
  return (
    <div className="feat-container">
      <div className="card">
        <Grid.Column width={15}>
          <Grid.Row>
            <Header size="small">
              Total Research and Development Expenditures - 2007 through 2017{" "}
            </Header>
            <Label.Group style={{ marginTop: "10px" }}>
              <Label
                content="Campus"
                style={{ backgroundColor: "#4e2a84", color: "white" }}
              />
              <Label
                content="PDF"
                style={{ backgroundColor: "green", color: "white" }}
              />
            </Label.Group>
            <Header.Subheader>
              The dataset charts research and development expenditures (in
              millions) over time from 2007 to 2017.
            </Header.Subheader>
          </Grid.Row>
        </Grid.Column>
      </div>
      <div className="card">
        <Grid.Column width={15}>
          <Grid.Row>
            <Header size="small">COVID-19 Cases in Illinois by ZIP Code</Header>

            <Label.Group style={{ marginTop: "10px" }}>
              <Label
                content="Campus"
                style={{ backgroundColor: "#4e2a84", color: "white" }}
              />
              <Label
                content="Html"
                style={{ backgroundColor: "blue", color: "white" }}
              />
            </Label.Group>
            <Header.Subheader>
              The dataset tracks COVID-19 cases by ZIP code.
            </Header.Subheader>
          </Grid.Row>
        </Grid.Column>
      </div>
      <div className="card">
        <Grid.Column width={15}>
          <Grid.Row>
            <Header size="small">
              Total Library Volumes - 1968-69 through 2017-18
            </Header>
            <Label.Group style={{ marginTop: "10px" }}>
              <Label
                content="Campus"
                style={{ backgroundColor: "#4e2a84", color: "white" }}
              />
              <Label content="CSV" />
            </Label.Group>
            <Header.Subheader>
              The dataset refers to the number of library volumes from the 1968
              school year to the 2017 school years.
            </Header.Subheader>
          </Grid.Row>
        </Grid.Column>
      </div>
      {/* <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel id="carousel"
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={20}
          leftChevron={<button>{'<'}</button>}
          rightChevron={<button>{'>'}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <div class="card" style={{background: '#EEE' }}>First card</div>
          <div class="card" style={{background: '#EEE' }}>Second card</div>
          <div class="card" style={{background: '#EEE' }}>Third card</div>
          <div class="card" style={{background: '#EEE' }}>Fourth card</div>
        </ItemsCarousel>
    </div> */}
    </div>
  );
};
