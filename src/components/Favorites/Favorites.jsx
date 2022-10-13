import axios from 'axios';
import { useEffect, useState } from 'react';

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [category, setCategory] = useState('');

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


const thisCategory = (numCategory) => {
    switch (numCategory) {
        case 1:
          setCategory('Funny');
          break;
        case 2:
            setCategory('Cohort');
          break;
        case 3:
            setCategory('Cartoon');
          break;
        case 4:
            setCategory('Nsfw');
            break;
        case 5:
            setCategory('Meme');
            break;
            default:
                setCategory('None')
      }
}

    return (
        <>
        <h1>Favorites</h1>
        {favorites.map(gif => {
                        //   switch (gif.category_id) {
                        //     case 1:
                        //       setCategory('Funny');
                        //       break;
                        //     case 2:
                        //         setCategory('Cohort');
                        //       break;
                        //     case 3:
                        //         setCategory('Cartoon');
                        //       break;
                        //     case 4:
                        //         setCategory('Nsfw');
                        //         break;
                        //     case 5:
                        //         setCategory('Meme');
                        //         break;
                        //         default:
                        //             setCategory('None')
                        //                     }
            return  <div key={gif.id}>
                        <img src={gif.url}/>
                        <h3>{gif.name}</h3>
          
      
                        {/* <h3>{thisCategory(gif.category_id)}</h3> */}
                        
                    </div>
            
            
                        
        })}
        </>
    )
}


export default Favorites;