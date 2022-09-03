import {API_KEY, API_URL} from "./settings";

export const getGifs = async ({
                                  limit = 20,
                                  keyword = 'morty',
                                  page = 0,
                                  rating = 'g'
                              } = {}) => {

    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`;

    return fetch(apiURL)
        .then(res => res.json())
        .then(({data}) => {
            return data.map(image => {
                const {images, title, id} = image
                const {url} = images.downsized_medium

                return {
                    title, id, url
                }
            });
        })
}
