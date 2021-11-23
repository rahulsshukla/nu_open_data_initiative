import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import "../styles/AboutUs.css"

const AboutCard = (props) => (
  <Card className="card">
    <img src={props.src} className="profile" />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.role}</Card.Meta>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default AboutCard