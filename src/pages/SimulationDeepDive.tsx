import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Target, FileCheck, User, ChevronRight, ChevronLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraphBackground } from "@/components/GraphBackground";

const SimulationDeepDive = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: Target,
      title: "Threat Simulation",
      subtitle: "Red-Team Agent Launches Test",
      description: "A red-team agent uses the CVE description to craft a test exploit and launches it in a safe, bounded sandbox environment to probe if the vulnerability exists in your infrastructure.",
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      icon: Shield,
      title: "Threat Detection",
      subtitle: "Blue-Team Agent Monitors & Detects",
      description: "A blue-team agent continuously monitors system telemetry and logs, detecting the simulated exploit attempt by recognizing abnormal behaviour patterns. It generates an alert with initial findings.",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: FileCheck,
      title: "Explainable Response",
      subtitle: "Traceable Fix Recommendation",
      description: "The system outputs a step-by-step remediation guide explaining the risk and suggested actions. All decisions and rationales are logged for audit, ensuring complete transparency and explainability.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: User,
      title: "Human Verification & Learning",
      subtitle: "Analyst Confirms & System Learns",
      description: "A human analyst is notified and can replay the simulation, review the evidence, and confirm or adjust the response. The analyst's feedback is fed back into ColleaiQ's learning loop, making the system progressively more effective.",
      color: "text-foreground",
      bgColor: "bg-muted"
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="px-4 py-20 relative overflow-hidden">
          <GraphBackground />
          <div className="container mx-auto max-w-4xl text-center space-y-8 animate-fade-in relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Simulation <span className="text-primary">Deep Dive</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Walk through a complete attack simulation lifecycle and see how ColleaiQ's 
              red-team and blue-team agents work together to proactively defend your infrastructure.
            </p>
          </div>
        </section>

        {/* Interactive Timeline */}
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        index === currentStep 
                          ? `${step.bgColor} ${step.color} scale-110` 
                          : index < currentStep
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <step.icon className="h-6 w-6" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block w-full h-1 relative -mt-6 ml-12">
                        <div className={`h-full transition-all duration-300 ${
                          index < currentStep ? "bg-primary" : "bg-border"
                        }`} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Current Step Content */}
            <Card className="bg-card border-border shadow-card rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className={`${steps[currentStep].bgColor} p-8 transition-all duration-500 animate-fade-in`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`h-16 w-16 rounded-2xl ${steps[currentStep].bgColor} flex items-center justify-center`}>
                      {(() => {
                        const Icon = steps[currentStep].icon;
                        return <Icon className={`h-8 w-8 ${steps[currentStep].color}`} />;
                      })()}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">Step {currentStep + 1} of {steps.length}</div>
                      <h2 className="text-3xl font-bold text-foreground">{steps[currentStep].title}</h2>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">{steps[currentStep].subtitle}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{steps[currentStep].description}</p>
                </div>

                {/* Navigation */}
                <div className="p-8 flex justify-between items-center">
                  <Button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    variant="outline"
                    className="rounded-2xl"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  
                  <div className="text-sm text-muted-foreground">
                    {currentStep + 1} / {steps.length}
                  </div>
                  
                  <Button
                    onClick={nextStep}
                    disabled={currentStep === steps.length - 1}
                    className="rounded-2xl"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="px-4 py-24 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Key Takeaways</h2>
            <div className="space-y-6">
              <Card className="bg-card border-border shadow-card rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">⚡ Speed: Proactive Defence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Everything happens before an actual attack hits your production environment. ColleaiQ simulates 
                    threats continuously, finding vulnerabilities before adversaries do.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-card rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🔍 Transparency: Explainable AI</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Each step is explainable and verifiable. No black-box decisions. Every alert includes full context, 
                    reasoning, and an audit trail for compliance and trust.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-card rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🤝 Human-in-the-Loop</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Analysts remain in control. The system augments human expertise rather than replacing it, 
                    learning from feedback to continuously improve detection and response.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="rounded-2xl" asChild>
                <a href="/contact">Request a Demo</a>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default SimulationDeepDive;
