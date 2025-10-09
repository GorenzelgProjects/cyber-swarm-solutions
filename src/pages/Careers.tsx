import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Rocket, Users, Mail, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraphBackground } from "@/components/GraphBackground";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Work on cutting-edge AI and cybersecurity challenges. Push the boundaries of multi-agent systems and explainable AI."
    },
    {
      icon: Heart,
      title: "Mission-Driven",
      description: "Help organisations defend against cyber threats. Your work has real-world impact on European digital security."
    },
    {
      icon: Globe,
      title: "European Roots",
      description: "Proudly based in Copenhagen, contributing to EU digital sovereignty and the future of European cybersecurity."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a team of passionate innovators in AI and security. Learn, grow, and solve complex problems together."
    }
  ];

  const openings = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Copenhagen, Denmark / Remote",
      type: "Full-time"
    },
    {
      title: "Cybersecurity Researcher",
      department: "Research",
      location: "Copenhagen, Denmark",
      type: "Full-time"
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      location: "Remote (EU)",
      type: "Full-time"
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Copenhagen, Denmark / Remote",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="px-4 py-20 relative overflow-hidden">
          <GraphBackground />
          <div className="container mx-auto max-w-4xl text-center space-y-8 animate-fade-in relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Build the Future of <span className="text-primary">Proactive Cyber Defence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join us in building explainable AI cybersecurity solutions. We're a team of innovators 
              in AI and security, proudly based in Europe and pushing the boundaries of what's possible.
            </p>
          </div>
        </section>

        {/* Why ColleaiQ */}
        <section className="px-4 py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Why ColleaiQ?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 rounded-2xl"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="px-4 py-16 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What We Offer</h2>
            <Card className="bg-card border-border shadow-card rounded-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">💰 Competitive Compensation</h3>
                    <p className="text-sm text-muted-foreground">Competitive salaries and equity options for early team members.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">🌍 Remote-Friendly</h3>
                    <p className="text-sm text-muted-foreground">Flexible work arrangements with options for remote work across the EU.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">📚 Learning & Development</h3>
                    <p className="text-sm text-muted-foreground">Conference budgets, training programmes, and continuous learning opportunities.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">🏥 Health & Wellness</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive health insurance and wellness benefits.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">🚀 Cutting-Edge Tech</h3>
                    <p className="text-sm text-muted-foreground">Work with the latest AI, ML, and cybersecurity technologies.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">🤝 Impact-Driven</h3>
                    <p className="text-sm text-muted-foreground">Your work directly contributes to European cybersecurity resilience.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Open Positions */}
        <section className="px-4 py-24">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Open Positions</h2>
            <div className="space-y-4">
              {openings.map((job, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 rounded-2xl group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium">
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <Button className="rounded-2xl" asChild>
                        <a href="mailto:careers@colleaiq.dk">Apply Now</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* General Application */}
            <Card className="mt-12 bg-gradient-mesh border-border shadow-card rounded-2xl">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Don't See the Right Role?</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're always interested in hearing from talented individuals passionate about 
                  AI and cybersecurity. Send us your CV and let's explore opportunities together.
                </p>
                <Button size="lg" className="rounded-2xl" asChild>
                  <a href="mailto:careers@colleaiq.dk" className="inline-flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Send Your CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-16 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Questions About Joining ColleaiQ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our hiring team is here to help. Reach out to learn more about life at ColleaiQ, 
              our interview process, or specific opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-2xl" asChild>
                <a href="mailto:careers@colleaiq.dk">Contact HR Team</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl" asChild>
                <a href="/story">Learn About Our Mission</a>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
