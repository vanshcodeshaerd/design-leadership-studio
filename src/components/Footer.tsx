import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-gradient-primary">
              Neofolks - Tech Community NUV
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Neofolks is the premier technology and community group at Navrachana University, 
              dedicated to fostering innovation, creativity, and collaboration among students 
              passionate about technology and digital transformation.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-accent-light" asChild>
                <a href="https://github.com/neofolks" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent-light" asChild>
                <a href="https://www.linkedin.com/company/neofolks" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent-light" asChild>
                <a href="mailto:neofolks@nuvstudents.edu">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-accent transition-colors animated-underline"
              >
                About Neofolks
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block text-muted-foreground hover:text-accent transition-colors animated-underline"
              >
                Our Team
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block text-muted-foreground hover:text-accent transition-colors animated-underline"
              >
                Community Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-accent transition-colors animated-underline"
              >
                Connect With Us
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Navrachana University, Vadodara</p>
              <a 
                href="mailto:neofolks@nuvstudents.edu"
                className="block hover:text-accent transition-colors animated-underline"
              >
                neofolks@nuvstudents.edu
              </a>
              <p className="text-sm">
                Community response time: 48 hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Neofolks - Tech Community at Navrachana University. Built with passion for innovation and learning.
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="/privacy" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="/terms" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Terms of Service
            </a>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToTop}
              className="ml-4 hover:text-accent-light"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Performance & Accessibility Statement */}
        <div className="text-center py-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            Official website of Neofolks Tech Community at Navrachana University • 
            Built with modern web technologies and accessibility standards • 
            Empowering students through technology education and innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;