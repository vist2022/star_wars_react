import React from 'react';
import {contextStarWars} from "../utils/contextStarWars";

const Hero = () => {
    return (
        <contextStarWars.Consumer>
            {value =>
                <section className="float-start w-25 my-1 mx-3">
                    <img className="w-100" src={value.mainImg} alt={'hero'}/>
                </section>
            }
        </contextStarWars.Consumer>

    );
};

export default Hero;