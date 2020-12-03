import React from "react";
import { Button, Accordion, Dropdown, Icon  } from "semantic-ui-react";
import "../styles/Banner.css";

const trigger = (
    <Button id="button">
        Related Links <i aria-hidden="true" class="dropdown icon"></i>
    </Button>
);

const RelatedLinks = () => (
    <Dropdown trigger={trigger} icon={null}>
        <Dropdown.Menu direction="right" id="dropdown_item">
            <Dropdown.Item text='Open Data Campus' id="dropdown_item" onClick={(e) => (window.open('http://www.opendatacampus.com', '_blank'))}/>
        </Dropdown.Menu>
    </Dropdown>
); 

export default RelatedLinks;