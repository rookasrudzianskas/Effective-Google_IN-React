import React, {useState} from 'react';
import "./styles/Search.css";
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";

const Search = () => {

    // track all the input in search field
    const [input, setInput] = useState('');
    console.log(input)
    // the search function fires up!
    const search = e => {
        e.preventDefault();
    };

    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon className="search__inputIcon" />

            </div>

            <div className="search__buttons">
                <Button onClick={search} variant="outlined">Rokas Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
            
        </div>
    );
};

export default Search;
