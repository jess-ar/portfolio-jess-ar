import bg from "@/assets/images/banner-bg.webp";
import '@/styles/Skills.css';
import useMousePosition from "@/hooks/useMousePosition";

const skills = [
    {
        category: "Frontend",
        items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React", "React Query", "React Hook Form"]
    },
    {
        category: "Backend",
        items: ["Python", "Django", "Django Rest Framework"]
    },
    {
        category: "Testing",
        items: ["Pytest", "Vitest", "React Testing Library"]
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MySQL"]
    },
    {
        category: "Agile Methodologies",
        items: ["Scrum", "Kanban", "Jira"]
    },
    {
        category: "Design Tools",
        items: ["Figma", "Photoshop", "Illustrator", "InDesign"]
    },
    {
        category: "Development Principles",
        items: ["SOLID", "DRY", "KISS"]
    },
    {
        category: "Languages",
        items: ["English (B1)", "Spanish (Native)", "Catalan (Native)"]
    }
];

function Skills() {
    const mousePosition = useMousePosition();

    return (
        <div
            id="skills"
            style={{ backgroundImage: `url(${bg})` }}
            className="wrapper h-full bg-no-repeat bg-center bg-cover"
        >
            <div className="max-w-screen-lg mx-auto px-6">
                <section className="flex flex-col gap-y-4 py-16 pt-16 md:p-0 md:pt-20  text-white rounded-lg shadow-md">
                    <div className="text-left mt-8 md:mb-16 lg:mb-16 lg:mt-14 xl:mt-14">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Skills</h1>
                        {/* Listado de categorías */}
                        <div className="flex flex-col gap-y-6">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-y-4 md:flex-row md:gap-x-5 md:gap-y-0"
                                >
                                    {/* Categoría */}
                                    <h2 className="w-full md:w-1/3 font-medium text-lg md:text-xl lg:text-2xl text-left">
                                        {skill.category}
                                    </h2>
                                    {/* Habilidades */}
                                    <div className="flex w-full sm:w-3/4 md:w-4/5 flex-row flex-wrap gap-x-4 gap-y-2">
                                        {skill.items.map((item, idx) => (
                                            <button
                                                key={idx}
                                                className="inline-flex items-center gap-x-1 bg-[#171717] border border-gray-700 rounded-xl px-2 py-1 sm:px-4  
                                                text-sm md:text-lg lg:text-lg transition-all hover:bg-input cursor-pointer whitespace-nowrap"
                                            >
                                                {item}
                                            </button>
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