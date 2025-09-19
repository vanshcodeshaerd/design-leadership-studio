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
    {
      icon: Code,
      title: "Skill Development",
      description: "Access to workshops, coding sessions, and technical training programs"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with like-minded students and industry professionals"
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Priority access to hackathons, seminars, and tech talks"
    },
    {
      icon: Award,
      title: "Recognition & Growth",
      description: "Leadership opportunities and skill recognition programs"
    }
  ];

  const interestAreas = [
    "Web Development",
    "Mobile App Development",
    "Data Science & Analytics",
    "Artificial Intelligence/ML",
    "Cybersecurity",
    "Cloud Computing",
    "UI/UX Design",
    "DevOps",
    "Blockchain",
    "Game Development",
    "IoT",
    "Community Leadership"
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
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest in joining Neofolks. We'll review your application and get back to you soon.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        year: "",
        interests: [],
        experience: "",
        motivation: "",
        agreeToTerms: false
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section-padding bg-gradient-glow/10">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient-primary">
            Join Neofolks
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to be part of NUV's most vibrant tech community? Join us and embark on an 
            exciting journey of learning, innovation, and collaboration.
          </p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient-primary">
            Why Join Neofolks?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card glass-card-hover rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="section-padding bg-card/20">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 sm:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Membership Application</h2>
                <p className="text-muted-foreground">
                  Fill out this form to become a member of the Neofolks community at NUV.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-primary text-white text-sm">1</span>
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 12345 67890"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-primary text-white text-sm">2</span>
                    Academic Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="course">Course/Program *</Label>
                      <Select value={formData.course} onValueChange={(value) => handleSelectChange("course", value)}>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select your course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="btech-cse">B.Tech Computer Science</SelectItem>
                          <SelectItem value="btech-it">B.Tech Information Technology</SelectItem>
                          <SelectItem value="btech-ece">B.Tech Electronics & Communication</SelectItem>
                          <SelectItem value="bca">Bachelor of Computer Applications</SelectItem>
                          <SelectItem value="mca">Master of Computer Applications</SelectItem>
                          <SelectItem value="mtech">M.Tech</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="year">Current Year *</Label>
                      <Select value={formData.year} onValueChange={(value) => handleSelectChange("year", value)}>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select your year" />
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
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-primary text-white text-sm">3</span>
                    Technical Interests
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {interestAreas.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={() => handleInterestToggle(interest)}
                        />
                        <Label htmlFor={interest} className="text-sm cursor-pointer">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience & Motivation */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-primary text-white text-sm">4</span>
                    Tell Us About Yourself
                  </h3>
                  
                  <div>
                    <Label htmlFor="experience">Previous Technical Experience</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Tell us about any programming languages you know, projects you've worked on, or technical skills you have..."
                      rows={4}
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="motivation">Why do you want to join Neofolks? *</Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      placeholder="What motivates you to join our tech community? What do you hope to achieve or contribute?"
                      rows={4}
                      className="bg-background/50"
                      required
                    />
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                    I agree to the terms and conditions of Neofolks membership and commit to 
                    active participation in community activities and events.
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-white font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Application Review</h3>
                <p className="text-muted-foreground text-sm">
                  Our team will review your application within 3-5 business days
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-white font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Welcome Interview</h3>
                <p className="text-muted-foreground text-sm">
                  Brief informal chat to get to know you and answer any questions
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-white font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Community Onboarding</h3>
                <p className="text-muted-foreground text-sm">
                  Join our orientation session and start your Neofolks journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;