import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Network, Eye, Lock, Target, Zap, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraphBackground } from "@/components/GraphBackground";

const Index = () => {
  const features = [
    {
      icon: Network,
      title: "Multi-Agent Networks",
      description: "Specialised AI agents collaborate in real-time, simulating red-team attacks and blue-team defence in safe, bounded environments."
    },
    {
      icon: Shield,
      title: "Proactive Defence",
      description: "Discover vulnerabilities internally before attackers do through continuous, realistic threat simulation."
    },
    {
      icon: Eye,
      title: "Explainable & Auditable",
      description: "Every agent decision is traceable and transparent, meeting NIS2 compliance requirements with full visibility."
    },
    {
      icon: Target,
      title: "Zero-Day-Like Discovery",
      description: "Uncover unknown vulnerabilities through advanced graph analytics and reinforcement learning."
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      description: "Agents evolve from analyst decisions and simulation outcomes, improving detection capabilities over time."
    },
    {
      icon: Lock,
      title: "Safe Sandbox Simulation",
      description: "All attack scenarios run in secure, isolated environments that mirror production without risk."
    }
  ];

  const stats = [
    { value: "~3,000", label: "Danish organisations need NIS2 compliance" },
    { value: "4.7M", label: "Unfilled cybersecurity roles globally" },
    { value: "24/7", label: "Continuous threat monitoring & simulation" },
    { value: "First", label: "Multi-agent network in EU cybersecurity" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
              Proactive, Explainable{" "}
              <span className="text-primary">
                Cyber Defence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Europe's first multi-agent AI platform that simulates real attacker behaviour 
              to uncover vulnerabilities internally, then translates findings into auditable 
              actions your SOC can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-lg rounded-2xl shadow-hover">
                <Link to="/solution">Explore Our Solution</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg rounded-2xl">
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              The Cybersecurity Challenge
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Organisations face unprecedented threats whilst struggling with talent shortages 
              and increasingly complex compliance mandates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in rounded-2xl">
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                  <AlertCircle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">New Threats & Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Generative AI lowers barriers for attackers. NIS2 requires ~3,000 Danish organisations 
                  to demonstrate explainable, auditable security measures.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in rounded-2xl" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Reactive Posture = Risk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Waiting for incidents is costly. NotPetya cost Mærsk ≈ DKK 2 billion. 
                  Proactive simulation finds weaknesses before attackers do.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in rounded-2xl" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Talent Shortage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ~4.7 million unfilled cybersecurity roles globally. Organisations need 
                  intelligent automation for 24/7 coverage and expert-level analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 graph-pattern opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Innovative Approach
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Multi-agent systems working together to provide proactive, 
              traceable, and continuously improving cybersecurity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in rounded-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-mesh border-border shadow-hover overflow-hidden rounded-2xl max-w-4xl mx-auto">
            <CardContent className="p-12 md:p-16 text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Stay Ahead of Cyber Threats?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join the organisations transforming their cybersecurity from reactive to proactive 
                with ColleaiQ's explainable multi-agent AI platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="rounded-2xl shadow-hover">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl">
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
