import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "I've had the pleasure of working with Sriharsha in his role as Key Account Manager, where he supported us in setting up the right support for our SAP platform based on our needs. From day one, Sriharsha demonstrated a strong ability to truly understand our needs and ensure we received exactly what was promised—on time and with quality. What stands out most is his perceptiveness and professionalism.",
      author: "Torbjörn Bäckström",
      title: "Head of Group Application Services",
      company: "Alleima AB"
    },
    {
      text: "Sriharsha is a really good team player with excellent communication skills, he quickly gets a big network due to his social skills. He is very friendly, kind hearted and care for everyone around him. He is very structured and good at planning and preparing. Has a very professional appearance and suits in all kinds of setup due to his great personality and openness.",
      author: "Kristina Jonsson Ädel",
      title: "Lead Solution Architect",
      company: "Alleima AB"
    },
    {
      text: "Sriharsha is a positive soul to work with and together with his professional approach and eagerness to listen, identify and find effective solutions makes him and Yash a very good partner to work with.",
      author: "Jan Sorlien",
      title: "Head of Business Platform",
      company: "Sandvik Coromant AB"
    },
    {
      text: "I worked with Sriharsha when he was located at Sandvik. He is a very competent person and really nice to work with him. He had a very good knowledge in our business processes. He is also taking a big responsibility to solve problems!! I'm happy to share recommendations for him - it's so easy to work with him!! He is also a very positive person!!",
      author: "Katja Scheu",
      title: "Business Process Test Responsible",
      company: "Sandvik Coromant AB"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 scroll-reveal">
            Client Recommendations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8 scroll-reveal"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-reveal">
            What clients say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="bg-white rounded-2xl shadow-float p-8 md:p-12 scroll-reveal">
            <div className="text-center mb-8">
              <Quote className="w-12 h-12 text-blue-500 mx-auto mb-6 opacity-50" />
            </div>
            
            <div className="text-center">
              <blockquote className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="border-t pt-6">
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-blue-600 font-semibold mb-1">
                  {testimonials[currentIndex].title}
                </p>
                <p className="text-gray-500">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-gray-600 hover:text-blue-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Pagination dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-gray-600 hover:text-blue-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* All testimonials grid (for larger screens) */}
          <div className="hidden xl:grid xl:grid-cols-2 xl:gap-6 xl:mt-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-glass transition-all duration-300 cursor-pointer ${
                  index === currentIndex 
                    ? 'ring-2 ring-blue-500 scale-105' 
                    : 'hover:shadow-float'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <Quote className="w-8 h-8 text-blue-500 opacity-50 mb-4" />
                <blockquote className="text-sm text-gray-600 mb-4 line-clamp-3">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t pt-4">
                  <h5 className="font-semibold text-gray-800">{testimonial.author}</h5>
                  <p className="text-xs text-blue-600">{testimonial.title}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;