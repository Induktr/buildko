import { motion } from 'framer-motion'

const brickVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }
}

export default function FloatingBricks() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
      <div className="grid grid-cols-6 gap-4 p-4">
        {Array.from({ length: 48 }).map((_, i) => (
          <motion.div
            key={i}
            variants={brickVariants}
            animate="animate"
            custom={i}
            style={{ animationDelay: `${i * 0.1}s` }}
            className="h-8 bg-construction-primary rounded-sm"
          />
        ))}
      </div>
    </div>
  )
}
