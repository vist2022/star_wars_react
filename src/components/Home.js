import React, {Component} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";

import photo from '../styles/images/main.jpg'
import {contextStarWars} from "../utils/contextStarWars";
const images = require.context('../styles/images/friends_img');
const imageFiles = images.keys();
const importedImages = imageFiles.map(images);



class Home extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                mainImg: photo,
                friendsImg: importedImages
            }
    }

    changeImages = (friend) => {
        let tempState = [...this.state.friendsImg];
        let index = tempState.indexOf(friend);
        if (index !== -1) {
            tempState[index] = this.state.mainImg;
            this.setState({...this.state, mainImg: friend, friendsImg: tempState})
        }

    }

    render() {
        return (
            <main className="clearfix">
                <contextStarWars.Provider value={{
                    mainImg:this.state.mainImg,
                    friendsImg: this.state.friendsImg,
                    changeImages: this.changeImages,
                }}>
                    <Hero/>
                    <Friends/>
                    <FarGalaxy/>
                </contextStarWars.Provider>



            </main>
        );
    }
}


export default Home;

