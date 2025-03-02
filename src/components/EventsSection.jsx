import React from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const EventCard = ({ title, date, location, type, registrationLink }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col min-h-[300px]">
    <div className="flex-1">
      <div className="text-sm text-gray-500 mb-4">{date}</div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <div className="space-y-2 text-gray-600">
        <p>{location}</p>
        <p>{type}</p>
      </div>
    </div>
    <Link
      to={registrationLink}
      className="group inline-flex items-center text-lg font-medium mt-6 hover:text-green-900"
    >
      Register
      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
    </Link>
  </div>
)

const EventsSection = () => {
  const events = [
    {
      title: "National Article Writing Competition 2024",
      date: "March 15-20, 2024",
      location: "Online",
      type: "Competition",
      registrationLink: "/events/article-writing",
    },
    {
      title: "Constitutional Law Moot Court Competition",
      date: "April 5-7, 2024",
      location: "Delhi High Court",
      type: "Moot Court",
      registrationLink: "/events/moot-court",
    },
    {
      title: "Legal Research Methodology Workshop",
      date: "March 25, 2024",
      location: "Virtual Seminar",
      type: "Workshop",
      registrationLink: "/events/workshop",
    },
  ]

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Join our upcoming events and enhance your legal knowledge through competitions, workshops, and educational
            programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <div className="mt-16">
          <Link to="/events" className="inline-flex items-center text-lg font-medium group hover:text-green-900">
            View All Events
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EventsSection

