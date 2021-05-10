import React, {useState} from 'react';
import "./styles/Search.css";
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";

const Search = () => {

    const [input, setInput] = useState();
    // the search function fires up!
    const search = e => {
        e.preventDefault();
    };

    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text"/>
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
