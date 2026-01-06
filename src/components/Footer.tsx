import { Github, Linkedin, Mail, ArrowUp, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-card/30 border-t border-border/50">
      <div className="container mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              
              <span className="font-semibold text-gradient-primary">Neofolks</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-sm">
              The premier tech community at Navrachana University, fostering innovation 
              and collaboration among students passionate about technology.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-violet-400 hover:bg-violet-500/10" asChild>
                <a href="https://github.com/neofolks" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-violet-400 hover:bg-violet-500/10" asChild>
                <a href="https://www.linkedin.com/company/neofolks" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-violet-400 hover:bg-violet-500/10" asChild>
                <a href="https://www.instagram.com/neofolks/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-violet-400 hover:bg-violet-500/10" asChild>
                <a href="mailto:neofolks@nuvstudents.edu">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[{
              to: "/about",
              label: "About Us"
            }, {
              to: "/team",
              label: "Our Team"
            }, {
              to: "/events",
              label: "Events"
            }, {
              to: "/contact",
              label: "Contact"
            }].map(link => <Link key={link.to} to={link.to} className="block text-xs text-muted-foreground hover:text-violet-400 transition-colors">
                  {link.label}
                </Link>)}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Connect</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>Navrachana University</p>
              <p>Vadodara, Gujarat</p>
              <a href="mailto:neofolks@nuvstudents.edu" className="block hover:text-violet-400 transition-colors">neofolks@nuv.ac.in

            </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xs text-muted-foreground">© 2026 Neofolks. Built with passion for technology.</div>
          
          <div className="flex items-center gap-3">
            <Link to="/join" className="text-xs text-muted-foreground hover:text-violet-400 transition-colors">
              Join Us
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link to="/events" className="text-xs text-muted-foreground hover:text-violet-400 transition-colors">
              Events
            </Link>
            <Button variant="ghost" size="icon" onClick={scrollToTop} className="ml-2 h-7 w-7 hover:text-violet-400 hover:bg-violet-500/10" aria-label="Scroll to top">
              <ArrowUp className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;