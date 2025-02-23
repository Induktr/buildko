import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.5, y: -20 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}
