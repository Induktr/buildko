import Navbar from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqSections = {
    General: [
      {
        question: "What types of projects do you typically handle?",
        answer: "We handle a wide range of construction projects including residential, commercial, industrial, and renovation work. Our expertise spans from luxury homes to large-scale commercial complexes.",
      }
    ],
    Quality: [
      {
        question: "How do you ensure project quality?",
        answer: "We maintain strict quality control measures, follow ISO 9001 standards, and employ experienced professionals who oversee every aspect of construction.",
      }
    ],
    Sustainability: [
      {
        question: "What is your approach to sustainable construction?",
        answer: "We integrate eco-friendly materials, energy-efficient designs, and sustainable practices in all our projects, minimizing environmental impact while maximizing long-term value.",
      }
    ],
    "Project Management": [
      {
        question: "How do you handle project timelines and deadlines?",
        answer: "We use advanced project management tools and methodologies to ensure efficient scheduling, resource allocation, and timely completion of all project milestones.",
      }
    ],
    Safety: [
      {
        question: "What safety measures do you have in place?",
        answer: "We maintain comprehensive safety protocols, regular training programs, and strict compliance with all relevant safety regulations and standards.",
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
        <p className="text-center text-muted-foreground mb-12">
          Find answers to common questions about our services
        </p>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {Object.entries(faqSections).map(([section, questions]) => (
            <div key={section}>
              <h2 className="text-2xl font-semibold mb-4">{section}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${section}-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;