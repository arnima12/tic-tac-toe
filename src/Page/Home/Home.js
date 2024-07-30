import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <h1 className="text-center text-6xl font-bold my-8 ">
                    Tic Tac Toe
                </h1>
                <div className="flex justify-center items-center mt-8">
                    <Link to="/game">
                        <button className="btn btn-active btn-ghost text-xl px-4">Start</button></Link>
                </div>
            </div>
            <div className="emoji">
                <div>&#128514;</div>
                <div>&#128515;</div>
                <div>&#128512;</div>
                <div>&#128513;</div>
                <div>&#128515;</div>
                <div>&#128512;</div>
                <div>&#128516;</div>
                <div>&#128517;</div>
                <div>&#128514;</div>
                <div>&#128513;</div>
                <div>&#128513;</div>
                <div>&#128513;</div>
                <div>&#128513;</div>
                <div>&#128513;</div>
            </div>
        </div>
    );
};

export default Home;