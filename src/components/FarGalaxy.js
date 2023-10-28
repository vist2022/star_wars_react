import React, {Component} from 'react';
import {getRandomEpisode} from "../api/api";
import {farGalaxyUpdatePeriod} from "../utils/constants";
import {getItemsFromSessionStorage, setItemsFromSessionStorage} from "../storage/sessionStorageFunc";
import Spinner from "./Spinner";

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

        let [episode_number, title, opening_crawl, createTime] = getItemsFromSessionStorage();

        if (episode_number && title && opening_crawl && (parseInt(createTime) + farGalaxyUpdatePeriod) > Date.now())
            this.setState({episode_number, title, opening_crawl, isLoading: false})
        else {
            const episodeInfo = await getRandomEpisode();
            this.setState({
                opening_crawl: episodeInfo.opening_crawl,
                title: episodeInfo.title,
                episode_number: episodeInfo.episode_id,
                isLoading: false,
            });
            setItemsFromSessionStorage(
                episodeInfo.episode_id, episodeInfo.title, episodeInfo.opening_crawl, Date.now().toString());
        }

    }

    render() {

        const info =
            <div>
                <p className="farGalaxy fs-5">EPISODE {this.state.episode_number} : {this.state.title}</p>
                <p className="farGalaxy">{this.state.opening_crawl}</p>
            </div>

        const context = this.state.isLoading === true ? <Spinner/> : info;
        return (
            <> {context}</>
        );
    }
}

export default FarGalaxy;


