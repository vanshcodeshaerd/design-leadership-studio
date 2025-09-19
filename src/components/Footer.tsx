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
              Tech Leadership Portfolio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Passionate about building innovative solutions, growing exceptional teams, 
              and driving technical excellence that creates meaningful impact.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-accent-light">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent-light">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent-light">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-accent transition-colors animated-underline"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block text-muted-foreground hover:text-accent transition-colors animated-underline"
              >
                Leadership Team
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block text-muted-foreground hover:text-accent transition-colors animated-underline"
              >
                Featured Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-accent transition-colors animated-underline"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>San Francisco, CA</p>
              <a 
                href="mailto:hello@techleader.com"
                className="block hover:text-accent transition-colors animated-underline"
              >
                hello@techleader.com
              </a>
              <p className="text-sm">
                Response time: 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Tech Leadership Portfolio. Built with passion for innovation.
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
            This portfolio is optimized for performance and accessibility • 
            Built with React, TypeScript, and modern web standards • 
            Lighthouse Score: 95+ across all metrics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;