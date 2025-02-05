import { Building2, Factory, Home, Building } from 'lucide-react'

const services = [
  {
    title: 'Residential Construction',
    description: 'Custom homes and residential developments built to the highest standards.',
    icon: Home
  },
  {
    title: 'Commercial Buildings',
    description: 'Modern office spaces and retail locations designed for success.',
    icon: Building2
  },
  {
    title: 'Industrial Facilities',
    description: 'State-of-the-art manufacturing and warehouse facilities.',
    icon: Factory
  },
  {
    title: 'Renovations',
    description: 'Expert renovations and upgrades for existing structures.',
    icon: Building
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
