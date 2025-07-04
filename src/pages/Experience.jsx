"use client"

import { useState, useEffect } from "react"
import ExperienceCard from "@/components/experience/ExperienceCard"
import ExperienceStats from "@/components/experience/ExperienceStats"
import experiences from "@/data/experiences.json"
import stats from "@/data/experienceStats.json"

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

  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-br from-dark via-secondary to-dark py-12 sm:py-16 px-4 relative overflow-hidden"
      aria-labelledby="experience-title"
    >
      <div className="max-w-5xl mx-auto absolute inset-0 opacity-10 px-6" aria-hidden="true">
        <div className="absolute top-1/3 left-1/5 w-32 h-32 sm:w-48 sm:h-48 bg-terciary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/5 w-40 h-40 sm:w-64 sm:h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-gradient-to-r from-terciary to-accent bg-clip-text text-transparent mb-3">
            <h2 id="experience-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-12">
              ⚔️ Quest Journal ⚔️
            </h2>
          </div>
          <p className="text-stats-grey text-base sm:text-lg max-w-xl mx-auto px-4">
            Journey through development realms, where each quest forged new skills and unlocked powerful abilities.
          </p>

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

        <ExperienceStats stats={stats} />
      </div>
    </section>
  )
}

export default Experience;
