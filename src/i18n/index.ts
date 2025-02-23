import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslations from './locales/en.json'
import ukTranslations from './locales/uk.json'
import esTranslations from './locales/es.json'
import ruTranslations from './locales/ru.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      uk: {
        translation: ukTranslations
      },
      es: {
        translation: esTranslations
      },
      ru: {
        translation: ruTranslations
      }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'uk', 'es', 'ru'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n
