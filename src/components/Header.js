import React from 'react';
import Navigation from "./Navigation";

const Header = (props) => {
    return (
        <header className="rounded-top-3">
            <Navigation changePage={props.changePage}/>
            <h1 className="text-center fs-1 py-4">Luke Skywalker</h1>
        </header>
    );
};

export default Header;