import { Button } from "./ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="DarkCode Rising Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Video Background Alternative (uncomment and add your video URL) */}
      {/* <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="YOUR_VIDEO_URL.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div> */}

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center relative">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Event Badge */}
          <div className="inline-block px-4 py-2 neon-border rounded-full bg-background/50 backdrop-blur-sm relative z-20">
            <span className="text-primary text-glow font-semibold">10-Hour Innovation Sprint</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-primary text-glow block mb-2">DarkCode Rising</span>
            <span className="text-foreground">Where Darkness Meets Innovation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join the ultimate Batman-themed hackathon. Code in the shadows, innovate in the light.
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 text-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="text-primary" size={20} />
              <span>January 17, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-primary" size={20} />
              <span>10 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" size={20} />
              <span>In-Person Event</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 neon-glow hover-glow"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-border text-lg px-8 py-6 hover-glow"
            >
              View Schedule
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-float">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
