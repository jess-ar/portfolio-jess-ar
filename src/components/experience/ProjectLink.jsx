"use client"

const ProjectLink = ({ link, index }) => (
  <div className="group/link relative">
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-dark/40 border border-terciary/20 rounded-lg p-3 group-hover/link:border-accent/60 group-hover/link:bg-dark/70 group-hover/link:shadow-lg transition-all duration-200 cursor-pointer relative z-30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/60"
      onClick={(e) => e.stopPropagation()}
      aria-label={`Visit ${link.title} - ${link.description}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-primary font-medium text-sm group-hover/link:text-accent transition-colors duration-200">
          {link.title}
        </span>
        <span
          className="text-accent text-xs group-hover/link:text-stats-yellow transition-colors duration-200"
          aria-hidden="true"
        >
          Visit ↗
        </span>
      </div>
      <p className="text-stats-grey text-xs mt-1 group-hover/link:text-primary/80 transition-colors duration-200">
        {link.description}
      </p>
    </a>
  </div>
)

export default ProjectLink;
