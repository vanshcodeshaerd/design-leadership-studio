import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Phone, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormData({ name: "", email: "", subject: "", message: "" });
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setIsSubmitting(false);
  };

  const contactMethods = [
    { icon: Mail, title: "Email", value: "neofolks@nuvstudents.edu", href: "mailto:neofolks@nuvstudents.edu" },
    { icon: Linkedin, title: "LinkedIn", value: "NeoFolks Community", href: "https://linkedin.com/company/neofolks-nuv" },
    { icon: Instagram, title: "Instagram", value: "@neofolks", href: "https://www.instagram.com/neofolks/" },
    { icon: Github, title: "GitHub", value: "github.com/neofolks-nuv", href: "https://github.com/neofolks-nuv" }
  ];

  return (
    <div className="min-h-screen">
      <section className="page-header-padding relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="container mx-auto container-padding text-center relative z-10">
          <ParallaxSection>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Reach Out</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient-hero">Get In Touch</h1>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">Have questions? Want to join or collaborate? We'd love to hear from you.</p>
          </ParallaxSection>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <ParallaxSection key={index} delay={index * 80}>
                  <a href={method.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 rounded-xl hover:bg-card/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg icon-gradient flex items-center justify-center"><method.icon className="h-5 w-5 text-white" /></div>
                    <div><p className="text-xs text-muted-foreground">{method.title}</p><span className="text-sm group-hover:text-violet-400 transition-colors">{method.value}</span></div>
                  </a>
                </ParallaxSection>
              ))}
              <ParallaxSection delay={400}>
                <div className="flex items-center gap-4 p-3">
                  <div className="w-10 h-10 rounded-lg icon-gradient-outline flex items-center justify-center"><MapPin className="h-5 w-5 text-violet-400" /></div>
                  <div><p className="text-xs text-muted-foreground">Location</p><span className="text-sm">Navrachana University, Vadodara</span></div>
                </div>
              </ParallaxSection>
            </div>

            <ParallaxSection delay={200}>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div><Label className="text-xs">Name *</Label><Input name="name" value={formData.name} onChange={handleInputChange} className="bg-background/50 h-9 text-sm" required /></div>
                    <div><Label className="text-xs">Email *</Label><Input name="email" type="email" value={formData.email} onChange={handleInputChange} className="bg-background/50 h-9 text-sm" required /></div>
                  </div>
                  <div><Label className="text-xs">Subject</Label><Input name="subject" value={formData.subject} onChange={handleInputChange} className="bg-background/50 h-9 text-sm" /></div>
                  <div><Label className="text-xs">Message *</Label><Textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="bg-background/50 text-sm" required /></div>
                  <Button type="submit" disabled={isSubmitting} className="w-full btn-premium text-white text-sm py-5 rounded-xl">
                    {isSubmitting ? "Sending..." : <><Send className="h-4 w-4 mr-2" />Send Message</>}
                  </Button>
                </form>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
