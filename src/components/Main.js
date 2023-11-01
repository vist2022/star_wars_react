import React from 'react';
import {pages} from "../utils/constants";
import {contextStarWars} from "../utils/contextStarWars";

const Main = () => {
    return (
        <contextStarWars.Consumer>
            {value => {
                let Page;
                const ComponentName = value.pageName;

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
            }
            }
        </contextStarWars.Consumer>
    )


};

export default Main;