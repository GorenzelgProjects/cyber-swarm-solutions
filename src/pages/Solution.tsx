import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Database, Brain, GitBranch, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { InteractiveAgentDiagram } from "@/components/InteractiveAgentDiagram";
import { Button } from "@/components/ui/button";
import { Network, RefreshCw, CheckCircle, AlertTriangle, Lock } from "lucide-react";

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
      phase: "Red Team Action",
      icon: AlertTriangle,
      color: "text-destructive",
      description: "Simulates credential dumping from LSASS memory in a sandbox environment.",
    },
    {
      phase: "Blue Team Detection",
      icon: Shield,
      color: "text-primary",
      description: "Detects suspicious memory access patterns and alerts on potential credential theft.",
    },
    {
      phase: "Traceable Fix",
      icon: CheckCircle,
      color: "text-accent",
      description: "Generates an EDR rule to block unauthorised LSASS memory access, with a full audit trail.",
    },
    {
      phase: "Analyst Verification",
      icon: Eye,
      color: "text-muted-foreground",
      description: "A security analyst reviews the recommendation, verifies impact and approves deployment.",
    }
  ];

  const advantages = [
    "Proactive vulnerability discovery before attackers",
    "Reduced false positives through continuous learning",
    "24/7 coverage without expanding security team",
    "Explainable AI for audit and compliance requirements",
    "Safe simulations in bounded sandbox environments",
    "Integration with existing SOC workflows",
    "NIS2-compliant traceability and documentation",
    "EU-based technology supporting digital sovereignty"
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
              A multi-agent AI system that proactively defends your organisation through 
              continuous attack simulations and intelligent threat detection.
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
              Our specialised AI agents work in concert to create continuous, proactive defence with full explainability:
            </p>
            
            {/* Four key components */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-card border-border shadow-card hover:shadow-hover transition-all rounded-2xl">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                    <AlertTriangle className="h-7 w-7 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Red-Team Agent</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Simulates realistic cyber threats in safe, bounded sandbox environments. Continuously tests 
                    for vulnerabilities by mimicking real attacker behaviour.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-card hover:shadow-hover transition-all rounded-2xl">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Blue-Team Agent</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Monitors system telemetry, fuses signals from multiple sources and generates explainable, 
                    auditable alerts and remediation recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-card hover:shadow-hover transition-all rounded-2xl">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                    <Lock className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Sandbox Environment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Safe, isolated testing grounds where red-team agents launch simulated attacks without risk 
                    to production systems.
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
                    Every detection and recommendation includes context, reasoning and audit trails for 
                    compliance and trust.
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
              <h2 className="text-4xl font-bold mb-3 text-foreground">Continuous Defence Cycle</h2>
              <p className="text-xl text-muted-foreground">
                Example: Credential Dumping Attack Simulation
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
                      Our product combines generative models with advanced methods including graph analysis, 
                      reinforcement learning and deterministic logic. This approach allows us to both emulate 
                      attacker patterns and discover new vulnerabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Expert Integration</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Expertise from professional cybersecurity specialists is integrated into the system, 
                      enabling explainable and reliable defence strategies that security teams can trust and verify.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Lock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Sandbox Environments</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All attack simulations run in safe, bounded sandbox environments that mirror your 
                      production infrastructure without any risk to live systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <RefreshCw className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Continuous Evolution</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The system continuously learns from each simulation, analyst feedback and emerging 
                      threat intelligence. Detection capabilities improve over time, becoming increasingly 
                      effective at identifying and preventing sophisticated attacks.
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
                  Experience how our multi-agent system can transform your cybersecurity posture.
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
