import { useState } from "react";
import img1 from '@/assets/images/project-img1.png';
import img2 from '@/assets/images/project-img2.png';
import img3 from '@/assets/images/project-img3.png';
import img4 from '@/assets/images/project-img4.png';
import img5 from '@/assets/images/project-img5.png';
import img6 from '@/assets/images/project-img6.png';
import img7 from '@/assets/images/project-img7.png';
import img8 from '@/assets/images/project-img8.png';
import img9 from '@/assets/images/project-img9.png';

import ProjectCard from '@/components/projects/ProjectCard';

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Pair Connect",
      description: (
        <p className="whitespace-normal w-full">
          Design & Development <br /> More details coming soon.
        </p>
      ),
      img: img1,
    },
    {
      id: 2,
      title: "Marvel & DC",
      description: (
        <p className="whitespace-normal w-full">
          Design & Development <br /> More details coming soon.
        </p>
      ),
      img: img2,
    },
  ];

  const hackathonProjects = [
    {
      id: 3,
      title: "Dermatech",
      description: (
        <p className="whitespace-normal w-full">
          Design & Development <br /> More details coming soon.
        </p>
      ),
      img: img5,
    },
    {
      id: 4,
      title: "Sequiatron",
      description: (
        <p className="whitespace-normal w-full">
          Design & Development <br /> More details coming soon.
        </p>
      ),
      img: img6,
    },
    {
      id: 5,
      title: "Barris Vius",
      description: (
        <p className="whitespace-normal w-full">
          Design & Development <br /> More details coming soon.
        </p>
      ),
      img: img3,
    },
    {
      id: 6,
      title: "La Caixa",
      description: (
        <p className="whitespace-normal w-full">
          Development <br /> More details coming soon.
        </p>
      ),
      img: img4,
    },
  ];

  const bootcampProjects = [
    {
      id: 7,
      title: "Piedra, papel o tijera",
      description: (
        <p className="whitespace-normal w-full">
          Design & Development <br /> More details coming soon.
        </p>
      ),
      img: img7,
    },
    {
      id: 8,
      title: "Kamakura Food",
      description: (
        <p className="whitespace-normal w-full">
          Development <br /> More details coming soon.
        </p>
      ),
      img: img8,
    },
    {
      id: 9,
      title: "Covid Tracker",
      description: (
        <p className="whitespace-normal w-full">
          Development <br /> More details coming soon.
        </p>
      ),
      img: img9,
    },
  ];

  return (
    <div id="projects" className="projects bg-[#171717] text-white py-16">
      <div className="max-w-screen-lg mx-auto px-6">
        <h1 className="text-center font-bold mb-6 text-3xl md:text-3xl lg:text-3xl xl:text-4xl mt-16">
          Projects
        </h1>
        <div className="text-base md:text-lg lg:text-xl xl:text-xl text-center max-w-[1000px] px-4 lg:px-6 mx-auto text-[#939191]">
        <p>
          Explore some of my recent projects, including responsive web designs, interactive UI/UX prototypes, and full-stack applications. Each project showcases my skills in React, Tailwind CSS, JavaScript, and Python, with a focus on accessibility and user experience. These projects were developed in a team setting, except for Marvel & DC, which I completed individually.
        </p>
        <p className="text-terciary">More details coming soon.</p>
        </div>
        <div className="flex justify-center items-center gap-2 text-base md:text-lg lg:text-xl xl:text-2xl font-bold mt-10 mb-10">
          <button
            onClick={() => setDurum(1)}
            className={`border-2 bg-[#171717] rounded-lg px-4 py-2 ${durum === 1 ? "bg-custom-gradient" : ""
              }`}
          >
            Projects
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`border-2 bg-[#171717] rounded-lg px-4 py-2 ${durum === 2 ? "bg-custom-gradient" : ""
              }`}
          >
            Hackathons
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`border-2 bg-[#171717] rounded-lg px-4 py-2 ${durum === 3 ? "bg-custom-gradient" : ""
              }`}
          >
            Bootcamp
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-screen-lg mx-auto justify-center items-start">
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
    </div>
  );
}

export default Projects;