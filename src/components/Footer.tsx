import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#020224] border-t border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400 flex items-center justify-center">
            Copyright © 2025 Swarnab. Made with 
            <motion.span 
              className="mx-1 text-red-500"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart size={16} fill="currentColor" />
            </motion.span> 
            by Swarnab Banerjee
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;