import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { FaLaptopCode, FaPaintBrush, FaBrain, FaSeedling, FaFilm } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cards = [
    {
        icon: <FaLaptopCode className="text-green-400" />,
        title: "Fullstack Development",
        description: "🔧I build web applications from front to back, ensuring seamless user experiences and efficient backends."
    },
    {
        icon: <FaPaintBrush className="text-pink-400" />,
        title: "Design Enthusiast",
        description: "🎨With a background in graphic design, I have a passion for design and a keen eye for detail."
    },
    {
        icon: <FaBrain className="text-purple-400" />,
        title: "Artificial Intelligence",
        description: "🧠Fascinated by AI, constantly exploring how it can transform web development."
    },
    {
        icon: <FaSeedling className="text-green-400 " />,
        title: "Growth and Learning",
        description: "🌿 Passionate about growth. Always learning, always improving."
    },
    {
        icon: <FaFilm className="text-yellow-400 " />,
        title: "Fun fact",
        description: "🎬 Film enthusiast, 🌱 plant nurturer, and 💡 creative thinker."
    }
];

function AboutCarousel() {
    return (
        <div className="carousel-container">
            <h2 className="title text-center">More about me</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                role="region" 
                aria-label="Information about Jessica"
                aria-live="polite"
                breakpoints={{
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                }}
                className="swiper-container text-balance"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="card">
                            <div className="icon">{card.icon}</div>
                            <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default AboutCarousel;