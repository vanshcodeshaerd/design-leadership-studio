import { Users, TrendingUp, Code, Award, BookOpen, Target } from "lucide-react";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: "Community Building",
      description: "Fostering an inclusive tech community where students explore, learn, and innovate together.",
      metric: "Growing Community"
    },
    {
      icon: TrendingUp,
      title: "Industry Connection",
      description: "Bridging academic learning with real-world applications through workshops and partnerships.",
      metric: "Industry Focus"
    },
    {
      icon: Code,
      title: "Technical Innovation",
      description: "Empowering students with cutting-edge technologies and hands-on learning experiences.",
      metric: "Tech Excellence"
    }
  ];

  const focusAreas = [
    "Web Development", "Mobile Apps", "Data Science", "AI/ML",
    "Cloud Computing", "Cybersecurity", "UI/UX Design", "Community Building",
    "Blockchain", "IoT", "Game Development", "DevOps"
  ];

  const values = [
    { title: "Innovation", description: "Pushing boundaries and exploring new technological possibilities" },
    { title: "Collaboration", description: "Working together to achieve greater goals and build connections" },
    { title: "Learning", description: "Continuous growth and knowledge sharing among all members" },
    { title: "Inclusivity", description: "Welcoming everyone regardless of background or experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header-padding relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="container mx-auto container-padding text-center relative z-10">
          <ParallaxSection>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Who We Are</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient-hero">
              About Neofolks
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The premier technology club at Navrachana University, dedicated to fostering 
              innovation, creativity, and collaboration among students passionate about technology.
            </p>
          </ParallaxSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding-sm">
        <div className="container mx-auto container-padding">
          <ParallaxSection>
            <div className="glass-card rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg icon-gradient flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3">Our Mission & Vision</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    At Neofolks, we believe in <strong className="text-foreground">Education Beyond Books</strong> - 
                    Navrachana University's core ethos of holistic development through workshops, seminars, and hands-on learning.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our mission is to bridge academic learning and real-world applications, emphasizing 
                    industry connection, practical learning, and interdisciplinary collaboration.
                  </p>
                </div>
              </div>
            </div>
          </ParallaxSection>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {highlights.map((highlight, index) => (
              <ParallaxSection key={index} delay={index * 80}>
                <div className="feature-card h-full text-center">
                  <div className="w-12 h-12 rounded-lg icon-gradient mx-auto mb-4">
                    <highlight.icon className="h-6 w-6 text-white m-auto h-full" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                    {highlight.description}
                  </p>
                  <div className="text-xs font-medium text-gradient-primary">
                    {highlight.metric}
                  </div>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* University Connection */}
      <section className="section-padding-xs bg-card/20">
        <div className="container mx-auto container-padding">
          <ParallaxSection>
            <h2 className="text-xl font-bold text-center mb-6 text-gradient-primary">Our Connection to NUV</h2>
          </ParallaxSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <ParallaxSection delay={100}>
              <div className="feature-card h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg icon-gradient-outline flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-violet-400" />
                  </div>
                  <h3 className="text-base font-semibold">Education Beyond Books</h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Embracing NUV's philosophy of holistic development through hands-on workshops, 
                  tech talks, and projects that prepare students for real-world challenges.
                </p>
              </div>
            </ParallaxSection>
            <ParallaxSection delay={200}>
              <div className="feature-card h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg icon-gradient-outline flex items-center justify-center">
                    <Target className="h-4 w-4 text-violet-400" />
                  </div>
                  <h3 className="text-base font-semibold">Innovation & Industry Focus</h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Aligned with NUV's commitment to industry connection, we facilitate 
                  interdisciplinary collaboration and engagement with emerging technologies.
                </p>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* What We Focus On */}
      <section className="section-padding-xs">
        <div className="container mx-auto container-padding">
          <ParallaxSection>
            <h2 className="text-xl font-bold text-center mb-6">What We Focus On</h2>
          </ParallaxSection>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {focusAreas.map((focus, index) => (
              <ParallaxSection key={index} delay={index * 30}>
                <div className="glass-card rounded-lg p-3 text-center hover:border-violet-500/30 transition-colors duration-300">
                  <span className="font-medium text-xs">{focus}</span>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding-xs bg-card/20">
        <div className="container mx-auto container-padding">
          <ParallaxSection>
            <h2 className="text-xl font-bold text-center mb-6 text-gradient-primary">Our Core Values</h2>
          </ParallaxSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <ParallaxSection key={index} delay={index * 80}>
                <div className="text-center">
                  <h3 className="text-base font-semibold mb-2 text-gradient-cyan">{value.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{value.description}</p>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
