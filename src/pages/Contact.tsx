import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header-padding">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient-primary">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about Neofolks? Want to join our community or collaborate with us? 
            We'd love to hear from you and help you become part of our tech family at NUV.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
