import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MenuButton, MenuItem } from './animations/MenuAnimation'
import ThemeSwitcher from './ThemeSwitcher'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.contact'), href: '/#contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-bg-primary dark:bg-gray-900 shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-2xl font-bold text-accent dark:text-amber-400">
              BuildCo
            </Link>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    isActive(item.href)
                      ? 'text-accent dark:text-amber-400'
                      : 'text-text-secondary dark:text-gray-300 hover:text-accent dark:hover:text-amber-400'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent dark:bg-amber-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <MenuButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden bg-bg-primary dark:bg-gray-900"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <MenuItem key={item.name} index={index} isOpen={isMenuOpen}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      isActive(item.href)
                        ? 'text-accent dark:text-amber-400 bg-bg-secondary dark:bg-gray-800'
                        : 'text-text-secondary dark:text-gray-300 hover:text-accent dark:hover:text-amber-400 hover:bg-bg-secondary dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </MenuItem>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
