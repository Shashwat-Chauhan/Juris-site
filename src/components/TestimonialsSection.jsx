import React from "react"

const TestimonialCard = ({ name, position, testimonial, image, reverse = false }) => (
  <div
    className={`flex-shrink-0 w-[400px] p-6 bg-white rounded-xl shadow-md mx-4 ${
      reverse ? "animate-scroll-left" : "animate-scroll-right"
    }`}
  >
    <div className="flex items-start gap-4">
      <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{position}</p>
      </div>
    </div>
    <p className="mt-4 text-gray-700">{testimonial}</p>

  </div>
)

const TestimonialsSection = ({ bg1 }) => {
    const testimonials = [
        {
          name: "Michael Thompson",
          position: "CEO of Thompson Enterprises",
          testimonial:
            "The team at Saturn Legal provided outstanding support and guidance throughout our complex corporate legal matters. Their expertise and attention to detail were invaluable.",
          image: bg1,
        },
        {
          name: "Sophia Rodriguez",
          position: "Founder of Bright Horizons",
          testimonial:
            "Saturn Legal exceeded my expectations. Their professionalism and deep understanding of the law helped us resolve a challenging dispute swiftly and efficiently.",
          image: bg1,
        },
        {
          name: "James Carter",
          position: "Managing Partner at Carter & Co.",
          testimonial:
            "The dedication and strategic advice from Saturn Legal’s team gave us a significant advantage. They are an exceptional legal partner for any business.",
          image: bg1,
        },
        {
          name: "Emily Davis",
          position: "Entrepreneur",
          testimonial:
            "Saturn Legal guided me through the legal intricacies of setting up my startup. Their personalized service and clear communication made all the difference. Highly recommended!",
          image: bg1,
        },
      ];
      

  return (
    <section className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-center text-4xl font-bold mb-2">Customer said about</h2>
        <p className="text-center text-4xl font-serif italic">Juris Maximo</p>
      </div>

      {/* First row - scrolling right */}
      <div className="relative mb-8">
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll whitespace-normal pb-8">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Second row - scrolling left */}
      <div className="relative ">
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll-reverse whitespace-normal pb-4">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} {...testimonial} reverse />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

