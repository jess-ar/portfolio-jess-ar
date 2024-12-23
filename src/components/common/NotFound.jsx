const NotFound = ({ message = "The page you are looking for does not exist." }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="mt-4 text-xl text-gray-700">{message}</p>
            <a href="/" className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Return Home</a>
        </div>
    );
};

export default NotFound;