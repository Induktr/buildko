import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { projects, categories } from '../data/projects'
import { projectsTranslations } from '../data/projects.i18n'
import { BrickAnimation, BrickContainer } from '../components/animations/BrickAnimation'
import { useGesture } from '@use-gesture/react'
import { useSpring, animated } from '@react-spring/web'

interface ProjectCardProps {
  project: any;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t, i18n } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [{ scale, rotateX, rotateY }, api] = useSpring(() => ({
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    config: { mass: 1, tension: 170, friction: 26 }
  }));

useGesture(
{
  onHover: ({ hovering }) =>
    api({ scale: hovering ? 1.05 : 1 }),
  onMove: ({ xy: [px, py], target }) => {
    const bounds = (target as HTMLElement).getBoundingClientRect()
    const x = (px - bounds.left) / bounds.width
    const y = (py - bounds.top) / bounds.height
    api({
      rotateX: (0.5 - y) * 10,
      rotateY: (x - 0.5) * 10,
    })
  },
  onMouseLeave: () => {
    api({ rotateX: 0, rotateY: 0 })
  }
},
{
  target: window,
  eventOptions: { passive: false }
}
);
  return (
    <BrickAnimation index={index} delay={0.2}>
      <Link to={`/projects/${project.id}`}>
        <animated.div
          style={{
            scale,
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative h-64 overflow-hidden">
            {!imageLoaded && !imageError ? (
              <div className="h-full w-full object-cover bg-gray-700 animate-pulse" />
            ) : imageError ? (
              <div className="h-full w-full object-cover bg-red-700 text-white flex items-center justify-center">
                Error loading image
              </div>
            ) : null}
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
              style={{ display: imageLoaded ? 'block' : 'none' }}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.2 }}
              className="absolute inset-0 bg-black transition-opacity"
            />
          </div>
          <div className="p-6">
            <span className="text-sm font-medium text-amber-600">
              {t(`projects.categories.${project.category.toLowerCase()}`)}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
              {projectsTranslations[i18n.language as keyof typeof projectsTranslations][project.id as keyof (typeof projectsTranslations)[keyof typeof projectsTranslations]].title}
            </h3>
            <p className="text-gray-600 dark:text-white mt-2 line-clamp-2">
              {projectsTranslations[i18n.language as keyof typeof projectsTranslations][project.id as keyof (typeof projectsTranslations[keyof typeof projectsTranslations])].description}
            </p>
          </div>
        </animated.div>
      </Link>
    </BrickAnimation>
  )
}
export default function Projects() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('projects.title')}</h1>
          <p className="text-lg text-gray-600 dark:text-white">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <BrickAnimation key={category} index={index}>
              <motion.button
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full transition-colors ${
                                  selectedCategory === category
                                    ? 'bg-amber-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 hover:dark:bg-gray-600'
                                }`}
              >
                {t(`projects.categories.${category.toLowerCase()}`)}
              </motion.button>
            </BrickAnimation>
          ))}
        </motion.div>

        <BrickContainer>
          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isInView && filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </BrickContainer>
      </div>
    </div>
  )
}
