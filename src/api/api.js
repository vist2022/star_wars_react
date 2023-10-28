import {BASE_URL} from "../utils/constants";


export const getRandomEpisode = async () => {
    const response = await fetch(`${BASE_URL}/films`);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * (data.length - 1) + 1);
    return data[randomIndex]

}

export  const getPersonInfo = async (person)=>
{
    const response = await fetch(`${BASE_URL}/peoples/${person}`);
    return await response.json();
}

export const getAllPlanets = async ()=>
{
    const response = await fetch(`${BASE_URL}/planets`);
    return await response.json();
}

