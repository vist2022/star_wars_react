import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import React, {Component, useState} from 'react';
import {pages} from "./utils/constants";
import {contextStarWars} from "./utils/contextStarWars";

const App =()=> {

    const [pageName, setPage] = useState({pageName: pages.navPages.Home})
        return (
            <div className="container-fluid">
                <contextStarWars.Provider value={{
                    pageName,
                    changePage :setPage
                }}>

                    <Header/>
                    <Main/>
                    <Footer/>
                </contextStarWars.Provider>

            </div>
        );

}

export default App;



