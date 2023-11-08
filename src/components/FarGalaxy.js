import React, {Component, useEffect, useState} from 'react';
import {getRandomEpisode} from "../api/api";
import {farGalaxyUpdatePeriod} from "../utils/constants";
import {getItemsFromSessionStorage, setItemsFromSessionStorage} from "../storage/sessionStorageFunc";
import Spinner from "./Spinner";

const FarGalaxy = () => {

    const [data, setData] = useState({
        isLoading: true,
        opening_crawl: '',
        title: '',
        episode_number: ''
    })

    useEffect( ()=>
    {
        const getData = async ()=>
        {
            let temp = {};
            let [episode_number, title, opening_crawl, createTime] = getItemsFromSessionStorage();

            if (episode_number && title && opening_crawl && ((parseInt(createTime) + farGalaxyUpdatePeriod) > Date.now()))
                temp = ({episode_number, title, opening_crawl, isLoading: false})
            else {
                const episodeInfo = await getRandomEpisode();
                temp = {
                    opening_crawl: episodeInfo.opening_crawl,
                    title: episodeInfo.title,
                    episode_number: episodeInfo.episode_id,
                    isLoading: false,}

                setItemsFromSessionStorage(
                    episodeInfo.episode_id, episodeInfo.title, episodeInfo.opening_crawl, Date.now().toString());
            }
            setData(temp);
        }
        getData();

    },[])

        const info =
            <div>
                <p className="farGalaxy fs-5">EPISODE {data.episode_number} : {data.title}</p>
                <p className="farGalaxy">{data.opening_crawl}</p>
            </div>

        const context =data.isLoading === true ? <Spinner/> : info;
        return (
            <> {context}</>
        );

}

export default FarGalaxy;


