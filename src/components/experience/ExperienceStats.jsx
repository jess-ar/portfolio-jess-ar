const ExperienceStats = ({ experiences = [] }) => {
  const quests = experiences.length;

  const totalXP = experiences.reduce(
    (sum, e) => sum + (e.experiencePoints ?? 0),
    0
  );

  const TECH_ALIASES = {
    "nextjs": "next.js",
    "next js": "next.js",
    "reactjs": "react",
    "react.js": "react",
    "tailwind": "tailwind css",
    "tailwindcss": "tailwind css",
    "postgres": "postgresql",
    "vue.js": "vue",
    "vuejs": "vue",
    "type script": "typescript",
    "ts": "typescript",
  };
  const canon = (t) => {
    const raw = String(t || "").trim().toLowerCase().replace(/\s+/g, " ");
    return TECH_ALIASES[raw] || raw;
  };

  const uniqueTechs = new Set();
  for (const exp of experiences) {
    const perExp = new Set((exp.technologies ?? []).map(canon));
    for (const k of perExp) uniqueTechs.add(k);
  }
  const techCount = uniqueTechs.size;

  const cards = [
    {
      value: quests,
      label: "Quests Completed",
      bgColor: "bg-gradient-to-r from-stats-blue/10 to-stats-blue/5",
      borderColor: "border border-stats-blue/30",
      textColor: "text-stats-blue-light",
    },
    {
      value: techCount,
      label: "Technologies Mastered",
      bgColor: "bg-gradient-to-r from-yellow-500/10 to-yellow-500/5",
      borderColor: "border border-yellow-500/30",
      textColor: "text-yellow-400",
    },
    {
      value: totalXP.toLocaleString("en-US"),
      label: "Total Experience Points",
      bgColor: "bg-gradient-to-r from-muted/10 to-muted/5",
      borderColor: "border border-muted/30",
      textColor: "text-emerald-400",
    },
  ];

  const isOdd = cards.length % 2 === 1;

  return (
    <section
      className="mt-12 sm:mt-16 bg-gradient-to-r from-dark/70 via-secondary/70 to-dark/70 border border-terciary/20 rounded-xl p-4 sm:p-6 text-center md:mx-6"
      aria-labelledby="stats-title"
    >
      <h3
        id="stats-title"
        className="text-lg sm:text-xl font-bold text-primary mb-4 flex items-center justify-center flex-wrap gap-2"
      >
        <span aria-hidden="true">⭐</span>
        <span>Adventure Statistics</span>
        <span aria-hidden="true">⭐</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((stat, index) => {
          const isLast = index === cards.length - 1;
          const centerLast =
            isOdd && isLast ? "sm:col-span-2 sm:justify-self-center sm:w-1/2" : "";

          return (
            <div
              key={index}
              className={`${stat.bgColor} ${stat.borderColor} rounded-lg p-3 ${centerLast}`}
              role="group"
              aria-labelledby={`stat-${index}-value`}
            >
              <div
                id={`stat-${index}-value`}
                className={`text-xl sm:text-2xl font-bold ${stat.textColor} mb-1`}
                aria-label={`${stat.value} ${stat.label}`}
              >
                {stat.value}
              </div>
              <div className="text-primary text-xs sm:text-sm">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceStats;
