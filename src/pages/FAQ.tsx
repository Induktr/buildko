import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { faqsTranslations } from '../data/content.i18n'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const { t, i18n } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  type FaqCategory = keyof (typeof faqsTranslations)['en'];
  const categories = Object.keys(faqsTranslations[i18n.language as keyof typeof faqsTranslations]) as FaqCategory[];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('faq.title')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t(`faq.categories.${category}`)}
              </h2>
              <div className="space-y-4">
                {faqsTranslations[i18n.language as keyof typeof faqsTranslations][category].map((faq, index) => {
                  const isOpen = openIndex === index
                    return (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg"
                      >
                        <button
                          className="w-full flex justify-between items-center p-4 text-left"
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
