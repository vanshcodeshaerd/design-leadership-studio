import { useState } from "react";
import { Mail, Linkedin, Github, Code, Palette, MessageSquare, FileText, Settings, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  responsibilities: string[];
  icon: any;
  contact?: {
    email?: string;
    linkedin?: string;
    github?: string;
  };
}

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: "vansh-shah",
      name: "Vansh Shah",
      role: "Tech Lead",
      shortBio: "Driving technical innovation at Neofolks by managing the website, digital platforms, and coordinating with the team.",
      fullBio:
        "Vansh manages the technical infrastructure of Neofolks, including the official website and digital platforms. He works closely with the entire team to keep event planning organized and structured.",
      responsibilities: [
        "Website Management",
        "Technical Planning",
        "Team Coordination",
        "Digital Infrastructure",
        "Event Organization",
      ],
      icon: Code,
      contact: {
        email: "vansh.n.shah@nuv.ac.in",
        github: "github.com/vanshcodeshaerd",
        linkedin: "www.linkedin.com/in/vansh-shah-0bbb46309/",
      },
    },
    {
      id: "rishi-kacchadia",
      name: "Rishi Kacchadia",
      role: "Marketing & Outreach Lead",
      shortBio: "Building strategic partnerships, managing sponsorships, and overseeing financial planning for sustainable growth.",
      fullBio:
        "Rishi leads marketing, outreach, and financial coordination for Neofolks. He manages collaborations with other clubs, handles sponsorships and funding, and oversees budgets.",
      responsibilities: [
        "Marketing Strategy",
        "Outreach & Collaborations",
        "Sponsorship Management",
        "Financial Planning",
        "Budget Oversight",
      ],
      icon: Megaphone,
    },
    {
      id: "zeeshan-vahora",
      name: "Zeeshan Vahora",
      role: "Event Operations Lead",
      shortBio: "Ensuring flawless event execution through logistics, venue coordination, and real-time operations management.",
      fullBio:
        "Zeeshan oversees all on-ground operations during Neofolks events. He manages logistics, venue arrangements, and real-time coordination to ensure everything runs smoothly.",
      responsibilities: [
        "Event Execution",
        "Logistics Management",
        "On-Ground Coordination",
        "Operations Planning",
        "Resource Management",
      ],
      icon: Settings,
    },
    {
      id: "siona-venuthurumilli",
      name: "Siona Venuthurumilli",
      role: "Social Media Lead",
      shortBio: "Crafting Neofolks' digital presence through creative reels, stories, and posts across all platforms.",
      fullBio:
        "Siona manages Neofolks' social media presence across platforms such as Instagram and LinkedIn. She plans, creates, and executes content that reflects the brand's identity.",
      responsibilities: [
        "Social Media Strategy",
        "Reel & Story Creation",
        "Platform Management",
        "Creative Direction",
        "Brand Communication",
      ],
      icon: MessageSquare,
    },
    {
      id: "dhyey-chatrala",
      name: "Dhyey Chatrala",
      role: "Design Lead",
      shortBio: "Shaping Neofolks' visual identity through event posters, social media creatives, and brand consistency.",
      fullBio:
        "Dhyey oversees the complete visual identity of Neofolks. He designs event posters, social media creatives, certificates, and décor elements.",
      responsibilities: [
        "Graphic Design",
        "Visual Branding",
        "Event Creatives",
        "Print & Digital Assets",
        "Aesthetic Consistency",
      ],
      icon: Palette,
    },
    {
      id: "dhvani-gohel",
      name: "Dhvani Gohel",
      role: "Content Lead",
      shortBio: "Crafting all written communication with clarity and professionalism to strengthen the brand voice.",
      fullBio:
        "Dhvani handles all written communication for Neofolks, ensuring clarity, professionalism, and consistency across all content.",
      responsibilities: [
        "Content Writing",
        "Promotional Messaging",
        "Email Communication",
        "Documentation",
        "Brand Voice Management",
      ],
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header-padding relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="container mx-auto container-padding text-center relative z-10">
          <ParallaxSection>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">The People</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient-hero">Our Team</h1>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate leaders driving innovation and fostering community growth at Neofolks.
            </p>
          </ParallaxSection>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding-sm">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <ParallaxSection key={member.id} delay={index * 80}>
                <div
                  className="feature-card text-center cursor-pointer group"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="w-14 h-14 rounded-xl icon-gradient mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <member.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-base font-semibold mb-1">{member.name}</h3>
                  <p className="text-xs text-gradient-cyan font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">{member.shortBio}</p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs btn-outline-glow"
                  >
                    View Details
                  </Button>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Detail Modal */}
      <Dialog open={selectedMember !== null} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto bg-card border-border">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl icon-gradient flex items-center justify-center">
                    <selectedMember.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-lg">{selectedMember.name}</DialogTitle>
                    <p className="text-xs text-gradient-cyan font-medium">{selectedMember.role}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-xs uppercase tracking-wide text-muted-foreground">About</h4>
                  <p className="text-sm leading-relaxed">{selectedMember.fullBio}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-xs uppercase tracking-wide text-muted-foreground">Responsibilities</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMember.responsibilities.map((responsibility, index) => (
                      <span key={index} className="bg-violet-500/10 border border-violet-500/20 rounded-md px-2 py-1 text-xs">
                        {responsibility}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedMember.contact && (
                  <div>
                    <h4 className="font-semibold mb-2 text-xs uppercase tracking-wide text-muted-foreground">Connect</h4>
                    <div className="flex gap-2">
                      {selectedMember.contact.email && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-violet-400" asChild>
                          <a href={`mailto:${selectedMember.contact.email}`}>
                            <Mail className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {selectedMember.contact.linkedin && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-violet-400" asChild>
                          <a href={`https://${selectedMember.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {selectedMember.contact.github && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-violet-400" asChild>
                          <a href={`https://${selectedMember.contact.github}`} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Team;
