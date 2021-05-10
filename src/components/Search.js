import React from 'react';
import "./styles/Search.css";
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";

const Search = () => {
    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon />
                <input type="text"/>
                <MicIcon />

            </div>
            
        </div>
    );
};

export default Search;
