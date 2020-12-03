import React from "react";
import { Button, Dropdown } from "semantic-ui-react";
import "../styles/Banner.css";

const trigger = (
    <Button id="button">
        Related Links
    </Button>
);

const RelatedLinks = () => (
    <Dropdown trigger={trigger} pointing='top' icon={null} id="button" class="ui button">
        <Dropdown.Menu>
            <Dropdown.Item text='Open Data Campus' id="dropdown_item" onClick={(e) => (window.open('http://www.opendatacampus.com', '_blank'))}/>
        </Dropdown.Menu>
    </Dropdown>
);

export default RelatedLinks;