import axios from 'axios';
import {useEffect, useState} from 'react';
//import for drop downs
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

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
                            
                                <Button variant="contained">Favorite</Button>
                                {/* dropdown here: */}
                                <div className="dropdown">
                                    <Button variant="contained" className="drop-button">Select Category</Button>
                                    <div id="categories" className="drop-categories">
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