import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { InteractiveAgentDiagram } from "@/components/InteractiveAgentDiagram";
import { Button } from "@/components/ui/button";
import { Network, RefreshCw, CheckCircle, Eye, Shield, Lock } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Solution = () => {
  const advantages = [
    "Helps you discover practical exposure paths before attackers use them",
    "Focuses on concrete scenarios instead of only static reports",
    "Provides clear, evidence-based findings that are easy to share with stakeholders",
    "Runs rehearsals in safe, bounded sandbox environments",
    "Exports results into your existing ticket or case systems",
    "Supports NIS2 work with structured documentation of testing and decisions",
    "Built and developed in the EU, supporting European digital sovereignty"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ColleaiQ Multi-Agent Cybersecurity Solution",
    "applicationCategory": "SecurityApplication",
    "description": "Multi-agent AI system that rehearses realistic attacks in safe sandbox environments and provides concrete, traceable security findings for enterprise organizations.",
    "operatingSystem": "Cloud-based",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "priceCurrency": "EUR"
    },
    "featureList": [
      "Multi-agent AI collaboration",
      "Sandbox attack simulation",
      "Traceable security recommendations",
      "Continuous learning system",
      "NIS2 compliance support",
      "EU-developed cybersecurity"
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI Cybersecurity Solution | Multi-Agent Attack Simulation | ColleaiQ</title>
        <meta name="description" content="Enterprise multi-agent AI cybersecurity platform. Rehearse realistic attacks in safe sandboxes, get traceable findings, and strengthen defenses before attackers strike." />
        <meta name="keywords" content="AI cybersecurity, multi-agent security, attack simulation, sandbox testing, NIS2 compliance, EU cybersecurity, proactive defense" />
        <link rel="canonical" href="https://colleaiq.dk/solution" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Cybersecurity Solution - Multi-Agent Attack Simulation" />
        <meta property="og:description" content="Enterprise multi-agent AI cybersecurity platform. Rehearse realistic attacks in safe sandboxes and strengthen defenses proactively." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://colleaiq.dk/solution" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Cybersecurity Solution - Multi-Agent Attack Simulation" />
        <meta name="twitter:description" content="Enterprise multi-agent AI cybersecurity platform for proactive defense" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navigation />
      
      <div className="pt-12 pb-10">
        {/* Hero */}
        <section className="px-4 py-8 md:py-10 relative overflow-hidden">
          <header className="container mx-auto max-w-4xl text-center space-y-6 animate-fade-in relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Our <span className="text-primary">Solution</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A multi-agent AI system that rehearses realistic attacks in a safe environment 
              and turns the results into concrete, traceable findings.
            </p>
          </header>
        </section>

        {/* Core Components */}
        <section className="px-4 py-8 md:py-10 bg-muted/30" aria-labelledby="core-components">
          <div className="container mx-auto max-w-6xl">
            <h2 id="core-components" className="text-4xl font-bold text-center mb-8 text-foreground">Core Components</h2>
            <div className="grid md:grid-cols-3 gap-8" role="list">
              <article className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in rounded-2xl">
                <div className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center" aria-hidden="true">
                    <Network className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Multi-Agent Collaboration</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Specialised agents work together in real time: red-team agents simulate attacks while blue-team agents monitor, detect and defend across assets and environments.
                  </p>
                </div>
              </article>
              <article className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in rounded-2xl" style={{ animationDelay: '0.1s' }}>
                <div className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center" aria-hidden="true">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Traceable Recommendations</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Every decision and action is fully explainable and auditable. Meet NIS2 compliance requirements with complete visibility into agent reasoning and recommendations.
                  </p>
                </div>
              </article>
              <article className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in rounded-2xl" style={{ animationDelay: '0.2s' }}>
                <div className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center" aria-hidden="true">
                    <RefreshCw className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Continuous Learning</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Agents learn from analyst decisions and post-simulation results. Detection rules and policies update automatically, becoming sharper and faster at countering new techniques.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Multi-Agent Architecture */}
        <section className="px-4 py-8 md:py-10" aria-labelledby="architecture">
          <div className="container mx-auto max-w-6xl">
            <h2 id="architecture" className="text-4xl font-bold text-center mb-6 text-foreground">Multi-Agent Architecture</h2>
            <p className="text-center text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our specialised AI agents work together to plan and run rehearsals in a sandbox and describe what happens in a way that people can understand and act on:
            </p>

            <InteractiveAgentDiagram />
          </div>
        </section>


        {/* Key Advantages */}
        <section className="px-4 py-8 md:py-10 relative overflow-hidden" aria-labelledby="advantages">
          <div className="container mx-auto max-w-5xl relative z-10">
            <h2 id="advantages" className="text-4xl font-bold text-center mb-6 text-foreground">Key Competitive Advantages</h2>
            <Card className="bg-card border-border shadow-card rounded-2xl">
              <CardContent className="p-8 md:p-12">
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  {advantages.map((advantage, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-base text-muted-foreground leading-relaxed">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Details */}
        <section className="px-4 py-8 md:py-10 bg-muted/30" aria-labelledby="technical">
          <div className="container mx-auto max-w-5xl">
            <h2 id="technical" className="text-4xl font-bold text-center mb-6 text-foreground">Technical Foundation</h2>
            <Card className="bg-card border-border shadow-card rounded-2xl">
              <CardContent className="p-8 md:p-12 space-y-10">
                <article className="flex items-start gap-4">
                  <Network className="h-8 w-8 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Advanced AI Architecture</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      ColleaiQ combines modern language models with graph-based views of your environment and simple rule engines. The agents use these ingredients to propose attack paths, carry out steps in the sandbox and describe what happened in normal language.
                    </p>
                  </div>
                </article>

                <article className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Expert Integration</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      We work with experienced security practitioners and red-teamers when we design scenarios and interpret results. Their input shapes how the agents explore and how findings are presented, so the output is useful for real security work.
                    </p>
                  </div>
                </article>

                <article className="flex items-start gap-4">
                  <Lock className="h-8 w-8 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Sandbox Environments</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      All rehearsals run in isolated sandbox environments that mirror important parts of your production infrastructure. No simulations are executed directly against live systems.
                    </p>
                  </div>
                </article>

                <article className="flex items-start gap-4">
                  <RefreshCw className="h-8 w-8 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">Continuous Evolution</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      The system can use feedback from simulations and analysts to adjust which paths it explores and how it phrases recommendations. Over time, this helps make rehearsals and findings more relevant for your specific environment.
                    </p>
                  </div>
                </article>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-8 md:py-10" aria-labelledby="cta">
          <div className="container mx-auto max-w-4xl text-center">
            <Card className="bg-gradient-mesh border-border shadow-hover rounded-2xl">
              <CardContent className="p-8 md:p-10 space-y-5">
                <h2 id="cta" className="text-4xl font-bold text-foreground">Ready to See It in Action?</h2>
                <p className="text-xl text-muted-foreground">
                  See how a few focused rehearsals in a sandbox can give you clearer insight into your real exposure.
                </p>
                <nav className="flex flex-col sm:flex-row gap-4 justify-center mt-6" aria-label="Call to action">
                  <Button size="lg" className="rounded-2xl" asChild>
                    <a href="/contact">Request a Demo</a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-2xl" asChild>
                    <a href="/simulation-deep-dive">Explore Simulation Process</a>
                  </Button>
                </nav>
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
