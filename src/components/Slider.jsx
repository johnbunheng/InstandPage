import { useState,useEffect } from "react"
import Img1 from "../img/CoverSBC369.jpg";
import Img2 from "../img/BusinessPartner.jpg";
import Img3 from "../img/16.jpg";


const slides = [
    {
        id: 1,
        title: "Explore the Universe",
        content: "Discover the wonders of the cosmos.",
        image: Img1,
        bgColor: "bg-gradient-to-r from-blue-600 to-indigo-600"
    },
    {
        id: 2,
        title: "Nature's Beauty",
        content: "Embrace the serenity of the natural world.",
        image: Img2, 
        bgColor: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
        id: 3,
        title: "Urban Adventure",
        content: "Experience the pulse of the city.",
        image: Img3, 
        bgColor: "bg-gradient-to-r from-purple-600 to-pink-600"
    }
];


const Slide = ({image, bgColor }) => (
    <div
        className={`h-[135px] flex flex-col items-center justify-center text-white ${bgColor} rounded-lg shadow-xl bg-cover bg-center transition-all duration-500`}
        style={{ backgroundImage: `url(${image})` }}
    >
  
        <div className=" bg-opacity-40 p-6 rounded-lg text-center mx-4">
            {/* <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-xl">{content}</p> */}
        </div>
    </div>
);

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

  
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlay) {
            const timer = setInterval(() => {
                nextSlide();
            }, 5000); // Change slide every 5 seconds
            return () => clearInterval(timer);
        }
    }, [isAutoPlay]);
    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []); 
    return (
        <div className="max-w-4xl mx-auto my-8">
            <div className="relative">
                <Slide {...slides[currentSlide]} />
                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition z-10"
                    aria-label="Previous Slide"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition z-10"
                    aria-label="Next Slide"
                >
                    &#10095;
                </button>
            </div>
            {/* Dot Navigation */}
            <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentSlide === index ? "bg-gray-800" : "bg-gray-400"
                        } hover:bg-gray-600 transition`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            {/* Auto-play Toggle and Slide Counter (Uncommented for a complete component) */}
            {/* <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                >
                    {isAutoPlay ? "Pause Auto-play" : "Play Auto-play"}
                </button>
                <div className="text-gray-800">
                    Slide {currentSlide + 1} of {slides.length}
                </div>
            </div> */}
        </div>
    );
};

export default Slider;