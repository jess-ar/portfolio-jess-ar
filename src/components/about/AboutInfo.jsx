import ProfileCard from "./ProfileCard";
import StatItem from "./StatItem";
import Divider from "./Divider";

function AboutInfo() {
    const stats = [
        { label: "Strength", value: 64, borderColor: "stats-yellow" },
        { label: "Magic", value: 65, borderColor: "stats-yellow" },
        { label: "Defense", value: 55, borderColor: "stats-yellow" },
        { label: "Luck", value: 6, borderColor: "stats-yellow" },
        { label: "EXP", value: 66709, borderColor: "stats-green" },
        { label: "Next Level", value: 1090, borderColor: "stats-green" },
    ];

    return (
        <div className="mx-auto w-full md:max-w-[900px] bg-gradient-to-b from-stats-blue via-black to-stats-blue p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:gap-4">
                <ProfileCard />
                    <div className="space-y-3 flex flex-col items-center md:items-start mt-20">
                    {stats.map((stat, index) => (
                        <>
                            <StatItem
                                key={stat.label}
                                label={stat.label}
                                value={stat.value}
                                borderColor={stat.borderColor}
                            />
                            {index === 3 && <Divider />}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutInfo;