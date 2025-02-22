import { useParams, Navigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { blogPosts } from '../data/content'

export default function BlogPost() {
  const { t } = useTranslation()
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === id)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <div className="py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-6">
            <span className="text-sm font-medium text-amber-600">
              {post.category}
            </span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-500">
              {t('blog.posted')} {new Date(post.date).toLocaleDateString()}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center mb-8">
            <span className="text-sm font-medium text-gray-900">
              {t('blog.author')} {post.author}
            </span>
          </div>
        </div>

        <div className="mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        <div className="prose prose-lg mx-auto">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/blog"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            ← {t('blog.backToBlog')}
          </Link>
        </div>
      </article>
    </div>
  )
}
