export default function addFav({id}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                let favs = JSON.parse(localStorage.getItem("favs")) || [];
                const newFavs = [...favs, id];
                localStorage.setItem("favs", JSON.stringify(newFavs));
                resolve(newFavs);
            }

            reject(new Error('Invalid id'))
        }, 1000)
    })
}
