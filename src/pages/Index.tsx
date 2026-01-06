import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, Lightbulb, Code, Rocket, Star, Sparkles, Zap, Layers, Globe, Database, Cpu, Palette, Terminal, Cloud, Shield, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  // Tech focus areas with icons
  const techFocusAreas = [
    { icon: Code, label: "Web Dev" },
    { icon: Smartphone, label: "Mobile" },
    { icon: Database, label: "Data Science" },
    { icon: Cpu, label: "AI/ML" },
    { icon: Cloud, label: "Cloud" },
    { icon: Shield, label: "Security" },
    { icon: Palette, label: "UI/UX" },
    { icon: Terminal, label: "DevOps" },
  ];

  const features = [
    {
      icon: Code,
      title: "Technical Workshops",
      description: "Hands-on sessions covering web development, AI/ML, cloud computing, and emerging technologies.",
      gradient: "from-violet-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "A supportive network of tech enthusiasts who learn, grow, and innovate together.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Calendar,
      title: "Tech Events",
      description: "Hackathons, tech talks, coding competitions, and industry expert sessions.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Mentorship",
      description: "Guidance from experienced peers and industry professionals to accelerate growth.",
      gradient: "from-cyan-500 to-teal-500"
    }
  ];

  const stats = [
    { value: "50+", label: "Active Members" },
    { value: "10+", label: "Events Hosted" },
    { value: "5+", label: "Projects" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="gradient-orb w-[600px] h-[600px] top-1/4 left-1/4"
            style={{ background: 'radial-gradient(circle, hsl(260, 80%, 50%) 0%, transparent 70%)' }}
          />
          <div 
            className="gradient-orb w-[500px] h-[500px] bottom-1/3 right-1/4"
            style={{ 
              background: 'radial-gradient(circle, hsl(240, 70%, 45%) 0%, transparent 70%)',
              animationDelay: '-5s'
            }}
          />
          <div 
            className="gradient-orb w-[400px] h-[400px] top-1/2 right-1/3"
            style={{ 
              background: 'radial-gradient(circle, hsl(185, 80%, 45%) 0%, transparent 70%)',
              animationDelay: '-10s'
            }}
          />
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 text-center container-padding pt-16 max-w-5xl mx-auto">
          {/* Year Badge */}
          <ParallaxSection delay={0}>
            <div className="inline-flex items-center justify-center mb-6">
              <div className="year-badge px-5 py-1.5 rounded-full">
                <span className="text-sm font-semibold text-gradient-primary">2025</span>
              </div>
            </div>
          </ParallaxSection>

          {/* Main Title */}
          <ParallaxSection delay={100}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mb-4">
              <span className="hero-text-gradient glow-text">NeoFolks</span>
            </h1>
          </ParallaxSection>

          {/* Subtitle */}
          <ParallaxSection delay={200}>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto leading-relaxed">
              The Premier Tech Community at Navrachana University
            </p>
            <p className="text-sm text-muted-foreground/70 mb-8 max-w-xl mx-auto">
              Fostering <span className="text-gradient-cyan font-medium">Innovation</span> • <span className="text-gradient-primary font-medium">Learning</span> • <span className="text-gradient-cyan font-medium">Growth</span>
            </p>
          </ParallaxSection>

          {/* CTA Buttons */}
          <ParallaxSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Button 
                className="btn-premium text-white px-6 py-5 text-sm font-medium rounded-xl group"
                asChild
              >
                <Link to="/about">
                  Discover More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                className="btn-outline-glow px-6 py-5 text-sm font-medium rounded-xl text-foreground"
                asChild
              >
                <Link to="/team">
                  Meet The Team
                </Link>
              </Button>
            </div>
          </ParallaxSection>

          {/* Quick Stats */}
          <ParallaxSection delay={400}>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold stat-value">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ParallaxSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-5 h-8 border border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-violet-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Tech Focus Section - Apexia Style */}
      <section className="section-padding-xs relative overflow-hidden -mt-8">
        <ParallaxSection className="container mx-auto container-padding">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">What We Focus On</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient-primary">
              Technologies We Explore
            </h2>
          </div>

          {/* Tech Icons Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 max-w-3xl mx-auto">
            {techFocusAreas.map((tech, index) => (
              <ParallaxSection key={index} delay={index * 50}>
                <div className="tech-icon-card group cursor-default">
                  <tech.icon className="w-6 h-6 text-muted-foreground group-hover:text-violet-400 transition-colors duration-300" />
                  <span className="text-[10px]">{tech.label}</span>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </ParallaxSection>
      </section>

      {/* What We Do Section */}
      <section className="section-padding-sm relative overflow-hidden">
        <ParallaxSection className="container mx-auto container-padding">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Our Activities</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              <span className="text-gradient-hero">What We Do</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-3">
              Empowering students through technology, community, and hands-on learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((item, index) => (
              <ParallaxSection 
                key={index} 
                delay={index * 80}
              >
                <div className="feature-card group h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </ParallaxSection>
      </section>

      {/* Why Join Section */}
      <section className="section-padding-sm relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-40" />
        
        <ParallaxSection className="container mx-auto container-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Join Us</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Why Join <span className="text-gradient-cyan">NeoFolks?</span>
              </h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Be part of a vibrant community shaping the future of technology. 
                Connect with like-minded individuals and unlock your potential.
              </p>
              
              <div className="space-y-3">
                {[
                  { icon: Sparkles, text: "Exclusive workshops and resources" },
                  { icon: Rocket, text: "Real-world project experience" },
                  { icon: Star, text: "Network with industry professionals" },
                  { icon: Zap, text: "Collaborative learning environment" }
                ].map((item, index) => (
                  <ParallaxSection key={index} delay={index * 100}>
                    <div className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-lg icon-gradient-outline flex items-center justify-center group-hover:bg-violet-500/20 transition-all duration-300">
                        <item.icon className="h-4 w-4 text-violet-400" />
                      </div>
                      <span className="text-sm text-foreground/80">{item.text}</span>
                    </div>
                  </ParallaxSection>
                ))}
              </div>
            </div>
            
            <ParallaxSection delay={200}>
              <div className="glass-card p-6 sm:p-8 rounded-2xl text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gradient-hero mb-3">Join Us</div>
                <p className="text-sm text-muted-foreground mb-6">
                  Ready to start your journey with NeoFolks?
                </p>
                <Button 
                  className="btn-premium text-white px-6 py-4 text-sm font-medium rounded-xl w-full group"
                  asChild
                >
                  <Link to="/join">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </ParallaxSection>
          </div>
        </ParallaxSection>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm relative overflow-hidden">
        <ParallaxSection className="container mx-auto container-padding">
          <div className="glass-card p-6 sm:p-8 rounded-2xl text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-violet-500 rounded-full blur-[60px] float-element" />
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-cyan-500 rounded-full blur-[60px] float-element-delayed" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                Ready to <span className="text-gradient-cyan">Transform</span> Your Journey?
              </h2>
              <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
                Join the NeoFolks community and be part of something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  className="btn-premium text-white px-6 py-5 text-sm font-medium rounded-xl group"
                  asChild
                >
                  <Link to="/join">
                    Join the Community
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  className="btn-outline-glow px-6 py-5 text-sm font-medium rounded-xl text-foreground"
                  asChild
                >
                  <Link to="/events">
                    View Events
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
