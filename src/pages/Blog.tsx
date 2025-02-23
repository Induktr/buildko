import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { blogPostsTranslations } from '../data/content.i18n'

export default function Blog() {
  const { t, i18n } = useTranslation()

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('blog.title')}</h1>
          <p className="text-lg text-gray-600">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid gap-12">
          {Object.entries(blogPostsTranslations[i18n.language as keyof typeof blogPostsTranslations]).map(([id, post]) => (
            <article key={id} className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="mb-2">
                  <span className="text-sm text-gray-500">
                    {t('blog.posted')}
                  </span>
                </div>
                <Link to={`/blog/${id}`}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-amber-600">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${id}`}
                  className="inline-block mt-4 text-amber-600 hover:text-amber-700 font-medium"
                >
                  {t('blog.readMore')} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
