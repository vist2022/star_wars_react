import React, {useContext} from 'react';
import Friend from "./Friend";
import {contextStarWars} from "../utils/contextStarWars";

const Friends = () => {
    const value = useContext(contextStarWars);
    return (
        <section className="float-end w-50 border border-light rounded-bottom-3 row m-1">
            {value.friendsImg.map((img, index) =>
                <Friend image={img} key={index}/>)}
        </section>
    );
};

export default Friends;