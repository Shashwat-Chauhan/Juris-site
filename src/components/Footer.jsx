import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import JurisLogo from "../assets/image/Juris_logo.png";


const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex">
              <img src={JurisLogo} className="w-10 h-auto mr-4" alt="Juris Maximo Logo" />

              <h2 className="text-xl font-bold mb-4">Juris Maximo</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-gray-400" />
                <p className="text-gray-300">
                  123 Legal Avenue, Supreme Court Road
                  <br />
                  New Delhi, 110001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:contact@jurismaximo.com" className="text-gray-300 hover:text-white">
                  contact@jurismaximo.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/legal-news" className="text-gray-300 hover:text-white">
                  Legal News
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Publications & Events */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-gray-300 hover:text-white">
                  Journals
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white">
                  Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Opportunities & Career */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opportunities</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/internship" className="text-gray-300 hover:text-white">
                  Internships
                </Link>
              </li>
              <li>
                <Link to="/team-career" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/call-for-papers" className="text-gray-300 hover:text-white">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link to="/moot-court" className="text-gray-300 hover:text-white">
                  Moot Court
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-gray-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Juris Maximo. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
