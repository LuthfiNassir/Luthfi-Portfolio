import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-indigo-600">Luthfi Nassir</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              A Data-Driven Tech Enthusiast blending analytics, strategy, and design. From dashboards to marketing campaigns, I turn data into action.
            </p>
            <h6 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 tracking-[0.2em]">
              Always curious.
            </h6>
            <h6 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 tracking-[0.2em]">
              Always building.
            </h6>
            <div className="flex space-x-4 mb-8">
              <a 
                href="http://linkedin.com/in/luthfi-nassir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="http://linkedin.com/in/luthfi-nassir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:connectluthfi@gmail.com" 
                className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn border border-indigo-600 text-indigo-600 hover:bg-indigo-50">Contact Me</a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dpvg3ixiw/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1746039106/WhatsApp_Image_2025-05-01_at_00.03.02_51a134de_v67yrj.jpg" 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;