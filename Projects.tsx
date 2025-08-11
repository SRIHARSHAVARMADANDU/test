import React from 'react';
import { ExternalLink, Calendar, Users, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'S/4HANA Conversion & Migration - Bluefield Implementation',
      client: 'Axfood AB / Retail Industry',
      role: 'Project Lead – SAP BASIS',
      period: '2024 - 2025',
      status: 'In Progress',
      highlights: [
        'Leading ECC to S/4HANA Migration with Go-Live scheduled for Q4 2025',
        'Implementing SAP Activate - Agile Project Management methodologies',
        'Managing governance over System Integrator\'s technical execution',
        'Partnering with SNP for data migration integrity and validation',
        'Contributing to post-S/4HANA cloud strategy with AWS migration roadmap'
      ],
      color: 'blue'
    },
    {
      title: 'S/4HANA Implementation for Asset Management',
      client: 'Sandvik Coromant AB / Manufacturing',
      role: 'Project Lead',
      period: '2023',
      status: 'Completed',
      highlights: [
        'Installed S/4HANA 2021 FP02 with SAP Best Practices',
        'Implemented Fiori setup and SAP Asset Manager mobile integration',
        'Configured SAP BTP with Cloud Connector for secure communication',
        'Managed mobile service configurations including authentication and SSO',
        'Replaced legacy asset management system successfully'
      ],
      color: 'purple'
    },
    {
      title: 'SAP Carve-Out & ECC to S/4HANA Conversion',
      client: 'Sandvik Coromant AB / Manufacturing',
      role: 'Lead SAP Consultant',
      period: '2019 - 2020',
      status: 'Completed',
      highlights: [
        'Led technical expertise for major SAP Carve-Out project',
        'Executed brownfield ECC to S/4HANA migration',
        'Designed global hybrid landscape architecture',
        'Implemented proactive monitoring and security standards',
        'Delivered archiving strategy for optimal performance'
      ],
      color: 'green'
    },
    {
      title: 'SAP Greenfield Implementations',
      client: 'TS TRANSCO, AP TRANSCO, NCAOR / Government & R&D',
      role: 'SAP BASIS Consultant',
      period: '2012 - 2016',
      status: 'Completed',
      highlights: [
        'Full-stack implementations including ECC, BW, EP, SOLMAN, BOBJ, DMS',
        'Created system blueprints and high availability setups',
        'Implemented on multiple platforms: HANA, Oracle 12c, Sybase DB',
        'Configured SAP Router and Web Application Server',
        'Successfully delivered multiple government sector projects'
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        header: 'from-blue-600 to-blue-800',
        status: 'bg-blue-100 text-blue-800',
        role: 'bg-blue-100 text-blue-800'
      },
      purple: {
        header: 'from-purple-600 to-purple-800',
        status: 'bg-purple-100 text-purple-800',
        role: 'bg-purple-100 text-purple-800'
      },
      green: {
        header: 'from-green-600 to-green-800',
        status: 'bg-green-100 text-green-800',
        role: 'bg-green-100 text-green-800'
      },
      orange: {
        header: 'from-orange-600 to-orange-800',
        status: 'bg-orange-100 text-orange-800',
        role: 'bg-orange-100 text-orange-800'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 scroll-reveal">
            Key SAP Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8 scroll-reveal"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-reveal">
            Delivering enterprise-scale SAP transformations across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            
            return (
              <div
                key={index}
                className="scroll-reveal bg-white rounded-2xl shadow-glass hover:shadow-float transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${colorClasses.header} text-white p-8`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/90 text-lg">{project.client}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full ${colorClasses.status} font-medium`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <span className={`inline-flex items-center gap-2 px-4 py-2 ${colorClasses.role} rounded-full font-semibold`}>
                      <Users className="w-4 h-4" />
                      {project.role}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Highlights</h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;