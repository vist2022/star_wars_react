import React from 'react';

const NavItem = (props) => {

    const handleOnClickNav = (e) => {
        props.changePage(e.target.getAttribute('name'))
    }

    return (<li
        className="nav-item btn btn-danger border border-light rounded-pill mx-1 common-btn"
        onClick={handleOnClickNav}
        name={props.name}>{props.text}</li>);
};

export default NavItem;