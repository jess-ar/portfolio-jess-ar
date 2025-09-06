"use client"
import TechBadge from "./TechBadge"
import ProjectLink from "./ProjectLink"
import ExperienceSection from "./ExperienceSection"
import ProgressBar from "./ProgressBar"
import { xpToLevel, xpToProgress } from "@/utils/levels"

const ExperienceCard = ({ experience, index, isVisible, onMouseEnter, onMouseLeave, isActive }) => {
  const {
    id,
    company,
    role,
    description,
    technologies,
    achievements,
    emblem,
    magicType,
    experiencePoints,
    duration,
    links,
  } = experience

  const xp = experiencePoints ?? 0
  const computedLevel = xpToLevel(xp)
  const progressPct = xpToProgress(xp)

  return (
    <article
      className={`group relative bg-gradient-to-br from-dark/90 via-dark/95 to-secondary/80 border border-terciary/20 rounded-xl p-4 sm:p-5 shadow-xl hover:border-accent/40 transition-all duration-300 transform max-w-xl mx-auto w-full  ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        boxShadow: "0 8px 25px rgba(14, 135, 205, 0.15)",
      }}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave(null)}
      aria-labelledby={`experience-${id}-title`}
      tabIndex="0"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-terciary/5 via-accent/5 to-terciary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 relative z-10 gap-3 sm:gap-0">
        <div className="flex items-center">
          <div className="text-xl sm:text-2xl mr-3 filter drop-shadow-sm" aria-hidden="true">
            {emblem}
          </div>
          <div className="min-w-0 flex-1">
            <h3 id={`experience-${id}-title`} className="text-lg sm:text-xl font-bold text-primary mb-1 truncate">
              {company}
            </h3>
            <p className="text-accent font-medium text-sm">{role}</p>
            <p className="text-terciary/80 text-xs">{duration}</p>
          </div>
        </div>

        <div
          className="bg-gradient-to-r from-accent to-stats-yellow text-dark font-bold text-sm px-3 py-1 rounded-full border-2 border-primary/20 shadow-sm flex-shrink-0 self-start"
          role="status"
          aria-label={`Level ${computedLevel}`}
        >
          Lv.{computedLevel}
        </div>
      </header>

      <div className="bg-terciary/10 border border-terciary/20 rounded-lg p-3 mb-4 relative z-10">
        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-0 text-sm">
          <span className="text-primary font-medium flex items-center">
            <span aria-hidden="true">✨</span>
            <span className="ml-1">{magicType}</span>
          </span>
          <span className="text-accent font-semibold" aria-label={`${experiencePoints} experience points`}>
            {xp} XP
          </span>
        </div>
      </div>

      <p className="text-stats-grey text-sm mb-4 leading-relaxed relative z-10">{description}</p>

      <ExperienceSection title="Key Achievements" icon="🏆" iconColor="text-accent" ariaLabel="achievements">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="flex items-center text-xs" role="listitem">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 animate-pulse flex-shrink-0" aria-hidden="true" />
              <span className="text-stats-grey">{achievement}</span>
            </div>
          ))}
        </div>
      </ExperienceSection>

      <ExperienceSection title="Tech Stack" icon="⚡" iconColor="text-terciary" ariaLabel="technologies">
        <div className="flex flex-wrap" role="list">
          {technologies.map((tech, idx) => (
            <TechBadge key={idx} tech={tech} />
          ))}
        </div>
      </ExperienceSection>

      {links && links.length > 0 && (
        <ExperienceSection title="Key Projects" icon="🔗" iconColor="text-stats-blue">
          <div className="space-y-2">
            {links.map((link, idx) => (
              <ProjectLink key={idx} link={link} index={idx} />
            ))}
          </div>
        </ExperienceSection>
      )}

      <ProgressBar value={progressPct} label="Progress to next Lv." />

      {isActive && (
        <div className="absolute inset-0 pointer-events-none z-5" aria-hidden="true">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-terciary rounded-full animate-ping"
              style={{
                top: `${50 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 300}ms`,
                animationDuration: "1.5s",
              }}
            />
          ))}
        </div>
      )}
    </article>
  )
}

export default ExperienceCard;
