const TechBadge = ({ tech }) => (
  <span
    className="inline-block bg-dark/60 border border-terciary/30 text-stats-grey text-xs font-medium px-2 py-1 rounded-full mr-2 mb-1 hover:border-accent/50 hover:text-primary transition-all duration-200"
    role="listitem"
    aria-label={`Technology: ${tech}`}
  >
    {tech}
  </span>
)

export default TechBadge;
