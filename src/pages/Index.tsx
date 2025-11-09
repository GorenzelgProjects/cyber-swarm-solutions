import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Target, Eye, Network } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import posts from "@/data/blog";

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

      {/* Media Blocks */}
      <section className="px-4">
        <div className="content-wrapper text-center space-y-4">
          <h2 className="text-foreground">How ColleaiQ Works</h2>
          <p className="text-lg text-muted-foreground">[[Intro to features – one paragraph explaining the multi-agent architecture and continuous simulation approach.]]</p>
        </div>
      </section>

      {/* Alternating media sections */}
      <section className="px-4">
        <div className="container-wide">
          {/* Why teams work with us – image right */}
          <div className="py-8 md:py-12">
            <div className="max-w-[1180px] mx-auto grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 order-1 text-left">
                <h3 className="text-xl font-serif text-foreground mb-4">Why teams work with us</h3>
                <p className="text-muted-foreground">[[Paragraph – explain analyst experience, clear evidence, and calm workflows.]]</p>
              </div>
              <div className="md:col-span-2 order-2">
                <img src="/images/soc-audit-diagram.svg" alt="Security workflow with audit trail" loading="lazy" width={960} height={540} className="w-full h-auto rounded-xl border border-muted shadow-soft" />
              </div>
            </div>
          </div>

          {/* What you get today – image left */}
          <div className="py-8 md:py-12">
            <div className="max-w-[1180px] mx-auto grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 order-2 md:order-1">
                <img src="/images/sandbox-lab.svg" alt="Isolated sandbox mirroring production" loading="lazy" width={960} height={540} className="w-full h-auto rounded-xl border border-muted shadow-soft" />
              </div>
              <div className="md:col-span-3 order-1 md:order-2 text-left">
                <h3 className="text-xl font-serif text-foreground mb-4">What you get today</h3>
                <p className="text-muted-foreground">[[Paragraph – outline tangible outputs available on day one.]]</p>
              </div>
            </div>
          </div>

          {/* How the platform works – row 1 image right */}
          <div className="py-8 md:py-12">
            <div className="max-w-[1180px] mx-auto grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 order-1 text-left">
                <h3 className="text-xl font-serif text-foreground mb-4">Safe rehearsal: exposure → sandbox → observations</h3>
                <p className="text-muted-foreground">[[Steps 1–2 combined – description of safe rehearsal flow.]]</p>
              </div>
              <div className="md:col-span-2 order-2">
                <img src="/images/rehearsal-flow-16x9.svg" alt="Safe rehearsal flow from exposure to observations" loading="lazy" width={960} height={540} className="w-full h-auto rounded-xl border border-muted shadow-soft" />
              </div>
            </div>
          </div>

          {/* How the platform works – row 2 image left */}
          <div className="py-8 md:py-12">
            <div className="max-w-[1180px] mx-auto grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 order-2 md:order-1">
                <img src="/images/analyst-learning-loop-16x9.svg" alt="Analyst approval and learning loop" loading="lazy" width={960} height={540} className="w-full h-auto rounded-xl border border-muted shadow-soft" />
              </div>
              <div className="md:col-span-3 order-1 md:order-2 text-left">
                <h3 className="text-xl font-serif text-foreground mb-4">Analyst approval and learning loop</h3>
                <p className="text-muted-foreground">[[Steps 3–4 combined – how analysts approve actions and the system learns.]]</p>
              </div>
            </div>
          </div>

          {/* Compliance & documentation – image right 35% */}
          <div className="py-8 md:py-12">
            <div className="max-w-[1180px] mx-auto grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 order-1 text-left">
                <h3 className="text-xl font-serif text-foreground mb-4">Compliance & documentation</h3>
                <p className="text-muted-foreground">[[Paragraph – structured finding with evidence, impact and decision log.]]</p>
              </div>
              <div className="md:col-span-2 order-2">
                <img src="/images/finding-report-mock.webp" alt="Structured finding with evidence and decision log" loading="lazy" width={960} height={540} className="w-full h-auto rounded-xl border border-muted shadow-soft" />
              </div>
            </div>
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

      {/* From the lab (if post exists) */}
      {posts.length > 0 && (
        <section className="px-4">
          <div className="content-wrapper space-y-8 animate-fade-in">
            <h2 className="text-center text-foreground">From the lab</h2>
            <div className="max-w-3xl mx-auto">
              <a href={`/blog/${posts[0].slug}`} className="block group">
                <Card className="shadow-card hover:shadow-hover transition-all">
                  <img src={posts[0].thumbnail} alt="Abstract sandbox thumbnail" width={1200} height={675} loading="lazy" className="w-full h-auto rounded-t-xl border-b border-border" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{posts[0].title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{new Date(posts[0].date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
                    <p className="text-muted-foreground">{posts[0].excerpt}</p>
                  </div>
                </Card>
              </a>
            </div>
          </div>
        </section>
      )}

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
              <a href="mailto:kontakt@colleaiq.dk">
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
