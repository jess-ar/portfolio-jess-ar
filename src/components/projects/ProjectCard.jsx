function ProjectCard({ item }) {
  return (
    <div className="img-box w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
      <img 
        src={item.img} 
        alt={item.title} 
        className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-3xl" 
      />
      <div className="p absolute top-0 left-0 h-full w-full text-center bg-dark p-4 pt-20 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <h1 className="font-bold text-2xl mb-2">{item.title}</h1>
        <p className="font-bold">{item.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
