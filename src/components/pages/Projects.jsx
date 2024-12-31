import { useState } from "react";
import img1 from '@/assets/images/project-img1.png';
import img2 from '@/assets/images/project-img2.png';
import img3 from '@/assets/images/project-img3.png';
import img4 from '@/assets/images/project-img4.png';
import WorkInProgress from '@/components/common/WorkInProgress';

import ProjectCard from '@/components/projects/ProjectCard';

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Lorem ipsum",
      description: "Design & Development",
      img: img1,
    },
    {
      id: 2,
      title: "Lorem ipsum",
      description: "Design & Development",
      img: img2,
    },
  ];

  const hackathonProjects = [
    {
      id: 3,
      title: "Hackathon Project 3",
      description: "Responsive Layout Creation",
      img: img3,
    },
    {
      id: 4,
      title: "Hackathon Project 4",
      description: "UI/UX Prototype Development",
      img: img4,
    },
  ];

  const bootcampProjects = [
    {
      id: 5,
      title: "Bootcamp Project 1",
      description: "Full Stack Application with React and Node.js",
      img: img1,
    },
    {
      id: 6,
      title: "Bootcamp Project 2",
      description: "E-commerce Platform Design & Development",
      img: img2,
    },
  ];

  return (
    <>
      <div id="projects" className="projects bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] px-4 lg:px-6 mx-auto text-[#939191]">
        Explore some of my recent projects, including responsive web designs, interactive UI/UX prototypes, and full-stack applications. Each project highlights my skills in React, Tailwind CSS, and JavaScript, with a focus on accessibility, performance, and user experience.
        </p>
        <div className="flex justify-center items-center gap-2 mt-12 mb-6">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[16px] border-2 bg-[#171717] rounded-[6px] px-4 py-2 ${durum == 1 ? "bg-[linear-gradient(90deg,#0B1223,#0087CD)]" : ""}`}
          >
            Projects
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[16px] border-2 bg-[#171717] rounded-[6px] px-4 py-2 ${durum === 2 ? "bg-[linear-gradient(90deg,#0B1223,#0087CD)]" : ""}`}
          >
            Hackathons
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[16px] border-2 bg-[#171717] rounded-[6px] px-4 py-2 ${durum === 3 ? "bg-[linear-gradient(90deg,#0B1223,#0087CD)]" : ""}`}
          >
            Bootcamp
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-auto max-w-[1200px] mx-auto justify-center items-start">
          {durum === 1
            ? projects.map((item) => <ProjectCard key={item.id} item={item} />)
            : null}

          {durum === 2
            ? hackathonProjects.map((item) => <ProjectCard key={item.id} item={item} />)
            : null}

          {durum === 3
            ? bootcampProjects.map((item) => <ProjectCard key={item.id} item={item} />)
            : null}
        </div>
      </div>
    </>
  );
}

export default Projects;
