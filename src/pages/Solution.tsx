import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Swords, Shield, ClipboardCheck, Server, Network, Users, RefreshCw, Target, FileText, Scale } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Plot from "react-plotly.js";

const Solution = () => {
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

  const agents = [
    {
      type: "Offensive Node",
      name: "Red-Team Agent",
      icon: <Swords className="w-5 h-5" />,
      iconBg: "bg-destructive/10",
      iconColor: "text-destructive",
      description: "Turns exposures into multi-step attack paths. It executes steps inside the sandbox to prove feasibility."
    },
    {
      type: "Defensive Node",
      name: "Blue-Team Agent",
      icon: <Shield className="w-5 h-5" />,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      description: "Monitors rehearsal logs to see which controls reacted and where detection gaps exist."
    },
    {
      type: "Verification Node",
      name: "Auditor Agent",
      icon: <ClipboardCheck className="w-5 h-5" />,
      iconBg: "bg-sage/20",
      iconColor: "text-sage",
      description: "Logs every decision point and reasoning step. Meets NIS2 requirements through full visibility."
    },
    {
      type: "Infrastructure",
      name: "The Sandbox",
      icon: <Server className="w-5 h-5" />,
      iconBg: "bg-muted",
      iconColor: "text-muted-foreground",
      description: "Isolated testing grounds mirroring your production without risk to live operations."
    }
  ];

  const foundationItems = [
    {
      icon: <Network className="w-5 h-5" />,
      title: "Graph Integration",
      description: "The agents use a graph representation of assets to identify logical connection points that traditional scanners miss."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Expert Design",
      description: "Scenario logic is designed by experienced red-teamers, ensuring agents explore realistic, high-impact paths."
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Continuous Evolution",
      description: "Post-simulation results feed back into the system, sharpening the agents' detection and exploration logic."
    }
  ];

  const outcomes = [
    {
      number: "01",
      icon: <Target className="w-6 h-6" />,
      title: "Practical Exposure",
      description: "Discover actual attack paths before malicious actors can use them. Move beyond theoretical risks into concrete rehearsals."
    },
    {
      number: "02",
      icon: <FileText className="w-6 h-6" />,
      title: "Evidence-Based Findings",
      description: "Share findings with stakeholders that are backed by logs, not just opinions. Ideal for board-level reporting."
    },
    {
      number: "03",
      icon: <Scale className="w-6 h-6" />,
      title: "NIS2 Support",
      description: "Structured documentation of testing and decisions that aligns directly with European cybersecurity mandates."
    }
  ];

  // Chart data for Simulation Efficacy
  const chartData = {
    data: [
      {
        x: ['Discovery Time', 'Verification Time', 'Documentation Time', 'Total Cycle'],
        y: [100, 100, 100, 100],
        name: 'Manual Testing',
        type: 'bar' as const,
        marker: { color: 'hsl(var(--muted-foreground))' }
      },
      {
        x: ['Discovery Time', 'Verification Time', 'Documentation Time', 'Total Cycle'],
        y: [25, 15, 10, 20],
        name: 'ColleaiQ',
        type: 'bar' as const,
        marker: { color: 'hsl(var(--sage))' }
      }
    ],
    layout: {
      barmode: 'group' as const,
      paper_bgcolor: 'transparent',
      plot_bgcolor: 'transparent',
      font: { color: 'hsl(var(--muted-foreground))', family: 'Inter, system-ui, sans-serif' },
      legend: { 
        orientation: 'h' as const, 
        y: -0.2,
        font: { size: 12 }
      },
      margin: { t: 20, b: 80, l: 60, r: 20 },
      yaxis: { 
        title: 'Relative Time (%)',
        gridcolor: 'hsl(var(--border))',
        zerolinecolor: 'hsl(var(--border))'
      },
      xaxis: {
        tickangle: 0
      }
    },
    config: {
      displayModeBar: false,
      responsive: true
    }
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
      
      <main className="pt-12 pb-10">
        {/* Hero */}
        <section className="px-4 py-12 md:py-16">
          <header className="container mx-auto max-w-4xl text-center space-y-6 animate-fade-in">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Document: Our Solution</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Rehearsing Resilience.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              ColleaiQ is a multi-agent AI system that rehearses realistic attacks in a safe, bounded environment. 
              We don't just find vulnerabilities; we turn them into concrete, traceable findings.
            </p>
          </header>
        </section>

        {/* Multi-Agent Collaboration */}
        <section className="px-4 py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Multi-Agent Collaboration</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Instead of one generalist model, we structure work into specific roles. This separation of duties is the cornerstone of our explainability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {agents.map((agent, index) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border bg-card hover:shadow-hover transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{agent.type}</p>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${agent.iconBg} ${agent.iconColor} flex items-center justify-center`}>
                          {agent.icon}
                        </div>
                        <h3 className="font-semibold text-foreground">{agent.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Foundation */}
        <section className="px-4 py-12 md:py-16">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-10">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Foundation 01</p>
              <h2 className="text-3xl font-bold text-foreground mb-4">Advanced AI Architecture</h2>
              <p className="text-muted-foreground max-w-3xl">
                ColleaiQ combines modern language models with <strong>graph-based views</strong> of your environment and deterministic rule engines.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {foundationItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Simulation Efficacy Chart */}
        <section className="px-4 py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Simulation Efficacy (Manual vs. ColleaiQ)</h2>
              <p className="text-muted-foreground">
                ColleaiQ accelerates the "Time to Verification" by automating the rehearsal process in bounded environments.
              </p>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Plot
                  data={chartData.data}
                  layout={chartData.layout}
                  config={chartData.config}
                  style={{ width: '100%', height: '300px' }}
                  useResizeHandler
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Resulting Intelligence */}
        <section className="px-4 py-12 md:py-16">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">The Resulting Intelligence.</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The primary output of ColleaiQ isn't a list of bugs; it's a verifiable story of your organization's resilience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={outcome.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage/10 text-sage mb-4">
                    <span className="text-lg font-bold">{outcome.number}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{outcome.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{outcome.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Continuous Learning Loop */}
        <section className="px-4 py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">Continuous Learning Loop</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Our agents learn from analyst decisions and simulation results. As you interact with the system, the detection rules and rehearsal policies update automatically.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                  <div className="flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-lg border border-primary/20">
                    <RefreshCw className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Analysis Ingestion</span>
                  </div>
                  <div className="hidden sm:block text-muted-foreground">→</div>
                  <div className="sm:hidden text-muted-foreground">↓</div>
                  <div className="flex items-center gap-3 px-6 py-3 bg-sage/10 rounded-lg border border-sage/20">
                    <RefreshCw className="w-5 h-5 text-sage" />
                    <span className="text-sm font-medium text-foreground">Policy Refinement</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-12 md:py-16">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to see it in action?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how a few focused rehearsals in a sandbox can give you clearer insight into your real exposure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Request a Demo</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solution;
