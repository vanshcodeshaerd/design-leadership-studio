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
      id: "travon-bhagat",
      name: "Travon Bhagat",
      role: "Community Lead",
      shortBio: "Leading community engagement and building connections at Neofolks",
      fullBio: "Travon Bhagat is the Community Lead at Neofolks, overseeing community engagement, member relations, and fostering a welcoming environment for all tech enthusiasts. With a passion for bringing people together and creating inclusive spaces, he organizes networking events and mentorship programs.",
      responsibilities: ["Community Strategy", "Member Onboarding", "Event Planning", "Mentorship Programs"],
      achievements: ["Built active community at NUV", "Organized 10+ tech events", "Launched mentorship initiative"],
      skills: ["Community Management", "Event Planning", "Public Speaking", "Relationship Building"],
      icon: Users,
      contact: {
        linkedin: "linkedin.com/in/travon-bhagat-neofolks"
      }
    },
    {
      id: "rishabh-gajiwala",
      name: "Rishabh Gajiwala",
      role: "Community Co-lead",
      shortBio: "Supporting community initiatives and member engagement",
      fullBio: "Rishabh Gajiwala serves as Community Co-lead at Neofolks, working closely with the Community Lead to support member engagement and community building initiatives. He brings fresh perspectives and innovative ideas to community programs.",
      responsibilities: ["Community Support", "Member Relations", "Program Coordination", "Event Assistance"],
      achievements: ["Enhanced member onboarding", "Improved community feedback systems", "Coordinated social events"],
      skills: ["Team Collaboration", "Communication", "Program Management", "Member Relations"],
      icon: Users,
      contact: {
        linkedin: "linkedin.com/in/rishabh-gajiwala-neofolks"
      }
    },
    {
      id: "yatharth-singh-panwar",
      name: "Yatharth Singh Panwar",
      role: "Tech Lead",
      shortBio: "Driving technical innovation and leading development workshops",
      fullBio: "Yatharth Singh Panwar guides members in learning new technologies and maintains the club's technical standards. He organizes coding workshops, hackathons, and technical competitions while ensuring knowledge sharing across the community.",
      responsibilities: ["Technical Workshops", "Code Reviews", "Technology Strategy", "Skill Development"],
      achievements: ["Led 15+ technical workshops", "Organized coding competitions", "Mentored 50+ students"],
      skills: ["Full-Stack Development", "System Design", "Workshop Leadership", "Mentoring"],
      icon: Code,
      contact: {
        email: "yatharth@neofolks.com"
      }
    },
    {
      id: "dharmin-nagar",
      name: "Dharmin Nagar",
      role: "Social Media Lead",
      shortBio: "Managing digital presence and social media strategy",
      fullBio: "Dharmin Nagar leads Neofolks' social media presence and digital marketing efforts. He develops creative content strategies, manages social platforms, and ensures consistent brand messaging across all digital channels.",
      responsibilities: ["Social Media Management", "Content Creation", "Digital Strategy", "Brand Communications"],
      achievements: ["Grew social media following by 200%", "Created engaging content campaigns", "Enhanced brand visibility"],
      skills: ["Social Media Marketing", "Content Strategy", "Analytics", "Brand Management"],
      icon: Megaphone,
      contact: {
        email: "dharmin@neofolks.com"
      }
    },
    {
      id: "birva-dholakiya",
      name: "Birva Dholakiya",
      role: "Operations Lead",
      shortBio: "Managing operations and ensuring smooth event execution",
      fullBio: "Birva Dholakiya oversees all operational aspects of Neofolks, from event planning to resource management. She ensures efficient operations and coordinates logistics for all club activities and initiatives.",
      responsibilities: ["Operations Management", "Event Coordination", "Resource Planning", "Process Optimization"],
      achievements: ["Streamlined operational processes", "Improved event efficiency", "Enhanced resource utilization"],
      skills: ["Project Management", "Operations Planning", "Team Coordination", "Process Improvement"],
      icon: TrendingUp,
      contact: {
        email: "birva@neofolks.com"
      }
    },
    {
      id: "pankhi-shukla",
      name: "Pankhi Shukla",
      role: "Design Lead",
      shortBio: "Leading design initiatives and visual identity for Neofolks",
      fullBio: "Pankhi Shukla manages all design aspects of Neofolks, from visual branding to event materials. She ensures consistent visual identity across all platforms and creates engaging content that represents our tech community.",
      responsibilities: ["Brand Design", "Event Graphics", "Social Media Visuals", "Creative Strategy"],
      achievements: ["Redesigned club branding", "Created comprehensive design system", "Increased visual engagement"],
      skills: ["Graphic Design", "Brand Identity", "Adobe Creative Suite", "UI/UX Design"],
      icon: Palette,
      contact: {
        email: "pankhi@neofolks.com"
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