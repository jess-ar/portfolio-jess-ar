import ReactMarkdown from "react-markdown";

const ProjectCard = ({ title, img, description, technologies, links }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start sm:gap-8">
      <div className="w-full sm:w-1/2 max-w-sm sm:max-w-md lg:max-w-lg rounded-lg overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col justify-start">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-left">
          {title}
        </h3>
        <div className="flex flex-wrap text-sm gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="text-gray-400 text-sm md:text-base min-h-[210px]">
          <ReactMarkdown
            components={{
              strong: ({ children }) => <strong className="text-slate-300 font-semibold">{children}</strong>,
            }}
            className="text-gray-400 text-sm md:text-base"
          >
            {description}
          </ReactMarkdown>


        </div>

        <div className="flex gap-4 mt-3 ">
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-base md:text-lg lg:text-lg rounded-xl text-white transition-all bg-gradient-to-r from-[#3D3D3D] via-[#595959] to-[#4C4C4C] hover:opacity-90 shadow-lg"
          >
            Visit the website
          </a>
          <a
            href={links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-base md:text-lg lg:text-lg rounded-xl text-white transition-all bg-gradient-to-r from-[#3D3D3D] via-[#595959] to-[#4C4C4C] hover:opacity-80 shadow-lg"
            aria-label="GitHub Repository"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;