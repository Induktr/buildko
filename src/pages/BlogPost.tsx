import { useParams, Navigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { blogPostsTranslations } from '../data/content.i18n'

// Define a type for the blog post IDs
type BlogPostId = keyof typeof blogPostsTranslations.en;

export default function BlogPost() {
  const { t, i18n } = useTranslation()
  const { id } = useParams();
    // Assert that id is a valid BlogPostId
    const language = i18n.language as keyof typeof blogPostsTranslations;
    const validIds = Object.keys(blogPostsTranslations[language] || {}) as BlogPostId[];
  
    if (!validIds.includes(id as BlogPostId)) {
      return <Navigate to="/blog" replace />;
    }
  
    const post = blogPostsTranslations[language]?.[id as BlogPostId];
  
    if (!post) {
      return <Navigate to="/blog" replace />;
    }

  return (
    <div className="py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-6">
            <span className="text-sm text-gray-500 dark:text-white">
              {t('blog.posted')}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

        </div>



        <div className="prose prose-lg mx-auto">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-600 dark:text-white mb-6">
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
