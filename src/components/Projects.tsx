import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  techStack: string[]; // Tech stack for each project
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: "CodeVue",
      description:
        "Interview Management Web App designed to streamline the hiring process for organizations. It enables seamless interview scheduling, live coding sessions, role-based access, feedback management, and more.",
      image: "../public/Codevue.png",
      github: "https://github.com/swarnab007/codevue",
      demo: "https://codevue07.vercel.app/",
      techStack: ["Next JS", "TypeScipt", "Clerk", "Convex", "Stream", "MailJet"],
    },
    {
      title: "Fitness App",
      description:
        "A Fitness website created using to search and train any body Parts Related exercises.",
      image: "../public/gym.png",
      github: "https://github.com/swarnab007/gym_fitness-react",
      demo: "https://gym-fitness-swarnab.vercel.app/",
      techStack: ["React", "RapidAPI", "Material-UI"],
    },
    {
      title: "E Commerce",
      description:
        "An E Commerce Website with secure user authentication, Protected Routes, Product Listing, User roles (Admin/Customer), and seamless Payment integration.",
      image: "../public/e-commerce.png",
      github: "https://github.com/swarnab007/E-Coomerce-server",
      demo: "https://watchstore-e-commerce.vercel.app/",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redis", "Azure"],
    },
    {
      title: "Weather Website",
      description:
        "A simple website made using HTML, CSS, and JavaScript where a user can search for a particular city and get the weather details of that city along with the humidity, wind speed, and temperature.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/swarnab007/Weather-App",
      demo: "https://swarnab-weather-app.netlify.app",
      techStack: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
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
                {/* Hover Overlay for Tech Stack */}
                <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4 text-[#0ef]">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#0ef] text-black text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
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