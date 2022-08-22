const apiKey = 'eM4xovA1aGdRPROUlunCmRg8ez2CgSmF&q';

export const getGifts = async ({keyword = 'morty'} = {}) => {

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=10&offset=0&rating=g&lang=en`;

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
