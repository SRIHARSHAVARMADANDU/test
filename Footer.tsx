import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SHV Dandu
            </h3>
            <p className="text-gray-400 mt-2">
              SAP & IT Transformation Leader | 13+ Years of Excellence
            </p>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              &copy; {currentYear} Sriharsha Varma Dandu. Made with 
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;