import { Link } from "react-router-dom";
import { ArrowRight, Users, Code, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Index = () => {
  // Geometric shapes data for animations
  const geometricShapes = [
    { id: 1, type: "diamond", top: "15%", left: "10%", delay: "0s" },
    { id: 2, type: "circle", top: "25%", right: "15%", delay: "1s" },
    { id: 3, type: "triangle", top: "35%", left: "8%", delay: "2s" },
    { id: 4, type: "star", top: "45%", right: "12%", delay: "0.5s" },
    { id: 5, type: "line", top: "55%", left: "5%", delay: "1.5s" },
    { id: 6, type: "square", top: "65%", right: "8%", delay: "2.5s" },
    { id: 7, type: "diamond", top: "20%", left: "85%", delay: "3s" },
    { id: 8, type: "circle", top: "75%", left: "15%", delay: "0.8s" },
    { id: 9, type: "triangle", top: "30%", right: "25%", delay: "1.2s" },
    { id: 10, type: "star", top: "70%", right: "20%", delay: "2.2s" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Neofolks Design */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-900/20" />

        {/* Geometric Shapes */}
        {geometricShapes.map((shape) => (
          <div
            key={shape.id}
            className={`geometric-shape shape-${shape.type}`}
            style={{
              top: shape.top,
              left: shape.left,
              right: shape.right,
              animationDelay: shape.delay,
            }}
          />
        ))}

        {/* University Logo Area */}
        <div className="absolute top-8 left-8 z-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-foreground/90">NAVRACHANA</div>
              <div className="text-xs text-muted-foreground">UNIVERSITY</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container-padding relative z-10 text-center max-w-6xl mx-auto">
          <div className="reveal-fade opacity-100">
            {/* Main Neofolks Title */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-tight tracking-tight">
              {/* Fallback visible text */}
              <span className="text-white drop-shadow-2xl font-extrabold block mb-4">NeoFolks</span>
              {/* Gradient text overlay */}
              <span
                className="text-neofolks-gradient drop-shadow-2xl font-extrabold absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, #B794F6, #F687B3, #FBB6CE, #FED7AA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                }}
              >
                NeoFolks
              </span>
            </h1>

            {/* Year Badge */}
            <div className="inline-flex items-center justify-center mb-12">
              <div className="year-badge px-8 py-3 rounded-lg">
                <span className="text-2xl sm:text-3xl font-bold text-accent">2025</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              A student-led club at Navrachana University
              <br />
              <span className="text-accent-light">Innovating • Learning • Growing Together</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button variant="hero" size="xl" asChild className="group btn-premium text-lg px-8 py-4">
                <Link to="/about">
                  Discover Our Journey
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild className="btn-premium text-lg px-8 py-4">
                <Link to="/join">Join The Community</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">40</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Tech Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Strong</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-card/20">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient-primary">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Neofolks connects students with technology through hands-on learning, community building, and real-world
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card glass-card-hover rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Workshops</h3>
              <p className="text-muted-foreground">
                Hands-on coding sessions, hackathons, and skill-building workshops
              </p>
            </div>

            <div className="glass-card glass-card-hover rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Building</h3>
              <p className="text-muted-foreground">Connect with like-minded students and build lasting friendships</p>
            </div>

            <div className="glass-card glass-card-hover rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tech Events</h3>
              <p className="text-muted-foreground">
                Industry talks, competitions, and networking events throughout the year
              </p>
            </div>

            <div className="glass-card glass-card-hover rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mentorship</h3>
              <p className="text-muted-foreground">
                Connect with seniors and industry professionals for guidance and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container mx-auto container-padding text-center">
          <div className="glass-card rounded-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background geometric elements */}
            <div className="absolute top-4 right-4 geometric-shape shape-diamond opacity-30" />
            <div className="absolute bottom-4 left-4 geometric-shape shape-circle opacity-30" />

            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
              Ready to Join Our Tech Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a beginner or an experienced developer, there's a place for you in our growing community at
              Navrachana University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild className="btn-premium">
                <Link to="/join">
                  Become a Member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="leadership" size="xl" asChild className="btn-premium">
                <Link to="/events">View Upcoming Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
