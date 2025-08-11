import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-white/5 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white/15 rounded-full animate-float blur-lg" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="block">Sriharsha Varma</span>
            <span className="block text-4xl md:text-6xl gradient-text bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Dandu
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90 animate-fade-in-up stagger-2">
            SAP Program & AMS Delivery Leader | S/4HANA Transformation Expert
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-80 animate-fade-in-up stagger-3">
            Energetic and Results-Driven Professional with{' '}
            <span className="font-semibold text-blue-200">13+ years</span> of Experience Delivering 
            Large-Scale SAP Transformation Programs, including S/4HANA Implementations across Global Organizations.
          </p>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in-up stagger-4">
            <div className="glass rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-200 mb-2">$12M+</div>
              <div className="text-sm opacity-90">Revenue Generated</div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-200 mb-2">6</div>
              <div className="text-sm opacity-90">Major SAP Projects</div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="text-3xl font-bold text-green-200 mb-2">98%</div>
              <div className="text-sm opacity-90">SLA Compliance</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up stagger-5">
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-gradient text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
            >
              <Download size={20} />
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('#about')}
            className="animate-bounce mx-auto block text-white/70 hover:text-white transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;