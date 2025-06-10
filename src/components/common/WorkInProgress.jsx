const WorkInProgress = ({ section = "this page" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center rounded-lg-rounded">
      <h1 className="text-5xl font-bold text-accent">🚧 Work in Progress 🚧</h1>
      <p className="mt-4 text-lg text-gray-700">{section} is currently under development. Check back soon!</p>
      <a href="/" className="mt-6 px-4 py-2 text-white bg-terciary rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Return Home</a>
    </div>
  );
};

export default WorkInProgress;
