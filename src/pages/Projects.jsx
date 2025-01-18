import { useState } from "react";
import img1 from "@/assets/images/projects/project-img1.png";
import img2 from "@/assets/images/projects/project-img2.png";
import img3 from "@/assets/images/projects/project-img3.png";
import img4 from "@/assets/images/projects/project-img4.png";
import img5 from "@/assets/images/projects/project-img5.png";
import img6 from "@/assets/images/projects/project-img6.png";
import img7 from "@/assets/images/projects/project-img7.png";
import img8 from "@/assets/images/projects/project-img8.png";
import img9 from "@/assets/images/projects/project-img9.png";
import ProjectCard from "@/components/projects/ProjectCard";
import { GradientButton } from "@/components/common/GradientButton";

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
      description: "Hack Barna: My First In-Person Hackathon. With barely two months of programming experience, I joined Hack Barna alongside my teammate after our backend developer left us on the first day. Despite the setback, we managed to deliver a functional project locally, featuring an attractive design and a chatbot integrated with OpenAI’s API, all in just 24 hours. This was a true test of resilience, teamwork, and rapid learning.",
      img: img5,
      technologies: ["Figma", "React", "OpenAI", "Chat bot"],
      links: { live: "https://www.hackbarna.com/es/projects/DermaTech", code: "https://github.com/jess-ar/derma-tech-hackbcn" },
    },
    {
      id: 4,
      title: "Sequiatron",
      description: "Design & Development. More details comming soon.",
      img: img6,
      technologies: ["React", "Tailwind CSS"],
      links: { live: "https://sequiatron.netlify.app/", code: "https://github.com/jess-ar/Hackatoon_Sequia" },
    },
    /*{
      id: 5,
      title: "Boored",
      description: "Design & Development. More details comming soon.",
      img: img6,
      technologies: ["Figma", "React", "Tailwind CSS"],
      links: { live: "https://github.com/jess-ar/hack-boored/tree/main", code: "https://hack-boored-jess-ar.vercel.app/" },
    },*/
    {
      id: 6,
      title: "Barris Vius",
      description: "Design & Development. More details comming soon.",
      img: img3,
      technologies: ["Figma", "React", "Tailwind CSS"],
      links: { live: "https://barris-vius.vercel.app/", code: "https://github.com/jess-ar/comercio_local_front" },
    },
    /*{
      id: 7,
      title: "La Caixa",
      description: "Development. More details comming soon.",
      img: img4,
      technologies: ["React", "Material UI"],
      links: { live: "#", code: "https://github.com/jess-ar/the-game-is-hackathon-caixabank-tech" },
    },*/
    {
      id: 8,
      title: "La Caixa",
      description: "Development. More details comming soon.",
      img: img4,
      technologies: ["React", "Material UI"],
      links: { code: "https://github.com/jess-ar/hackathon-caixabank-frontend-js-react" },
    },
  ];

  const bootcampProjects = [
    {
      id: 9,
      title: "Covid Tracker",
      description: "Development. More details comming soon.",
      img: img9,
      technologies: ["React", "Tailwind CSS", "Shadcn"],
      links: { live: "https://covid-tracker-m71yx9i7x-jess-ars-projects.vercel.app/", code: "https://github.com/jess-ar/COVID-Tracker" },
    },
    {
      id: 10,
      title: "Piedra, papel o tijera",
      description: "Design & Development.Only mobile and tablet More details comming soon.",
      img: img7,
      technologies: ["Figma", "Javascript", "Saas"],
      links: { live: "https://giveme5-carnivaldom-f5.netlify.app/", code: "https://github.com/jess-ar/ProyectoCarnivalDom" },
    },
    {
      id: 11,
      title: "Kamakura Food",
      description: "Development. More details comming soon.",
      img: img8,
      technologies: ["Javascript", "CSS"],
      links: { live: "https://kamakura-food.vercel.app/", code: "https://github.com/jess-ar/Kamakura-food" },
    },
    /*{
      id: 12,
      title: "Travel Buddy",
      description: "Design & Development. More details comming soon.",
      img: img8,
      technologies: ["Figma", "React", "Tailwind CSS",],
      links: { live: "https://travel-buddy-femcoders.netlify.app/", code: "https://github.com/jess-ar/TravelBuddy_front" },
    },*/
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
          <p className="text-gray-400 mb-4 text-sm md:text-base mt-4 text-left font-normal">I enjoy exploring all layers of development, but thanks to my background in graphic design, where I truly shine is in frontend. I work with technologies like React, Tailwind CSS, JavaScript, Python, PostgreSQL, and Figma, always prioritizing accessibility and user experience. If you're looking for someone who combines creativity, technical skills, and attention to detail, you're in the right place.</p>
        </h2>
        <div className="flex flex-wrap justify-center gap-1 md:gap-4 mb-6 md:mb-10">
          {categories.map((cat) => (
            <GradientButton
              key={cat.id}
              onClick={() => setCategory(cat.id)}
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