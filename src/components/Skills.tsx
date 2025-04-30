import React from 'react';
import { Code, Database, Server, Brain, Users, Laptop, Shield, Lightbulb } from 'lucide-react';
import { motion } from './animations/MotionComponents';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; proficiency: number }>;
  bgColor: string;
  iconColor: string;
  barColor: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code size={32} />,
      skills: [
        { name: "C++", proficiency: 90 },
        { name: "Java", proficiency: 85 },
        { name: "Python", proficiency: 80 },
        { name: "C", proficiency: 85 },
        { name: "JavaScript", proficiency: 75 },
      ],
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      barColor: "bg-teal-500",
    },
    {
      title: "Web Development",
      icon: <Laptop size={32} />,
      skills: [
        { name: "HTML5", proficiency: 90 },
        { name: "CSS3", proficiency: 85 },
        { name: "React", proficiency: 70 },
        { name: "Tailwind", proficiency: 80 },
      ],
      bgColor: "bg-sky-50",
      iconColor: "text-sky-600",
      barColor: "bg-sky-500",
    },
    {
      title: "Data Science",
      icon: <Shield size={32} />,
      skills: [
        { name: "Excel", proficiency: 75 },
        { name: "Pandas", proficiency: 80 },
        { name: "Hadoop", proficiency: 70 },
        { name: "Tableau", proficiency: 65 },
      ],
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
      barColor: "bg-rose-500",
    },
    {
      title: "Tools & Technologies",
      icon: <Server size={32} />,
      skills: [
        { name: "MySQL", proficiency: 85 },
        { name: "Git", proficiency: 80 },
        { name: "Linux", proficiency: 75 },
        { name: "Docker", proficiency: 65 },
      ],
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600",
      barColor: "bg-violet-500",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-white to-teal-50">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card p-6 ${category.bgColor} border border-opacity-20`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${category.iconColor} ${category.bgColor}`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${category.barColor} bg-opacity-80`}
                            style={{
                              width: `${skill.proficiency}%`,
                              transition: "width 0.5s ease-in-out",
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Problem Solving",
              "Team Leadership",
              "Project Management",
              "Agile Methodology",
              "Technical Writing",
              "Public Speaking",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-2 bg-white rounded-full shadow-sm border border-teal-100 text-teal-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
