import bg from "@/assets/images/banner-bg.webp";
import '@/styles/Skills.css';
import useMousePosition from "@/hooks/useMousePosition";

const skills = [
    {
        category: "Frontend",
        items: ["JavaScript", "React", "Tailwind", "HTML", "CSS"]
    },
    {
        category: "Backend",
        items: ["Python", "Django"]
    },
    {
        category: "DevOps",
        items: ["Docker", "GitHub Actions", "AWS"]
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MySQL"]
    },
    {
        category: "Others",
        items: ["Git", "SOLID", "DRY", "KISS"]
    }
];

function Skills() {
    const mousePosition = useMousePosition();

    return (
        <div
            id="skills"
            style={{ backgroundImage: `url(${bg})` }}
            className="wrapper h-full bg-no-repeat bg-center bg-cover p-8 lg:p-8"
        >
            <section className="flex flex-col gap-y-4 p-8 text-white rounded-lg shadow-md 
                max-w-screen-md mx-auto lg:px-16"
            >
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex flex-col gap-y-3">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-y-2 md:flex-row md:gap-x-5 md:gap-y-0"
                        >
                            <h3 className="w-1/5 font-medium mr-10">{skill.category}</h3>
                            <div className="flex w-4/5 flex-row flex-wrap gap-x-4 gap-y-2">
                                {skill.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-[#171717] text-sm rounded-lg shadow-sm hover:shadow-md transition card-with-light-effect mouse-light-effect"
                                        style={{ borderColor: "hsl(214, 15%, 30%)" }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Skills;
