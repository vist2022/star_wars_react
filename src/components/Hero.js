import React, {useContext} from 'react';
import {contextStarWars} from "../utils/contextStarWars";

const Hero = () => {
    const {mainImg} = useContext(contextStarWars)
    return (
                <section className="float-start w-25 my-1 mx-3">
                    <img className="w-100" src={mainImg} alt={'hero'}/>
                </section>
    );
};

export default Hero;