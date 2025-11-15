import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate in DarkCode Rising?",
      answer: "DarkCode Rising is open to all students, developers, and designers. Whether you're a beginner or an experienced coder, everyone is welcome to join and compete.",
    },
    {
      question: "What is the team size?",
      answer: "Teams can have 2-4 members. You can register as a team or join as an individual and we'll help you find teammates during the opening ceremony.",
    },
    {
      question: "Do I need to bring my own equipment?",
      answer: "Yes, please bring your laptop and any necessary equipment. We'll provide WiFi, power outlets, and a comfortable workspace.",
    },
    {
      question: "Is there an entry fee?",
      answer: "No! DarkCode Rising is completely free to attend. You'll receive meals, swag, and access to all event facilities at no cost.",
    },
    {
      question: "What should I bring to the event?",
      answer: "Bring your laptop, chargers, student ID, enthusiasm, and any personal items you might need. We'll provide the rest!",
    },
    {
      question: "Will there be food provided?",
      answer: "Yes! We'll provide lunch, dinner, and snacks throughout the event to keep you energized.",
    },
    {
      question: "How will projects be judged?",
      answer: "Projects will be evaluated based on innovation, technical complexity, design, practicality, and presentation quality by our panel of industry experts.",
    },
    {
      question: "Can I start working on my project before the hackathon?",
      answer: "No, all projects must be started during the hackathon. However, you can brainstorm ideas and prepare yourself beforehand!",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">Frequently Asked</span> Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. If you don't find what you're looking for, reach out to us!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card hover-glow animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
