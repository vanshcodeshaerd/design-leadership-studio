import { useState } from "react";
import { Mail, Linkedin, Github, Users, Code, Palette, MessageSquare, TrendingUp, Megaphone } from "lucide-react";
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
      id: "suhani-singh",
      name: "Suhani Singh",
      role: "Community Lead",
      shortBio: "Leading community engagement and building connections at Neofolks",
      fullBio: "Suhani Singh is the Community Lead at Neofolks, overseeing community engagement, member relations, and fostering a welcoming environment for all tech enthusiasts. With a passion for bringing people together and creating inclusive spaces, she organizes networking events and mentorship programs.",
      responsibilities: ["Community Strategy", "Member Onboarding", "Event Planning", "Mentorship Programs"],
      achievements: ["Built active community at NUV", "Organized 10+ tech events", "Launched mentorship initiative"],
      skills: ["Community Management", "Event Planning", "Public Speaking", "Relationship Building"],
      icon: Users,
      contact: {
        linkedin: "linkedin.com/in/suhani-singh-neofolks"
      }
    },
    {
      id: "tech-lead",
      name: "Technical Lead",
      role: "Technical Excellence",
      shortBio: "Driving technical innovation and leading development workshops",
      fullBio: "Our Technical Lead guides members in learning new technologies and maintains the club's technical standards. They organize coding workshops, hackathons, and technical competitions while ensuring knowledge sharing across the community.",
      responsibilities: ["Technical Workshops", "Code Reviews", "Technology Strategy", "Skill Development"],
      achievements: ["Led 15+ technical workshops", "Organized coding competitions", "Mentored 50+ students"],
      skills: ["Full-Stack Development", "System Design", "Workshop Leadership", "Mentoring"],
      icon: Code,
      contact: {
        email: "tech@neofolks.com"
      }
    },
    {
      id: "creative-lead",
      name: "Creative Lead",
      role: "Design & Creative Direction",
      shortBio: "Leading design initiatives and visual identity for Neofolks",
      fullBio: "Our Creative Lead manages all design aspects of Neofolks, from visual branding to event materials. They ensure consistent visual identity across all platforms and create engaging content that represents our tech community.",
      responsibilities: ["Brand Design", "Event Graphics", "Social Media Visuals", "Creative Strategy"],
      achievements: ["Redesigned club branding", "Created design system", "Increased visual engagement"],
      skills: ["Graphic Design", "Brand Identity", "Adobe Creative Suite", "UI/UX Design"],
      icon: Palette,
      contact: {
        email: "creative@neofolks.com"
      }
    },
    {
      id: "outreach-lead",
      name: "Outreach Lead",
      role: "External Relations & Partnerships",
      shortBio: "Building partnerships and expanding Neofolks' network",
      fullBio: "The Outreach Lead develops partnerships with industry professionals, other tech communities, and organizations. They coordinate collaboration opportunities and help expand Neofolks' reach beyond the university.",
      responsibilities: ["Industry Partnerships", "Inter-University Collaboration", "Speaker Coordination", "Network Building"],
      achievements: ["Established 5+ industry partnerships", "Organized guest speaker series", "Built inter-college network"],
      skills: ["Partnership Development", "Communication", "Networking", "Project Management"],
      icon: TrendingUp,
      contact: {
        email: "outreach@neofolks.com"
      }
    },
    {
      id: "marketing-lead",
      name: "Marketing Lead", 
      role: "Digital Marketing & Communications",
      shortBio: "Managing digital presence and marketing initiatives",
      fullBio: "Our Marketing Lead handles all aspects of Neofolks' digital marketing, from social media management to content creation. They develop marketing strategies that effectively communicate our mission and attract new members.",
      responsibilities: ["Social Media Management", "Content Strategy", "Digital Marketing", "Brand Communications"],
      achievements: ["Grew social media following by 200%", "Launched successful recruitment campaigns", "Created engaging content series"],
      skills: ["Social Media Marketing", "Content Creation", "Analytics", "Brand Management"],
      icon: Megaphone,
      contact: {
        email: "marketing@neofolks.com"
      }
    },
    {
      id: "events-coordinator",
      name: "Events Coordinator",
      role: "Event Planning & Management", 
      shortBio: "Organizing and managing all Neofolks events and activities",
      fullBio: "The Events Coordinator is responsible for planning, organizing, and executing all Neofolks events, from workshops to tech talks to social gatherings. They ensure smooth event operations and memorable experiences for all participants.",
      responsibilities: ["Event Planning", "Logistics Management", "Vendor Coordination", "Registration Management"],
      achievements: ["Organized 20+ successful events", "Managed events with 200+ attendees", "Streamlined event processes"],
      skills: ["Event Management", "Project Coordination", "Budget Management", "Team Leadership"],
      icon: MessageSquare,
      contact: {
        email: "events@neofolks.com"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section-padding bg-gradient-glow/10">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient-primary">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate leaders driving innovation and fostering community growth at Neofolks. 
            Our team is committed to creating an inclusive environment where technology meets creativity.
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
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.shortBio}
                </p>
                
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
                      <span 
                        key={index}
                        className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm"
                      >
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

      <Footer />
    </div>
  );
};

export default Team;