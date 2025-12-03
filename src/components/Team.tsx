import { useState } from "react";
import { Mail, Linkedin, Github, Users, Code, Palette, MessageSquare, TrendingUp, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
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
      id: "community-lead",
      name: "Community Lead",
      role: "Building Connections",
      shortBio: "Expert in community engagement and relationship building",
      fullBio:
        "Oversees community engagement, member relations, and fosters a welcoming environment for all tech enthusiasts. With 5+ years of community management experience, focuses on creating inclusive spaces where innovation thrives.",
      responsibilities: ["Community Strategy", "Member Onboarding", "Event Planning", "Mentorship Programs"],
      achievements: ["Grew community by 400%", "Organized 50+ networking events", "Launched mentorship program"],
      skills: ["Community Management", "Event Planning", "Public Speaking", "Relationship Building"],
      icon: Users,
      contact: {
        email: "community@example.com",
        linkedin: "linkedin.com/in/community-lead",
      },
    },
    {
      id: "tech-lead",
      name: "Technical Lead",
      role: "Technical Excellence",
      shortBio: "Senior engineer driving technical innovation and best practices",
      fullBio:
        "Leads technical workshops, hackathons, and coding competitions. Guides members in learning new technologies and maintains the club's technical standards. Expert in full-stack development and system architecture.",
      responsibilities: ["Technical Architecture", "Code Reviews", "Workshop Leadership", "Technology Strategy"],
      achievements: ["Reduced deployment time by 80%", "Led 20+ technical workshops", "Mentored 100+ developers"],
      skills: ["React", "Node.js", "System Design", "DevOps", "Mentoring"],
      icon: Code,
      contact: {
        email: "vansh.n.shah@nuv.ac.in",
        github: "github.com/vanshcodeshaerd",
        linkedin: "www.linkedin.com/in/vansh-shah-0bbb46309/",
      },
    },
    {
      id: "design-lead",
      name: "Design Lead",
      role: "Visual Identity & UX",
      shortBio: "Creative designer focused on user experience and visual excellence",
      fullBio:
        "Designs club branding, event materials, and digital assets. Ensures consistent visual identity across all club communications and platforms. Specializes in creating user-centered design solutions.",
      responsibilities: ["Brand Design", "UI/UX Design", "Design Systems", "Creative Direction"],
      achievements: [
        "Redesigned brand identity",
        "Improved user satisfaction by 60%",
        "Created comprehensive design system",
      ],
      skills: ["Figma", "Adobe Creative Suite", "Design Systems", "User Research", "Prototyping"],
      icon: Palette,
      contact: {
        email: "design@example.com",
        linkedin: "linkedin.com/in/design-lead",
      },
    },
    {
      id: "social-lead",
      name: "Social Media Lead",
      role: "Digital Presence",
      shortBio: "Digital marketing expert building online community engagement",
      fullBio:
        "Manages social media platforms, creates engaging content, and builds online community. Handles digital marketing and online event promotion with expertise in content strategy and audience growth.",
      responsibilities: ["Social Media Strategy", "Content Creation", "Digital Marketing", "Analytics"],
      achievements: ["10x social media engagement", "Built 50K+ follower base", "Viral campaign reach: 1M+"],
      skills: ["Social Media Marketing", "Content Strategy", "Analytics", "Graphic Design", "Video Editing"],
      icon: MessageSquare,
      contact: {
        email: "social@example.com",
        linkedin: "linkedin.com/in/social-lead",
      },
    },
    {
      id: "growth-lead",
      name: "Growth & Strategy Lead",
      role: "Business Development",
      shortBio: "Strategic leader focused on partnerships and organizational growth",
      fullBio:
        "Develops partnerships with industry leaders, manages club recruitment, and coordinates outreach programs to expand our network. Expert in business development and strategic planning.",
      responsibilities: ["Partnership Development", "Strategic Planning", "Business Development", "Growth Analytics"],
      achievements: ["20+ industry partnerships", "300% membership growth", "Launched scholarship program"],
      skills: ["Business Strategy", "Partnership Management", "Analytics", "Project Management", "Negotiation"],
      icon: TrendingUp,
      contact: {
        email: "growth@example.com",
        linkedin: "linkedin.com/in/growth-lead",
      },
    },
    {
      id: "marketing-lead",
      name: "Marketing Lead",
      role: "Brand & Communications",
      shortBio: "Marketing strategist driving brand awareness and communications",
      fullBio:
        "Leads marketing initiatives, brand communications, and public relations. Develops comprehensive marketing strategies to promote events, initiatives, and the organization's mission.",
      responsibilities: ["Marketing Strategy", "Brand Communications", "PR Management", "Campaign Development"],
      achievements: [
        "Launched 5 successful campaigns",
        "Increased brand awareness 250%",
        "Award-winning marketing campaign",
      ],
      skills: ["Marketing Strategy", "Brand Management", "PR", "Campaign Management", "Data Analysis"],
      icon: Megaphone,
      contact: {
        email: "marketing@example.com",
        linkedin: "linkedin.com/in/marketing-lead",
      },
    },
  ];

  return (
    <section id="team" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient-primary">Our Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate leaders driving innovation and fostering community growth at Neofolks. Our team is
            committed to creating an inclusive environment where technology meets creativity.
          </p>
        </div>

        {/* Team Grid */}
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

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedMember.achievements.map((achievement, index) => (
                        <li key={index} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold mb-3">Core Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map((skill, index) => (
                        <span key={index} className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
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
      </div>
    </section>
  );
};

export default Team;
