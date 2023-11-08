import React, {Component, useContext, useState} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";

import photo from '../styles/images/main.jpg'
import {contextStarWars} from "../utils/contextStarWars";

const images = require.context('../styles/images/friends_img');
const imageFiles = images.keys();
const importedImages = imageFiles.map(images);


const Home = () => {
    const [homePageImages, setHomePageImages] = useState({mainImg: photo, friendsImg: importedImages});


    const changeImages = (friend) => {
        let temp = [...homePageImages.friendsImg];
        let index = homePageImages.friendsImg.indexOf(friend);
        if (index === -1) return;
        temp[index] = homePageImages.mainImg;
        setHomePageImages({...homePageImages, mainImg: friend, friendsImg: temp});
    }

    return (
        <main className="clearfix">
            <contextStarWars.Provider value={{
                mainImg: homePageImages.mainImg,
                friendsImg: homePageImages.friendsImg,
                changeImages,
            }}>
                <Hero/>
                <Friends/>
                <FarGalaxy/>
            </contextStarWars.Provider>


        </main>
    );
}


export default Home;

