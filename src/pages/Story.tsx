import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Rocket, Globe, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Story = () => {
  const milestones = [
    {
      icon: Lightbulb,
      title: "The Genesis",
      description: "ColleaiQ's foundation is multi-agent systems, originally built for administrative tasks in customer support and HR. Very quickly, the technological complexity showed a better fit for highly technical domains."
    },
    {
      icon: Target,
      title: "Strategic Pivot",
      description: "After meetings with major Danish IT and cybersecurity companies, we discovered a critical need in cyber defence. The complexity of our technology matched the complexity of the threat landscape far better than traditional automation tools."
    },
    {
      icon: Rocket,
      title: "Innovation Focus",
      description: "We now focus on building the bridge between AI and cybersecurity – an increasingly vital necessity. While everyone talks about agentic AI in 2025, ColleaiQ works on the natural next step: multi-agent networks designed specifically for security."
    },
    {
      icon: Globe,
      title: "European Ambition",
      description: "As a Danish deep-tech startup, ColleaiQ aims to be the first company in Europe to operationalise multi-agent networks in cybersecurity – and to prove that this approach can bring defenders ahead of attackers."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="px-4 py-20 relative overflow-hidden">
          <div className="container mx-auto max-w-4xl text-center space-y-8 animate-fade-in relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building the bridge between advanced AI and cybersecurity to create 
              proactive, explainable defence for organisations that can't afford to wait 
              for the next incident.
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="px-4 py-16 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <Card className="bg-card border-border shadow-card rounded-2xl">
              <CardContent className="p-8 md:p-12 space-y-6">
                <h2 className="text-3xl font-bold text-center text-foreground">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  2025 has been called the year of agentic AI. ColleaiQ explores the natural 
                  next step: multi-agent networks.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We aim to be the first company in Europe that uses these networks in 
                  cybersecurity – a step that can finally move defence ahead of cyber threats 
                  instead of constantly reacting to them.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our platform uses specialised AI agents that continuously simulate real attacker 
                  behaviour in safe, bounded environments, then translate those findings into 
                  clear, auditable actions your security operations centre can trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Journey */}
        <section className="px-4 py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">The Journey</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {milestones.map((milestone, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in rounded-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                      <milestone.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{milestone.title}</h3>
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
        <section className="px-4 py-24 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 graph-pattern opacity-50" />
          <div className="container mx-auto max-w-5xl relative z-10">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Why Now?</h2>
            <Card className="bg-card border-border shadow-card rounded-2xl">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">The European Security Landscape</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Denmark and the rest of Europe find themselves in an extraordinary security situation 
                        following the conflict in Ukraine and a politically uncertain USA. In this context, 
                        it is especially important to promote the UN Sustainable Development Goals around 
                        robust digital infrastructure and resilient, sovereign operation of critical functions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Target className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">Digital Vulnerability</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Danish society has benefited for years from being one of the world's most digitalised 
                        countries. The same digitisation also increases the impact of cyber-attacks. Danish 
                        Industry assesses the cyber threat as one of the greatest societal risks, and almost 
                        every second Danish company is still not sufficiently secured.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">A Wake-Up Call</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The need became painfully clear in 2017, when Mærsk was hit by the NotPetya attack, 
                        costing up to DKK 2 billion. For shipping companies and other actors operating 24/7, 
                        downtime can mean losses in the millions per day.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Globe className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">Supporting Digital Sovereignty</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        As Danish-developed technology, ColleaiQ supports the EU's strategy and requirements 
                        for digital sovereignty and can be scaled to other EU countries facing the same needs. 
                        We're not just building a product – we're contributing to European cybersecurity independence.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission */}
        <section className="px-4 py-24">
          <div className="container mx-auto max-w-4xl text-center">
            <Card className="bg-gradient-mesh border-border shadow-hover rounded-2xl">
              <CardContent className="p-12 md:p-16 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To become a natural tool in the fight for cybersecurity and sovereignty, 
                  providing explainable and secure AI in sectors where the threat of cyber-attacks 
                  is very high – including energy, defence, shipping and critical infrastructure.
                </p>
                <p className="text-lg text-foreground font-semibold">
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
