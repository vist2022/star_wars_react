import React, {Component} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";

class Home extends Component {


    render() {
        return (
            <main className="clearfix">
                <Hero/>
                <Friends/>
                <FarGalaxy/>
            </main>
        );
    }
}


export default Home;