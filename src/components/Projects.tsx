import { useState } from "react";
import { ExternalLink, Github, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  category: "Web App" | "Mobile" | "API" | "Tool";
  impact: string[];
  role: string;
  timeline: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const projects: Project[] = [
    {
      id: "team-management-platform",
      title: "Team Management Platform",
      description: "Enterprise-grade platform for managing distributed engineering teams with real-time collaboration features.",
      fullDescription: "Led the development of a comprehensive team management platform that revolutionized how distributed teams collaborate. The platform features real-time messaging, project tracking, performance analytics, and automated workflow management.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Socket.io"],
      liveUrl: "https://teamplatform.example.com",
      githubUrl: "https://github.com/example/team-platform",
      category: "Web App",
      impact: ["Improved team productivity by 65%", "Reduced project delivery time by 40%", "Served 10,000+ users"],
      role: "Technical Lead & Product Manager",
      timeline: "12 months"
    },
    {
      id: "design-system",
      title: "Design System Framework",
      description: "Comprehensive design system and component library used across 15+ products in the organization.",
      fullDescription: "Created a scalable design system that standardized UI/UX across the entire product suite. This system includes reusable components, design tokens, accessibility guidelines, and comprehensive documentation.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Storybook", "Styled Components", "TypeScript", "Figma", "Jest"],
      githubUrl: "https://github.com/example/design-system",
      demoUrl: "https://storybook.example.com",
      category: "Tool",
      impact: ["Reduced development time by 50%", "Improved consistency across 15 products", "95% developer adoption rate"],
      role: "Lead Frontend Engineer",
      timeline: "8 months"
    },
    {
      id: "analytics-dashboard",
      title: "Real-time Analytics Dashboard",
      description: "High-performance analytics platform processing millions of events daily with interactive visualizations.",
      fullDescription: "Architected and built a real-time analytics platform that processes millions of events daily. Features include customizable dashboards, advanced filtering, predictive analytics, and automated reporting.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Python", "Apache Kafka", "ClickHouse", "Docker"],
      liveUrl: "https://analytics.example.com",
      githubUrl: "https://github.com/example/analytics",
      category: "Web App",
      impact: ["Processes 5M+ events daily", "Reduced query response time by 80%", "Increased data-driven decisions by 200%"],
      role: "Technical Architect",
      timeline: "10 months"
    },
    {
      id: "mobile-app",
      title: "Cross-Platform Mobile App",
      description: "Feature-rich mobile application serving 100K+ users with offline capabilities and real-time sync.",
      fullDescription: "Led the development of a cross-platform mobile application that serves over 100,000 active users. The app features offline capabilities, real-time synchronization, push notifications, and seamless user experience.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "TypeScript", "Firebase", "Redux", "GraphQL", "AWS"],
      liveUrl: "https://app.example.com",
      githubUrl: "https://github.com/example/mobile-app",
      category: "Mobile",
      impact: ["100K+ active users", "4.8★ app store rating", "60% user retention rate"],
      role: "Mobile Team Lead",
      timeline: "14 months"
    },
    {
      id: "api-gateway",
      title: "Microservices API Gateway",
      description: "Scalable API gateway handling 1M+ requests daily with advanced security and monitoring features.",
      fullDescription: "Designed and implemented a robust API gateway that serves as the central entry point for all microservices. Features include rate limiting, authentication, monitoring, and automatic failover capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Express", "Redis", "MongoDB", "Docker", "Kubernetes"],
      githubUrl: "https://github.com/example/api-gateway",
      category: "API",
      impact: ["1M+ requests per day", "99.9% uptime", "50ms average response time"],
      role: "Backend Lead Engineer",
      timeline: "6 months"
    },
    {
      id: "automation-tool",
      title: "CI/CD Automation Tool",
      description: "Custom automation platform that streamlined deployment processes and improved development workflow.",
      fullDescription: "Built a comprehensive CI/CD automation platform that transformed our development workflow. The tool automates testing, building, and deployment processes while providing detailed analytics and rollback capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
      githubUrl: "https://github.com/example/automation-tool",
      category: "Tool",
      impact: ["90% reduction in deployment time", "Zero-downtime deployments", "Improved code quality by 75%"],
      role: "DevOps Lead",
      timeline: "4 months"
    }
  ];

  const categories = ["All", "Web App", "Mobile", "API", "Tool"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-card/20">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient-primary">
            Community Projects & Initiatives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the innovative projects and initiatives that showcase Neofolks' commitment to 
            technology education, community building, and practical learning experiences at NUV.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "leadership" : "ghost"}
              onClick={() => setFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card glass-card-hover rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary/10 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white/50 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="bg-muted/50 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-muted-foreground">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
            {selectedProject && (
              <div className="relative">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-4 w-4" />
                </Button>

                {/* Project Image */}
                <div className="aspect-video bg-gradient-primary/20 relative">
                  <div className="absolute inset-0 bg-gradient-primary/10 flex items-center justify-center">
                    <Play className="h-20 w-20 text-white/50" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                      <p className="text-accent font-medium">{selectedProject.role}</p>
                    </div>
                    <Badge variant="secondary">
                      {selectedProject.timeline}
                    </Badge>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  {/* Impact Metrics */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Impact</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {selectedProject.impact.map((impact, index) => (
                        <div key={index} className="bg-muted/30 rounded-lg p-4 text-center">
                          <span className="text-sm font-medium">{impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.liveUrl && (
                      <Button variant="hero" size="lg">
                        <ExternalLink className="h-5 w-5 mr-2" />
                        View Live Project
                      </Button>
                    )}
                    {selectedProject.githubUrl && (
                      <Button variant="glass" size="lg">
                        <Github className="h-5 w-5 mr-2" />
                        View Code
                      </Button>
                    )}
                    {selectedProject.demoUrl && (
                      <Button variant="leadership" size="lg">
                        <Play className="h-5 w-5 mr-2" />
                        View Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;