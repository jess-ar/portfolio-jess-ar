import bg from "@/assets/images/banner-bg.webp";
import "@/styles/Skills.css";
import ShimmerButton from "@/components/skills/ShimmerButton";
import skills from "@/data/skillsData.json";

function Skills() {
  return (
    <div
      id="skills"
      style={{ backgroundImage: `url(${bg})` }}
      className="wrapper h-full bg-no-repeat bg-center bg-cover"
    >
      <div className="max-w-screen-lg mx-auto px-6">
        <section className="flex flex-col gap-y-4 py-16 pt-16 md:p-0 md:pt-16 text-white rounded-lg shadow-md">
          <div className="text-left mt-8 md:mb-16 lg:mb-16 lg:mt-14 xl:mt-14">
            <div className="inline-block bg-gradient-to-r from-terciary to-accent bg-clip-text text-transparent mb-3">
              <h2
                className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4 pb-2 
                border-b-2 border-[#0087CD]/60 inline-block 
                font-[family-name:var(--font-poppins)] text-white"
              >
                Skills
              </h2>
            </div>
            <div className="flex flex-col gap-y-6 skills-wrapper">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex w-full flex-row flex-wrap gap-x-4 gap-y-2"
                  onMouseMove={(e) => {
                    const r = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty(
                      "--mouse-x",
                      `${e.clientX - r.left}px`
                    );
                    e.currentTarget.style.setProperty(
                      "--mouse-y",
                      `${e.clientY - r.top}px`
                    );
                  }}
                >
                  <p className="w-full md:w-1/3 font-medium text-lg md:text-xl lg:text-xl text-left">
                    {skill.category}
                  </p>
                  <div className="flex w-full sm:w-3/4 md:w-4/5 flex-row flex-wrap gap-x-4 gap-y-2">
                    {skill.items.map((item, idx) => (
                      <ShimmerButton
                        key={idx}
                        className="shimmer-button inline-flex items-center gap-x-1 text-sm md:text-base lg:text-base transition-all whitespace-nowrap cursor-default"
                      >
                        {item}
                      </ShimmerButton>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skills;
