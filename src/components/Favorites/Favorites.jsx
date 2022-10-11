import {useEffect, useState} from 'react';



const Favorites = () => {

// const [favoritedGifs, setFavoritedGifs] = useState([]);

//     const displayGifs = () => {
//         console.log('in favoritedGifs', favoritedGifs);
//         axios.get(`/favorite`)
//             .then(response => {
//                 console.log(response.data);
//                 setFavoritedGifs(response.data);
//                 ;
//             })
//             .catch(error => {
//                 console.log(error);
//                 alert('something went wrong in displayGifs');
//             });
//     }

    useEffect(() => {
        console.log('page load');  
        // displayGifs();  
    }, []);

    return  <>
               <h3>Favorites List</h3>
               {/* {favoritedGifs.map((gif) => 
               <img src={gif}></img>
               )} */}
            </>
}

export default Favorites;