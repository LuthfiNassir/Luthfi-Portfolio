import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { motion } from './animations/MotionComponents';
import { Certification } from '../types';

// Import images using import syntax
import gfgImage from './assets/gfg.png';
import genaiImage from './assets/genai.png';
import promptImage from './assets/network.png';
import networkImage from './assets/Prompt.png';

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Supervised Machine Learning",
      organization: "Standford Online",
      date: "2024",
      icon: <Award className="text-indigo-600" size={24} />,
      image: genaiImage
    },
    {
      title: "Excel Skills for Business",
      organization: "Macquarie university",
      date: "2024",
      icon: <Award className="text-indigo-600" size={24} />,
      image: gfgImage
    },
    {
      title: "Programming for Everybody",
      organization: "University of Michigan",
      date: "2023",
      icon: <Award className="text-indigo-600" size={24} />,
      image: promptImage
    },
    {
      title: "The Fundamentals of Digital Marketing",
      organization: "Google",
      date: "2022",
      icon: <Award className="text-indigo-600" size={24} />,
      image: networkImage
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 flex items-start"
            >
              <div className="mr-4">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <div className="flex items-center text-gray-600 mt-1">
                  <span>{cert.organization}</span>
                  <span className="mx-2">•</span>
                  <span>{cert.date}</span>
                </div>
                <div className="mt-3 flex items-center text-green-600">
                  <CheckCircle size={16} className="mr-1" />
                  <span className="text-sm">Verified Certificate</span>
                </div>
                <div className="mt-4">
                  <img src={cert.image} alt={cert.title} className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
