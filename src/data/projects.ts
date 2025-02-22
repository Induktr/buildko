export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  completionDate: string;
  client: string;
  location: string;
  value: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "modern-office-complex",
    title: "Modern Office Complex",
    category: "Commercial",
    description: "A state-of-the-art office complex featuring sustainable design elements and smart building technology.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      "https://images.unsplash.com/photo-1497366216548-37526070297c"
    ],
    completionDate: "2024",
    client: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    value: "$25M",
    features: [
      "LEED Certified",
      "Smart Building Systems",
      "Rooftop Garden",
      "EV Charging Stations"
    ]
  },
  {
    id: "luxury-residential",
    title: "Luxury Residential Complex",
    category: "Residential",
    description: "An exclusive residential development featuring premium amenities and custom finishes.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3"
    ],
    completionDate: "2023",
    client: "Premium Living LLC",
    location: "Miami, FL",
    value: "$40M",
    features: [
      "Swimming Pool",
      "Fitness Center",
      "Private Gardens",
      "24/7 Security"
    ]
  },
  {
    id: "industrial-warehouse",
    title: "Industrial Warehouse Facility",
    category: "Industrial",
    description: "A modern warehouse facility with advanced logistics capabilities and sustainable features.",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      "https://images.unsplash.com/photo-1586528116493-da5c594eb073",
      "https://images.unsplash.com/photo-1586528116747-e234ab387c71"
    ],
    completionDate: "2024",
    client: "Global Logistics Co.",
    location: "Dallas, TX",
    value: "$15M",
    features: [
      "Automated Systems",
      "Solar Panels",
      "Loading Docks",
      "Climate Control"
    ]
  }
];

export const categories = ["All", "Commercial", "Residential", "Industrial", "Renovation"];
