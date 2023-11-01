import React from 'react';
import Friend from "./Friend";
import {contextStarWars} from "../utils/contextStarWars";

const Friends = () => {
    return (

        <contextStarWars.Consumer>
            {value =>
                <section className="float-end w-50 border border-light rounded-bottom-3 row m-1">
                    {value.friendsImg.map((img,index)=>
                        <Friend image={img} key={index}/>)}
                </section>
            }
        </contextStarWars.Consumer>

    );
};

export default Friends;