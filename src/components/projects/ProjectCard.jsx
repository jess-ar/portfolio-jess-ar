import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ShimmerButton from "@/components/skills/ShimmerButton";

const ProjectCard = ({ title, img, description, technologies, links }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [showSoundHint, setShowSoundHint] = useState(true);

  const trackClick = ({ action, category, label }) => {
    window.gtag?.("event", action, {
      event_category: category,
      event_label: label,
    });
  };

  return (
    <>
      <div className="md:items-start flex flex-col md:flex-row lg:flex-row gap-y-8 lg:gap-x-8 items-center lg:items-start">
        {/* Project image */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg overflow-hidden mr-8">
          <img
            src={img}
            alt={title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start lg:justify-center gap-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-left">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-gray-800 text-sm px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div className="text-gray-400 text-sm lg:text-base min-h-[170px]">
            <ReactMarkdown
              components={{
                strong: ({ children }) => (
                  <strong className="text-slate-300 font-semibold">{children}</strong>
                ),
              }}
              className="text-gray-400 text-sm md:text-base"
            >
              {description}
            </ReactMarkdown>
          </div>
          <div className="flex gap-4 mt-2 flex-wrap">
            {/* Visit Website Button */}
            <ShimmerButton
              variant="darkMetal"
              as="a"
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title} website (opens in a new tab)`}
              className="px-4 py-2 cursor-pointer text-base font-semibold md:text-lg lg:text-lg
              rounded-xl text-white shadow-lg hover:opacity-90 flex items-center gap-2 border-0
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Visit the website
              <i className="fa-solid fa-up-right-from-square text-sm ml-4"></i>
            </ShimmerButton>
            {/* Code Button */}
            {links.code && (
              <a
                href={links.code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} code on GitHub (opens in a new tab)`}
                className="flex items-center gap-2 px-4 py-2 text-base md:text-lg lg:text-lg
                rounded-xl text-white transition-all bg-gradient-to-r from-[#3D3D3D] via-[#595959] to-[#4C4C4C]
                hover:opacity-80 shadow-lg
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
              >
                Code
                <i className="fa-brands fa-github ml-2" aria-hidden="true"></i>
              </a>
            )}
            {/* Demo Button */}
            {links.demo && (
              <button
                onClick={() => {
                  trackClick({
                    action: "click_demo_video",
                    category: "Projects",
                    label: title,
                  });
                  setShowDemo(true);
                  setShowSoundHint(true);
                  setTimeout(() => setShowSoundHint(false), 6000);
                }}
                aria-label={`Watch demo video for ${title}`}
                className="flex items-center gap-2 px-4 py-2 text-base md:text-lg lg:text-lg
                rounded-xl text-white transition-all bg-gradient-to-r from-[#1E3A8A] via-[#0e378e] to-[#0b1f62]
                hover:opacity-80 shadow-lg
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                Demo
                <i className="fa-solid fa-play ml-2" aria-hidden="true"></i>
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Demo Video Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-2 right-2 text-white text-2xl"
              aria-label="Close demo video"
            >
              &times;
            </button>
            <div className="w-full">
              {links.demo.endsWith(".mp4") ? (
                <video
                  src={links.demo}
                  controls
                  autoPlay
                  muted
                  className="w-full h-96 rounded-lg"
                />
              ) : (
                <iframe
                  src={links.demo}
                  title={`${title} Demo Video`}
                  allow="autoplay"
                  allowFullScreen
                  className="w-full h-96 rounded-lg"
                ></iframe>
              )}
            </div>
            {showSoundHint && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-sm px-4 py-2 rounded-md shadow-lg animate-fade-in-out z-50">
                🔇 This video starts muted. Click the volume icon to hear it.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
