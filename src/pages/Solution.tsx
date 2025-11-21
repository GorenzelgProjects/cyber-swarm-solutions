import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { InteractiveAgentDiagram } from "@/components/InteractiveAgentDiagram";
import { Button } from "@/components/ui/button";
import { Network, RefreshCw, CheckCircle, Eye, Shield, Lock } from "lucide-react";

const Solution = () => {
  const components = [
    {
      icon: Network,
      title: "Multi-Agent Collaboration",
      description: "Specialised agents work together in real time: red-team agents simulate attacks while blue-team agents monitor, detect and defend across assets and environments."
    },
    {
      icon: Eye,
      title: "Traceable Recommendations",
      description: "Every decision and action is fully explainable and auditable. Meet NIS2 compliance requirements with complete visibility into agent reasoning and recommendations."
    },
    {
      icon: RefreshCw,
      title: "Continuous Learning",
      description: "Agents learn from analyst decisions and post-simulation results. Detection rules and policies update automatically, becoming sharper and faster at countering new techniques."
    }
  ];

  const advantages = [
    "Helps you discover practical exposure paths before attackers use them",
    "Focuses on concrete scenarios instead of only static reports",
    "Provides clear, evidence-based findings that are easy to share with stakeholders",
    "Runs rehearsals in safe, bounded sandbox environments",
    "Exports results into your existing ticket or case systems",
    "Supports NIS2 work with structured documentation of testing and decisions",
    "Built and developed in the EU, supporting European digital sovereignty"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-12 pb-10">
        {/* Hero */}
        <section className="px-4 py-8 md:py-10 relative overflow-hidden">
          <div className="container mx-auto max-w-4xl text-center space-y-6 animate-fade-in relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Our <span className="text-primary">Solution</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A multi-agent AI system that rehearses realistic attacks in a safe environment 
              and turns the results into concrete, traceable findings.
            </p>
          </div>
        </section>

        {/* Core Components */}
        <section className="px-4 py-8 md:py-10 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-8 text-foreground">Core Components</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {components.map((component, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in rounded-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                      <component.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{component.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {component.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Multi-Agent Architecture */}
        <section className="px-4 py-8 md:py-10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-6 text-foreground">Multi-Agent Architecture</h2>
            <p className="text-center text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our specialised AI agents work together to plan and run rehearsals in a sandbox and describe what happens in a way that people can understand and act on:
            </p>

            <InteractiveAgentDiagram />
          </div>
        </section>


        {/* Key Advantages */}
        <section className="px-4 py-8 md:py-10 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl relative z-10">
            <h2 className="text-4xl font-bold text-center mb-6 text-foreground">Key Competitive Advantages</h2>
            <Card className="bg-card border-border shadow-card rounded-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  {advantages.map((advantage, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground leading-relaxed">{advantage}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Details */}
        <section className="px-4 py-8 md:py-10 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-6 text-foreground">Technical Foundation</h2>
            <Card className="bg-card border-border shadow-card rounded-2xl">
              <CardContent className="p-8 md:p-12 space-y-10">
                <div className="flex items-start gap-4">
                  <Network className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Advanced AI Architecture</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      ColleaiQ combines modern language models with graph-based views of your environment and simple rule engines. The agents use these ingredients to propose attack paths, carry out steps in the sandbox and describe what happened in normal language.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Expert Integration</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We work with experienced security practitioners and red-teamers when we design scenarios and interpret results. Their input shapes how the agents explore and how findings are presented, so the output is useful for real security work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Lock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Sandbox Environments</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All rehearsals run in isolated sandbox environments that mirror important parts of your production infrastructure. No simulations are executed directly against live systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <RefreshCw className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Continuous Evolution</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The system can use feedback from simulations and analysts to adjust which paths it explores and how it phrases recommendations. Over time, this helps make rehearsals and findings more relevant for your specific environment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-8 md:py-10">
          <div className="container mx-auto max-w-4xl text-center">
            <Card className="bg-gradient-mesh border-border shadow-hover rounded-2xl">
              <CardContent className="p-8 md:p-10 space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to See It in Action?</h2>
                <p className="text-xl text-muted-foreground">
                  See how a few focused rehearsals in a sandbox can give you clearer insight into your real exposure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <Button size="lg" className="rounded-2xl" asChild>
                    <a href="/contact">Request a Demo</a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-2xl" asChild>
                    <a href="/simulation-deep-dive">Explore Simulation Process</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Solution;
