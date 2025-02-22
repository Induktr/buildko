import { motion } from 'framer-motion'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-20 h-20"
      >
        {/* Construction crane arm */}
        <motion.div className="absolute w-2 h-16 bg-construction-primary origin-bottom left-9 -top-6" />
        
        {/* Base */}
        <motion.div className="absolute bottom-0 w-20 h-4 bg-construction-secondary rounded" />
        
        {/* Cable */}
        <motion.div
          animate={{
            height: [40, 50, 40],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-0.5 bg-gray-600 left-10"
          style={{ top: '10px' }}
        />
        
        {/* Hook */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-4 h-4 bg-construction-accent rounded-b left-8"
          style={{ top: '50px' }}
        />
      </motion.div>
    </div>
  )
}
