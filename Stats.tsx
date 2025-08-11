import React from 'react';
import { Award, Users, Trophy, Target } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Award,
      number: '13+',
      label: 'Years Experience',
      description: 'Leading SAP transformations',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Trophy,
      number: '6',
      label: 'Major SAP Projects',
      description: 'Successfully delivered',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Users,
      number: '4',
      label: 'Active Certifications',
      description: 'Professional credentials',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Target,
      number: '98%',
      label: 'SLA Compliance',
      description: 'Outstanding delivery',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="scroll-reveal bg-white rounded-2xl p-8 text-center shadow-glass hover:shadow-float hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-6`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;