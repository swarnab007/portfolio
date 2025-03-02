import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Link as LinkIcon, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: 'GymLove',
      description: 'This website is developed for all Gym Enthusiasts. One can search for a particular muscle, and he will be redirected to the details page of that particular exercise. He can learn about that exercise, all the details, steps and related YouTube Tutorials. User can also get similar exercises and exercises with same equipments.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      github: 'https://github.com/swarnab007/gym_fitness-react',
      demo: 'https://gym-fitness-swarnab.vercel.app/'
    },
    {
      title: 'To Do App',
      description: 'It is a To Do website made using React Js, User can add, edit check, uncheck and delete To do.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
      github: 'https://github.com/swarnab007/To-Do-Website-React',
      demo: 'https://to-do-website-react.vercel.app/'
    },
    {
      title: 'Chat WebApp',
      description: 'Full stack chatting application with real-time messaging capabilities.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      github: 'https://github.com/swarnab007/Chat-WebApp'
    },
    {
      title: 'Weather Website',
      description: 'A simple website made using HTML, CSS and JavaScript where a user can search for a particular city and get the weather details of that city along with the humidity, wind speed and temperature.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      github: 'https://github.com/swarnab007/Weather-App',
      demo: 'https://swarnab-weather-app.netlify.app'
    }
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-[#020224]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-[#0ef]">Projects</span>
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-[#0a0a2e] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(0,238,255,0.3)] transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2e] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-3">{project.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6 line-clamp-3">{project.description}</p>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={18} />
                  </a>
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;