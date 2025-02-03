import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ 
        backgroundImage: `url('/lovable-uploads/d9af44cb-a48a-4931-b04f-19d50a43fc95.png')` 
      }}>
        <div className="absolute inset-0 bg-secondary/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up">
            Building Tomorrow's World Today
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Expert construction services with a commitment to quality, safety, and innovation.
          </p>
          <div className="space-x-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-primary hover:bg-primary/90">Our Projects</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;