import ProfileCard from "@/components/about/ProfileCard";
import StatItem from "@/components/about/StatItem";
import Divider from "@/components/about/Divider";

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
    <div className="relative p-8 shadow-lg bg-detail-about bg-cover bg-center mt-20">
      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
        <ProfileCard />
        <div className="w-full md:w-2/3 space-y-4">
          {stats.map((stat, index) => (
            <div key={stat.label}>
              <StatItem
                label={stat.label}
                value={stat.value}
                borderColor={stat.borderColor}
              />
              {index === 3 && <Divider />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
