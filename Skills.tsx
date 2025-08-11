import React from 'react';
import { Settings, ProjectorIcon, Cloud, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Settings,
      title: 'SAP Technologies',
      color: 'blue',
      skills: [
        'S/4HANA', 'SAP S/4HANA Private and Public Cloud', 'SAP ECC', 'SAP BASIS',
        'SAP HANA', 'SAP BTP', 'SAP Fiori', 'SAP ABAP and JAVA NetWeaver Products'
      ]
    },
    {
      icon: ProjectorIcon,
      title: 'Project Management & Delivery',
      color: 'purple',
      skills: [
        'SAP Program & Project Management', 'ECC to S/4HANA Conversions',
        'SAP Operations & AMS Management', 'Account Management', 'SAP Activate',
        'Agile/Scrum', 'Gen AI', 'PMP Trained', 'ITIL v4', 'JIRA', 'Confluence', 'Kanban'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      color: 'green',
      skills: [
        'AWS', 'Microsoft Azure', 'VMware', 'IT Security & Cybersecurity',
        'Cloud Architecture', 'Hybrid Landscapes', 'F5 Load Balancer'
      ]
    },
    {
      icon: Users,
      title: 'Leadership & Management',
      color: 'orange',
      skills: [
        'IT Processes and Governance', 'Innovative Ways of Working', 'Team Leadership',
        'Business Advisory', 'Stakeholder Management', 'Vendor Management',
        'Change Management', 'Customer Engagement', 'Global Delivery'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        icon: 'text-blue-600',
        bg: 'bg-blue-50',
        tag: 'bg-blue-100 text-blue-700',
        border: 'border-blue-200'
      },
      purple: {
        icon: 'text-purple-600',
        bg: 'bg-purple-50',
        tag: 'bg-purple-100 text-purple-700',
        border: 'border-purple-200'
      },
      green: {
        icon: 'text-green-600',
        bg: 'bg-green-50',
        tag: 'bg-green-100 text-green-700',
        border: 'border-green-200'
      },
      orange: {
        icon: 'text-orange-600',
        bg: 'bg-orange-50',
        tag: 'bg-orange-100 text-orange-700',
        border: 'border-orange-200'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 scroll-reveal">
            Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8 scroll-reveal"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-reveal">
            Comprehensive expertise across SAP technologies, project management, and enterprise transformation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div
                key={index}
                className="scroll-reveal bg-white rounded-2xl p-8 shadow-glass hover:shadow-float transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 ${colorClasses.bg} rounded-xl`}>
                    <Icon className={`w-8 h-8 ${colorClasses.icon}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${colorClasses.tag} hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;