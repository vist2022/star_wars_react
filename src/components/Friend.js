import React from 'react';
import {contextStarWars} from "../utils/contextStarWars";


const Friend = ({image}) => {
    return (
        <contextStarWars.Consumer>
            {value =>
                <>
                    <img
                        className="col-4 p-1"
                        src={image} alt="friend"
                        onClick={()=>value.changeImages(image)}/>
                </>
            }
        </contextStarWars.Consumer>
    );
};

export default Friend;