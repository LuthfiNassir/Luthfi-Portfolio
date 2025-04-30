import React from 'react';
import { Github, Mail, Phone, Download, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Luthfi Nassir</h3>
            <p className="text-gray-400 mb-6 tracking-[0.2em]">
              DATA ANALYST
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/LuthfiNassir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:connectluthfi@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-indigo-400" />
                <a href="mailto:connectluthfi@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                connectluthfi@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-indigo-400" />
                <a href="tel:+918116927964" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +91 9037263759
                </a>
              </li>
              <li className="flex items-center">
                <Github size={18} className="mr-3 text-indigo-400" />
                <a 
                  href="https://github.com/LuthfiNassir" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  github.com/LuthfiNassir
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Resume</h3>
            <p className="text-gray-400 mb-6">
              Download my resume to learn more about my skills, experience, and education.
            </p>
            <a 
              href="https://drive.google.com/file/d/1R0HimN4MCwbIJwmyzUCVfQIwPANf3bMD/view?usp=drive_link" 
              className="flex items-center bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 rounded-full px-6 py-3 inline-block"
            >
              <Download size={18} className="mr-2" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made by Luthfi Nassir &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;