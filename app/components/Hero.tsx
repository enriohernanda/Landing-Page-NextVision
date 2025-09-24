'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center 
                 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400 
                 px-6 animate-gradient"
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Heading */}
      <motion.h1 className="text-4xl md:text-6xl font-bold mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
        Build Smarter Websites with <span className="text-blue-600">NextVision</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p className="text-lg md:text-xl text-gray-700 mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}>
        Empowering businesses with modern web solutions.
      </motion.p>

      {/* Buttons */}
      <motion.div className="space-x-4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}>
        <motion.button className="px-6 py-3 bg-blue-600 text-white rounded-md cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Get Started
        </motion.button>

        <motion.button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md cursor-pointer hover:bg-gray-100" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Learn More
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
