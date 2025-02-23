import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Send, Twitter, Youtube } from 'lucide-react'

interface NewsletterForm {
  email: string
}

export default function Footer() {
  const { t } = useTranslation()
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isContactHighlighted, setIsContactHighlighted] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleContactClick = () => {
      if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        setIsContactHighlighted(true);
        setTimeout(() => setIsContactHighlighted(false), 2000);
      }
    }

    window.addEventListener('contact-section-click', handleContactClick)
    return () => window.removeEventListener('contact-section-click', handleContactClick)
  }, [])
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterForm>()

  const onSubmit = (data: NewsletterForm) => {
    // In a real app, this would connect to a backend
    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
    subscribers.push(data.email)
    localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
    setSubscriptionStatus('success')
    reset()
    setTimeout(() => setSubscriptionStatus('idle'), 3000)
  }

  const contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'contact@buildco.com',
    address: '123 Construction Ave, Building City, BC 12345',
    hours: t('footer.contact.hours'),
    whatsapp: '+15551234567',
    telegram: 'buildco_official'
  }

  const quickLinks = [
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.faq'), href: '/faq' },
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.companyInfo.title')}</h3>
            <p className="text-gray-400 mb-6">
              {t('footer.companyInfo.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            ref={contactRef}
            className={`transition-all duration-700 ${isContactHighlighted ? 'transform scale-105 translate-y-[-10px] bg-gray-800 p-6 rounded-lg shadow-lg' : ''}`}
          >
            <h3 className="text-xl font-bold mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('footer.contact.whatsapp')}
                </a>
              </li>
              <li>
                <a
                  href={`https://t.me/${contactInfo.telegram}`}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t('footer.contact.telegram')}
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                {contactInfo.address}
              </li>
              <li className="flex items-center text-gray-400">
                <Clock className="w-5 h-5 mr-2" />
                {contactInfo.hours}
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.newsletter.description')}
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <input
                  type="email"
                  {...register('email', {
                    required: t('footer.newsletter.error.required'),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t('footer.newsletter.error.invalid'),
                    },
                  })}
                  placeholder={t('footer.newsletter.placeholder')}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors"
              >
                {t('footer.newsletter.button')}
              </button>
              {subscriptionStatus === 'success' && (
                <p className="text-sm text-green-400">{t('footer.newsletter.success')}</p>
              )}
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mb-12">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.935242!3d40.730610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjIiTiA3M8KwNTYnMDYuOSJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                {t('footer.links.privacy')}
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                {t('footer.links.terms')}
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm">
                {t('footer.links.sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
