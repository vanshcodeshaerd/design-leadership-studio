import { Calendar, Clock, MapPin, Users, Code, Trophy, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";

import event1Img from "@/assets/events/event-1.jpg";
import event2Img from "@/assets/events/event-2.jpg";
import event3Img from "@/assets/events/event-3.jpg";
import event4Img from "@/assets/events/event-4.jpg";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "Workshop" | "Seminar" | "Hackathon" | "Competition" | "Social";
  status: "Upcoming" | "Registration Open" | "Past";
  attendees?: number;
  maxAttendees?: number;
  tags: string[];
  image?: string;
}

const Events = () => {
  const upcomingEvents: Event[] = [
    {
      id: "react-workshop",
      title: "React.js Fundamentals Workshop",
      description: "Learn the basics of React.js including components, state management, and hooks.",
      date: "2024-02-15",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab 1, NUV",
      type: "Workshop",
      status: "Registration Open",
      attendees: 25,
      maxAttendees: 40,
      tags: ["React", "JavaScript", "Web Dev"]
    },
    {
      id: "ai-seminar",
      title: "AI in Modern Applications",
      description: "Industry expert talk on how AI is transforming various sectors.",
      date: "2024-02-22",
      time: "11:00 AM - 12:30 PM",
      location: "Auditorium A, NUV",
      type: "Seminar",
      status: "Upcoming",
      attendees: 45,
      maxAttendees: 100,
      tags: ["AI", "Machine Learning", "Career"]
    },
    {
      id: "hackathon-2024",
      title: "Neofolks Hackathon 2024",
      description: "48-hour coding marathon to build innovative solutions.",
      date: "2024-03-08",
      time: "9:00 AM - 9:00 AM (+2 days)",
      location: "Innovation Center, NUV",
      type: "Hackathon",
      status: "Registration Open",
      attendees: 60,
      maxAttendees: 80,
      tags: ["Hackathon", "Innovation", "Competition"]
    }
  ];

  const pastEvents: Event[] = [
    {
      id: "python-basics",
      title: "Python Programming Basics",
      description: "Introduction to Python covering syntax, data structures, and algorithms.",
      date: "2024-01-20",
      time: "2:00 PM - 4:00 PM",
      location: "Computer Lab 2, NUV",
      type: "Workshop",
      status: "Past",
      attendees: 35,
      maxAttendees: 35,
      tags: ["Python", "Programming"],
      image: event1Img
    },
    {
      id: "tech-talk-startup",
      title: "Building Tech Startups",
      description: "Inspiring alumni talk on entrepreneurship and building successful startups.",
      date: "2024-01-15",
      time: "4:00 PM - 5:30 PM",
      location: "Seminar Hall, NUV",
      type: "Seminar",
      status: "Past",
      attendees: 80,
      maxAttendees: 80,
      tags: ["Entrepreneurship", "Startup"],
      image: event2Img
    },
    {
      id: "web-dev-bootcamp",
      title: "Web Development Bootcamp",
      description: "Intensive 3-day bootcamp covering HTML, CSS, JavaScript, and React.",
      date: "2023-12-10",
      time: "10:00 AM - 4:00 PM",
      location: "Innovation Center, NUV",
      type: "Workshop",
      status: "Past",
      attendees: 45,
      maxAttendees: 50,
      tags: ["Web Dev", "React", "JavaScript"],
      image: event3Img
    },
    {
      id: "winter-hackathon",
      title: "Winter Code Hackathon",
      description: "24-hour coding marathon with innovative campus solutions.",
      date: "2023-12-01",
      time: "6:00 PM - 6:00 PM (+1 day)",
      location: "Computer Labs, NUV",
      type: "Hackathon",
      status: "Past",
      attendees: 60,
      maxAttendees: 80,
      tags: ["Hackathon", "Innovation"],
      image: event4Img
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case "Workshop": return Code;
      case "Seminar": return Lightbulb;
      case "Hackathon": return Trophy;
      case "Competition": return Trophy;
      default: return Calendar;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Registration Open": return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "Upcoming": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Past": return "bg-muted/30 text-muted-foreground border-border";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const eventCategories = [
    { icon: Code, title: "Technical Workshops", desc: "Hands-on coding sessions" },
    { icon: Lightbulb, title: "Industry Seminars", desc: "Expert talks & guidance" },
    { icon: Trophy, title: "Competitions", desc: "Hackathons & contests" },
    { icon: Users, title: "Community Events", desc: "Networking sessions" }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header-padding relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="container mx-auto container-padding text-center relative z-10">
          <ParallaxSection>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">What's Happening</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient-hero">
              Events & Activities
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Join us for exciting workshops, seminars, hackathons, and community events.
            </p>
          </ParallaxSection>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding-sm">
        <div className="container mx-auto container-padding">
          <ParallaxSection>
            <h2 className="text-xl font-bold mb-5 text-gradient-primary">Upcoming Events</h2>
          </ParallaxSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            {upcomingEvents.map((event, index) => {
              const IconComponent = getEventIcon(event.type);
              return (
                <ParallaxSection key={event.id} delay={index * 80}>
                  <div className="feature-card">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg icon-gradient flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold">{event.title}</h3>
                          <p className="text-[10px] text-muted-foreground">{event.type}</p>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(event.status)} text-[10px] border`}>
                        {event.status}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-xs mb-3 leading-relaxed line-clamp-2">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-3 text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3 text-violet-400" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3 text-violet-400" />
                        <span className="truncate">{event.time.split(' - ')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3 text-violet-400" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      {event.maxAttendees && (
                        <div className="flex items-center gap-1.5">
                          <Users className="h-3 w-3 text-violet-400" />
                          <span>{event.attendees}/{event.maxAttendees}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {event.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-[10px] py-0 border-border">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {event.status === "Registration Open" && (
                      <Button className="w-full btn-premium text-white text-xs py-2 rounded-lg" asChild>
                        <a href="/join">Register Now</a>
                      </Button>
                    )}
                    {event.status === "Upcoming" && (
                      <Button variant="outline" className="w-full text-xs py-2 btn-outline-glow" asChild>
                        <a href="/contact">Learn More</a>
                      </Button>
                    )}
                  </div>
                </ParallaxSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="section-padding-xs bg-card/20">
        <div className="container mx-auto container-padding">
          <ParallaxSection>
            <h2 className="text-lg font-bold text-center mb-6">Event Categories</h2>
          </ParallaxSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {eventCategories.map((cat, index) => (
              <ParallaxSection key={index} delay={index * 60}>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-lg icon-gradient mx-auto mb-2 flex items-center justify-center">
                    <cat.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xs font-semibold mb-0.5">{cat.title}</h3>
                  <p className="text-muted-foreground text-[10px]">{cat.desc}</p>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="section-padding-sm">
        <div className="container mx-auto container-padding">
          <ParallaxSection>
            <h2 className="text-xl font-bold mb-2 text-gradient-primary text-center">Past Events</h2>
            <p className="text-center text-muted-foreground text-xs mb-6 max-w-xl mx-auto">
              A look at some of our recent successful events.
            </p>
          </ParallaxSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pastEvents.map((event, index) => {
              const IconComponent = getEventIcon(event.type);
              return (
                <ParallaxSection key={event.id} delay={index * 80}>
                  <div className="glass-card rounded-xl overflow-hidden group">
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-black/60 text-white border-white/20 text-[10px]">
                          {formatDate(event.date)}
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="w-7 h-7 rounded-md bg-black/60 backdrop-blur-sm flex items-center justify-center">
                          <IconComponent className="h-3.5 w-3.5 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold group-hover:text-violet-400 transition-colors">
                          {event.title}
                        </h3>
                        <Badge variant="outline" className="text-[10px] border-border">
                          {event.type}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground text-xs mb-2 leading-relaxed line-clamp-2">
                        {event.description}
                      </p>

                      <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-2.5 w-2.5" />
                          <span className="truncate">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-2.5 w-2.5" />
                          <span>{event.attendees} attended</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ParallaxSection>
              );
            })}
          </div>

          <ParallaxSection delay={400}>
            <div className="text-center mt-6">
              <Button variant="outline" size="sm" className="text-xs btn-outline-glow" asChild>
                <a href="https://www.instagram.com/neofolks/" target="_blank" rel="noopener noreferrer">
                  View All Past Events
                </a>
              </Button>
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding-xs bg-card/20">
        <div className="container mx-auto container-padding text-center">
          <ParallaxSection>
            <div className="glass-card rounded-xl p-6 max-w-lg mx-auto">
              <h2 className="text-lg font-bold mb-2">Stay Updated</h2>
              <p className="text-xs text-muted-foreground mb-5">
                Don't miss out on exciting learning opportunities and events.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button className="btn-premium text-white text-xs" asChild>
                  <a href="/join">Join Neofolks</a>
                </Button>
                <Button variant="outline" className="text-xs btn-outline-glow" asChild>
                  <a href="https://www.instagram.com/neofolks/" target="_blank" rel="noopener noreferrer">
                    Follow Updates
                  </a>
                </Button>
              </div>
            </div>
          </ParallaxSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
