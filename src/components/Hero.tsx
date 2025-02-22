import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const { t } = useTranslation()
  
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div ref={ref} className="relative bg-gray-900 h-[600px] flex items-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60" />
        <motion.img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3"
          alt={t('hero.title')}
          className="h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta.projects')}
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta.contact')}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
