import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes ColleaiQ different from traditional cybersecurity solutions?",
      answer:
        "ColleaiQ uses a proactive multi-agent AI system that continuously simulates real attacks before they happen, rather than waiting to react to incidents. Our specialized red-team and blue-team agents work together to discover vulnerabilities and strengthen defenses in safe, bounded environments. Every action is traceable and explainable, meeting NIS2 compliance requirements.",
    },
    {
      question: "How does the multi-agent system work?",
      answer:
        "Our platform employs specialized AI agents that collaborate in real-time. Red-team agents simulate attacker behavior in sandbox environments, while blue-team agents monitor, detect patterns, and recommend defensive actions. The agents learn from each simulation and analyst feedback, continuously improving detection capabilities and reducing false positives.",
    },
    {
      question: "Is ColleaiQ compliant with NIS2 directives?",
      answer:
        "Yes. ColleaiQ is specifically designed to meet NIS2 requirements for explainability and auditability. Every AI decision and recommendation comes with a complete audit trail showing the reasoning process, detection methodology, and supporting evidence. This transparency is built into the core of our platform.",
    },
    {
      question: "Will this work with our existing security tools?",
      answer:
        "Absolutely. ColleaiQ is designed to integrate with existing SOC workflows and security tools. Our platform complements your current security stack by adding proactive threat hunting and continuous attack simulation capabilities. We work alongside EDR, SIEM, and other security solutions you already have in place.",
    },
    {
      question: "What types of organizations benefit most from ColleaiQ?",
      answer:
        "Organizations that can't afford security incidents - particularly those in critical infrastructure sectors like energy, defense, maritime, shipping, and financial services. Companies facing NIS2 compliance requirements, organizations with 24/7 operations, or those struggling with cybersecurity talent shortages see immediate value from our platform.",
    },
    {
      question: "How safe are the attack simulations?",
      answer:
        "All simulations run in completely isolated sandbox environments that mirror your infrastructure without any risk to production systems. The sandboxes are bounded and monitored, ensuring that no simulated attack can affect live systems. This allows for aggressive testing while maintaining absolute safety.",
    },
    {
      question: "Do we need to expand our security team to use ColleaiQ?",
      answer:
        "No. ColleaiQ is designed to extend your existing team's capabilities, not replace them. The platform provides 24/7 coverage and handles continuous monitoring and simulation, allowing your security analysts to focus on strategic decisions and high-priority incidents. Think of it as adding multiple expert team members who never sleep.",
    },
    {
      question: "What kind of threats can ColleaiQ detect?",
      answer:
        "ColleaiQ specializes in discovering zero-day vulnerabilities and emerging threats before attackers find them. Our agents simulate everything from credential dumping and privilege escalation to advanced persistent threats and novel attack vectors. The system learns and adapts to new attack techniques continuously.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Implementation typically takes 2-4 weeks depending on your infrastructure complexity. This includes environment setup, integration with existing tools, sandbox configuration, and team training. We work closely with your team throughout the process to ensure smooth onboarding and optimal configuration.",
    },
    {
      question: "What level of expertise is needed to operate ColleaiQ?",
      answer:
        "While ColleaiQ leverages advanced AI, it's designed for security professionals of varying expertise levels. The platform provides clear, explainable recommendations that analysts can verify and implement. We also provide comprehensive training and ongoing support to ensure your team gets maximum value from the system.",
    },
    {
      question: "Can ColleaiQ help with our NIS2 budget requirements?",
      answer:
        "Yes. By automating continuous threat hunting and simulation, ColleaiQ can help optimize your NIS2-related cybersecurity spending. The platform's ability to discover vulnerabilities proactively can prevent costly incidents, and its explainability features reduce the overhead of compliance documentation and audits.",
    },
    {
      question: "Is ColleaiQ suitable for organizations outside Denmark?",
      answer:
        "Absolutely. While ColleaiQ is Danish-developed, our solution is designed to scale across the EU and beyond. We support EU digital sovereignty goals and can be deployed wherever organizations need advanced, explainable AI-driven cybersecurity.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Frequently Asked <span className="bg-gradient-accent bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about ColleaiQ's multi-agent AI cybersecurity platform.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="px-4 py-12">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-3xl">
            <Card className="bg-gradient-cyber border-border shadow-glow">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold">Still Have Questions?</h2>
                <p className="text-lg text-muted-foreground">
                  Our team is here to help. Get in touch with us to discuss your specific cybersecurity needs and how
                  ColleaiQ can protect your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/solution">Explore Solution</Link>
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

export default FAQ;
