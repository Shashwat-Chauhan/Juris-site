import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <div className="font-sans text-gray-100 bg-gradient-to-br from-[#0f172a] via-[#14532d] to-[#1e3a34] min-h-screen pt-28 py-12">
      <Navbar />
      {/* About Us Section */}
      <section className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center mt-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-extrabold text-white mb-8 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada nunc non urna dignissim, 
            at luctus nunc lacinia. Fusce eu justo euismod, malesuada leo id, malesuada quam. Duis tristique nisl 
            ac erat interdum, non sodales sapien sagittis. Morbi consequat risus eget lacus fermentum, sed venenatis 
            eros vestibulum. Proin auctor diam ut nunc sodales, eu dapibus justo vulputate. Phasellus posuere elit 
            sit amet ex hendrerit, a bibendum libero efficitur. Nam convallis urna nec sapien rhoncus, eget dictum 
            nulla volutpat. Etiam tincidunt tellus vel turpis suscipit, ut ornare magna gravida.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-4c6f87a3d8fd"
            alt="About Us"
            className="w-full max-w-2xl rounded-xl shadow-2xl border-4 border-white"
          />
        </div>
      </section>

      {/* Mission, Vision, Values, and Team Sections */}
      <div className="max-w-6xl mx-auto px-6 mt-20 space-y-16">
        {[
          { title: "Our Mission", text: "Our mission is to provide the best service with integrity and commitment." },
          { title: "Our Vision", text: "We envision a future where our values drive impactful change." },
          { title: "Our Values", text: "Integrity, innovation, and inclusivity are at the heart of what we do." },
          { title: "Our Team", text: "Meet our dedicated team of professionals committed to excellence." },
        ].map((section, index) => (
          <section key={index} className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-md">
              {section.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-200">{section.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;