import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Team />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
