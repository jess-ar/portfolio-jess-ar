
function StatItem({ label, value, borderColor }) {
    return (
        <div
            className={`flex justify-between items-center bg-black rounded-full border-2 border-${borderColor} px-4 py-1 
                        w-[270px] h-[29px] md:w-[380px] md:h-[40px]`}
        >
            <span className="text-white font-bold">{label}</span>
            <span className="text-white font-bold">{value}</span>
        </div>
    );
}

export default StatItem;