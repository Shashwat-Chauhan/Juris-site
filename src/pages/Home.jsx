import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Slideshow from "../components/Slideshow"
import EventsSection from "../components/EventsSection"
import PublicationsSection from "../components/PublicationsSection"
import bg1 from "../assets/image/bg1.jpg"
import bg2 from "../assets/image/bg2.jpg"
import bg3 from "../assets/image/bg3.jpg"
import bg4 from "../assets/image/bg4.avif"
import TestimonialsSection from "../components/TestimonialsSection"

const Home = () => {
  const images = [bg1, bg2, bg3, bg4]

  return (
    <div className="min-h-screen">
      <Navbar />
      <Slideshow images={images} />
      <EventsSection />
      <PublicationsSection bg1={bg1} bg2={bg2} bg3={bg3} />
      <TestimonialsSection/>
      <Footer />
    </div>
  )
}

export default Home

