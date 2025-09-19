import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
            <span className="block">Neofolks</span>
            <span className="block text-gradient-primary">Tech Community at NUV</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The premier technology and community group at Navrachana University, fostering innovation, 
            creativity, and collaboration among students passionate about technology and digital innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              asChild
              className="group"
            >
              <Link to="/about">
                Learn About Us 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              variant="glass" 
              size="xl" 
              asChild
            >
              <Link to="/team">
                Meet Our Team
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="hover:text-accent-light" asChild>
              <a href="https://www.linkedin.com/company/neofolks" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn - NeoFolks Community</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent-light" asChild>
              <a href="mailto:neofolks@nuvstudents.edu">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email Neofolks</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent-light" asChild>
              <a href="https://github.com/neofolks" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub Projects</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-accent-light transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;