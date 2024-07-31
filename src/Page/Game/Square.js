import React from 'react';

const Square = (props) => {
    return (
        <div className="square border-4 border-yellow-500 xl:w-36 xl:h-36 md:w-24 md:h-24 w-12 h-12 flex justify-center items-center" onClick={props.onClick}>
            <div className="text-4xl text-black">{props.value}</div>
        </div>
    );
};

export default Square;