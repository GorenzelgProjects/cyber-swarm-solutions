import { Card, CardContent } from "@/components/ui/card";
import { Network, Shield, Eye, RefreshCw, CheckCircle, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import solutionImage from "@/assets/solution-agents.jpg";

const Solution = () => {
  const components = [
    {
      icon: Network,
      title: "Multi-Agent Collaboration",
      description: "Specialized agents work together in real-time. Red-team agents simulate attacks while blue-team agents monitor, detect, and defend across all assets and environments."
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
      description: "Simulates credential dumping from LSASS memory in a sandbox environment",
    },
    {
      phase: "Blue Team Detection",
      icon: Shield,
      color: "text-primary",
      description: "Detects suspicious memory access patterns and alerts on potential credential theft",
    },
    {
      phase: "Traceable Fix",
      icon: CheckCircle,
      color: "text-secondary",
      description: "Generates EDR rule to block unauthorized LSASS memory access with full audit trail",
    },
    {
      phase: "Analyst Verification",
      icon: Eye,
      color: "text-accent",
      description: "Security analyst reviews recommendation, verifies impact, and approves deployment",
    }
  ];

  const advantages = [
    "Proactive vulnerability discovery before attackers",
    "Reduces false positives through continuous learning",
    "24/7 coverage without expanding security team",
    "Explainable AI for audit and compliance requirements",
    "Safe simulations in bounded sandbox environments",
    "Integration with existing SOC workflows"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="bg-gradient-accent bg-clip-text text-transparent">Solution</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A multi-agent AI system that proactively defends your organization through 
              continuous attack simulations and intelligent threat detection.
            </p>
          </div>
        </section>

        {/* Visual */}
        <section className="px-4 py-12">
          <div className="container mx-auto max-w-5xl">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={solutionImage} 
                alt="Multi-Agent AI System" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Core Components */}
        <section className="px-4 py-20 bg-gradient-cyber">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">Core Components</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {components.map((component, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="h-14 w-14 rounded-lg bg-gradient-cyber flex items-center justify-center">
                      <component.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">{component.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {component.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Attack Simulation Example */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground">
                Example: Credential Dumping Attack Simulation
              </p>
            </div>

            <div className="space-y-6">
              {attackScenario.map((step, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-gradient-cyber flex items-center justify-center">
                          <step.icon className={`h-6 w-6 ${step.color}`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{step.phase}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="px-4 py-20 bg-gradient-cyber">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-12">Key Competitive Advantages</h2>
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6">
                  {advantages.map((advantage, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{advantage}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Details */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-12">Technical Foundation</h2>
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Advanced AI Architecture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our product combines generative models with advanced methods including graph analysis, 
                    reinforcement learning, and deterministic logic. This multi-faceted approach allows us 
                    to both emulate hacker attack patterns and discover new vulnerabilities.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Expert Integration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Expertise from professional cybersecurity specialists is integrated into the system, 
                    enabling us to protect companies against attacks through explainable and reliable 
                    defense strategies that security teams can trust and verify.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Sandbox Environments</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All attack simulations run in safe, bounded sandbox environments that mirror your 
                    production infrastructure without any risk to live systems. This allows for aggressive 
                    testing while maintaining complete safety.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Continuous Evolution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The system continuously learns from each simulation, analyst feedback, and emerging 
                    threat intelligence. Detection capabilities improve over time, becoming increasingly 
                    effective at identifying and preventing sophisticated attacks.
                  </p>
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
