import React from 'react';
import photo from '../styles/images/main.jpg'

const Hero = () => {
    return (
        <section className="float-start w-25 my-1 mx-3">
            <img className="w-100" src={photo} alt={'hero'}/>
        </section>
    );
};

export default Hero;