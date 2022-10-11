import axios from 'axios';
import { useEffect, useState } from 'react';

const Favorites = () => {

    const [favorites, setFavorites] = useState ([]);

    const fetchFavorites = () => {
        console.log('in fetchFavorites');
        axios.get('/api/favorite')
            .then(response => {
                console.log(response.data);
                setFavorites(response.data);
            })
            .catch(error => {
                console.log(error);
                alert('Something went wrong fetching your favorites.');
            });
    }

    useEffect(() => {
        console.log('page load');
        fetchFavorites();
    }, []);


    return (
        <>
        <h1>Favorites</h1>
        {favorites.map(gif => {
            return <img key={gif.id} 
                        src={gif.url} />
        })}
        </>
    )
}


export default Favorites;