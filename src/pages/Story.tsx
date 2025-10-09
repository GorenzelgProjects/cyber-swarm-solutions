import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Rocket, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Story = () => {
  const milestones = [
    {
      icon: Lightbulb,
      title: "The Genesis",
      description: "ColleaiQ's foundation is based on multi-agent systems, originally intended for administrative tasks in customer support and HR. The technological complexity revealed a better fit for technical domains."
    },
    {
      icon: Target,
      title: "Strategic Pivot",
      description: "After meetings with major Danish IT and cybersecurity companies, we discovered a critical need in cybersecurity. The complexity of our technology perfectly matched the challenges in this sector."
    },
    {
      icon: Rocket,
      title: "Innovation Focus",
      description: "We now focus on building the bridge between AI and cybersecurity - an increasingly vital necessity. 2025 is the year of agentic AI, and ColleaiQ explores the natural next step: multi-agent networks."
    },
    {
      icon: Globe,
      title: "European Leadership",
      description: "ColleaiQ aims to be the first company in Europe utilizing multi-agent networks in cybersecurity - a proposal that might finally bring cybersecurity ahead of cyber terrorists."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="bg-gradient-accent bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building the bridge between advanced AI and cybersecurity to create 
              proactive, explainable defense for organizations that can't afford to wait.
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="px-4 py-16 bg-gradient-cyber">
          <div className="container mx-auto max-w-5xl">
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  2025 has been called the year of agentic AI. However, ColleaiQ explores the natural 
                  next step: multi-agent networks. ColleaiQ aims to be the first company in Europe that 
                  utilizes these networks in cybersecurity - a proposal that might finally bring 
                  cybersecurity ahead of cyberterrorists.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ColleaiQ is building proactive, explainable cyber defense for organizations that can't 
                  afford to wait for the next incident. Our platform uses specialized AI agents that 
                  continuously simulate real attacker behavior in safe, bounded environments, then translate 
                  those findings into clear, auditable actions your security operations center can trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Journey */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">The Journey</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {milestones.map((milestone, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="h-14 w-14 rounded-lg bg-gradient-cyber flex items-center justify-center">
                      <milestone.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Need */}
        <section className="px-4 py-20 bg-gradient-cyber">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-12">Why Now?</h2>
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">The European Security Landscape</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Denmark and the rest of Europe find themselves in an extraordinary security situation 
                    following the conflict in Ukraine and a politically uncertain USA. During this time, 
                    it is particularly important to promote the UN's sustainable development goals of creating 
                    robust digital infrastructure and supporting strong operation and sovereignty of critical functions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Digital Vulnerability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Danish society has for many years benefited from being one of the world's most digitalized 
                    countries, but the benefits it has brought also bring increased risk and consequences for 
                    cyber attacks. Danish Industry assesses the cyber threat as one of the greatest societal 
                    risks, and almost every other Danish company is not sufficiently secured.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">The Wake-Up Call</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The need became particularly clear in 2017, when Danish companies truly had their eyes 
                    opened when Mærsk was hit by the hacker attack, NotPetya, which cost them up to 2 billion 
                    kroner. For shipping companies and other actors operating 24/7, downtime can result in 
                    losses in the millions per day.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Supporting Digital Sovereignty</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As Danish-developed technology, our solution supports the EU's strategy and requirements 
                    for digital sovereignty and can be scaled to other EU countries where the same needs exist. 
                    We're not just building a product - we're contributing to European cybersecurity independence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <Card className="bg-gradient-cyber border-border shadow-glow">
              <CardContent className="p-12 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To become a natural tool in the fight for cybersecurity and sovereignty, 
                  providing explainable and secure AI within sectors where the threat of cyber attacks 
                  is very high - including energy, defense, shipping, and critical infrastructure.
                </p>
                <p className="text-lg text-muted-foreground">
                  We're bridging AI and cybersecurity to create a safer digital Europe.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Story;
