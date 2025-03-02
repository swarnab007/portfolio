import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Facebook, Linkedin, Github, Instagram } from "lucide-react";

const Hero: React.FC = () => {
  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      url: "https://www.facebook.com/swarnab.banerjee.52",
      label: "Facebook",
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/swarnab-banerjee-3326aa254/",
      label: "LinkedIn",
    },
    {
      icon: <Github size={20} />,
      url: "https://github.com/swarnab007",
      label: "GitHub",
    },
    { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="text-xl md:text-2xl mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, It's Me
            </motion.h3>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-yellow-300 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Swarnab Banerjee
            </motion.h1>

            <motion.h3
              className="text-xl md:text-3xl mb-6 flex flex-wrap items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              And I am a{" "}
              <span className="text-[#0ef] font-semibold">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    1000,
                    "UI Designer",
                    1000,
                    "Competitive Programmer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.h3>

            <motion.div
              className="flex space-x-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-[#0ef] flex items-center justify-center text-[#0ef] hover:bg-[#0ef] hover:text-[#081b29] transition-all duration-300 hover:shadow-[0_0_10px_#0ef]"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0ef] shadow-[0_0_20px_#0ef]"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Swarnab Banerjee"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
