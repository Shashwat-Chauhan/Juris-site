import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, []) // Removed nextSlide from dependencies

  const slideContent = [
    {
      subtitle: "Legacy",
      title: "Shaping India's legal landscape",
      description:
        "Our commitment to excellence and dedication to justice drives us forward in creating meaningful impact in the legal domain.",
      buttonText: "Explore Our Work",
      position: "right",
    },
    {
      subtitle: "Innovation",
      title: "Leading legal education forward",
      description:
        "Pioneering new approaches to legal education and research, preparing the next generation of legal minds.",
      buttonText: "Learn More",
      position: "left",
    },
    {
      subtitle: "Excellence",
      title: "Setting the bar higher",
      description:
        "Delivering exceptional legal services with a commitment to integrity, expertise, and client success.",
      buttonText: "Our Services",
      position: "right",
    },
    {
      subtitle: "Future",
      title: "Tomorrow's legal solutions today",
      description: "Embracing innovation and technology to provide cutting-edge legal solutions for modern challenges.",
      buttonText: "Discover More",
      position: "left",
    },
  ]

  return (
    <div className="relative h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px)",
            }}
          />

          {/* Content Box */}
          <div
            className={`absolute top-0 bottom-0 ${
              slideContent[index].position === "right" ? "right-0 bg-gradient-to-l" : "left-0"
            } bg-[#000000cc] w-[800px] p-16 flex flex-col justify-center`}
          >
            <span className="text-green-400 text-xl mb-4">{slideContent[index].subtitle}</span>
            <h2 className="text-white text-5xl font-bold mb-6 leading-tight">{slideContent[index].title}</h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">{slideContent[index].description}</p>
            <button className="bg-white text-green-900 px-8 py-3 rounded-none inline-flex items-center justify-center w-fit hover:bg-green-50 transition-colors duration-300">
              {slideContent[index].buttonText}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow

