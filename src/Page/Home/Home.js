import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <h1 className="text-center text-8xl font-bold my-8 text-red-700">
                    Tic Tac Toe
                </h1>
                <div className="flex justify-center items-center mt-8">
                    <Link to="/game">
                        <button className="start-btn btn text-xl px-4 shadow-lg border-2">Start</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;