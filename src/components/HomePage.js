import './HomePage.css'
import React from 'react';
import SearchBar from './SearchBar';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="ui container">
                <SearchBar />
            </div>
        </div>
    );
};

export default HomePage;