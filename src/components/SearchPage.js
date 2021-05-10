import React from 'react';
import "./styles/SearchPage.css";
import {useStateValue} from "../StateProvider";

const SearchPage = () => {
    // getting data from data layer
    const [{ term }, dispatch] = useStateValue();
    // we get an api key from here
    //https://developers.google.com/custom-search/v1/using_rest
    // we register the search to search worldwide here
    //https://cse.google.com/cse/create/new
    //41d3eac0d47fdca20
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <h1>{term}</h1>

            </div>

            <div className="searchPage__results">

            </div>
        </div>
    );
};

export default SearchPage;
