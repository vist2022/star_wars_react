export const getItemsFromSessionStorage = () => {
    return [
        sessionStorage.getItem('episode_number'),
        sessionStorage.getItem('title'),
        sessionStorage.getItem('opening_crawl'),
        sessionStorage.getItem('createTime')
    ]
}

export const setItemsFromSessionStorage = (id, title, opening_crawl, time) => {
    sessionStorage.setItem('episode_number', id);
    sessionStorage.setItem('title', title);
    sessionStorage.setItem('opening_crawl', opening_crawl);
    sessionStorage.setItem('createTime', time);
}