import React, {Component} from 'react';
import {getFilmByID} from "../api/api";
import {getRandomEpisode} from "../api/api";

const BASE_URL = 'https://sw-info-api.herokuapp.com/v1';


class FarGalaxy extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            opening_crawl: '',
            title: '',
            episode_number: ''
        }


    }


    componentDidMount = async () => {

        const episodeNumber = await getRandomEpisode();
        const episodeInfo = await getFilmByID(episodeNumber);
        this.setState({
            ...this.state,
            opening_crawl: episodeInfo.opening_crawl,
            title: episodeInfo.title,
            episode_number: episodeInfo.episode_id,
            isLoading: false,

        });

    }

    render() {
        const spinner =
            <div className="d-flex justify-content-center">
                <div className="spinner-border  text-warning" style={{width: '5rem', height: '5rem'}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        const info =
            <div>
                <p className="farGalaxy fs-5">EPISODE {this.state.episode_number} : {this.state.title}</p>
                <p className="farGalaxy">{this.state.opening_crawl}</p>
            </div>
        const context = this.state.isLoading === true ? spinner : info;
        return (
            <> {context}</>
        );
    }
}

export default FarGalaxy;


