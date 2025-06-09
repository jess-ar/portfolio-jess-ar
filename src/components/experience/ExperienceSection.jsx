const ExperienceSection = ({ title, icon, iconColor, children, ariaLabel }) => (
  <div className="mb-4 relative z-10">
    <h4
      className="text-primary font-semibold text-sm mb-2 flex items-center"
      id={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <span className={`${iconColor} mr-1 text-xs`} aria-hidden="true">
        {icon}
      </span>
      {title}
    </h4>
    <div
      role={ariaLabel ? "list" : undefined}
      aria-labelledby={ariaLabel ? `section-${title.toLowerCase().replace(/\s+/g, "-")}` : undefined}
    >
      {children}
    </div>
  </div>
)

export default ExperienceSection;
