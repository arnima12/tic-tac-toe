import React, { useState, useEffect } from 'react';
import Square from './Square';
import music from "../../assets/small-crowd-applause-3-90536.mp3";
import win from "../../assets/win.png";
import './Game.css'
import { Link } from 'react-router-dom';
import monkey from "../../assets/monkey-removebg-preview.png";
import tiger from "../../assets/tiger-removebg-preview.png";
const Game = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [xTurn, setXTurn] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [draw, setDraw] = useState(false);

    useEffect(() => {
        if (checkWinner() || checkDraw()) {
            setGameOver(true);
        }
    }, [state]);

    const handleSquare = (index) => {
        if (state[index] !== null || gameOver) {
            return;
        }
        const newState = [...state];
        newState[index] = xTurn ? "X" : "O";
        setState(newState);
        setXTurn(!xTurn);
    }

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return null;
    }

    const checkDraw = () => {
        if (state.every(square => square !== null) && !checkWinner()) {
            setDraw(true);
            return true;
        }
        return false;
    }

    const handleReset = () => {
        setState(Array(9).fill(null));
        setXTurn(true);
        setGameOver(false);
        setDraw(false);
    }

    const isWinner = checkWinner();

    return (
        <div className="main-wrapper">
            <div className="game-wrapper text-center mt-8">
                {gameOver ? (
                    <div>
                        {isWinner ? (
                            <>
                                <audio autoPlay>
                                    <source src={music} type="audio/mp3" />
                                </audio>
                                <p className="text-4xl text-black">{isWinner} won the game</p>
                                <div className="flex justify-center mt-8">
                                    <img src={win} alt="Won" />
                                </div>
                            </>
                        ) : draw ? (
                            <p className="text-4xl text-black">It's a draw!</p>
                        ) : null}
                        <button className="back-home-btn btn mt-8 text-white" onClick={handleReset}>Play Again</button>
                    </div>
                ) : (
                    <>
                        <div className="text-3xl text-black mb-4 animate-bounce">
                            Player {xTurn ? "X" : "O"} move
                        </div>
                        <div className="board-container w-full flex flex-col justify-center items-center">
                            <div className="board-row flex items-center">
                                <Square value={state[0]} onClick={() => handleSquare(0)} />
                                <Square value={state[1]} onClick={() => handleSquare(1)} />
                                <Square value={state[2]} onClick={() => handleSquare(2)} />
                            </div>
                            <div className="board-row flex items-center">
                                <Square value={state[3]} onClick={() => handleSquare(3)} />
                                <Square value={state[4]} onClick={() => handleSquare(4)} />
                                <Square value={state[5]} onClick={() => handleSquare(5)} />
                            </div>
                            <div className="board-row flex items-center">
                                <Square value={state[6]} onClick={() => handleSquare(6)} />
                                <Square value={state[7]} onClick={() => handleSquare(7)} />
                                <Square value={state[8]} onClick={() => handleSquare(8)} />
                            </div>
                        </div>
                        <Link to="/"><button className="back-home-btn btn mt-8 text-white">Back to Home</button></Link>
                    </>
                )}

            </div>
            <div className="game-content">
                <div>
                    <img src={monkey} alt="" className="w-[20rem]" />
                </div>
                <div>
                    <img src={tiger} alt="" className="w-[40rem] h-[30rem]" />
                </div>
            </div>
        </div>

    );
};

export default Game;
