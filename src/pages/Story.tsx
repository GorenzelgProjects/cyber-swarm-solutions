import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Story = () => {
  const phases = [
    {
      phase: "Phase I",
      title: "The Genesis",
      description: "Construction of the first coordination layer. Initial tests focused on administrative workflows where agents managed simple context sharing between support tickets and HR databases."
    },
    {
      phase: "Phase II",
      title: "Strategic Pivot",
      description: "Realization that the MAS architecture's ability to \"check and balance\" logic was over-engineered for support but essential for security. Re-focus on adversarial environments."
    },
    {
      phase: "Phase III",
      title: "Innovation Focus",
      description: "Developing specialized agents designed for threat simulation. Transition from generic reasoning to evidence-based execution in sandboxed environments."
    },
    {
      phase: "Phase IV",
      title: "European Ambition",
      description: "Current Stage: Operationalizing multi-agent networks to support European digital sovereignty and critical infrastructure defense."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero / Mission */}
        <section className="px-4 py-20 relative overflow-hidden">
          <div className="container mx-auto max-w-4xl text-center space-y-8 animate-fade-in relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Our <span className="text-primary">Mission</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building the bridge between logic and coordination.
            </p>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-3xl space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              2025 has been characterized as the year of agentic AI. We are looking at the natural next step: multi-agent networks.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ColleaiQ aim to be the first company in Europe to operationalize these networks in cybersecurity. This is a step toward moving defense ahead of threats rather than constantly reacting to them.
            </p>
          </div>
        </section>

        {/* The Genesis of the Pivot */}
        <section className="px-4 py-16 bg-muted/30">
          <div className="container mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Genesis of the Pivot
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We did not start in security. Our foundation was originally built for administrative tasks in customer support and HR. However, we quickly realized a structural mismatch: the technological complexity of our multi-agent system was a better fit for highly technical, adversarial domains.
            </p>

            <div className="py-6 border-l-2 border-primary pl-6">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Fig 1.0: Technical Fit by Domain Complexity</p>
              <p className="text-base text-foreground italic">
                Internal Assessment: Multi-Agent logic provides the most value where the requirement for precision is absolute.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              After meeting with major Danish IT and cybersecurity organizations, the need became clear. Traditional automation tools were struggling with the complexity of the modern threat landscape. Our technology matched that complexity.
            </p>
          </div>
        </section>

        {/* The Technical Journey */}
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-3xl space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Technical Journey
            </h2>
            
            <div className="space-y-10">
              {phases.map((phase, index) => (
                <div 
                  key={index} 
                  className="border-l-2 border-border pl-6 hover:border-primary transition-colors duration-300"
                >
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">
                    {phase.phase}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Story;
