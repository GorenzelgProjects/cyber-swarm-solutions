import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileCheck, Lock, Eye, Globe, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Compliance = () => {
  const features = [
    {
      icon: FileCheck,
      title: "NIS2 Compliance Ready",
      description: "Our platform is designed to help organisations meet the EU's NIS2 directive requirements through transparent, auditable security measures and comprehensive logging."
    },
    {
      icon: Eye,
      title: "Explainable by Design",
      description: "Every alert and action is fully traceable. Our AI provides clear reasoning for its decisions, ensuring you can explain and justify security measures to auditors and regulators."
    },
    {
      icon: Lock,
      title: "Secure Development Practices",
      description: "Built with security-first principles: sandbox isolation, data privacy, and human oversight features ensure the AI's decisions are safe and trustworthy."
    },
    {
      icon: Globe,
      title: "Data Sovereignty",
      description: "As a European solution, we keep data sovereignty in mind. Your security data stays within your control and jurisdiction, aligning with EU digital autonomy goals."
    }
  ];

  const standards = [
    "ISO 27001 compliant infrastructure",
    "GDPR considerations for data handling",
    "Comprehensive audit trail for all actions",
    "Secure sandbox isolation for simulations",
    "End-to-end encryption for data in transit",
    "Role-based access control (RBAC)"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="px-4 py-20 relative overflow-hidden">
          <div className="container mx-auto max-w-4xl text-center space-y-8 animate-fade-in relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Compliance <span className="text-primary">&amp; Security</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Built to meet EU regulatory mandates whilst maintaining the highest security standards. 
              Transparent, auditable, and aligned with digital sovereignty principles.
            </p>
          </div>
        </section>

        {/* NIS2 Focus Section */}
        <section className="px-4 py-16 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <Card className="bg-card border-border shadow-card rounded-2xl">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">Meeting NIS2 Requirements</h2>
                    <p className="text-muted-foreground">European cybersecurity directive compliance</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The EU's NIS2 directive establishes stringent cybersecurity requirements for critical infrastructure 
                  and essential services. ColleaiQ helps organisations meet these requirements through:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Continuous Risk Assessment</h3>
                        <p className="text-sm text-muted-foreground">Proactive threat simulation identifies vulnerabilities before they're exploited.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Incident Response</h3>
                        <p className="text-sm text-muted-foreground">Automated detection and explainable recommendations for rapid response.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Security Governance</h3>
                        <p className="text-sm text-muted-foreground">Comprehensive logging and audit trails for regulatory reporting.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Supply Chain Security</h3>
                        <p className="text-sm text-muted-foreground">European-built solution supporting digital sovereignty requirements.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Features */}
        <section className="px-4 py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Security &amp; Compliance Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border shadow-card hover:shadow-hover transition-all duration-300 rounded-2xl"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Standards & Certifications */}
        <section className="px-4 py-16 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Standards &amp; Best Practices</h2>
            <Card className="bg-card border-border shadow-card rounded-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-4">
                  {standards.map((standard, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{standard}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Need Compliance Documentation?</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact us to discuss your specific compliance requirements. We provide detailed 
                    documentation and evidence to support your regulatory audits and certification processes.
                  </p>
                  <Button className="rounded-2xl" asChild>
                    <a href="/contact">Contact Compliance Team</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-24">
          <div className="container mx-auto max-w-4xl text-center">
            <Card className="bg-gradient-mesh border-border shadow-hover rounded-2xl">
              <CardContent className="p-12 md:p-16 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Strengthen Your Compliance Posture?</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Let us show you how ColleaiQ can help meet your regulatory requirements whilst 
                  enhancing your security capabilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button size="lg" className="rounded-2xl" asChild>
                    <a href="/contact">Schedule a Compliance Review</a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-2xl" asChild>
                    <a href="/simulation-deep-dive">See How It Works</a>
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

export default Compliance;
