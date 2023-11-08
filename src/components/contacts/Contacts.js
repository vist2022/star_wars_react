import React, {Component, useContext, useEffect, useState} from 'react';
import style from './Contacts.module.css'
import {getAllPlanets} from "../../api/api";
import {contactsUpdatePeriod} from "../../utils/constants";
import Spinner from "../Spinner";


const Contacts = () => {
    const [data, setData] = useState({
        planets: [],
        isLoading: true
    })

    useEffect(() => {
        const getPlanets = async () => {
            const savedPlanets = JSON.parse(localStorage.getItem('planets'));
            const lastContactsUpdate = localStorage.getItem('lastContactsUpdate');
            let temp = {}
            if (savedPlanets && (parseInt(lastContactsUpdate) + contactsUpdatePeriod) > Date.now()) {
                temp = {planets: savedPlanets, isLoading: false};
            } else {
                const planetsApi = await getAllPlanets();
                const planetNames = planetsApi.map(item => item.name)
                temp = {planets: planetNames, isLoading: false};
                localStorage.setItem('planets', JSON.stringify(planetNames))
                localStorage.setItem('lastContactsUpdate', Date.now().toString())
            }
            setData(temp);
        }
        getPlanets();
    }, [])


    const formRender =
        <form>
            <label htmlFor="fname">First Name</label>
            <input className={style.text} type="text" id="fname" name="firstname" placeholder="Your name.."/>

            <label htmlFor="lname">Last Name</label>
            <input className={style.text} type="text" id="lname" name="lastname"
                   placeholder="Your last name.."/>

            <label htmlFor="planet">Planet</label>
            <select className={style.text} id="planet" name="planet">
                {data.planets.map((planet, index) =>
                    <option key={index} value={`${planet}`}>{planet}</option>)}
            </select>

            <label htmlFor="subject">Subject</label>
            <textarea className={style.text} id="subject" name="subject" placeholder="Write something.."
                      style={{height: '200px'}}></textarea>

            <input className={style.submit} type="submit" value="Submit"/>
        </form>

    const context = data.isLoading === true ? <Spinner/> : formRender;
    return (
        <div className="container">
            {context}
        </div>
    );

}

export default Contacts;
