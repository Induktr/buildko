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
      "https://res.cloudinary.com/dsjalneil/image/upload/v1740390614/Portfolio_24-02-2025_09-42-40_3_pfpnqb.jpg",
      "https://res.cloudinary.com/dsjalneil/image/upload/v1740390952/Portfolio9_24-02-2025_09-46-44_rpgwwz.png",
      "https://res.cloudinary.com/dsjalneil/image/upload/v1740390482/Portfolio12_24-02-2025_09-46-44_thumb_aeukpa.png",
      "https://res.cloudinary.com/dsjalneil/image/upload/v1740391576/Portfolio4_24-02-2025_09-46-44_thumb_2_pzeaw3.png",
      "https://res.cloudinary.com/dsjalneil/image/upload/v1740390482/Portfolio10_24-02-2025_09-46-44_thumb_nkqlwp.png",
      "https://res.cloudinary.com/dsjalneil/image/upload/v1740393607/Portfolio13_24-02-2025_09-46-44_thumb_p0i6fq.jpg",
      "https://res.cloudinary.com/dsjalneil/image/upload/v1740394075/Portfolio14_24-02-2025_09-46-44_thumb_efwems.jpg",
      "https://res.cloudinary.com/dsjalneil/image/upload/v1740394076/Portfolio15_24-02-2025_09-46-44_thumb_duicdw.png",
      "https://res.cloudinary.com/dsjalneil/image/upload/v1740394075/Portfolio16_24-02-2025_09-46-44_thumb_cvabtj.jpg",
      "https://res.cloudinary.com/dsjalneil/image/upload/v1740395903/Portfolio21_24-02-2025_09-46-44_thumb_wonl16.jpg",
      "https://res.cloudinary.com/dsjalneil/image/upload/v1740395734/Portfolio20_24-02-2025_09-46-44_thumb_usfisk.png",
      "https://res.cloudinary.com/dsjalneil/image/upload/v1740396792/Portfolio23_24-02-2025_09-46-44_thumb_hubtgj.png"
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
      "https://res.cloudinary.com/dsjalneil/image/upload/v1740391359/Portfolio9_24-02-2025_09-42-50_eraeqd.png",
      "https://images.unsplash.com/photo-1606761944722-867a8c99503c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1576772871588-58c399ff5719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
