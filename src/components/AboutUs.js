import React from "react";
import {
  Container,
  Header,
  Divider,
  Card
} from 'semantic-ui-react';
import "../styles/AboutUs.css";
import amit from "../amit.jpg";
import AboutCard from "./AboutCard.js"

const AboutUs = () => {
  return (
    <div>
      <Container text fluid className="Container">
        <Header as="h2">Our Story</Header>
        <p>
          The Northwestern Open Data Initiative (NODI) is a student group committed to the idea of <a href="https://theodi.org/article/what-is-open-data-and-why-should-we-care/">open data</a>. Open data is data that is available to everyone. At Northwestern, this could mean datasets about student demographics, tuition, NUPD statistics, and more. Our mission is to give our community access to this type of data. Since January 2020, we have been working with Professor Kristian Hammond and the Institutional Research Office at Northwestern to create an open data portal to host all Northwestern-related data.
        </p>
      </Container>
      <Divider />
      <Container text fluid className="Container">
        <Header as="h2">The Team</Header>
        <Card.Group itemsPerRow="3">
          <AboutCard name="Marissa Levy" role="President" description="Add desc" />
          <AboutCard name="Aldo Aguilar" role="VP" description="add desc" />
          <AboutCard name="Atishay Saraogi" role="???" description="add desc" />
        </Card.Group>
      </Container>
      <Container text fluid className="Container">
        <Header as="h2">Advisors</Header>
        <Card.Group>
          <AboutCard name="Amit Prachand" role="Advisor" />
        </Card.Group>
      </Container>
    </div>
  );
};

export default AboutUs;
