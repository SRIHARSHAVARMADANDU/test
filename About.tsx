import React from 'react';
import { CheckCircle, Globe, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const achievements = [
    'Led S/4HANA Technical Migration for Axfood AB (Go-Live Q4 2025)',
    'Generated over USD 12 million in revenue for Yash Technologies AB',
    'Signed Master Service Agreement (MSA) with 2 Large Customers in Sweden',
    'Grew Yash Team from 1 to 80+ consultants at Sandvik',
    'Exemplary Performance Award recipient & "Brand Ambassador"',
    '100% Customer Satisfaction achievement (2013)'
  ];

  const highlights = [
    {
      icon: Globe,
      title: 'Global Leadership',
      description: 'Leading international teams across multiple cultures and time zones'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Leveraging AI, cloud-first strategies, and modern methodologies'
    },
    {
      icon: Users,
      title: 'Stakeholder Management',
      description: 'Building lasting partnerships through strategic collaboration'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 scroll-reveal">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8 scroll-reveal"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Profile Photo */}
          <div className="lg:col-span-1 flex justify-center scroll-reveal">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-float bg-gradient-to-br from-blue-100 to-purple-100 p-2">
                <img
                  src="/Sriharsha Photo.JPG"
                  alt="Sriharsha Varma Dandu"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full opacity-30 animate-float"></div>
            </div>
          </div>

          {/* Left side - Achievements */}
          <div className="lg:col-span-1 scroll-reveal-left">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-float">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <CheckCircle className="w-8 h-8" />
                Key Achievements
              </h3>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-green-300 flex-shrink-0" />
                    <span className="text-white/90">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="lg:col-span-1 scroll-reveal-right">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                As a seasoned SAP and IT transformation leader, I specialize in delivering complex enterprise 
                solutions that drive business value. My expertise spans across S/4HANA migrations, landscape 
                architecture, and strategic IT program management.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Currently based in Sweden, I combine technical expertise with strong leadership to guide global 
                teams and deliver projects that consistently exceed customer expectations. My ability to connect 
                and collaborate across cultures ensures seamless communication and successful outcomes.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I'm passionate about leveraging innovative technologies and methodologies like SAP Activate, 
                Agile practices, AI Models, and cloud-first strategies to modernize enterprise systems and processes.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{highlight.title}</h4>
                        <p className="text-gray-600 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;