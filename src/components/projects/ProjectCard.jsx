function ProjectCard({ item }) {
  return (
    <article
      className="img-box w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] mx-auto flex justify-center items-center relative overflow-hidden rounded-2xl m-5"
      aria-label={`Project: ${item.title}`}
    >
      <img
        src={item.img}
        alt={`Image of project: ${item.title}`}
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
      />
      <div
        className="p flex justify-center items-center absolute top-0 left-0 h-full w-full text-center bg-[linear-gradient(30deg,#0B1223,#0087CD)] p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
        role="region"
        aria-labelledby={`project-title-${item.id}`}
        aria-describedby={`project-description-${item.id}`}
      >
        <div>
          <h2
            id={`project-title-${item.id}`}
            className="font-bold text-xl med:text-xl lg:text-3xl mb-8"
          >
            {item.title}
          </h2>
          <p
            id={`project-description-${item.id}`}
            className="font-bold text-base md:text-lg lg:text-xl"
          >
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;