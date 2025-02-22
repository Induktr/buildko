import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { blogPosts } from '../data/content'

export default function Blog() {
  const { t } = useTranslation()

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
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="lg:w-2/3">
                <div className="mb-2">
                  <span className="text-sm font-medium text-amber-600">
                    {post.category}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">
                    {t('blog.posted')} {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-amber-600">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900">
                    {t('blog.author')} {post.author}
                  </span>
                </div>
                <Link
                  to={`/blog/${post.id}`}
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
