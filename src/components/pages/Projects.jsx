import { useState } from "react";
import img1 from "@/assets/images/project-img1.png";
import img2 from "@/assets/images/project-img2.png";
import img3 from "@/assets/images/project-img3.png";
import img4 from "@/assets/images/project-img4.png";
import img5 from "@/assets/images/project-img5.png";
import img6 from "@/assets/images/project-img6.png";
import img7 from "@/assets/images/project-img7.png";
import img8 from "@/assets/images/project-img8.png";
import img9 from "@/assets/images/project-img9.png";
import ProjectCard from "@/components/projects/ProjectCard";

function Projects() {
  const [category, setCategory] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Pair Connect",
      description:
        "A platform designed and developed as a team to connect developers for collaborative programming sessions based on skills and preferences. We created a modern, responsive design focused on user experience. The project followed agile methodologies like Scrum, managed tasks with Jira, and implemented Gitflow for efficient version control.",
      img: img1,
      technologies: ["Figma", "React", "Tailwind CSS", "Python", "Django", "PostgreSQL"],
      links: { live: "https://pair-connect.netlify.app/", code: "https://github.com/jess-ar/pair_connect_front/tree/main" },
    },
    {
      id: 2,
      title: "Marvel & DC",
      description: " Is an interactive platform that I designed and developed, where users can explore popular characters and teams from the Marvel and DC universes. The project offers features such as advanced character search and the ability to perform CRUD actions to manage the characters.",
      img: img2,
      technologies: ["Figma", "React", "Tailwind CSS", "Python", "Django", "PostgreSQL", "Superhero API"],
      links: { live: "https://www.marvel-and-dc-ultimate-guide.com", code: "https://github.com/jess-ar/marvel-dc-ultimate-guide-frontend/tree/main" },
    },
  ];

  const hackathonProjects = [
    {
      id: 3,
      title: "Dermatech",
      description: "Design & Development. Hackathon submission.",
      img: img5,
      technologies: ["Figma", "React", "API Integration"],
      links: { live: "#", code: "#" },
    },
    {
      id: 4,
      title: "Sequiatron",
      description: "Design & Development. Hackathon submission.",
      img: img6,
      technologies: ["Figma", "React", "Tailwind CSS"],
      links: { live: "#", code: "#" },
    },
    {
      id: 5,
      title: "Barris Vius",
      description: "Design & Development. Hackathon submission.",
      img: img3,
      technologies: ["Figma", "React", "Tailwind CSS"],
      links: { live: "#", code: "#" },
    },
    {
      id: 6,
      title: "La Caixa",
      description: "Design & Development.Hackathon submission.",
      img: img4,
      technologies: ["React", "Material UI"],
      links: { live: "#", code: "#" },
    },
  ];

  const bootcampProjects = [
    {
      id: 7,
      title: "Piedra, papel o tijera",
      description: "Design & Development. Bootcamp project.",
      img: img7,
      technologies: ["Figma", "Javascript", "Saas"],
      links: { live: "#", code: "#" },
    },
    {
      id: 8,
      title: "Kamakura Food",
      description: "Development. Food ordering system.",
      img: img8,
      technologies: ["Javascript", "CSS"],
      links: { live: "#", code: "#" },
    },
    {
      id: 9,
      title: "Covid Tracker",
      description: "Development. COVID data tracker.",
      img: img9,
      technologies: ["React", "Tailwind CSS", "Shadcn"],
      links: { live: "#", code: "#" },
    },
  ];

  const categories = [
    { id: 1, name: "Highlights", data: projects },
    { id: 2, name: "Hackathons", data: hackathonProjects },
    { id: 3, name: "Bootcamp", data: bootcampProjects },
  ];

  const selectedCategory = categories.find((cat) => cat.id === category);

  return (
    <section id="projects" className="bg-[#171717] text-white pt-16 pb-2">
      <div className="max-w-screen-lg mx-auto pt-10 px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-3xl font-bold mb-8">
          Projects
          <p className="text-gray-400 mb-4 text-sm md:text-base mt-4 text-left font-normal">Discover my recent projects, featuring responsive designs, interactive prototypes, and full-stack apps. Showcasing skills in React, Tailwind CSS, JavaScript, Python, and Figma, with a focus on accessibility and user experience. More details soon!

            More details coming soon.</p>
        </h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-3 py-2 text-sm md:text-lg rounded-lg font-bold text-white transition-all ${category === cat.id
                  ? "bg-gradient-to-r from-[#0B1223] via-[#1a3a69] to-[#0087CD] hover:opacity-90"
                  : "bg-[#4C4C4C] hover:bg-opacity-80"
                }`}
            >
              {cat.name}
            </button>
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