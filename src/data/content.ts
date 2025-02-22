export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const companyHistory = {
  founded: "1985",
  story: `BuildCo was founded in 1985 by John Anderson with a vision to transform the construction industry through innovation and quality. What started as a small residential construction company has grown into one of the region's most trusted construction firms.

Over the past decades, we've completed over 500 major projects, ranging from luxury residential developments to large-scale commercial complexes. Our commitment to quality, safety, and innovation has earned us numerous industry awards and certifications.

Today, BuildCo continues to lead the industry in sustainable construction practices and technological innovation, while maintaining the same dedication to quality and customer satisfaction that has been our hallmark since day one.`,
  milestones: [
    {
      year: "1985",
      event: "Company founded by John Anderson"
    },
    {
      year: "1995",
      event: "Expanded into commercial construction"
    },
    {
      year: "2005",
      event: "Achieved ISO 9001 certification"
    },
    {
      year: "2015",
      event: "Launched sustainable construction division"
    },
    {
      year: "2023",
      event: "Completed 500th major project"
    }
  ]
};

export const teamMembers: TeamMember[] = [
  {
    id: "john-anderson",
    name: "John Anderson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    bio: "With over 35 years of experience in construction, John has led BuildCo from a small residential contractor to a major regional construction firm."
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    bio: "Sarah brings 20 years of operational expertise and has been instrumental in streamlining our project delivery processes."
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Michael leads our digital transformation initiatives and implementation of cutting-edge construction technologies."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "sustainable-construction-2024",
    title: "Sustainable Construction Trends for 2024",
    excerpt: "Explore the latest trends in sustainable construction and how they're shaping the future of our industry.",
    content: `Sustainable construction has become more than just a trend – it's now a fundamental aspect of modern building practices. In 2024, we're seeing several key developments that are transforming how we approach construction projects.

First, there's been a significant increase in the use of recycled and sustainable materials. From recycled steel to bamboo, contractors are finding innovative ways to reduce their environmental impact while maintaining structural integrity.

Another major trend is the integration of smart building technologies that optimize energy usage. Advanced sensors and AI-powered systems are helping buildings operate more efficiently than ever before.

We're also seeing a growing emphasis on water conservation through the implementation of rainwater harvesting systems and water-efficient fixtures. These solutions not only help the environment but also reduce operating costs for building owners.`,
    author: "Sarah Williams",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    category: "Sustainability"
  },
  {
    id: "technology-construction",
    title: "How Technology is Revolutionizing Construction",
    excerpt: "From BIM to robotics, discover how new technologies are changing the construction landscape.",
    content: `The construction industry is experiencing a technological revolution that's changing how we plan, execute, and manage projects. Building Information Modeling (BIM) has become an essential tool, allowing us to create detailed 3D models that improve coordination and reduce errors.

Drones are now regularly used for site surveys and project monitoring, providing accurate data and improving safety. Meanwhile, robotics and automation are beginning to make their way onto construction sites, handling tasks from bricklaying to demolition.

Perhaps most exciting is the emergence of AI and machine learning in construction planning and risk assessment. These technologies are helping us make better decisions and predict potential issues before they occur.`,
    author: "Michael Chen",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1585859758524-71428efb5711",
    category: "Technology"
  }
];

export const faqs: FAQ[] = [
  {
    question: "What types of projects do you typically handle?",
    answer: "We handle a wide range of construction projects, including residential, commercial, and industrial developments. Our expertise spans from luxury homes to office complexes and manufacturing facilities.",
    category: "General"
  },
  {
    question: "How do you ensure project quality?",
    answer: "We maintain strict quality control processes throughout each project, including regular inspections, adherence to industry standards, and continuous supervision by experienced project managers.",
    category: "Quality"
  },
  {
    question: "What is your approach to sustainable construction?",
    answer: "We prioritize sustainable building practices by using eco-friendly materials, implementing energy-efficient systems, and following LEED guidelines when applicable.",
    category: "Sustainability"
  },
  {
    question: "How do you handle project timelines and deadlines?",
    answer: "We create detailed project schedules using advanced planning software and maintain regular communication with all stakeholders to ensure projects stay on track.",
    category: "Project Management"
  },
  {
    question: "What safety measures do you have in place?",
    answer: "Safety is our top priority. We maintain comprehensive safety programs, regular training sessions, and strict compliance with all OSHA regulations.",
    category: "Safety"
  }
];
