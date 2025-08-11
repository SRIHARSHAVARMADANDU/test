import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: 'SAP Certified Associate - Project Manager - SAP Activate',
      validity: 'Valid to: April 03, 2026',
      category: 'Project Management',
      color: 'blue'
    },
    {
      name: 'ITIL® 4 Foundation Certificate in IT Service Management',
      validity: 'Valid to: May 23, 2028',
      category: 'Service Management',
      color: 'purple'
    },
    {
      name: 'SAP Certified Technology Associate - SAP HANA 2.0 SPS05',
      validity: 'Valid to: March 27, 2026',
      category: 'Technology',
      color: 'green'
    },
    {
      name: 'SAP Certified Technology Associate - OS/DB Migration',
      validity: 'Valid to: March 31, 2025',
      category: 'Technology',
      color: 'orange'
    },
    {
      name: 'Project Management Professional (PMP)® Training',
      validity: 'Completed: Nov–Dec 2024',
      category: 'Project Management',
      color: 'blue'
    },
    {
      name: 'CC – Certified in Cybersecurity Training',
      validity: 'Completed: Jan 2025',
      category: 'Security',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-500 bg-blue-50',
      purple: 'border-purple-500 bg-purple-50',
      green: 'border-green-500 bg-green-50',
      orange: 'border-orange-500 bg-orange-50',
      red: 'border-red-500 bg-red-50'
    };
    return colors[color as keyof typeof colors];
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Project Management': 'text-blue-600 bg-blue-100',
      'Service Management': 'text-purple-600 bg-purple-100',
      'Technology': 'text-green-600 bg-green-100',
      'Security': 'text-red-600 bg-red-100'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600 bg-gray-100';
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 scroll-reveal">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8 scroll-reveal"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-reveal">
            Professional credentials demonstrating expertise across SAP, project management, and IT service delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`scroll-reveal bg-white rounded-xl p-6 shadow-glass hover:shadow-float transition-all duration-300 hover:scale-105 border-l-4 ${getColorClasses(cert.color)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Award className={`w-6 h-6 ${cert.color === 'blue' ? 'text-blue-600' : 
                    cert.color === 'purple' ? 'text-purple-600' :
                    cert.color === 'green' ? 'text-green-600' :
                    cert.color === 'orange' ? 'text-orange-600' :
                    'text-red-600'}`} />
                </div>
                <div className="flex-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(cert.category)}`}>
                    {cert.category}
                  </span>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mb-3 leading-tight">
                {cert.name}
              </h3>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{cert.validity}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-gray-600">Active Certifications</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">4</div>
            <div className="text-gray-600">Technology Domains</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">13+</div>
            <div className="text-gray-600">Years of Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;