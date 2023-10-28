import React, {Component} from 'react';
import {aboutUpdatePeriod} from "../utils/constants";
import {getPersonInfo} from "../api/api";
import Spinner from "./Spinner";

class About extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                "name": null,
                "birth_year": null,
                "gender": null,
                "eye_color": null,
                "skin_color": null,
                "hair_color": null,
                "height": null,
                "mass": null,
                 isLoading: true
            }
    }

    componentDidMount = async ()=> {
        const person = '2'

        let personInfo = JSON.parse(localStorage.getItem(person));
        let lastAboutUpdate = localStorage.getItem('lastAboutUpdate')

        if (personInfo && (parseInt(lastAboutUpdate) + aboutUpdatePeriod) > Date.now()) {
            this.setState({...personInfo, isLoading: false});
        } else {
            personInfo = await getPersonInfo(person);
            this.setState({...personInfo, isLoading: false});
            localStorage.setItem(person, JSON.stringify(personInfo))
            localStorage.setItem('lastAboutUpdate', Date.now().toString())
        }
    }



    render() {
        const info =
            <div className={'container w-100'}>
                <p className={'text-center fs-1'}>My name is {this.state.name}</p>
                <p className={'text-center fs-3'}>I was born in {this.state.birth_year}. I'm {this.state.gender}</p>
                <p className={'text-center fs-3'}>I have {this.state.eye_color} eyes, {this.state.skin_color} skin
                    and {this.state.hair_color} hair</p>
                <p className={'text-center fs-3'}>
                    My height is {this.state.height}
                    cm and my mass is {this.state.mass} kilo
                </p>
            </div>
        const context = this.state.isLoading === true ? <Spinner/> : info;
        return (
            <div className={'container w-100'}>
                {context}
            </div>
        );
    }
}

export default About;