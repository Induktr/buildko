import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      category: "Sustainability",
      date: "January 15, 2024",
      title: "Sustainable Construction Trends for 2024",
      description: "Explore the latest trends in sustainable construction and how they're shaping the future of our industry.",
      author: "Sarah Williams",
      image: "/placeholder.svg"
    },
    {
      category: "Technology",
      date: "January 10, 2024",
      title: "How Technology is Revolutionizing Construction",
      description: "From BIM to robotics, discover how new technologies are changing the construction landscape.",
      author: "Michael Chen",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-4">Our Blog</h1>
        <p className="text-center text-muted-foreground mb-12">
          Insights and updates from the construction industry
        </p>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary">{post.category}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-muted-foreground">{post.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">By {post.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;