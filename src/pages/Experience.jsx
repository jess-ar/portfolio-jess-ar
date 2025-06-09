"use client"

import { useState, useEffect } from "react"
import ExperienceCard from "@/components/experience/ExperienceCard"
import ExperienceStats from "@/components/experience/ExperienceStats"

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("experience")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      id: 1,
      company: "SheHub",
      role: "Jr Frontend Web Developer",
      level: 54,
      description: "Frontend Developer and Development Coordinator | Drive women’s participation in technology by managing real-world projects and ensuring valuable deliverables.",
      technologies: ["React", "Tailwind CSS", "Figma"],
      achievements: ["MVP Leadership", "Team Coordination", "Code Review", "Best Practices"],
      emblem: "⚔️",
      magicType: "Creation Magic",
      experiencePoints: 2500,
      duration: "Oct 2024 - Present",
      links: [
        {
          url: "https://shehub.es",
          title: "SheHub Website",
          description: "The project started with a vibe coding approach, generating parts of the code through AI prompts. Later on, everything was customized, reviewed, and adapted to fit the real needs of the SheHub team. ",
        },
      ],
    },
    {
      id: 2,
      company: "SquareMX",
      role: "Jr Full Stack Web Developer & UI Designer",
      level: 78,
      description:
        "Email marketing in Symfony, Astro refactor, API integration, and modular dashboard in Vue and Vuetify.",
      technologies: ["PHP", "Symfony", "PostgreSQL", "Astro", "Vue", "Vuetify"],
      achievements: ["Email Marketing", "Astro Refactoring", "API Integration", "UX/UI Design"],
      emblem: "🗡️",
      magicType: "Transformation Magic",
      experiencePoints: 2200,
      duration: "Feb 2025 - Mar 2025 (3 months)",
      links: [
        {
          url: "https://dealfactor.co.uk/",
          title: "DealFactor",
          description: " Refactoring in Astro: Redesign and Cleanup of legacy code, folder reorganization, and migration from plain CSS to Tailwind CSS. Improved accessibility, responsive design, and integration with external API (Mailxpertise).",
        },
      ],
    },
  ]

  const stats = [
    {
      value: "2",
      label: "Quests Completed",
      bgColor: "bg-terciary/10",
      borderColor: "border border-terciary/30",
      textColor: "text-terciary",
    },
    {
      value: "5+",
      label: "Technologies Mastered",
      bgColor: "bg-accent/10",
      borderColor: "border border-accent/30",
      textColor: "text-accent",
    },
    {
      value: "4700",
      label: "Total Experience Points",
      bgColor: "bg-stats-green/10",
      borderColor: "border border-stats-green/30",
      textColor: "text-stats-green",
    },
  ]

  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-br from-dark via-secondary to-dark py-12 sm:py-16 px-4 relative overflow-hidden"
      aria-labelledby="experience-title"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-1/3 left-1/5 w-32 h-32 sm:w-48 sm:h-48 bg-terciary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/5 w-40 h-40 sm:w-64 sm:h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-gradient-to-r from-terciary to-accent bg-clip-text text-transparent mb-3">
            <h2 id="experience-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-12">
              ⚔️ Quest Chronicles ⚔️
            </h2>
          </div>
          <p className="text-stats-grey text-base sm:text-lg max-w-xl mx-auto px-4">
            Journey through development realms, where each quest forged new skills and unlocked powerful abilities.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-6" aria-hidden="true">
            <div className="h-px bg-gradient-to-r from-transparent via-terciary/60 to-transparent w-20 sm:w-32" />
            <img
              src="/images/crown.png"
              alt=""
              className="mx-3 h-6 w-6 object-contain"
              aria-hidden="true"
            />
            <div className="h-px bg-gradient-to-r from-transparent via-terciary/60 to-transparent w-20 sm:w-32" />
          </div>

        </header>

        {/* Experience Cards */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isVisible={isVisible}
              onMouseEnter={setActiveExperience}
              onMouseLeave={setActiveExperience}
              isActive={activeExperience === exp.id}
            />
          ))}
        </main>

        {/* Stats Summary */}
        <ExperienceStats stats={stats} />
      </div>
    </section>
  )
}

export default Experience;
