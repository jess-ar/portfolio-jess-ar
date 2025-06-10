const ExperienceStats = ({ stats }) => (
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} ${stat.borderColor} rounded-lg p-3`}
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
      ))}
    </div>
  </section>
)

export default ExperienceStats;
