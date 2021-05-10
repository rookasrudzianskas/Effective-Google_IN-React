import React from 'react';
import "./styles/SearchPage.css";
import {useStateValue} from "../StateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";
import Response from "../response";
import {Link} from "react-router-dom";
import Search from "./Search";

const SearchPage = () => {
    // getting data from data layer
    const [{ term }, dispatch] = useStateValue();
    // we call the hook google search to make the request, and we put the term, from the data layer here
    // and returns all the data about that term
    // const {data} = useGoogleSearch(term); /// Live API call
    // getting data from the response object
    const data = Response;
    // converting to the object
    JSON.stringify(data)
    console.log(data);
    // we get an api key from here
    //https://developers.google.com/custom-search/v1/using_rest

    // we register the search to search worldwide here
    //https://cse.google.com/cse/create/new
    //41d3eac0d47fdca20
    //logging the data we have received
    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
                </Link>

                <div className="searchPage__headerBody">
                    <Search hideButtons />

                    <div className="searchPage__options">

                    </div>
                </div>
            </div>

            <div className="searchPage__results">

            </div>
        </div>
    );
};

export default SearchPage;
