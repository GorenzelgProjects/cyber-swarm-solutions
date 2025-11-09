import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-24 px-4">
        <div className="content-wrapper text-center space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs tracking-wide">
            Alpha stage team
          </span>
          <h1 className="text-foreground">Careers</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're a small team and we hire rarely and deliberately. There are no open roles right now.
          </p>
        </div>

        {/* Thesis / PhD Collaborations */}
        <section className="mt-12">
          <div className="container mx-auto max-w-3xl">
            <Card className="border-border shadow-soft">
              <CardContent className="p-8 md:p-10 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Thesis / PhD collaborations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're keen to partner with Master's thesis or PhD students on topics like explainable multi-agent systems, 
                  sandboxed cyber simulations, model evaluation/reproducibility, reinforcement learning, graph analytics, 
                  and auditability for NIS2. We can offer real problem statements, synthetic/bench data, weekly check-ins, 
                  and co-authorship where relevant.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What we may open next */}
        <section className="mt-8">
          <div className="container mx-auto max-w-3xl">
            <Card className="border-border shadow-soft">
              <CardContent className="p-8 md:p-10 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">What we may open next <span className="text-muted-foreground text-base font-normal">(not open today)</span></h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Software Engineer (agents / backend)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Frontend / Product Engineer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Security Analyst (advisor / part-time)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interested section */}
        <section className="mt-8">
          <div className="container mx-auto max-w-3xl">
            <Card className="border-border shadow-soft">
              <CardContent className="p-8 md:p-10 text-center space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Interested?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Use the Contact page to write us a short note (e.g., "Thesis/PhD partnership" or "Future roles").
                </p>
                <div className="pt-2">
                  <Button asChild>
                    <a href="/contact">Contact Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
