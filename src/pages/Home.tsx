import { Link } from "react-router-dom";
import { ArrowRight, Users, Code, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-gradient opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float floating-delayed" />
        </div>

        {/* Content */}
        <div className="container-padding relative z-10 text-center max-w-5xl mx-auto">
          <div className="reveal-fade">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Welcome to</span>
              <span className="block text-gradient-primary">Neofolks</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The premier technology club at Navrachana University, fostering innovation, 
              creativity, and collaboration among students passionate about technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="hero" 
                size="xl" 
                asChild
                className="group"
              >
                <Link to="/about">
                  Learn More About Us 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="glass" 
                size="xl" 
                asChild
              >
                <Link to="/join">
                  Join Our Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="section-padding bg-card/20">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient-primary">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Neofolks connects students with technology through hands-on learning, 
              community building, and real-world projects.
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
              <p className="text-muted-foreground">
                Connect with like-minded students and build lasting friendships
              </p>
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
          <div className="glass-card rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Join Our Tech Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a beginner or an experienced developer, there's a place 
              for you in our growing community at Navrachana University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/join">
                  Become a Member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="leadership" size="xl" asChild>
                <Link to="/events">
                  View Upcoming Events
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;