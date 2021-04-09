import React from 'react';
import './Home.css';
import Banner from './Banner'



const Home = (props) => {
    const { search, onInputChange, onSearchClick } = props;

    return (

        <div className='home'>
            <Banner />
        </div>
    )
}

export default Home
