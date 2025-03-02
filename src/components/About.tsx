import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    { period: '2021 - current', description: 'B Tech in ECE at Academy Of Technology' },
    { period: '2019 - 2021', description: 'Higher Secondary at Sheakhala Benimadhab High School' },
    { period: '2017 - 2019', description: 'Secondary at Sheakhala Benimadhab High School' }
  ];

  const experience = [
    { period: 'March, 2023 - current', description: 'Core Member at IEEE Student Branch AOT' },
    { period: 'August, 2023', description: 'Track Winner at InterHactive Hackathon organized by SC-CSE, AOT' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-[#020224]">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          className="flex flex-col md:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="md:w-2/5"
            variants={itemVariants}
          >
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Swarnab Banerjee" 
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02021c]/80 to-transparent"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-[#0ef]">Me</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              I am a 3rd year student at Academy Of Technology, pursuing B.Tech in Electronics and Communication Engineering. 
              I am a passionate programmer and web developer, with a keen interest in problem solving and competitive programming. 
              I have a strong foundation in data structures and algorithms, and I am proficient in web development technologies 
              like HTML, CSS, JavaScript, React, Node, Express, and MongoDB. I have a strong understanding of the software 
              development life cycle and agile methodologies. I am always eager to learn new technologies and frameworks. 
              Besides Programming, I like to play cricket and football and also like to listen to music in free times.
            </p>
            
            <div className="mb-8">
              <div className="flex space-x-8 border-b border-gray-700 mb-6">
                <button 
                  className={`pb-2 text-lg font-medium relative ${activeTab === 'education' ? 'text-[#0ef]' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('education')}
                >
                  Education
                  {activeTab === 'education' && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff004f]"
                      layoutId="tabIndicator"
                    />
                  )}
                </button>
                
                <button 
                  className={`pb-2 text-lg font-medium relative ${activeTab === 'experience' ? 'text-[#0ef]' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('experience')}
                >
                  Experience
                  {activeTab === 'experience' && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff004f]"
                      layoutId="tabIndicator"
                    />
                  )}
                </button>
              </div>
              
              <div className="min-h-[200px]">
                {activeTab === 'education' && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    {education.map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="pl-6 border-l-2 border-[#ff004f]"
                      >
                        <span className="text-[#ff004f] font-medium block mb-1">{item.period}</span>
                        <p className="text-gray-300">{item.description}</p>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
                
                {activeTab === 'experience' && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    {experience.map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="pl-6 border-l-2 border-[#ff004f]"
                      >
                        <span className="text-[#ff004f] font-medium block mb-1">{item.period}</span>
                        <p className="text-gray-300">{item.description}</p>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;