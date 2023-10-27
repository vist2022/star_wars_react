import React, {Component} from 'react';
import {getRandomEpisode} from "../api/api";
import {period} from "../utils/constants";

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

        const episode_number = sessionStorage.getItem('episode_number');
        const title = sessionStorage.getItem('title');
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        const createTime = sessionStorage.getItem('createTime')

        if (episode_number && title && opening_crawl || (parseInt(createTime) + period) > Date.now())
            this.setState({episode_number, title, opening_crawl, isLoading: false})
        else {
            const episodeInfo = await getRandomEpisode();
            this.setState({
                opening_crawl: episodeInfo.opening_crawl,
                title: episodeInfo.title,
                episode_number: episodeInfo.episode_id,
                isLoading: false,
            });
            sessionStorage.setItem('episode_number', episodeInfo.episode_id);
            sessionStorage.setItem('title', episodeInfo.title);
            sessionStorage.setItem('opening_crawl',episodeInfo.opening_crawl);
            sessionStorage.setItem('createTime', Date.now().toString());
           // console.log(Date.now().toString())
        }

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


