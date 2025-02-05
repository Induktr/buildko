import { Link } from 'react-router-dom'
import { blogPosts } from '../data/content'

export default function Blog() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600">
            Insights and updates from the construction industry
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
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
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
                    By {post.author}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
