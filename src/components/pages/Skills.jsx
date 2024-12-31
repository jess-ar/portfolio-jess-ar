import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import bg from "@/assets/images/banner-bg.webp"
import '@/styles/Skills.css';

function Skills() {
  const skills = [
    { 
      title: "Frontend Development", 
      description: "Development of dynamic and responsive interfaces using React.js and Tailwind CSS." 
    },
    { 
      title: "JavaScript & Frameworks", 
      description: "Proficiency in ES6+, React.js." 
    },
    { 
      title: "UI/UX Design", 
      description: "Experience with Figma, Photoshop, and Canva for creating attractive prototypes." 
    },
    { 
      title: "Version Control", 
      description: "Usage of Git, GitHub, and continuous deployment with Vercel." 
    },
    { 
      title: "Agile Methodologies", 
      description: "Working with Scrum, Jira, and estimations for agile teams." 
    }
  ];

  return (
    <>
      <div 
        id="skills" 
        style={{ backgroundImage: `url(${bg})` }} 
        className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
      >
        <div className="skills-wrapper text-center text-white bg-[#171717] p-10 rounded-[50px] lg:p-4">
          <h1 className="text-4xl">Skills</h1>
          <p className="text-lg py-3">
            Here are some of my main skills:
          </p>
          <div className="box bg-[#171717] my-6">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {skills.map((skill, index) => (
                <SwiperSlide key={index} className="bg-[#171717]">
                  <div className="bg-[#171717] flex flex-col items-center p-4">
                    <h1 className="font-bold text-2xl mb-2">{skill.title}</h1>
                    <p className="text-center text-lg">{skill.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
