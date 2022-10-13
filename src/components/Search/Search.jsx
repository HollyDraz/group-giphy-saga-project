import axios from 'axios';
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import for drop downs
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Category, ConnectWithoutContactRounded } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';


const Search = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('');
    const [category, setCategory] = useState('');
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
   

    const favoriteButton = (gifURL, category) =>{
        console.log('in favoritebtn', gifURL, category);
        axios({
            method: 'POST',
            url: '/api/favorite',
            data: {
                gif: gifURL,
                category: category,
            }
        }).then((response) => {
            alert('Gif has been added')
            console.log(response);
        }).catch(error => {
            console.log('error in favoriteButton', error)
        });
    }

    const favoriteListButton = () => {
        history.push(`/favorites`);
    }

    useEffect(() => {
        console.log('page load');    
    }, []);

    return  <>
                    <input 
                    value={searchString} 
                    placeholder="Enter search parameter" 
                    onChange={(event) => setSearchString(event.target.value)}
                    />
                <br />
                <button onClick={() => searchGifs(searchString)}>Search for gifs!</button>
                <Button onClick={() => favoriteListButton()}>Favorite List</Button>
                {seachResults.map(gif => {
                    return  <>
                    <div>
                            <Card variant="outlined">
                                <CardMedia>
                                <img src={gif.images.fixed_height.url}/>
                                </CardMedia>
                                <CardActions>
                                <Button onClick={() => favoriteButton(gif.images.fixed_height.url, category)} variant="contained">Favorite</Button>
                                
                                {/* dropdown here: */}
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <Select
                                      labelId="category-select"
                                      id="categories"
                                      value={Category}
                                      label="Category"
                                    >
                                        
                                     <MenuItem value="">
                                        <em>None</em>
                                        <MenuItem value={1} onClick={(e) => {setCategory(e.target.value)}}>Funny</MenuItem>
                                        <MenuItem value={2} onClick={(e) => {setCategory(e.target.value)}}>Cohort</MenuItem>
                                        <MenuItem value={3} onClick={(e) => {setCategory(e.target.value)}}>Cartoon</MenuItem>
                                        <MenuItem value={4} onClick={(e) => {setCategory(e.target.value)}}>NSFW</MenuItem>
                                        <MenuItem value={5} onClick={(e) => {setCategory(e.target.value)}}> Meme</MenuItem>
                                        </MenuItem>   
                                    </Select>
                                </FormControl>
                                </CardActions>
                                </Card>
                            </div>
                            </>
                })}
            </>
}

export default Search;