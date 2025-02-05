import { useParams, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import ImageGallery from '../components/ImageGallery'
import { CalendarDays, MapPin, DollarSign, CheckCircle2 } from 'lucide-react'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600">
            {project.description}
          </p>
        </div>

        <div className="mb-16">
          <ImageGallery images={project.images} />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Project Details
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CalendarDays className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="font-medium">Completion Date</p>
                  <p className="text-gray-600">{project.completionDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">{project.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-amber-600" />
                <div>
                  <p className="font-medium">Project Value</p>
                  <p className="text-gray-600">{project.value}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
