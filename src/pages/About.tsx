import { Users, TrendingUp, Code, Award, BookOpen, Target } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: "Community Building",
      description: "Fostering an inclusive tech community at Navrachana University where students explore, learn, and innovate together.",
      metric: "Growing Community"
    },
    {
      icon: TrendingUp,
      title: "Industry Connection",
      description: "Bridging academic learning with real-world applications through workshops, seminars, and industry partnerships.",
      metric: "Industry Focus"
    },
    {
      icon: Code,
      title: "Technical Innovation",
      description: "Empowering students with cutting-edge technologies and hands-on learning experiences in the digital world.",
      metric: "Tech Excellence"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section-padding bg-gradient-glow/10">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient-primary">
            About Neofolks
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Neofolks is the premier technology club at Navrachana University (NUV), 
            dedicated to fostering innovation, creativity, and collaboration among students passionate about technology.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="glass-card glass-card-hover rounded-2xl p-8 sm:p-12 mb-16">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-4">Our Mission & Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  At Neofolks, we believe in <strong>Education Beyond Books</strong> - Navrachana University's core ethos 
                  of holistic development through extracurricular activities, seminars, and workshops. We provide a platform 
                  for students to explore cutting-edge technologies, develop practical skills, and build meaningful connections 
                  in the tech community.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to bridge the gap between academic learning and real-world applications, emphasizing 
                  industry connection, application-based learning, and interdisciplinary collaboration - values that 
                  align perfectly with Navrachana University's focus on innovation and practical education.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="glass-card glass-card-hover rounded-xl p-8 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {highlight.description}
                </p>
                
                <div className="text-sm font-medium text-accent">
                  {highlight.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Connection */}
      <section className="section-padding bg-card/20">
        <div className="container mx-auto container-padding">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient-primary">Our Connection to NUV</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-semibold">Education Beyond Books</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Embracing Navrachana University's philosophy of holistic development, Neofolks extends 
                learning beyond traditional classroom boundaries through hands-on workshops, tech talks, 
                and collaborative projects that prepare students for real-world challenges.
              </p>
            </div>
            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Target className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-semibold">Innovation & Industry Focus</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Aligned with NUV's commitment to industry connection and application-based learning, 
                we facilitate interdisciplinary collaboration, encourage innovative thinking, and 
                create pathways for students to engage with emerging technologies and industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Focus On */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold text-center mb-12">What We Focus On</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Web Development", "Mobile Apps", "Data Science", "AI/ML",
              "Cloud Computing", "Cybersecurity", "UI/UX Design", "Community Building",
              "Blockchain", "IoT", "Game Development", "DevOps"
            ].map((focus, index) => (
              <div 
                key={index}
                className="glass-card rounded-lg p-6 text-center hover:bg-muted/30 transition-colors duration-300"
              >
                <span className="font-medium">{focus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card/20">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient-primary">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries and exploring new technological possibilities"
              },
              {
                title: "Collaboration", 
                description: "Working together to achieve greater goals and build lasting connections"
              },
              {
                title: "Learning",
                description: "Continuous growth and knowledge sharing among all community members"
              },
              {
                title: "Inclusivity",
                description: "Welcoming everyone regardless of background or experience level"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-accent">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;