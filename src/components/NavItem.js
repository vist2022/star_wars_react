import React from 'react';
import {contextStarWars} from "../utils/contextStarWars";

const NavItem = (props) => {


    return (
<contextStarWars.Consumer>
    {value =>
        <li
            className="nav-item btn btn-danger border border-light rounded-pill mx-1 common-btn"
            onClick={()=>value.changePage(props.text)}
        >{props.text}</li>
    }
</contextStarWars.Consumer>







    );
};

export default NavItem;