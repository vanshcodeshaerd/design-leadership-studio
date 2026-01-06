import { Calendar, Clock, MapPin, Users, Code, Trophy, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

// Import event images
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
      description: "Introduction to Python programming covering syntax, data structures, and basic algorithms. Students learned fundamental concepts through hands-on coding exercises.",
      date: "2024-01-20",
      time: "2:00 PM - 4:00 PM",
      location: "Computer Lab 2, NUV",
      type: "Workshop",
      status: "Past",
      attendees: 35,
      maxAttendees: 35,
      tags: ["Python", "Programming", "Beginner"],
      image: event1Img
    },
    {
      id: "tech-talk-startup",
      title: "Building Tech Startups",
      description: "Inspiring alumni talk on entrepreneurship journey and building successful tech startups from college. Shared real experiences and practical advice.",
      date: "2024-01-15",
      time: "4:00 PM - 5:30 PM",
      location: "Seminar Hall, NUV",
      type: "Seminar",
      status: "Past",
      attendees: 80,
      maxAttendees: 80,
      tags: ["Entrepreneurship", "Startup", "Alumni Talk"],
      image: event2Img
    },
    {
      id: "web-dev-bootcamp",
      title: "Web Development Bootcamp",
      description: "Intensive 3-day bootcamp covering HTML, CSS, JavaScript, and React fundamentals. Students built their first responsive websites.",
      date: "2023-12-10",
      time: "10:00 AM - 4:00 PM",
      location: "Innovation Center, NUV",
      type: "Workshop",
      status: "Past",
      attendees: 45,
      maxAttendees: 50,
      tags: ["Web Development", "React", "JavaScript", "Intensive"],
      image: event3Img
    },
    {
      id: "winter-hackathon",
      title: "Winter Code Hackathon",
      description: "24-hour coding marathon where students developed innovative solutions for campus problems. Great learning experience with mentorship.",
      date: "2023-12-01",
      time: "6:00 PM - 6:00 PM (+1 day)",
      location: "Computer Labs, NUV",
      type: "Hackathon",
      status: "Past",
      attendees: 60,
      maxAttendees: 80,
      tags: ["Hackathon", "Innovation", "24-hour", "Competition"],
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
      <section className="page-header-padding">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient-primary">
            Events & Activities
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us for exciting workshops, seminars, hackathons, and community events. 
            From beginner-friendly sessions to advanced technical challenges, there's something for everyone.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding-sm">
        <div className="container mx-auto container-padding">
          <h2 className="text-2xl font-bold mb-6 text-gradient-primary">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {upcomingEvents.map((event) => {
              const IconComponent = getEventIcon(event.type);
              return (
                <div key={event.id} className="glass-card glass-card-hover rounded-xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <p className="text-xs text-muted-foreground">{event.type}</p>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(event.status)} text-xs`}>
                      {event.status}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-accent" />
                      <span className="truncate">{formatDate(event.date).split(',')[1]}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-accent" />
                      <span className="truncate">{event.time.split(' - ')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    {event.maxAttendees && (
                      <div className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-accent" />
                        <span>{event.attendees}/{event.maxAttendees}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {event.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs py-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {event.status === "Registration Open" && (
                    <Button variant="hero" size="sm" className="w-full" asChild>
                      <a href="/join">Register Now</a>
                    </Button>
                  )}
                  {event.status === "Upcoming" && (
                    <Button variant="leadership" size="sm" className="w-full" asChild>
                      <a href="/contact">Learn More</a>
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="section-padding-sm bg-card/20">
        <div className="container mx-auto container-padding">
          <h2 className="text-2xl font-bold text-center mb-8">Event Categories</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-3">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-base font-semibold mb-1">Technical Workshops</h3>
              <p className="text-muted-foreground text-xs">
                Hands-on coding sessions
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-3">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-base font-semibold mb-1">Industry Seminars</h3>
              <p className="text-muted-foreground text-xs">
                Expert talks & guidance
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-3">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-base font-semibold mb-1">Competitions</h3>
              <p className="text-muted-foreground text-xs">
                Hackathons & contests
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-base font-semibold mb-1">Community Events</h3>
              <p className="text-muted-foreground text-xs">
                Networking sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="section-padding-sm">
        <div className="container mx-auto container-padding">
          <h2 className="text-2xl font-bold mb-2 text-gradient-primary text-center">Our Past Events</h2>
          <p className="text-center text-muted-foreground text-sm mb-8 max-w-2xl mx-auto">
            Take a look at some of our recent successful events.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => {
              const IconComponent = getEventIcon(event.type);
              return (
                <div key={event.id} className="glass-card glass-card-hover rounded-xl overflow-hidden group">
                  {/* Event Image */}
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-black/70 text-white border-white/20 text-xs">
                        {formatDate(event.date).split(',')[1]}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-black/70 backdrop-blur-sm">
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base font-semibold group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {event.type}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-xs mb-3 leading-relaxed line-clamp-2">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{event.attendees} attended</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="text-center mt-8">
            <Button variant="leadership" size="sm" asChild>
              <a href="https://www.instagram.com/neofolks/" target="_blank" rel="noopener noreferrer">
                View All Past Events
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding-sm bg-card/20">
        <div className="container mx-auto container-padding text-center">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Stay Updated with Our Events
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Don't miss out on exciting learning opportunities and networking events.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="sm" asChild>
                <a href="/join">Join Neofolks</a>
              </Button>
              <Button variant="leadership" size="sm" asChild>
                <a href="https://www.instagram.com/neofolks/" target="_blank" rel="noopener noreferrer">
                  Follow Updates
                </a>
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
