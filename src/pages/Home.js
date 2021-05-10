import React from 'react';
import "./Home.css";
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

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
                    <AppsIcon />
                {/*    ICon */}
                    <Avatar />
                {/*    Avatar */}
                </div>

            </div>

            <div className="home__body">

            </div>

        </div>
    );
};

export default Home;
