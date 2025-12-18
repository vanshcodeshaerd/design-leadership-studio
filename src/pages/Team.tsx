import { useState } from "react";
import { Mail, Linkedin, Github, Code, Palette, MessageSquare, FileText, Settings, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Footer from "@/components/Footer";

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
      shortBio: "Driving technical innovation at Neofolks by managing the website, digital platforms, and coordinating with the team to ensure seamless event planning and reliable digital operations.",
      fullBio:
        "Vansh manages the technical infrastructure of Neofolks, including the official website and digital platforms. He works closely with the entire team to keep event planning organized and structured. By contributing technical insights and supporting coordination, he ensures smooth execution and reliable digital operations.",
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
      shortBio: "Building strategic partnerships, managing sponsorships, and overseeing financial planning to ensure sustainable growth and strong external relationships for Neofolks.",
      fullBio:
        "Rishi leads marketing, outreach, and financial coordination for Neofolks. He manages collaborations with other clubs, handles sponsorships and funding, and oversees budgets and expenses. His role ensures strong external relationships and sustainable planning for all Neofolks initiatives.",
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
      shortBio: "Ensuring flawless event execution by managing logistics, venue coordination, and real-time operations. His expertise in handling timelines and resources makes every Neofolks event a success.",
      fullBio:
        "Zeeshan oversees all on-ground operations during Neofolks events. He manages logistics, venue arrangements, and real-time coordination to ensure everything runs smoothly. His ability to handle timelines, teams, and resources makes him essential to successful event execution.",
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
      shortBio: "Crafting Neofolks' digital presence across Instagram and LinkedIn through creative reels, stories, and posts that reflect our brand identity and drive strong audience engagement.",
      fullBio:
        "Siona manages Neofolks' social media presence across platforms such as Instagram and LinkedIn. She plans, creates, and executes reels, stories, and posts that reflect the brand's identity and values. By combining creativity with consistency, she ensures strong audience engagement and a recognizable digital presence for Neofolks.",
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
      shortBio: "Shaping Neofolks' visual identity through event posters, social media creatives, certificates, and décor. His attention to detail ensures aesthetic consistency across all platforms.",
      fullBio:
        "Dhyey oversees the complete visual identity of Neofolks. He designs event posters, social media creatives, certificates, mementos, and décor elements. Through thoughtful design and attention to detail, he ensures visual consistency across all platforms and events, enhancing the overall brand experience.",
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
      shortBio: "Crafting all written communication for Neofolks with clarity and professionalism—from promotional content and emails to social media captions that strengthen our brand voice.",
      fullBio:
        "Dhvani handles all written communication for Neofolks, ensuring clarity, professionalism, and consistency. She writes promotional content, emails, social media captions, and formal documents required for events. Her work helps communicate ideas effectively and strengthens Neofolks' voice across audiences.",
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
      <section className="section-padding bg-gradient-glow/10">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient-primary">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate leaders driving innovation and fostering community growth at Neofolks. Our team is
            committed to creating an inclusive environment where technology meets creativity.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="glass-card glass-card-hover rounded-xl p-8 text-center cursor-pointer group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6 group-hover:scale-110 transition-all duration-300">
                  <member.icon className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-accent mb-3 font-medium">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.shortBio}</p>

                <Button
                  variant="leadership"
                  size="sm"
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                >
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Detail Modal */}
      <Dialog open={selectedMember !== null} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary">
                    <selectedMember.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl">{selectedMember.name}</DialogTitle>
                    <p className="text-accent font-medium">{selectedMember.role}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Full Bio */}
                <div>
                  <h4 className="font-semibold mb-2">About</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedMember.fullBio}</p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedMember.responsibilities.map((responsibility, index) => (
                      <div key={index} className="bg-muted/30 rounded-lg px-3 py-2 text-sm">
                        {responsibility}
                      </div>
                    ))}
                  </div>
                </div>


                {/* Contact */}
                {selectedMember.contact && (
                  <div>
                    <h4 className="font-semibold mb-3">Connect</h4>
                    <div className="flex gap-3">
                      {selectedMember.contact.email && (
                        <Button variant="ghost" size="icon">
                          <Mail className="h-5 w-5" />
                        </Button>
                      )}
                      {selectedMember.contact.linkedin && (
                        <Button variant="ghost" size="icon">
                          <Linkedin className="h-5 w-5" />
                        </Button>
                      )}
                      {selectedMember.contact.github && (
                        <Button variant="ghost" size="icon">
                          <Github className="h-5 w-5" />
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
