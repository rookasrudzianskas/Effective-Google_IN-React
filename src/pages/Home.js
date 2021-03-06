import React from 'react';
import "./Home.css";
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar, IconButton} from "@material-ui/core";
import Search from "../components/Search";

const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    {/*Links in the top to different pages*/}
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>

                </div>

                <div className="home__headerRight">
                    {/* Links to the different pages*/}
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <IconButton><AppsIcon /></IconButton>
                {/*    ICon */}
                    <IconButton><Avatar /></IconButton>
                {/*    Avatar */}
                </div>

            </div>

            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />

                <div className="home__inputContainer">
                {/*    Search component     */}
                    <Search />
                </div>
            </div>

        </div>
    );
};

export default Home;
