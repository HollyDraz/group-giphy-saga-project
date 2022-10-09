import axios from 'axios';
import {useEffect, useState} from 'react';

const Search = () => {

    const [searchString, setSearchString] = useState('');
    const [seachResults, setSearchResults] = useState([]);

    const searchGifs = (searchStringInput) => {
        console.log('in searchGifs', searchStringInput);
        axios.get(`/search/${searchStringInput}`)
            .then(response => {
                console.log(response.data.data);
                setSearchResults(response.data.data);
                setSearchString('');
            })
            .catch(error => {
                console.log(error);
                alert('Something went wrong search for your gifs.');
            });
    }

    useEffect(() => {
        console.log('page load');    
    }, []);

    return  <>
                {seachResults.map(gif => {
                    return  <>
                                <img src={gif.images.fixed_height.url}/>
                            
                                <button>Favorite</button>
                                {/* dropdown here: */}
                                <div class="dropdown">
                                    <button class="drop-button">Select Category</button>
                                    <div id="categories" class="drop-categories">
                                        <p>funny</p>
                                        <p>cohort</p>
                                        <p>cartoon</p>
                                        <p>NSFW</p>
                                        <p>meme</p>

                                    </div>

                                </div>
                            </>
                })}
                <br />
                <input 
                    value={searchString} 
                    placeholder="Enter search parameter" 
                    onChange={(event) => setSearchString(event.target.value)}
                    />
                <br />
                <button onClick={() => searchGifs(searchString)}>Search for gifs!</button>
    
            </>
}

export default Search;