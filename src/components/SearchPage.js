import React from 'react';
import "./styles/SearchPage.css";
import {useStateValue} from "../StateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";
import Response from "../response";
import {Link} from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import {DescriptionOutlined, LocalOffer} from "@material-ui/icons";
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const SearchPage = () => {
    // getting data from data layer
    const [{ term="tesla" }, dispatch] = useStateValue();
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
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>

                            <div className="searchPage__option">
                                <DescriptionOutlined />
                                <Link to="/news">News</Link>
                            </div>

                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>

                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>

                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>

                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">more</Link>
                            </div>
                        </div>

                    <div className="searchPage__optionsRight">
                        <div className="searchPage__option">
                            <Link to="/settings">Settings</Link>
                        </div>

                        <div className="searchPage__option">
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {true && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        {/* ig gives thsese numbers in the object*/}
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a href={item.link}>
                                {item.displayLink} 🔻
                            </a>

                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default SearchPage;
