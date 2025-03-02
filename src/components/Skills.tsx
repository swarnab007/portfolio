import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  percentage: number;
  color?: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills: Skill[] = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 80 },
    { name: 'SASS', percentage: 80 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'React', percentage: 80 },
    { name: 'Node.js', percentage: 70 },
    { name: 'Express.js', percentage: 85 },
    { name: 'MongoDB', percentage: 60 },
    { name: 'DSA', percentage: 75 },
    { name: 'Java', percentage: 82 },
    { name: 'Problem Solving', percentage: 85 },
    { name: 'C++', percentage: 90 },
    { name: 'IOT', percentage: 60 },
    { name: 'Communication', percentage: 73 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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
    <section id="skills" className="py-20 bg-[#02021c]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-[#e74d06]">Skills</span>
          </h2>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-item"
              variants={itemVariants}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="text-sm font-semibold">{skill.percentage}%</span>
              </div>
              
              <div className="h-2.5 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#0ef] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;