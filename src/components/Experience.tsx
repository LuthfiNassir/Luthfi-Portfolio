import React from 'react';
import { Star, Calendar, MapPin } from 'lucide-react';
import { motion } from './animations/MotionComponents';
import aiesec from './assets/Blue-Logo.png';
import huawei from './assets/huawei.png'; // Add your Huawei logo here

const experienceHistory = [
  {
    title: "B2B Consultant | National Support Team",
    organization: "AIESEC in India",
    years: "Feb’ 2025 - Ongoing",
    location: "India",
    logo: aiesec,
    achievements: [
      "Analyzed audience insights to create data-driven content showcasing India's culture and AIESEC's impact",
      "Optimized social media strategies, boosting reach and visibility by 30%",
      "Tracked campaign performance metrics, refining outreach for maximum impact",
      "Strengthened brand positioning, enhancing AIESEC's presence in India through data-backed initiatives"
    ],
    icon: <Star size={24} className="text-teal-600" />
  },
  {
    title: "Chief Marketing Officer",
    organization: "AIESEC in Jalandhar",
    years: "Feb' 2025 - Ongoing",
    location: "Jalandhar, India",
    logo: aiesec,
    achievements: [
      "Established and maintained strategic partnerships with 5-6 universities, ensuring strong brand presence and seamless collaboration for student engagement initiatives",
      "Optimized marketing campaigns using data analysis, increasing student engagement by 30%",
      "Monitored key performance indicators (KPIs) to improve campaign results",
      "Developed data-driven marketing strategies, boosting brand visibility by 40%",
      "Conducted market research and competitor analysis to enhance outreach efforts"
    ],
    icon: <Star size={24} className="text-teal-600" />
  },
  {
    title: "Senior Marketing Manager",
    organization: "AIESEC in Jalandhar",
    years: "Aug' 2024 - Jan' 2025",
    location: "Jalandhar, India",
    logo: aiesec,
    achievements: [
      "Analyzed marketing performance data, optimizing campaigns that increased engagement by 23%",
      "Tracked and assessed outreach metrics, refining strategies to expand reach",
      "Managed data insights for a hackathon event, ensuring smooth execution with 500+ participants",
      "Led and mentored a team, ensuring effective collaboration and performance",
      "Utilized recruitment data to streamline onboarding, contributing to a 20% growth in membership"
    ],
    icon: <Star size={24} className="text-teal-600" />
  },
  {
    title: "Assistant Network Solution Manager Intern",
    organization: "Huawei",
    years: "Jun' 2024 - Aug' 2024",
    location: "India",
    logo: huawei,
    achievements: [
      "Delivered network devices tailored to specific client needs, ensuring seamless integration with existing infrastructure",
      "Designed and built detailed network diagrams and architecture for clients",
      "Created comprehensive network solutions to align with both technical and business requirements",
      "Enhanced technical skills in network design, while gaining significant experience in client communication and project management"
    ],
    icon: <Star size={24} className="text-teal-600" />
  }
];

const Experience = () => (
  <section id="experience" className="section-padding bg-gradient-to-br from-white to-sky-50">
    <div className="container mx-auto px-4">
      <h2 className="section-title text-3xl font-bold text-teal-800 text-left">Experience</h2>
      <div className="relative mt-16">
        <div className="absolute left-0 h-full w-1 bg-teal-200"></div>
        {experienceHistory.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative mb-16 flex flex-col items-start"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-teal-600 z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
            {/* Content */}
            <div className="pl-8 w-full">
              <div className="card p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300 text-left flex flex-row items-center gap-6">
                {/* Left Side: Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {exp.icon}
                    <h3 className="text-2xl font-semibold text-teal-800">{exp.title}</h3>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <MapPin size={16} className="text-teal-600" />
                      <span>{exp.location}</span>
                    </div>
                    <p className="text-lg font-medium text-gray-800">{exp.organization}</p>
                    <div className="flex items-center gap-2 text-gray-600 mt-1">
                      <Calendar size={16} className="text-teal-600" />
                      <span>{exp.years}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <ul className="space-y-2 list-disc list-outside pl-5 text-gray-600">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Right Side: Logo */}
                <div className="flex-shrink-0 flex items-center justify-center h-24 w-24 md:h-32 md:w-32">
                  <img
                    src={exp.logo}
                    alt={`${exp.organization} logo`}
                    className="object-contain h-full w-full rounded"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
