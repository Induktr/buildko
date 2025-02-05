import { companyHistory, teamMembers } from '../data/content'

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company History */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
          <p className="text-lg text-gray-600">
            Building excellence since {companyHistory.founded}
          </p>
        </div>

        <div className="mb-20">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600">{companyHistory.story}</p>
          </div>

          {/* Milestones */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Key Milestones</h2>
            <div className="max-w-3xl mx-auto">
              {companyHistory.milestones.map((milestone, index) => (
                <div key={index} className="flex items-center mb-8">
                  <div className="w-24 flex-shrink-0 text-amber-600 font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-grow pl-8 border-l-2 border-amber-200">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-amber-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
