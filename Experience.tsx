import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: 'September 2021 — Present',
      title: 'Manager - Client Services',
      company: 'Scandinavian IT Tech AB, Sweden',
      description: [
        'Leading strategic client engagements across SAP transformation and IT service delivery.',
        'Currently serving as the S/4HANA Migration Project Lead (SAP BASIS) for Axfood AB.',
        'Previously served as Sales Manager, Account Manager, and Onsite Delivery Partner.',
        'Championed SAP S/4HANA RISE/GROW enablement and BTP integration.'
      ],
      isLeft: true
    },
    {
      period: 'January 2016 — September 2021',
      title: 'Lead SAP Consultant',
      company: 'Yash Technologies AB, Sweden & India',
      description: [
        'Served as Landscape Architect and Lead Technical Expert for Sandvik Coromant AB.',
        'Spearheaded major programs including ECC to S/4HANA conversion.',
        'Recognized with Exemplary Performance Award (2018) and "Brand Ambassador".',
        'Grew team from 1 to 80+ consultants with multiple AMS contracts.'
      ],
      isLeft: false
    },
    {
      period: 'December 2014 — December 2015',
      title: 'SAP Basis Administrator',
      company: 'Vista Technologies, India',
      description: [
        'Delivered SAP BASIS support for Applied Materials diverse SAP landscape.',
        'Provided technical administration and performance tuning.',
        'Key role in SAP Technical Upgrade 2015 execution.',
        'Maintained operational transparency through comprehensive reporting.'
      ],
      isLeft: true
    },
    {
      period: 'January 2012 — November 2014',
      title: 'Services Support Representative - Team Lead',
      company: 'UNISYS India Pvt. Ltd., India',
      description: [
        'Progressed from Service Desk Analyst to Team Lead.',
        'Managed ITSM operations for global clients including Henkel and Ashland.',
        'Achieved consistent SLA compliance (98%+) and 100% Customer Satisfaction.',
        'Led multi-shift service desk teams with 50+ agents.'
      ],
      isLeft: false
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 scroll-reveal">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8 scroll-reveal"></div>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden lg:block" 
               style={{ height: 'calc(100% - 2rem)', top: '1rem' }}></div>

          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 scroll-reveal ${
                  exp.isLeft ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full hidden lg:block z-10 shadow-lg"></div>

                {/* Content card */}
                <div className={`w-full lg:w-5/12 ${exp.isLeft ? 'lg:text-right' : ''}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-glass hover:shadow-float transition-all duration-300">
                    {/* Period badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4 ${
                      exp.isLeft ? 'lg:ml-auto' : ''
                    }`}>
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    {/* Job title */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {exp.title}
                    </h3>

                    {/* Company */}
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 text-gray-600">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;