import { useState } from "react";
import img1 from '@/assets/images/project-img1.png';
import img2 from '@/assets/images/project-img2.png';
import img3 from '@/assets/images/project-img3.png';
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
    {
      id: 3,
      title: "Lorem ipsum",
      description: "Design & Development",
      img: img3,
    },
    {
      id: 4,
      title: "Lorem ipsum",
      description: "Design & Development",
      img: img2,
    },
    {
      id: 5,
      title: "Lorem ipsum",
      description: "Design & Development",
      img: img3,
    },
    {
      id: 6,
      title: "Lorem ipsum",
      description: "Design & Development",
      img: img1,
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
          cupiditate! Molestiae placeat architecto nihil obcaecati illum minima
          incidunt dolores? Officia consectetur optio non totam cum eos soluta
          ipsa et quod.
        </p>
        <div className="flex justify-center items-center gap-2 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${durum == 1 ? "bg-[linear-gradient(90deg,#6caff3,#38097a)]" : ""
              }`}
          >
            Projects
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${durum === 2 ? "bg-[linear-gradient(90deg,#6caff3,#38097a)]" : ""
              }  `}
          >
            Text-1
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${durum === 3 ? "bg-[linear-gradient(90deg,#6caff3,#38097a)]" : ""
              }`}
          >
            Text-2
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1">
          {durum === 1
            ? projects.map((item) => <ProjectCard key={item.id} item={item} />)
            : null}
        </div>

        {durum === 2 && (
          <div
            id="text2"
            className="tab-pane text-center py-16 max-w-4xl mx-auto lg:p-5"
          >
            <WorkInProgress section="Text-1 Content" />
          </div>
        )}
        {durum === 3 && (
          <div
            id="text1"
            className="tab-pane text-center py-16 max-w-4xl mx-auto lg:p-5"
          >
            <WorkInProgress section="Text-2 Content" />
          </div>
        )}
      </div>
    </>
  );
}

export default Projects;
