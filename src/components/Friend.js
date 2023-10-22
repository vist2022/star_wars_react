import React from 'react';
// import img from '../styles/images/friend1.jpg'

const Friend = ({image}) => {
    return (
        <>
            <img className="col-4 p-1" src={image} alt="friend"/>
        </>
    );
};

export default Friend;