import React from 'react';
import Banner from '../Banner/Banner';
import Features from './Features';
import Features1 from './Features1';
import './home.css';
// import Sidebar from '../../components/sidebar/Sidebar';
// import Feed from '../../components/feed/Feed';
// import Rightbar from '../../components/rightbar/Rightbar';

const Home = () => {
    return (
        <>
            <Banner/>
            <Features/>
            <Features1/>
        </>
    );
};

export default Home;