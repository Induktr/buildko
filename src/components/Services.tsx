import { Building, Building2, Factory, House } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Services() {
  const { t } = useTranslation()

  const services = [
    {
      key: 'residential',
      icon: House
    },
    {
      key: 'commercial',
      icon: Building2
    },
    {
      key: 'industrial',
      icon: Factory
    },
    {
      key: 'renovation',
      icon: Building
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.key}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
