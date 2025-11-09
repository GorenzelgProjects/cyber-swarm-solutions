import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2 } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-24 px-4">
        <div className="content-wrapper text-center space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs tracking-wide">
            Alpha stage team
          </span>
          <h1 className="text-foreground">Open Positions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're a small team and we hire rarely and deliberately. There are no open roles right now.
          </p>
        </div>

        {/* Empty state card */}
        <section className="mt-12">
          <div className="container mx-auto max-w-3xl">
            <Card className="border-border shadow-soft">
              <CardContent className="p-8 md:p-10 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h2 className="text-2xl text-foreground">We're not hiring right now</h2>
                <div className="text-muted-foreground max-w-xl mx-auto space-y-4 text-left">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Thesis / PhD collaborations</h3>
                    <p>
                      We're keen to partner with Master's thesis or PhD students on topics like explainable multi-agent systems, 
                      sandboxed cyber simulations, model evaluation/reproducibility, reinforcement learning, graph analytics, 
                      and auditability for NIS2. We can offer real problem statements, synthetic/bench data, weekly check-ins, 
                      and co-authorship where relevant.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What we may open next (not open today)</h3>
                    <ul className="space-y-1 ml-4">
                      <li>• Software Engineer (agents / backend)</li>
                      <li>• Frontend / Product Engineer</li>
                      <li>• Security Analyst (advisor / part-time)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Interested?</h3>
                    <p>
                      Use the Contact page to write us a short note (e.g., "Thesis/PhD partnership" or "Future roles").
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button asChild>
                    <a href="/contact">Contact Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Job list pattern preview */}
        <section className="mt-6">
          <div className="container mx-auto max-w-5xl">
            <div className="space-y-4">
              {[0, 1, 2].map((i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div className="md:col-span-3 space-y-2">
                        <Skeleton className="h-6 w-48" />
                        <Skeleton className="h-4 w-80" />
                      </div>
                      <div className="flex justify-end">
                        <Skeleton className="h-10 w-28 rounded-md" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">No positions available.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
