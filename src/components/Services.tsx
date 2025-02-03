import { Home, Building2, Factory, Wrench } from "lucide-react";

const services = [
  {
    title: "Residential Construction",
    description: "Custom homes and residential developments built to the highest standards.",
    icon: Home,
  },
  {
    title: "Commercial Buildings",
    description: "Modern office spaces and retail locations designed for success.",
    icon: Building2,
  },
  {
    title: "Industrial Facilities",
    description: "State-of-the-art manufacturing and warehouse facilities.",
    icon: Factory,
  },
  {
    title: "Renovations",
    description: "Expert renovations and upgrades for existing structures.",
    icon: Wrench,
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;