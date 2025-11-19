import { Clock } from "lucide-react";

const Schedule = () => {
  const scheduleItems = [
    { time: "8:30 AM", event: "Registration & Check-in", description: "Get your badges and swag" },
    { time: "10:00 AM", event: "Opening Ceremony", description: "Welcome speech and rules briefing" },
    { time: "10:30 AM", event: "Hacking Begins", description: "Let the coding commence!" },
    { time: "1:00 PM", event: "Lunch Break", description: "Fuel up with food and networking" },
    { time: "3:00 PM", event: "Judging round", description: "Showcase your innovations" },
    { time: "4:30 PM", event: "Results", description: "Winners announcement" },
    { time: "5:00 PM", event: "closing Ceremony", description: "Merch distribution" },
  ];

  return (
    <section id="schedule" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">Event</span> Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A perfectly orchestrated 10-hour journey from ideation to presentation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {scheduleItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start mb-8 animate-slide-up ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className={`inline-block p-6 rounded-lg bg-card border border-border hover-glow ${
                    index % 2 === 0 ? "ml-16 md:ml-0" : "ml-16 md:ml-0"
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="text-primary" size={20} />
                      <span className="text-primary font-semibold">{item.time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{item.event}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:-translate-x-1/2 neon-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
