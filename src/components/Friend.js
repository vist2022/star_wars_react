import React, {useContext} from 'react';
import {contextStarWars} from "../utils/contextStarWars";


const Friend = ({image}) => {
    const {changeImages} = useContext(contextStarWars)
    return (
        <>
            <img
                className="col-4 p-1"
                src={image} alt="friend"
                onClick={() => changeImages(image)}
            />
        </>
    );
};

export default Friend;