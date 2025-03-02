import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import bgImage from "../assets/image/contact_bg.jpg"
export default function ContactPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-50">
      {/* Contact Info Section */}
      
      <div 
        className="items-center justify-center w-full h-full flex" 
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover', // or 'contain', '100% 100%', etc.
          backgroundPosition: 'center', // or 'top', 'bottom', 'left', 'right', etc.
          backgroundRepeat: 'no-repeat',
          filter:'blur(0px)', // or 'repeat', 'repeat-x', 'repeat-y', etc.
          height: '100vh', // or '100%', '500px', etc.
          width: '50vw' // or '100%', '500px', etc.
        }}
      >
      
      <div className="  text-white text-xl  px-8 py-12 rounded-2xl  ">
          <h2 className="text-4xl font-bold mb-8">Get in touch</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-green-100" />
              <p>+1 234 567 890</p>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-green-100" />
              <p>info@yourdomain.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faLocationDot} className="text-green-100" />
              <p>1234 Street Name, City, Country</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-green-100 hover:text-green-200">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="text-green-100 hover:text-green-200">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Send a Message Section */}
      <div className="bg-white flex flex-col justify-center items-center px-8 py-12 lg:py-0 w-full">
        <div className="p-10 border-gray-300 rounded-2xl w-full ">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Send a Message</h2>
          <form className="w-full space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                className="w-full border-b border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                className="w-full border-b border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full border-b border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full border-b border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Write your message here..."
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 text-white rounded-lg px-6 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send Message
            </button>
          </form>
        </div>  
      </div>

    </div>
  );
}
