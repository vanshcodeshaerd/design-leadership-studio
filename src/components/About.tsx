import { Users, TrendingUp, Code, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: "Team Leadership",
      description: "Built and mentored cross-functional teams of 15+ engineers, fostering innovation and collaborative growth.",
      metric: "15+ Engineers Led"
    },
    {
      icon: TrendingUp,
      title: "Product Growth",
      description: "Drove 300% user engagement growth through strategic product decisions and technical excellence.",
      metric: "300% Growth"
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Architected scalable solutions serving millions of users with modern technologies and best practices.",
      metric: "Millions of Users"
    }
  ];

  return (
    <section id="about" className="section-padding bg-card/20">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient-primary">
            Leadership Through Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 8 years of experience in technology leadership, I specialize in transforming 
            ideas into scalable solutions while building and empowering world-class engineering teams.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="glass-card glass-card-hover rounded-2xl p-8 sm:p-12 mb-16">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Leadership Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technology leadership isn't just about writing code—it's about inspiring teams, 
                making strategic decisions, and creating an environment where innovation thrives. 
                I believe in leading by example, fostering continuous learning, and building 
                products that make a meaningful impact on users' lives.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* Skills & Expertise */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Core Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "React & TypeScript", "Node.js & Python", "Team Management", "Product Strategy",
              "System Architecture", "DevOps & CI/CD", "Agile Leadership", "User Experience"
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-muted/30 rounded-lg p-4 text-center hover:bg-muted/50 transition-colors duration-300"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;