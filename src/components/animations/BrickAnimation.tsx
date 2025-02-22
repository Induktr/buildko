import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface BrickProps {
  index: number;
  children: React.ReactNode;
  delay?: number;
}

export const BrickAnimation = ({ index, children, delay = 0 }: BrickProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          rotate: Math.random() * 10 - 5,
          scale: 0.8
        },
        visible: {
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: delay + index * 0.1
          }
        }
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      style={{ 
        transformOrigin: "center",
        willChange: "transform",
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  )
}

export const BrickContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        willChange: "transform",
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
    >
      {children}
    </div>
  )
}
