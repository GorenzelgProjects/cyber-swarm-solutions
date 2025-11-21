import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Database, Brain, GitBranch, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { InteractiveAgentDiagram } from "@/components/InteractiveAgentDiagram";
import { Button } from "@/components/ui/button";
import { Network, RefreshCw, CheckCircle, AlertTriangle, Lock } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

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

  const attackScenario = [
    {
      phase: "Planned path",
      icon: AlertTriangle,
      color: "text-destructive",
      description: "The system suggests a sequence where an attacker gains access to a low-privilege account, reaches a server that holds credentials and attempts to extract them.",
    },
    {
      phase: "Rehearsal in the sandbox",
      icon: Shield,
      color: "text-primary",
      description: "The rehearsal walks this path step by step in the sandbox and records where existing controls stop the attempt and where they do not.",
    },
    {
      phase: "Suggested change",
      icon: CheckCircle,
      color: "text-accent",
      description: "ColleaiQ produces a finding that shows which steps succeeded in the sandbox and which configuration or control changes would have blocked the path.",
    },
    {
      phase: "Analyst review",
      icon: Eye,
      color: "text-muted-foreground",
      description: "A human analyst reviews the result with you, checks that the suggestion is realistic in your environment and helps decide what to do next.",
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
        <section className="px-4 py-8 md:py-10 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-6 text-foreground">Multi-Agent Architecture</h2>
            <p className="text-center text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our specialised AI agents work together to plan and run rehearsals in a sandbox and describe what happens in a way that people can understand and act on:
            </p>
            
            {/* Four key components */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="bg-card border-border shadow-card hover:shadow-hover transition-all rounded-2xl cursor-help">
                    <CardContent className="p-8 space-y-4">
                      <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                        <AlertTriangle className="h-7 w-7 text-destructive" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground">Red-Team Agent</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Simulates realistic attack paths in safe, bounded sandbox environments. Focuses on how an attacker could move under agreed scenarios, without touching live systems.
                      </p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The red-team agent turns an exposure or scenario into one or more multi-step attack paths. It executes those steps only inside the sandbox, records which actions succeed or fail, and marks where an attacker could realistically move next.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="bg-card border-border shadow-card hover:shadow-hover transition-all rounded-2xl cursor-help">
                    <CardContent className="p-8 space-y-4">
                      <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                        <Shield className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground">Blue-Team Agent</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Collects observations from each rehearsal, notes which steps worked in the sandbox and highlights where controls did or did not stop the path.
                      </p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The blue-team agent looks at what happened during the rehearsal: which systems were touched, which controls reacted, and where the path stayed open. It groups these observations into a clear story and drafts suggested changes, so a human analyst can review, adjust and decide what to do in the real environment.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <Card className="bg-card border-border shadow-card hover:shadow-hover transition-all rounded-2xl">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                    <Lock className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Sandbox Environment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Isolated test environments that mirror key parts of your setup. Rehearsals run here only, so experiments never put production systems at risk.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-card hover:shadow-hover transition-all rounded-2xl">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Explainable Outputs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Summarises each rehearsal as a short, structured finding that links the attempted path, the evidence from the sandbox and the suggested changes.
                  </p>
                </CardContent>
              </Card>
            </div>

            <InteractiveAgentDiagram />
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 py-8 md:py-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold mb-3 text-foreground">Example rehearsal: credential theft path</h2>
              <p className="text-xl text-muted-foreground">
                Example: rehearsing a credential-theft scenario
              </p>
            </div>

            <div className="space-y-6">
              {attackScenario.map((step, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border shadow-card animate-fade-in rounded-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center">
                          <step.icon className={`h-6 w-6 ${step.color}`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{step.phase}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="px-4 py-8 md:py-10 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 graph-pattern opacity-50" />
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
        <section className="px-4 py-8 md:py-10">
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
        <section className="px-4 py-8 md:py-10 bg-muted/30">
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
