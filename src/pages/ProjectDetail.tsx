import { useParams, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import ImageGallery from '../components/ImageGallery'
import { CalendarDays, CircleCheck, DollarSign, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { BrickAnimation } from '../components/animations/BrickAnimation'
import PageTransition from '../components/animations/PageTransition'

export default function ProjectDetail() {
  const { t } = useTranslation()
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <PageTransition>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600">
              {project.description}
            </p>
          </motion.div>

          <div className="mb-16">
            <ImageGallery images={project.images} />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <BrickAnimation index={0}>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  {t('projects.details.title')}
                </h2>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3"
                  >
                    <CalendarDays className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-medium">{t('projects.details.completionDate')}</p>
                      <p className="text-gray-600">{project.completionDate}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3"
                  >
                    <MapPin className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-medium">{t('projects.details.location')}</p>
                      <p className="text-gray-600">{project.location}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3"
                  >
                    <DollarSign className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-medium">{t('projects.details.value')}</p>
                      <p className="text-gray-600">{project.value}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </BrickAnimation>

            <BrickAnimation index={1}>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  {t('projects.details.features')}
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center gap-3"
                    >
                      <CircleCheck className="w-5 h-5 text-amber-600" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </BrickAnimation>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
