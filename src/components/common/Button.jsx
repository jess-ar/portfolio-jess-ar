const Button = ({ text = "Click me", onClick }) => {
    return (
        <div className="btn">
            <button 
                className='border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#6cd2da,#456896)] 
                p-3 md:p-4 lg:p-4 text-sm md:text-base lg:text-lg rounded-xl'
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;
