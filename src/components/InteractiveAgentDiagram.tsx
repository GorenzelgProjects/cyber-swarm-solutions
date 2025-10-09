import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Database, AlertCircle } from "lucide-react";

export const InteractiveAgentDiagram = () => {
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  const agents = [
    {
      id: "red",
      icon: Target,
      title: "Red-Team Agent",
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      borderColor: "border-red-300 dark:border-red-700",
      description: "Simulates realistic cyber threats in safe, bounded sandbox environments. Continuously tests for vulnerabilities by mimicking real attacker behaviour.",
      position: "left"
    },
    {
      id: "blue",
      icon: Shield,
      title: "Blue-Team Agent",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-300 dark:border-blue-700",
      description: "Monitors system telemetry, fuses signals from multiple sources, and generates explainable, auditable alerts and remediation recommendations.",
      position: "right"
    }
  ];

  return (
    <div className="relative">
      {/* Main Diagram */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Red Team Agent */}
        <div 
          className="relative"
          onMouseEnter={() => setActiveAgent("red")}
          onMouseLeave={() => setActiveAgent(null)}
        >
          <Card 
            className={`bg-card border-2 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer overflow-hidden ${
              activeAgent === "red" ? agents[0].borderColor : "border-border"
            }`}
            style={{ borderRadius: '16px' }}
          >
            <CardContent className="p-8 space-y-4">
              <div className={`h-16 w-16 rounded-2xl ${agents[0].bgColor} flex items-center justify-center mx-auto`}>
                <Target className={`h-8 w-8 ${agents[0].color}`} />
              </div>
              <h3 className={`text-2xl font-semibold text-center ${agents[0].color}`}>
                {agents[0].title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {agents[0].description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Blue Team Agent */}
        <div 
          className="relative"
          onMouseEnter={() => setActiveAgent("blue")}
          onMouseLeave={() => setActiveAgent(null)}
        >
          <Card 
            className={`bg-card border-2 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer overflow-hidden ${
              activeAgent === "blue" ? agents[1].borderColor : "border-border"
            }`}
            style={{ borderRadius: '16px' }}
          >
            <CardContent className="p-8 space-y-4">
              <div className={`h-16 w-16 rounded-2xl ${agents[1].bgColor} flex items-center justify-center mx-auto`}>
                <Shield className={`h-8 w-8 ${agents[1].color}`} />
              </div>
              <h3 className={`text-2xl font-semibold text-center ${agents[1].color}`}>
                {agents[1].title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {agents[1].description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Supporting Components */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <Card className="bg-card border-border shadow-card rounded-2xl">
          <CardContent className="p-6 flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Sandbox Environment</h4>
              <p className="text-sm text-muted-foreground">
                Safe, isolated testing grounds where red-team agents launch simulated attacks without risk to production systems.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-card rounded-2xl">
          <CardContent className="p-6 flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Explainable Outputs</h4>
              <p className="text-sm text-muted-foreground">
                Every detection and recommendation includes full context, reasoning, and audit trails for compliance and trust.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Info Banner */}
      {activeAgent && (
        <div className="mt-8 animate-fade-in">
          <Card className={`${
            activeAgent === "red" ? agents[0].bgColor : agents[1].bgColor
          } border-border rounded-2xl`}>
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Hover over each agent to learn more about their role in the multi-agent network
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
