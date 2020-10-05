import React from 'react';
import './css/Header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header(){
        return(
           <header className="header">
            <div className="header__icons">
            <div className="header__icon">
                <HomeIcon/><br/>
                <p>Home</p>
            </div>
            <div className="header__icon">
                <PersonOutlineIcon/>
                <p>Account</p>
            </div>
            <div className="header__icon">
                <SearchIcon/>
                <p>Search</p>
            </div>
            <div className="header__icon">
                <LiveTvIcon/>
                <p>Verified</p>
            </div>
            <div className="header__icon">
                <VideoLibraryIcon/>
                <p>Play</p>
            </div>
            <div className="header__icon">
                <FlashOnIcon/>
                <p>Trending</p>
            </div>
            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
            className="" alt="hulu clone "/>
           </header>
    )
}

export default Header;