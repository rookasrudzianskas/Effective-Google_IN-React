import React, {useState} from 'react';
import "./styles/Search.css";
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";

const Search = () => {

    // track all the input in search field
    const [input, setInput] = useState('');
    // console.log(input)
    // the search function fires up!
    const search = e => {
        e.preventDefault();
        console.log("You hit the search button", input)
        // some input stuff here
        setInput('');
    };

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon onClick={search}  className="search__inputIcon" />
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon className="search__inputIcon" />

            </div>

            <div className="search__buttons">
                <Button type="submit" onClick={search} variant="outlined">Rokas Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
            
        </form>
    );
};

export default Search;
