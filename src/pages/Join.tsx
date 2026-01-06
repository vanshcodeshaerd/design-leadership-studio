import { useState } from "react";
import { Check, Users, Code, Calendar, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";

const Join = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    year: "",
    interests: [] as string[],
    experience: "",
    motivation: "",
    agreeToTerms: false
  });

  const benefits = [
    { icon: Code, title: "Skill Development", description: "Access to workshops and training" },
    { icon: Users, title: "Community Network", description: "Connect with like-minded students" },
    { icon: Calendar, title: "Exclusive Events", description: "Priority access to hackathons" },
    { icon: Award, title: "Recognition", description: "Leadership opportunities" }
  ];

  const interestAreas = [
    "Web Development", "Mobile Apps", "Data Science", "AI/ML",
    "Cybersecurity", "Cloud Computing", "UI/UX Design", "DevOps",
    "Blockchain", "Game Dev", "IoT", "Leadership"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.course || !formData.year) {
      toast({ title: "Missing Information", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({ title: "Terms Required", description: "Please agree to the terms and conditions.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review and get back to you soon.",
      });

      setFormData({
        fullName: "", email: "", phone: "", course: "", year: "",
        interests: [], experience: "", motivation: "", agreeToTerms: false
      });
    } catch (error) {
      toast({ title: "Submission Failed", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header-padding relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="container mx-auto container-padding text-center relative z-10">
          <ParallaxSection>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Become A Member</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient-hero">
              Join Neofolks
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Ready to be part of NUV's most vibrant tech community? Join us on an exciting journey.
            </p>
          </ParallaxSection>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="section-padding-xs">
        <div className="container mx-auto container-padding">
          <ParallaxSection>
            <h2 className="text-lg font-bold text-center mb-6 text-gradient-primary">Why Join?</h2>
          </ParallaxSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {benefits.map((benefit, index) => (
              <ParallaxSection key={index} delay={index * 60}>
                <div className="feature-card text-center">
                  <div className="w-10 h-10 rounded-lg icon-gradient mx-auto mb-3 flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xs font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground text-[10px] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="section-padding-sm bg-card/20">
        <div className="container mx-auto container-padding">
          <div className="max-w-xl mx-auto">
            <ParallaxSection>
              <div className="glass-card rounded-xl p-6">
                <div className="text-center mb-5">
                  <h2 className="text-lg font-bold mb-1">Membership Application</h2>
                  <p className="text-muted-foreground text-xs">Fill out this form to join the Neofolks community.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Personal Information */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full icon-gradient text-white text-[10px]">1</span>
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="fullName" className="text-xs">Full Name *</Label>
                        <Input
                          id="fullName" name="fullName" type="text"
                          value={formData.fullName} onChange={handleInputChange}
                          placeholder="Your full name" required
                          className="bg-background/50 h-9 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-xs">Email Address *</Label>
                        <Input
                          id="email" name="email" type="email"
                          value={formData.email} onChange={handleInputChange}
                          placeholder="your@email.com" required
                          className="bg-background/50 h-9 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-xs">Phone Number</Label>
                      <Input
                        id="phone" name="phone" type="tel"
                        value={formData.phone} onChange={handleInputChange}
                        placeholder="+91 12345 67890"
                        className="bg-background/50 h-9 text-sm"
                      />
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full icon-gradient text-white text-[10px]">2</span>
                      Academic Information
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="course" className="text-xs">Course/Program *</Label>
                        <Select value={formData.course} onValueChange={(value) => handleSelectChange("course", value)}>
                          <SelectTrigger className="bg-background/50 h-9 text-sm">
                            <SelectValue placeholder="Select course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="btech-cse">B.Tech Computer Science</SelectItem>
                            <SelectItem value="btech-it">B.Tech IT</SelectItem>
                            <SelectItem value="btech-ece">B.Tech ECE</SelectItem>
                            <SelectItem value="bca">BCA</SelectItem>
                            <SelectItem value="mca">MCA</SelectItem>
                            <SelectItem value="mtech">M.Tech</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="year" className="text-xs">Current Year *</Label>
                        <Select value={formData.year} onValueChange={(value) => handleSelectChange("year", value)}>
                          <SelectTrigger className="bg-background/50 h-9 text-sm">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1st">1st Year</SelectItem>
                            <SelectItem value="2nd">2nd Year</SelectItem>
                            <SelectItem value="3rd">3rd Year</SelectItem>
                            <SelectItem value="4th">4th Year</SelectItem>
                            <SelectItem value="final">Final Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Technical Interests */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full icon-gradient text-white text-[10px]">3</span>
                      Technical Interests
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {interestAreas.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={() => handleInterestToggle(interest)}
                            className="h-3.5 w-3.5"
                          />
                          <Label htmlFor={interest} className="text-[10px] cursor-pointer leading-tight">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience & Motivation */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full icon-gradient text-white text-[10px]">4</span>
                      Tell Us About Yourself
                    </h3>
                    
                    <div>
                      <Label htmlFor="experience" className="text-xs">Technical Experience</Label>
                      <Textarea
                        id="experience" name="experience"
                        value={formData.experience} onChange={handleInputChange}
                        placeholder="Programming languages, projects, skills..."
                        rows={2} className="bg-background/50 text-sm"
                      />
                    </div>

                    <div>
                      <Label htmlFor="motivation" className="text-xs">Why do you want to join? *</Label>
                      <Textarea
                        id="motivation" name="motivation"
                        value={formData.motivation} onChange={handleInputChange}
                        placeholder="What motivates you to join our community?"
                        rows={2} className="bg-background/50 text-sm" required
                      />
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
                      className="h-3.5 w-3.5 mt-0.5"
                    />
                    <Label htmlFor="terms" className="text-[10px] leading-relaxed cursor-pointer">
                      I agree to the terms and conditions of Neofolks membership and commit to active participation in community activities.
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-premium text-white text-sm py-5 rounded-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-padding-xs">
        <div className="container mx-auto container-padding">
          <ParallaxSection>
            <div className="text-center">
              <h2 className="text-lg font-bold mb-5">What Happens Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  { step: "1", title: "Application Review", desc: "We'll review within 3-5 days" },
                  { step: "2", title: "Welcome Interview", desc: "Brief informal chat" },
                  { step: "3", title: "Community Onboarding", desc: "Join orientation and start!" }
                ].map((item, index) => (
                  <ParallaxSection key={index} delay={index * 100}>
                    <div className="text-center">
                      <div className="w-9 h-9 rounded-full icon-gradient text-white font-bold text-sm mx-auto mb-2 flex items-center justify-center">
                        {item.step}
                      </div>
                      <h3 className="text-xs font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-[10px]">{item.desc}</p>
                    </div>
                  </ParallaxSection>
                ))}
              </div>
            </div>
          </ParallaxSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
