import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Get in <span className="bg-gradient-accent bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your cybersecurity with multi-agent AI? 
              Let's discuss how ColleaiQ can protect your organization.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="px-4 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="bg-card border-border shadow-card">
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Contact Information</h3>
                      <p className="text-sm text-muted-foreground">
                        Reach out to us through any of these channels
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-cyber flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Email</p>
                          <a 
                            href="mailto:kontakt@colleaiq.dk" 
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            kontakt@colleaiq.dk
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-cyber flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Office</p>
                          <p className="text-sm text-muted-foreground">
                            Elbagade 19, 2. tv<br />
                            2300 København S<br />
                            Denmark
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-cyber flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Website</p>
                          <a 
                            href="https://www.colleaiq.dk" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            www.colleaiq.dk
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-cyber border-border shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to inquiries within 24 hours during business days.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="lg:col-span-2 bg-card border-border shadow-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your organization"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your cybersecurity needs..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy 
                      and consent to be contacted regarding your inquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo CTA */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-3xl">
            <Card className="bg-gradient-cyber border-border shadow-glow">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold">Request a Demo</h2>
                <p className="text-lg text-muted-foreground">
                  See ColleaiQ's multi-agent AI system in action. Schedule a personalized 
                  demonstration to learn how we can strengthen your cybersecurity posture.
                </p>
                <Button size="lg">
                  Schedule Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
