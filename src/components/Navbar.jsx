import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import JurisMaximo from "../assets/image/Juris_logo.png"

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const NavLink = ({ to, children, dropdown }) => (
    <div
      className="relative group"
      onMouseEnter={() => dropdown && setActiveDropdown(dropdown)}
      onMouseLeave={() => dropdown && setActiveDropdown(null)}
    >
      <Link
        to={to}
        className="relative text-black hover:text-green-900 px-3 py-2 text-sm font-medium group inline-flex items-center"
      >
        {children}
        {dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-900 transition-all duration-300 group-hover:w-full"></span>
      </Link>
      {dropdown && (
        <DropdownMenu isActive={activeDropdown === dropdown}>
          {dropdowns[dropdown].items.map((item, index) => (
            <DropdownItem key={index} to={item.to}>
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </div>
  )

  const DropdownMenu = ({ isActive, children }) => (
    <div
      className={`absolute top-full left-0 w-64 bg-white shadow-lg transition-all duration-200 ${
        isActive ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
      }`}
      onMouseEnter={() => setActiveDropdown(activeDropdown)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="py-2">{children}</div>
    </div>
  )

  const DropdownItem = ({ to, children }) => (
    <Link to={to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-900">
      {children}
    </Link>
  )

  const dropdowns = {
    publications: {
      name: "Publications",
      items: [
        { label: "Blogs", to: "/blogs" },
        { label: "Journals", to: "/journal" },
      ],
    },
    About_Us:{
      name:"About Us",
      items: [
        {label:"Team", to: "/team"},
        {label:"Motive", to:"/about"}
      ]
    },
    events: {
      name: "Events",
      items: [
        { label: "Article Writing Competition", to: "/events/article-writing" },
        { label: "Moot Court Competition", to: "/events/moot-court" },
        { label: "Seminars/Workshop", to: "/events/seminars" },
        { label: "Courses", to: "/events/courses" },
        { label: "Memo Drafting Competition", to: "/events/memo-drafting" },
      ],
    },
    opportunities: {
      name: "Opportunities",
      items: [
        { label: "Call for Internship", to: "/opportunities/internship" },
        { label: "Call for Moot", to: "/opportunities/moot" },
        { label: "Call for Paper/Blogs", to: "/opportunities/papers" },
      ],
    },
    career: {
      name: "Career",
      items: [
        { label: "Internship", to: "/internship" },
        { label: "Position", to: "/team-career" },
      ],
    },
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-black shadow-md w-full">
      <div className="flex items-center mx-10 h-20 justify-between">
        <div className="flex items-center">
          <img src={JurisMaximo} className="w-8 h-auto mr-3" alt="Juris Maximo Logo" />
          <span className="text-black font-bold text-2xl">Juris Maximo</span>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/team" dropdown="About_Us" >About us</NavLink>
          <NavLink to="#" dropdown="publications">
            Publications
          </NavLink>
          <NavLink to="#" dropdown="events">
            Events
          </NavLink>
          <NavLink to="/legal-news">Legal News</NavLink>
          <NavLink to="#" dropdown="opportunities">
            Opportunities
          </NavLink>
          <NavLink to="#" dropdown="career">
            Career
          </NavLink>
        </div>

        <div className="flex">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium text-white bg-green-900 rounded-full hover:bg-green-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

