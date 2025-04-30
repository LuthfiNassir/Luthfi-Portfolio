import React from 'react';
import { GraduationCap, Calendar, MapPin, Book } from 'lucide-react';
import { motion } from './animations/MotionComponents';
import { Education as EducationType } from '../types';

const Education: React.FC = () => {
  const educationHistory: EducationType[] = [
    {
      degree: "B.Tech, CSE",
      institution: "Lovely Professional University",
      years: "2022 - Present",
      grade: "CGPA: 7.8",
      location: "Punjab, India",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems"
      ],
      image: "https://res.cloudinary.com/dmt4dj8ft/image/upload/lpu_vstsvn.jpg",
      icon: <GraduationCap size={24} className="text-teal-600" />
    },
    {
      degree: "Intermediate",
      institution: "Model Private School",
      years: "2021",
      grade: "Percentage: 97%",
      location: "Abu Dhabi, UAE",
      courses: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "English"
      ],
      image: "https://res.cloudinary.com/dpvg3ixiw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746039640/10154278_621620261240309_942757219_n-1_o6hogz.jpg",
      icon: <GraduationCap size={24} className="text-teal-600" />
    },
    {
      degree: "Matriculation",
      institution: "Model Private School",
      years: "2021",
      grade: "Percentage: 100%",
      location: "Abu Dhabi, UAE",
      courses: [
        "Mathematics",
        "Science",
        "Social Studies",
        "Computer Applications",
        "Languages"
      ],
      image: "https://res.cloudinary.com/dpvg3ixiw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1746039640/10154278_621620261240309_942757219_n-1_o6hogz.jpg",
      icon: <GraduationCap size={24} className="text-teal-600" />
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-white to-sky-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-teal-800 text-center mb-12">Education Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 mt-6 px-6">
                {edu.icon}
                <h3 className="text-2xl font-semibold text-teal-800">{edu.degree}</h3>
              </div>
              {/* Institution Info */}
              <div className="px-6">
                <img src={edu.image} alt={edu.institution} className="rounded-md w-full max-h-52 object-cover mb-3" />
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <MapPin size={16} className="text-teal-600" />
                  <span>{edu.location}</span>
                </div>
                <p className="text-lg font-medium text-gray-800">{edu.institution}</p>
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <Calendar size={16} className="text-teal-600" />
                  <span>{edu.years}</span>
                </div>
              </div>
              {/* Key Courses */}
              <div className="mt-6 px-6">
                <div className="flex items-center gap-2 mb-3">
                  <Book size={18} className="text-teal-600" />
                  <h4 className="font-semibold text-gray-800">Key Courses</h4>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  {edu.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
              {/* Grade */}
              <div className="mt-6 px-6 mb-6">
                <span className="inline-block px-4 py-2 bg-teal-50 text-teal-800 rounded-full text-sm font-medium">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
