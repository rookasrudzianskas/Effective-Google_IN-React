import React from 'react';
import "./styles/SearchPage.css";
import {useStateValue} from "../StateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";

const SearchPage = () => {
    // getting data from data layer
    const [{ term }, dispatch] = useStateValue();
    // we call the hook google search to make the request, and we put the term, from the data layer here
    const {data} = useGoogleSearch(term);

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
