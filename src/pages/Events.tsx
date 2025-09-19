import { Calendar, Clock, MapPin, Users, Code, Trophy, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

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
}

const Events = () => {
  const upcomingEvents: Event[] = [
    {
      id: "react-workshop",
      title: "React.js Fundamentals Workshop",
      description: "Learn the basics of React.js including components, state management, and hooks. Perfect for beginners looking to start their web development journey.",
      date: "2024-02-15",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab 1, NUV",
      type: "Workshop",
      status: "Registration Open",
      attendees: 25,
      maxAttendees: 40,
      tags: ["React", "JavaScript", "Web Development", "Beginner"]
    },
    {
      id: "ai-seminar",
      title: "AI in Modern Applications",
      description: "Industry expert talk on how artificial intelligence is transforming various sectors and future opportunities in AI development.",
      date: "2024-02-22",
      time: "11:00 AM - 12:30 PM",
      location: "Auditorium A, NUV",
      type: "Seminar",
      status: "Upcoming",
      attendees: 45,
      maxAttendees: 100,
      tags: ["AI", "Machine Learning", "Industry Talk", "Career"]
    },
    {
      id: "hackathon-2024",
      title: "Neofolks Hackathon 2024",
      description: "48-hour coding marathon to build innovative solutions for real-world problems. Open to all skill levels with mentorship and exciting prizes.",
      date: "2024-03-08",
      time: "9:00 AM - 9:00 AM (+2 days)",
      location: "Innovation Center, NUV",
      type: "Hackathon",
      status: "Registration Open",
      attendees: 60,
      maxAttendees: 80,
      tags: ["Hackathon", "Innovation", "Competition", "Team Building"]
    }
  ];

  const pastEvents: Event[] = [
    {
      id: "python-basics",
      title: "Python Programming Basics",
      description: "Introduction to Python programming covering syntax, data structures, and basic algorithms.",
      date: "2024-01-20",
      time: "2:00 PM - 4:00 PM",
      location: "Computer Lab 2, NUV",
      type: "Workshop",
      status: "Past",
      attendees: 35,
      maxAttendees: 35,
      tags: ["Python", "Programming", "Beginner"]
    },
    {
      id: "tech-talk-startup",
      title: "Building Tech Startups",
      description: "Alumni talk on entrepreneurship journey and building successful tech startups from college.",
      date: "2024-01-15",
      time: "4:00 PM - 5:30 PM",
      location: "Seminar Hall, NUV",
      type: "Seminar",
      status: "Past",
      attendees: 80,
      maxAttendees: 80,
      tags: ["Entrepreneurship", "Startup", "Alumni Talk"]
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
      case "Registration Open": return "bg-green-500/20 text-green-300";
      case "Upcoming": return "bg-blue-500/20 text-blue-300";
      case "Past": return "bg-gray-500/20 text-gray-300";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section-padding bg-gradient-glow/10">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient-primary">
            Events & Activities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for exciting workshops, seminars, hackathons, and community events. 
            From beginner-friendly sessions to advanced technical challenges, there's something for everyone.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold mb-8 text-gradient-primary">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {upcomingEvents.map((event) => {
              const IconComponent = getEventIcon(event.type);
              return (
                <div key={event.id} className="glass-card glass-card-hover rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.type}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{event.location}</span>
                    </div>
                    {event.maxAttendees && (
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-accent" />
                        <span>{event.attendees}/{event.maxAttendees} registered</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {event.status === "Registration Open" && (
                    <Button variant="hero" className="w-full">
                      Register Now
                    </Button>
                  )}
                  {event.status === "Upcoming" && (
                    <Button variant="leadership" className="w-full">
                      Learn More
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="section-padding bg-card/20">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold text-center mb-12">Event Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Workshops</h3>
              <p className="text-muted-foreground text-sm">
                Hands-on coding sessions covering various programming languages and frameworks
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Seminars</h3>
              <p className="text-muted-foreground text-sm">
                Expert talks on latest technology trends and career guidance sessions
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitions</h3>
              <p className="text-muted-foreground text-sm">
                Hackathons, coding contests, and project competitions with exciting prizes
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Events</h3>
              <p className="text-muted-foreground text-sm">
                Networking sessions, social gatherings, and collaborative learning experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pastEvents.map((event) => {
              const IconComponent = getEventIcon(event.type);
              return (
                <div key={event.id} className="glass-card rounded-xl p-6 opacity-80">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                      <IconComponent className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(event.date)} • {event.attendees} attended
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs opacity-70">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-card/20">
        <div className="container mx-auto container-padding text-center">
          <div className="glass-card rounded-2xl p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated with Our Events
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't miss out on exciting learning opportunities and networking events. 
              Join our community to get notified about upcoming workshops and seminars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Join Neofolks Community
              </Button>
              <Button variant="leadership" size="lg">
                Follow Our Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;