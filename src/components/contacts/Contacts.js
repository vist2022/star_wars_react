import React, {Component} from 'react';
import style from './Contacts.module.css'
import {getAllPlanets} from "../../api/api";
import {contactsUpdatePeriod} from "../../utils/constants";
import Spinner from "../Spinner";


class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            isLoading: true,
        }
    }

    componentDidMount = async () => {
        const savedPlanets = JSON.parse(localStorage.getItem('planets'));
        const lastContactsUpdate = localStorage.getItem('lastContactsUpdate');

        if (savedPlanets && (parseInt(lastContactsUpdate) + contactsUpdatePeriod) > Date.now()) {
            this.setState({planets: savedPlanets, isLoading: false});
        } else {
            const planetsApi = await getAllPlanets();
            const planetNames = planetsApi.map(item => item.name)

            this.setState({planets: planetNames, isLoading: false});

            localStorage.setItem('planets', JSON.stringify(planetNames))
            localStorage.setItem('lastContactsUpdate', Date.now().toString())
        }
    }

    render() {

        const formRender =
            <form>
                <label htmlFor="fname">First Name</label>
                <input className={style.text} type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input className={style.text} type="text" id="lname" name="lastname"
                       placeholder="Your last name.."/>

                <label htmlFor="planet">Planet</label>
                <select className={style.text} id="planet" name="planet">
                    {this.state.planets.map((planet,index)=>
                        <option key={index} value={`${planet}`}>{planet}</option>)}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea className={style.text} id="subject" name="subject" placeholder="Write something.."
                          style={{height: '200px'}}></textarea>

                <input className={style.submit} type="submit" value="Submit"/>
            </form>

        const context = this.state.isLoading === true ? <Spinner/> : formRender;
        return (
            <div className="container">
                {context}
            </div>
        );
    }
}

export default Contacts;
