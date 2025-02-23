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
      event: "about.milestones.founded"
    },
    {
      year: "1995",
      event: "about.milestones.expanded"
    },
    {
      year: "2005",
      event: "about.milestones.iso9001"
    },
    {
      year: "2015",
      event: "about.milestones.sustainable"
    },
    {
      year: "2023",
      event: "about.milestones.completed"
    }
  ]
};

export const teamMembers: TeamMember[] = [
  {
    id: "john-anderson",
    name: "johnAnderson",
    role: "founder_ceo",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    bio: "johnAnderson"
  },
  {
    id: "sarah-williams",
    name: "sarahWilliams",
    role: "chief_operations_officer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    bio: "sarahWilliams"
  },
  {
    id: "michael-chen",
    name: "michaelChen",
    role: "chief_technology_officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "michaelChen"
  }
];
