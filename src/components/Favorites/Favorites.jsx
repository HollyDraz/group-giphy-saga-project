import {useEffect, useState} from 'react';



const Favorites = () => {


    useEffect(() => {
        console.log('page load');    
    }, []);

    return  <>
               <h3>Favorites List</h3>
            </>
}

export default Favorites;