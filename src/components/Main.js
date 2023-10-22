import React from 'react';
import {pages} from "../utils/constants";

const Main = (props) => {

    let Page;
    const ComponentName = props.pageToRender;

    if (ComponentName in pages.navPages)
        Page = pages.navPages[ComponentName];
    else if (ComponentName in pages)
        Page = pages[ComponentName];
    else Page = pages.homePage;

    return (
        <main className="clearfix">
            {Page}
        </main>
    );
};

export default Main;