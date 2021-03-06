import React, {useState} from 'react';
import "./styles/Search.css";
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

// by default it is false
const Search = ({ hideButtons  = false }) => {
    // accessing data layer
    const [{}, dispatch] = useStateValue();

    // track all the input in search field
    const [input, setInput] = useState('');
    // this one tracks the history, in what we click in our app
    const history = useHistory()
    // console.log(input)
    // the search function fires up!
    const search = e => {
        e.preventDefault();
        console.log("You hit the search button", input);

        dispatch({
            // defining the type
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        // some input stuff here
        // we are redirecting it to the search page straight after he submits the form
        history.push('/search')

        setInput('');
    };

    return (
        // we change div to the form and the button to search as the type submit, so this will get the enter functionality
        <form className="search">
            <div className="search__input">
                <SearchIcon onClick={search}  className="search__inputIcon" />
                <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon className="search__inputIcon" />

            </div>

                {/* if we do not pass the buttons to render out prop, so we render the buttons, otherwise we do not show the buttons :*/}
                {!hideButtons ? (
                    // we show the buttons
                    <div className="search__buttons">
                        {/* type submit, refers to the form, and fires the search function from enter or from button press*/}
                    <Button type="submit" onClick={search} variant="outlined">Rokas Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                        </div>
                ): (
                        // we do not show the buttons
                        <div className="search__buttons">
                            {/* type submit, refers to the form, and fires the search function from enter or from button press*/}
                    <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Rokas Search</Button>
                    <Button className="search__buttonsHidden"  variant="outlined">I'm Feeling Lucky</Button>
                        </div>
                    )}

            
        </form>
    );
};

export default Search;
