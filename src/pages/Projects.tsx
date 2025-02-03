import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Commercial", "Residential", "Industrial", "Renovation"];
  
  const projects = [
    {
      category: "Commercial",
      title: "Modern Office Complex",
      description: "A state-of-the-art office complex featuring sustainable design elements and smart building technology.",
      image: "/placeholder.svg"
    },
    {
      category: "Residential",
      title: "Luxury Residential Complex",
      description: "An exclusive residential development featuring premium amenities and custom finishes.",
      image: "/placeholder.svg"
    },
    {
      category: "Industrial",
      title: "Industrial Warehouse Facility",
      description: "A modern warehouse facility with advanced logistics capabilities and sustainable features.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-4">Our Projects</h1>
        <p className="text-center text-muted-foreground mb-8">
          Explore our portfolio of successful construction projects
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "secondary"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => activeFilter === "All" || project.category === activeFilter)
            .map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;