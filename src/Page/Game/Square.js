import React from 'react';

const Square = (props) => {
    return (
        <div className="square border-2 w-24 h-24 flex justify-center items-center" onClick={props.onClick}>
            <div className="text-2xl">{props.value}</div>
        </div>
    );
};

export default Square;