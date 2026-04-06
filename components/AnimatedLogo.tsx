'use client'

import { motion } from 'framer-motion'

export default function AnimatedLogo() {
  return (
    <div className="relative w-9 h-9">
      {/* Background shape */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)' }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Front moving shield-like abstract form */}
      <motion.div
        className="absolute inset-0 rounded-xl flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="w-full h-full"
          style={{ background: 'rgba(255,255,255,0.1)' }}
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* The abstract 'L' / Shield intersection */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute z-10 w-5 h-5"
        >
          <motion.path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}
