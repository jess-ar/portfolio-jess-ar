import React from "react";
import { FaLaptopCode, FaPaintBrush, FaBrain, FaSeedling, FaFilm } from "react-icons/fa";

function AboutInfo() {
    return (
        <div className="wrapper flex flex-col justify-between items-center gap-6 px-4 lg:px-20 w-full max-w-6xl relative z-20 opacity-100 transition-opacity duration-500">
            <h1 className="text-white text-5xl font-bold mb-8">More about me</h1>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8 w-full">
                <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaLaptopCode className="text-3xl text-blue-400 mr-3" />
                        <h2 className="text-2xl font-bold">Turning ideas into code</h2>
                    </div>
                    <p>Turning ideas into code, and code into solutions.</p>
                </div>

                <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaLaptopCode className="text-3xl text-green-400 mr-3" />
                        <h2 className="text-2xl font-bold">Fullstack Development</h2>
                    </div>
                    <p>I build web applications from front to back, ensuring seamless user experiences and efficient backends.</p>
                </div>

                <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaPaintBrush className="text-3xl text-pink-400 mr-3" />
                        <h2 className="text-2xl font-bold">Design Enthusiast</h2>
                    </div>
                    <p>With a background in graphic design, I have a passion for design and a keen eye for detail.</p>
                </div>

                <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaBrain className="text-3xl text-purple-400 mr-3" />
                        <h2 className="text-2xl font-bold">Artificial Intelligence</h2>
                    </div>
                    <p>Fascinated by the world of Artificial Intelligence, constantly exploring how it can enhance and transform web development.</p>
                </div>

                <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaSeedling className="text-3xl text-green-400 mr-3" />
                        <h2 className="text-2xl font-bold">Growth and Learning</h2>
                    </div>
                    <p>Passionate about growth. Always learning, always improving.</p>
                </div>

                <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaFilm className="text-3xl text-yellow-400 mr-3" />
                        <h2 className="text-2xl font-bold">Fun fact</h2>
                    </div>
                    <p>Film enthusiast, plant lover, and creative thinker.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutInfo;
