import clsx from "clsx";

function StatItem({ label, value, borderColor }) {
    return (
        <div
            className={clsx(
                "relative flex justify-between items-center bg-black rounded-xl border-2 px-4 py-1",
                "w-[270px] h-[29px] md:w-[380px] md:h-[40px] group",
                `border-${borderColor}` // Esto asegura que Tailwind compile correctamente
            )}
        >
            <span className="text-white font-bold">{label}</span>
            <span className="text-white font-bold">{value}</span>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">Coming Soon</span>
            </div>
        </div>
    );
}

export default StatItem;