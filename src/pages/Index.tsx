import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, Lightbulb, MessageSquare, Sparkles, Code, Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";
import { useParallax } from "@/hooks/useParallax";

const Index = () => {
  const { offset: heroOffset } = useParallax({ speed: 0.4, direction: 'up' });
  const { offset: shapesOffset } = useParallax({ speed: 0.2, direction: 'down' });

  // Geometric shapes data for animations
  const geometricShapes = [
    { id: 1, type: "diamond", top: "15%", left: "10%", delay: "0s" },
    { id: 2, type: "circle", top: "25%", right: "15%", delay: "1s" },
    { id: 3, type: "triangle", top: "35%", left: "8%", delay: "2s" },
    { id: 4, type: "star", top: "45%", right: "12%", delay: "0.5s" },
    { id: 5, type: "line", top: "55%", left: "5%", delay: "1.5s" },
    { id: 6, type: "square", top: "65%", right: "8%", delay: "2.5s" },
    { id: 7, type: "diamond", top: "20%", left: "85%", delay: "3s" },
    { id: 8, type: "circle", top: "75%", left: "15%", delay: "0.8s" },
    { id: 9, type: "triangle", top: "30%", right: "25%", delay: "1.2s" },
    { id: 10, type: "star", top: "70%", right: "20%", delay: "2.2s" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Neofolks Design */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        {/* Background Effects with Parallax */}
        <div 
          className="absolute inset-0 hero-gradient"
          style={{ transform: `translateY(${heroOffset * 0.5}px)` }}
        />
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
            style={{ 
              background: 'radial-gradient(circle, hsl(270, 60%, 50%) 0%, transparent 70%)',
              transform: `translateY(${heroOffset * 0.3}px)`,
            }}
          />
          <div 
            className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-25"
            style={{ 
              background: 'radial-gradient(circle, hsl(220, 70%, 45%) 0%, transparent 70%)',
              transform: `translateY(${heroOffset * 0.4}px)`,
            }}
          />
          <div 
            className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full blur-[80px] opacity-20"
            style={{ 
              background: 'radial-gradient(circle, hsl(180, 70%, 45%) 0%, transparent 70%)',
              transform: `translateY(${heroOffset * 0.2}px)`,
            }}
          />
        </div>

        {/* Geometric Shapes with Parallax */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ transform: `translateY(${shapesOffset}px)` }}
        >
          {geometricShapes.map((shape) => (
            <div
              key={shape.id}
              className={`geometric-shape shape-${shape.type}`}
              style={{
                top: shape.top,
                left: shape.left,
                right: shape.right,
                animationDelay: shape.delay,
              }}
            />
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 text-center container-padding pt-20">
          {/* Main Title */}
          <div className="relative inline-block mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight">
              <span 
                className="block glow-text"
                style={{
                  background: "linear-gradient(90deg, #A855F7, #6366F1, #06B6D4, #10B981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  backgroundSize: "300% 100%",
                  animation: "gradient-shift 8s ease infinite",
                }}
              >
                NeoFolks
              </span>
            </h1>
          </div>

          {/* Year Badge */}
          <div className="inline-flex items-center justify-center mb-10">
            <div className="year-badge px-8 py-3 rounded-xl">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">2025</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            A student-led tech community fostering
            <br />
            <span className="text-gradient-cyan font-medium">Innovation • Learning • Growth</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              className="btn-premium text-white px-8 py-6 text-lg font-medium rounded-xl group"
              asChild
            >
              <Link to="/about">
                Discover More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-6 text-lg font-medium rounded-xl border-border/50 hover:bg-white/5 hover:border-purple-500/50 transition-all"
              asChild
            >
              <Link to="/team">
                Meet The Team
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient-cyan">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient-primary">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-purple-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="section-divider" />
        
        <ParallaxSection speed={0.15} className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">What We Do</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering students through technology, community, and hands-on learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: "Technical Workshops",
                description: "Hands-on sessions covering web development, AI/ML, cloud computing, and emerging technologies.",
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                icon: Users,
                title: "Community Building",
                description: "Creating a supportive network of tech enthusiasts who learn, grow, and innovate together.",
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
                description: "Guidance from experienced peers and industry professionals to accelerate your growth.",
                gradient: "from-cyan-500 to-teal-500"
              }
            ].map((item, index) => (
              <ParallaxSection 
                key={index} 
                speed={0.1} 
                className="glass-card p-6 rounded-2xl group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </ParallaxSection>
            ))}
          </div>
        </ParallaxSection>
      </section>

      {/* Features Highlight */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        
        <ParallaxSection speed={0.2} className="container mx-auto container-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Why Join <span className="text-gradient-cyan">NeoFolks?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Be part of a vibrant community that's shaping the future of technology at our university. 
                Connect with like-minded individuals and unlock your potential.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Sparkles, text: "Access to exclusive workshops and resources" },
                  { icon: Rocket, text: "Real-world project experience" },
                  { icon: Star, text: "Network with industry professionals" },
                  { icon: MessageSquare, text: "Collaborative learning environment" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all">
                      <item.icon className="h-5 w-5 text-purple-400" />
                    </div>
                    <span className="text-foreground/90">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gradient-primary mb-4">Join Us</div>
                  <p className="text-muted-foreground mb-6">
                    Ready to start your journey with NeoFolks?
                  </p>
                  <Button 
                    className="btn-premium text-white px-8 py-4 text-lg font-medium rounded-xl w-full group"
                    asChild
                  >
                    <Link to="/join">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="section-divider" />
        
        <ParallaxSection speed={0.15} className="container mx-auto container-padding">
          <div className="glass-card p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-[100px]" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to <span className="text-gradient-cyan">Transform</span> Your Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the NeoFolks community and be part of something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-premium text-white px-8 py-6 text-lg font-medium rounded-xl group"
                  asChild
                >
                  <Link to="/join">
                    Join the Community
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  className="px-8 py-6 text-lg font-medium rounded-xl border-border/50 hover:bg-white/5 hover:border-cyan-500/50 transition-all"
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
