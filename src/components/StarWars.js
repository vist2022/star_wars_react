import React from 'react';
import {starWarsDescription} from "../utils/constants";

const StarWars = () => {
    return (<div className={'container w-80'}>
        <h1 className={'text-center'}>Star Wars</h1>
        <p className={'text-center mb-5 fs-6'}>{starWarsDescription}</p>
    </div>);
};

export default StarWars;