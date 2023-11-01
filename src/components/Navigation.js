import React from 'react';
import {pages} from "../utils/constants";
import NavItem from "./NavItem";


const Navigation = () => {
    return (
        <nav>
            <ul className="nav fixed-top mt-1 ms-5">
                {Object.keys(pages.navPages).map((item) =>
                    <NavItem key={item} text={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;