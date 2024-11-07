import React from 'react'

const Button = ({ text = "Click me", onClick }) => {
    return (
        <div className="btn py-3">
            <button 
                className='border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#6cd2da,#456896)] p-4 rounded-2xl'
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;