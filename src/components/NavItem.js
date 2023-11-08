import React, {useContext} from 'react';
import {contextStarWars} from "../utils/contextStarWars";

const NavItem = (props) => {

    const {changePage} = useContext(contextStarWars)
    return (
        <li
            className="nav-item btn btn-danger border border-light rounded-pill mx-1 common-btn"
            onClick={() => changePage(props.text)}
        >{props.text}</li>
    );
};

export default NavItem;