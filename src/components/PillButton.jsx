import React from "react";

const PillButton = ({ text, onClick, ariaLabel, target }) => {
    return (
        <button
        type="button"
        aria-label={ariaLabel || text}
        onClick={onClick}
        target={target}
        className={`font-montserrat relative inline-flex items-center px-5 py-2 rounded-full border border-white bg-transparent text-white overflow-hidden transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black`}
        >
        <span className="absolute inset-0 bg-black opacity-0 pointer-events-none transition-opacity duration-200 hover:opacity-5"></span>
        <span className="relative z-10 select-none text-sm font-medium">{text}</span>
        </button>
    );
};

export default PillButton;
