import axios from 'axios';
import {useEffect, useState} from 'react';
//import for drop downs
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Category } from '@mui/icons-material';
import Card from '@mui/material/Card';

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
                            <Card>
                                <img src={gif.images.fixed_height.url}/>
                            
                                <Button variant="contained">Favorite</Button>
                                {/* dropdown here: */}
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <Select
                                      labelId="category-select"
                                      id="categories"
                                      value={Category}
                                      label="Category"
                                    //   onChange={handleChange}
                                    >
                                     <MenuItem value="">
                                        <em>None</em>
                                        <MenuItem value={'funny'}>Funny</MenuItem>
                                        <MenuItem value={'cohort'}>Cohort</MenuItem>
                                        <MenuItem value={'cartoon'}>Cartoon</MenuItem>
                                        <MenuItem value={'nsfw'}>NSFW</MenuItem>
                                        <MenuItem value={'meme'}> Meme</MenuItem>
                                        </MenuItem>   
                                    </Select>
                                </FormControl>
                                </Card>
                 
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