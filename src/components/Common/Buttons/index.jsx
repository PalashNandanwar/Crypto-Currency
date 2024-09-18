/* eslint-disable react/prop-types */
// import React from 'react'

const Button = ({ clas, text, onClick }) => {
    return (
        <button className={clas} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;