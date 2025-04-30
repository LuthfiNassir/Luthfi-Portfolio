import React from 'react';
import { Trophy, Medal, Target, BookOpen, Mic } from 'lucide-react';
import { motion } from './animations/MotionComponents';
import { Achievement } from '../types';

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: "Golden Visa",
      description: "Awarded with the UAE government's Golden Visa for achieving high marks in grade 12",
      icon: <Trophy size={40} className="text-yellow-500" />
    },
    {
      title: "National Support Team of AIESEC",
      description: "Selected for the National Support Team of AIESEC in India after passing the interview rounds",
      icon: <Medal size={40} className="text-indigo-600" />
    },
    {
      title: "Martial Arts",
      description: "Achieved black belt in karate from Kaninjiko karate organization ",
      icon: <Target size={40} className="text-red-500" />
    },
    {
      title: "Public Speaking",
      description: "Delivered a session to over 200 students at Pyramid College and PTU",
      icon: <Mic size={40} className="text-green-500" />
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">Achievements & Co-Curriculars</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 flex items-start"
            >
              <div className="mr-5 p-3 bg-gray-50 rounded-full">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;