import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Target, Eye, Network } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="px-4 pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="content-wrapper text-center space-y-6 animate-fade-in">
          <h1 className="text-foreground">
            [[Hero headline – one powerful sentence about proactive cybersecurity]]
          </h1>
          
          <div className="text-lg md:text-xl text-muted-foreground space-y-4 max-w-2xl mx-auto">
            <p>
              [[Hero paragraph 1 – explain the core problem: enterprises face growing cyber threats, 
              traditional reactive defenses aren't enough, breaches happen faster than detection.]]
            </p>
            <p>
              [[Hero paragraph 2 – introduce ColleaiQ's approach: multi-agent AI that continuously 
              simulates attacks, identifies vulnerabilities before attackers do, provides actionable 
              insights to security teams.]]
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              asChild 
              size="lg" 
              className="text-base px-8"
            >
              <a href="mailto:kontakt@colleaiq.dk">
                Book a Consultation
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="text-base px-8"
            >
              <a href="/solution">
                How It Works
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="px-4 bg-muted/30">
        <div className="content-wrapper space-y-8 animate-fade-in">
          <h2 className="text-center text-foreground">
            The Challenge
          </h2>
          
          <div className="text-lg text-muted-foreground space-y-4">
            <p>
              [[Problem paragraph 1 – describe current state: organizations rely on signature-based 
              detection, threat feeds, and manual pentests. These are reactive, slow, and incomplete.]]
            </p>
            <p>
              [[Problem paragraph 2 – consequences: attackers exploit zero-days faster than defenders 
              can patch. Compliance frameworks require continuous validation. Security teams are 
              overwhelmed with alerts but lack context.]]
            </p>
            <p>
              [[Problem paragraph 3 – industry pain: average breach dwell time, cost of incidents, 
              talent shortage. Organizations need proactive defense that scales.]]
            </p>
          </div>
        </div>
      </section>

      {/* Key Features/Benefits */}
      <section className="px-4">
        <div className="container-wide space-y-12 animate-fade-in">
          <div className="content-wrapper text-center space-y-4">
            <h2 className="text-foreground">
              How ColleaiQ Works
            </h2>
            <p className="text-lg text-muted-foreground">
              [[Intro to features – one paragraph explaining the multi-agent architecture and 
              continuous simulation approach.]]
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 space-y-4 shadow-card hover:shadow-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-foreground">
                Multi-Agent Networks
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                [[Feature 1 description – specialized AI agents collaborate to simulate real-world 
                attack scenarios. Each agent represents different attacker profiles, techniques, 
                and objectives.]]
              </p>
            </Card>

            <Card className="p-8 space-y-4 shadow-card hover:shadow-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-foreground">
                Continuous Testing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                [[Feature 2 description – automated penetration testing runs 24/7 across your 
                infrastructure. Detects configuration drift, new vulnerabilities, and attack paths 
                in real-time.]]
              </p>
            </Card>

            <Card className="p-8 space-y-4 shadow-card hover:shadow-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-foreground">
                Explainable Results
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                [[Feature 3 description – every finding includes detailed attack chain analysis, 
                business impact assessment, and step-by-step remediation guidance. No black-box AI.]]
              </p>
            </Card>

            <Card className="p-8 space-y-4 shadow-card hover:shadow-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-foreground">
                Proactive Defense
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                [[Feature 4 description – find and fix vulnerabilities before attackers exploit them. 
                Validate security controls continuously. Reduce your attack surface systematically.]]
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases / Who It's For */}
      <section className="px-4 bg-muted/30">
        <div className="content-wrapper space-y-8 animate-fade-in">
          <h2 className="text-center text-foreground">
            Built for Enterprise Security Teams
          </h2>
          
          <div className="text-lg text-muted-foreground space-y-4">
            <p>
              [[Use case paragraph 1 – CISOs and security leaders who need continuous security 
              validation without overwhelming their teams. Prove security posture to board and 
              regulators.]]
            </p>
            <p>
              [[Use case paragraph 2 – Red teams and penetration testers who want to scale their 
              impact beyond manual testing. Focus on critical findings while AI handles routine 
              reconnaissance.]]
            </p>
            <p>
              [[Use case paragraph 3 – Organizations in regulated industries (finance, healthcare, 
              critical infrastructure) that require continuous compliance and evidence of proactive 
              defense measures.]]
            </p>
          </div>
        </div>
      </section>

      {/* Why ColleaiQ / Differentiators */}
      <section className="px-4">
        <div className="content-wrapper space-y-8 animate-fade-in">
          <h2 className="text-center text-foreground">
            Why ColleaiQ
          </h2>
          
          <div className="text-lg text-muted-foreground space-y-4">
            <p>
              [[Differentiator 1 – Europe's first multi-agent cybersecurity platform. Built on 
              cutting-edge AI research from Copenhagen. Designed for European data sovereignty 
              and compliance requirements.]]
            </p>
            <p>
              [[Differentiator 2 – Unlike traditional tools that generate alerts, ColleaiQ provides 
              context and prioritization. Our AI understands your business environment and focuses 
              on risks that matter.]]
            </p>
            <p>
              [[Differentiator 3 – Continuous evolution: our agent networks learn from each 
              simulation, adapt to new attack techniques, and improve detection accuracy over time.]]
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 bg-muted/30">
        <div className="content-wrapper text-center space-y-8 animate-fade-in">
          <h2 className="text-foreground">
            Ready to Move from Reactive to Proactive?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            [[CTA paragraph – invite them to schedule a consultation, see a demo, or discuss their 
            specific security challenges. Emphasize partnership approach and tailored solutions.]]
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              asChild 
              size="lg" 
              className="text-base px-8"
            >
              <a href="mailto:kontakt@colleaiq.dk">
                Get in Touch
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="text-base px-8"
            >
              <a href="/story">
                Learn About Our Mission
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
