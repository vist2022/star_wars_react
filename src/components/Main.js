import React, {useContext} from 'react';
import {pages} from "../utils/constants";
import {contextStarWars} from "../utils/contextStarWars";

const Main = () => {
    const {pageName} = useContext(contextStarWars);

    let Page;
    const ComponentName = pageName;

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