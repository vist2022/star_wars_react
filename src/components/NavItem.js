import React from 'react';

const NavItem = (props) => {

    return (<li
        className="nav-item btn btn-danger border border-light rounded-pill mx-1 common-btn"
        onClick={()=>props.changePage(props.text)}
        >{props.text}</li>);
};

export default NavItem;