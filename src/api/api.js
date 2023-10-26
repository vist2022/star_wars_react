const BASE_URL = 'https://sw-info-api.herokuapp.com/v1';


export const getRandomEpisode = async () => {
    const response = await fetch(`${BASE_URL}/films`)
    const data = await response.json()

    return Math.floor(Math.random() * (data.length - 1)+1);
}

export const getFilmByID = (num) => {

    return fetch(`${BASE_URL}/films/${num}`)
        .then(response => response.json())
        .then(data => data);
}

