import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="text-gray-600">
              With over two decades of experience in the construction industry, BuildCo has established itself as a leader in delivering exceptional construction services. Our commitment to quality, innovation, and customer satisfaction has earned us a reputation for excellence in both residential and commercial projects.
            </p>
            <p className="text-gray-600">
              We believe in building not just structures, but lasting relationships with our clients through transparency, reliability, and outstanding craftsmanship.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Values</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Quality Excellence in Every Project</li>
              <li>• Safety First Approach</li>
              <li>• Sustainable Building Practices</li>
              <li>• Innovation in Construction</li>
              <li>• Client-Centric Solutions</li>
              <li>• Professional Integrity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;