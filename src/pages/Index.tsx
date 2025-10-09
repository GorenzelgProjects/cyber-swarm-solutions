import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Network, Eye, Lock, Target, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-cyber.jpg";

const Index = () => {
  const features = [
    {
      icon: Network,
      title: "Multi-Agent System",
      description: "Specialized AI agents collaborate in real-time for comprehensive threat coverage."
    },
    {
      icon: Shield,
      title: "Proactive Defense",
      description: "Red-team agents simulate attacks while blue-team agents defend continuously."
    },
    {
      icon: Eye,
      title: "Traceable & Auditable",
      description: "Full visibility into agent decisions for NIS2 compliance and trust."
    },
    {
      icon: Target,
      title: "Zero-Day Detection",
      description: "Discover vulnerabilities before attackers do through continuous simulation."
    },
    {
      icon: Zap,
      title: "Continuous Improvement",
      description: "Agents learn from analyst decisions and improve detection over time."
    },
    {
      icon: Lock,
      title: "Safe Simulations",
      description: "All attacks run in secure, bounded sandbox environments."
    }
  ];

  const stats = [
    { value: "~3,000", label: "Danish organizations need NIS2 compliance" },
    { value: "4.7M", label: "Unfilled cybersecurity roles globally" },
    { value: "24/7", label: "Continuous threat monitoring" },
    { value: "First", label: "Multi-agent network in EU cybersecurity" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="AI Cybersecurity Network" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Proactive Cybersecurity with{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Multi-Agent AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Europe's first multi-agent AI platform that simulates real attacker behavior 
              to defend your organization before threats emerge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/solution">Explore Our Solution</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-cyber">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              The Cybersecurity Challenge
            </h2>
            <p className="text-xl text-muted-foreground">
              Organizations face unprecedented threats while struggling with talent shortages 
              and complex compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-cyber flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">New Threats & Compliance</h3>
                <p className="text-muted-foreground">
                  Generative AI weaponizes CVEs. NIS2 requires ~3,000 Danish organizations 
                  to show explainable, auditable security measures.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-cyber flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Zero-Day Vulnerabilities</h3>
                <p className="text-muted-foreground">
                  Reactive cybersecurity leaves organizations exposed. Impact proven: 
                  NotPetya cost Mærsk ≈ $300M in damages.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-cyber flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Talent Shortage</h3>
                <p className="text-muted-foreground">
                  ~4.7 million unfilled cybersecurity roles globally. Organizations need 
                  intelligent automation for 24/7 coverage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-cyber">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Innovative Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Multi-agent systems working together to provide proactive, 
              traceable, and continuously improving cybersecurity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-cyber flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-cyber border-border shadow-glow overflow-hidden">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Stay Ahead of Cyber Threats?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the organizations transforming their cybersecurity from reactive to proactive 
                with ColleaiQ's multi-agent AI platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/story">Learn Our Story</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
