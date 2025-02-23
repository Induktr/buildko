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
    <section id="services" className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-4">{t('services.title')}</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            let cardClassName = "bg-bg-primary dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md dark:shadow-none transition-shadow";
            let iconClassName = "w-12 h-12 text-amber-600 dark:text-white mb-4";
            if (index < 4) {
              cardClassName = "bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md dark:shadow-none transition-shadow";
              iconClassName = "w-12 h-12 text-amber-500 dark:text-amber-400 mb-4";
            }
            return (
              <div
                key={service.key}
                className={cardClassName}
              >
                <Icon className={iconClassName} />
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-text-secondary">
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
