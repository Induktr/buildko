import { motion } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'

interface BrickLineProps {
  isOpen?: boolean;
  index: number;
}

const BrickLine = ({ isOpen, index }: BrickLineProps) => {
  const variants = {
    closed: (i: number) => ({
      rotate: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        delay: i * 0.1
      }
    }),
    open: (i: number) => ({
      rotate: i === 1 ? 45 : i === 2 ? -45 : 0,
      y: i === 1 ? 8 : i === 2 ? -8 : -20,
      opacity: i === 0 ? 0 : 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        delay: i * 0.1
      }
    })
  }

  return (
    <motion.div
      custom={index}
      variants={variants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      style={{
        width: "24px",
        height: "3px",
        borderRadius: "2px",
        transformOrigin: "center",
        willChange: "transform",
      }}
      className="bg-text-primary dark:bg-white"
    />
  )
}

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  return (
    <motion.button
      onClick={onClick}
      className="relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-text-primary dark:text-white"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Menu"
      style={{ 
        willChange: "transform",
        touchAction: "manipulation"
      }}
    >
      {[0, 1, 2].map((i) => (
        <BrickLine
          key={i}
          isOpen={isOpen && !prefersReducedMotion}
          index={i}
        />
      ))}
    </motion.button>
  )
}

interface MenuItemProps {
  children: React.ReactNode;
  index: number;
  isOpen: boolean;
}

export const MenuItem = ({ children, index, isOpen }: MenuItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        x: isOpen ? 0 : -20,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          delay: index * 0.1
        }
      }}
      exit={{ opacity: 0, x: -20 }}
      style={{ 
        willChange: "transform",
        pointerEvents: isOpen ? "auto" : "none"
      }}
    >
      {children}
    </motion.div>
  )
}
