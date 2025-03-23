import ReactMarkdown from "react-markdown";
import ShimmerButton from "@/components/skills/ShimmerButton";

const ProjectCard = ({ title, img, description, technologies, links }) => {
  return (
    <div className="md:items-start flex flex-col md:flex-row lg:flex-row gap-y-8 lg:gap-x-8 items-center lg:items-start">

      {/* Project image */}
      <div className="w-full  max-w-sm sm:max-w-md lg:max-w-lg rounded-lg overflow-hidden mr-8">
        <img
          src={img}
          alt={title}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start lg:justify-center gap-4">

        {/* Title */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-left">
          {title}
        </h3>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

         {/* Description */}
        <div className="text-gray-400 text-sm lg:text-base min-h-[170px]">
          <ReactMarkdown
            components={{
              strong: ({ children }) => (
                <strong className="text-slate-300 font-semibold">
                  {children}
                </strong>
              ),
            }}
            className="text-gray-400 text-sm md:text-base"
          >
            {description}
          </ReactMarkdown>
        </div>


        {/* Buttons */}
        <div className="flex gap-4 mt-2">

          {/* Visit Website Button */}
          <ShimmerButton
            variant="darkMetal"
            as="a"
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title} website (opens in a new tab)`}
            className="
              px-4 py-2 cursor-pointer text-base font-semibold md:text-lg lg:text-lg
              rounded-xl text-white shadow-lg hover:opacity-90 flex items-center gap-2 border-0
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
            "
          >
            Visit the website
            <i className="fa-solid fa-up-right-from-square text-sm ml-4"></i>
          </ShimmerButton>

          {/* Code Button */}
          <a
            href={links.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} code on GitHub (opens in a new tab)`}
            className="
              flex items-center gap-2 px-4 py-2 text-base md:text-lg lg:text-lg
              rounded-xl text-white transition-all bg-gradient-to-r from-[#3D3D3D] via-[#595959] to-[#4C4C4C]
              hover:opacity-80 shadow-lg
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500
            "
          >
            Code
            <i className="fa-brands fa-github ml-2" aria-hidden="true"></i>
          </a>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;