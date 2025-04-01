import { useState } from "react";
import projectsData from "@/data/projectsData";
import ProjectCard from "@/components/projects/ProjectCard";
import { GradientButton } from "@/components/common/GradientButton";

function Projects() {
  const [category, setCategory] = useState(1);
  const selectedCategory = projectsData.categories.find((cat) => cat.id === category);

  const trackClick = ({ action, category, label }) => {
    window.gtag?.("event", action, {
      event_category: category,
      event_label: label,
    });
  };

  return (
    <section id="projects" className="bg-[#171717] text-white pt-16 pb-2">
      <div className="max-w-screen-lg mx-auto pt-10 px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-3xl font-bold mb-8">
          Projects
          <p className="text-gray-400 mb-4 text-sm md:text-base mt-4 text-left font-normal">
            I enjoy exploring all layers of development, but thanks to my background in graphic design,
            where I truly shine is in frontend. I work with technologies like React, Tailwind CSS, JavaScript,
            Python, PostgreSQL, and Figma, always prioritizing accessibility and user experience. If you're
            looking for someone who combines creativity, technical skills, and attention to detail, you're
            in the right place.
          </p>
        </h2>
        <div className="flex flex-wrap justify-center gap-1 md:gap-4 mb-6 md:mb-10">
          {projectsData.categories.map((cat) => (
            <GradientButton
              key={cat.id}
              onClick={() => {
                setCategory(cat.id);
                trackClick({
                  action: "select_project_category",
                  category: "Projects",
                  label: cat.name,
                });
              }}
              variant={category === cat.id ? "default" : "neutral"}
            >
              {cat.name}
            </GradientButton>
          ))}
        </div>
        <div className="grid gap-10">
          {selectedCategory.data.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              img={project.img}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
