'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedCard({ children, className = '', delay = 0, glassmorphic = false }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -10,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateY: 5,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 blur-2xl"
        variants={glowVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      />
      
      {/* Card content */}
      <div className={`relative rounded-3xl overflow-hidden ${
        glassmorphic 
          ? 'glass-card' 
          : 'bg-white/90 backdrop-blur-sm border border-gray-100/50'
      } shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb, #4facfe)',
            backgroundSize: '300% 300%',
            padding: '1px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            opacity: isHovered ? 0.8 : 0.3,
          }}
          animate={{
            backgroundPosition: isHovered ? ['0% 50%', '100% 50%'] : '0% 50%',
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        
        <div className="relative p-8 md:p-12">
          {children}
        </div>
      </div>
    </motion.div>
  );
}