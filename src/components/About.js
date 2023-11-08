import React, {Component, useContext, useEffect, useState} from 'react';
import {aboutUpdatePeriod} from "../utils/constants";
import {getPersonInfo} from "../api/api";
import Spinner from "./Spinner";
import {contextStarWars} from "../utils/contextStarWars";

const About = () => {

    const [person, setPerson] = useState({
        "name": null,
        "birth_year": null,
        "gender": null,
        "eye_color": null,
        "skin_color": null,
        "hair_color": null,
        "height": null,
        "mass": null,
        isLoading: true
    })

    useEffect(() => {

        const getPerson = async ()=>
        {const person = '2';
            let personInfo = JSON.parse(localStorage.getItem(person));
            let lastAboutUpdate = localStorage.getItem('lastAboutUpdate')
            let temp = {}
            if (personInfo && (parseInt(lastAboutUpdate) + aboutUpdatePeriod) > Date.now()) {
                temp = {...personInfo, isLoading: false};
            } else {
                personInfo =await getPersonInfo(person);
                temp = {...personInfo, isLoading: false};
                localStorage.setItem(person, JSON.stringify(personInfo))
                localStorage.setItem('lastAboutUpdate', Date.now().toString())
            }
            setPerson(temp);
        }
        getPerson()
    },[])
    const info =
        <div className={'container w-100'}>
            <p className={'text-center fs-1'}>My name is {person.name}</p>
            <p className={'text-center fs-3'}>I was born in {person.birth_year}. I'm {person.gender}</p>
            <p className={'text-center fs-3'}>I have {person.eye_color} eyes, {person.skin_color} skin
                and {person.hair_color} hair</p>
            <p className={'text-center fs-3'}>
                My height is {person.height}
                cm and my mass is {person.mass} kilo
            </p>
        </div>
    const context = person.isLoading === true ? <Spinner/> : info;
    return (
        <div className={'container w-100'}>
            {context}
        </div>
    );

}

export default About;