import Navbar from "@/components/Navbar";
import { Avatar } from "@/components/ui/avatar";

const About = () => {
  const milestones = [
    { year: "1985", event: "Company founded by John Anderson" },
    { year: "1995", event: "Expanded into commercial construction" },
    { year: "2005", event: "Achieved ISO 9001 certification" },
    { year: "2015", event: "Launched sustainable construction division" },
    { year: "2023", event: "Completed 500th major project" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12 space-y-16">
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-center">Our Story</h1>
          <p className="text-xl text-center text-muted-foreground">Building excellence since 1985</p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            BuildCo was founded in 1985 by John Anderson with a vision to transform the construction industry through innovation and quality. What started as a small residential construction company has grown into one of the region's most trusted construction firms. Over the past decades, we've completed over 500 major projects, ranging from luxury residential developments to large-scale commercial complexes. Our commitment to quality, safety, and innovation has earned us numerous industry awards and certifications. Today, BuildCo continues to lead the industry in sustainable construction practices and technological innovation, while maintaining the same dedication to quality and customer satisfaction that has been our hallmark since day one.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Key Milestones</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="flex items-start gap-4">
                <span className="text-primary font-bold w-16">{milestone.year}</span>
                <div className="w-0.5 bg-primary/20 h-full min-h-[24px]" />
                <span className="flex-1">{milestone.event}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Our Leadership Team</h2>
          <div className="flex justify-center">
            <div className="text-center space-y-4">
              <Avatar className="w-32 h-32 mx-auto">
                <img src="/placeholder.svg" alt="John Anderson" className="object-cover" />
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">John Anderson</h3>
                <p className="text-primary">Founder & CEO</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;