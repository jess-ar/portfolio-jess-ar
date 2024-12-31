const Button = ({ text = "Click me", onClick }) => {
    return (
        <div className="btn">
            <button 
                className='border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#0B1223,#0087CD)] 
                p-3 md:p-4 lg:p-4 text-sm md:text-base lg:text-lg rounded-xl'
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;
