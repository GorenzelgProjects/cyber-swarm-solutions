import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SupportersSection from "@/components/SupportersSection";
import { ThoughtStreamBackground } from "@/components/ThoughtStreamBackground";
import { SimulationView } from "@/components/SimulationView";
import { AgentNetworkGraph } from "@/components/AgentNetworkGraph";
import { DomainRoadmap } from "@/components/DomainRoadmap";
import posts from "@/data/blog";

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>ColleaiQ - Multi-Agent AI for Cybersecurity & Complex Problem Solving</title>
        <meta 
          name="description" 
          content="ColleaiQ builds AI that behaves like a well-briefed team. We coordinate groups of specialized agents for cybersecurity rehearsals, complex document analysis, and high-stakes decision-making."
        />
        <meta 
          name="keywords" 
          content="multi-agent AI, cybersecurity, AI agents, attack simulation, security rehearsal, collective intelligence, AI coordination, sandbox testing"
        />
        <link rel="canonical" href="https://colleaiq.dk/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ColleaiQ - Multi-Agent AI for Cybersecurity & Complex Problem Solving" />
        <meta property="og:description" content="ColleaiQ builds AI that behaves like a well-briefed team. We coordinate groups of specialized agents for cybersecurity rehearsals and complex problem solving." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://colleaiq.dk/" />
        <meta property="og:image" content="https://colleaiq.dk/logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ColleaiQ - Multi-Agent AI for Cybersecurity & Complex Problem Solving" />
        <meta name="twitter:description" content="ColleaiQ builds AI that behaves like a well-briefed team. Specialized agents coordinate to solve complex cybersecurity and operational challenges." />
        <meta name="twitter:image" content="https://colleaiq.dk/logo.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ColleaiQ",
            "applicationCategory": "SecurityApplication",
            "description": "Multi-agent AI platform for cybersecurity rehearsals, attack simulations, and complex decision-making processes.",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "provider": {
              "@type": "Organization",
              "name": "ColleaiQ",
              "url": "https://colleaiq.dk",
              "logo": "https://colleaiq.dk/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Elbagade 19, 2. tv",
                "addressLocality": "Copenhagen S",
                "postalCode": "2300",
                "addressCountry": "DK"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Bottleneck */}
      <section className="relative px-4 pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
        <ThoughtStreamBackground />
        <div className="relative z-10 content-wrapper space-y-12 animate-fade-in">
          <div className="text-center space-y-6">
            <h1 className="text-foreground">
              Where <span className="text-sage">Artificial Intelligence</span> Meets Collective Intelligence.
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground space-y-4 max-w-3xl mx-auto">
              <p>Most AI interactions today are limited by a one-on-one paradigm. You prompt, the model predicts, and you receive an answer. For simple tasks, this is sufficient. For complex, high-stakes problems, it is fundamentally flawed.</p>
              <p>Complex challenges require a process. They require specialized roles, check-and-balance loops, and a clear chain of reasoning. ColleaiQ is not a better model; it is the briefing room where specialized agents collaborate to solve problems that are too big for a single context window.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="text-base px-8">
                <a href="mailto:kontakt@colleaiq.dk">{t("index.hero.ctaPrimary")}</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <a href="/story">{t("index.hero.ctaSecondary")}</a>
              </Button>
            </div>

            <div className="pt-4">
              <a
                href={`/blog/${posts[0].slug}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("index.hero.latestPost")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Architecture */}
      <section className="px-4 bg-muted/30 py-16 md:py-20">
        <div className="content-wrapper space-y-8 animate-fade-in">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-foreground">The Architecture</h2>
            <p className="text-muted-foreground">
              For any given task, we spin up a specific team of agents. They share a context but have different instructions (System Prompts). This separation of duties forces logic and traceability.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Interact with the nodes below</strong> to understand the role of each agent in our current prototype swarm.
            </p>
          </div>

          <AgentNetworkGraph />
        </div>
      </section>


      {/* Beyond Security - Domain Roadmap */}
      <section className="px-4 bg-muted/30 py-16 md:py-20">
        <div className="content-wrapper space-y-8 animate-fade-in">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-foreground">Beyond Security</h2>
            <p className="text-base text-muted-foreground">
              Cybersecurity is the perfect proving ground—high-stakes, verifiable, and demanding both adversarial thinking and structured analysis. But our coordination layer extends further.
            </p>
          </div>

          <DomainRoadmap />
        </div>
      </section>

      {/* From the lab */}
      {posts.length > 0 && (
        <section className="px-4 py-12 md:py-16 bg-muted/30">
          <div className="content-wrapper space-y-6 animate-fade-in">
            <h2 className="text-center text-foreground text-xl md:text-2xl">{t("index.fromLab.headline")}</h2>
            <div className="flex justify-center">
              <a href={`/blog/${posts[0].slug}`} className="block group max-w-[520px] w-full">
                <Card className="shadow-card hover:shadow-hover transition-all">
                  <img
                    src={posts[0].thumbnail}
                    alt="Blog post thumbnail"
                    width={1200}
                    height={675}
                    loading="lazy"
                    className="w-full h-auto rounded-t-xl border-b border-border"
                  />
                  <div className="p-4">
                    <h3 className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors mb-2 leading-snug">
                      The US And China Are Pouring Money Into AI Hacking. Where Does That Leave Europe?
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      ChatGPT and other versions of generative AI have taken most of the spotlight over the past few years and have added billions of dollars of value to companies. It is easy to get lost in all the news and product launches, but in a less sexy corner of AI, huge shifts are happening right now.
                    </p>
                  </div>
                </Card>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Supporters Section */}
      <SupportersSection />


      {/* Final CTA Section */}
      <section className="px-4 bg-muted/30 py-16 md:py-20">
        <div className="content-wrapper text-center space-y-8 animate-fade-in">
          <h2 className="text-foreground">{t("index.finalCTA.headline")}</h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to see how coordinated AI could work for your security challenges?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-base px-8">
              <a href="mailto:kontakt@colleaiq.dk?subject=Pilot%20interest">{t("index.finalCTA.ctaPrimary")}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <a href="/story">{t("index.finalCTA.ctaSecondary")}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Index;
