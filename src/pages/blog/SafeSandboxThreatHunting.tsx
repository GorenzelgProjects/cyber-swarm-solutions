import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Post = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-24 px-4">
        <article className="content-wrapper space-y-8">
          <header className="space-y-4 text-center">
            <h1 className="text-foreground">Safe Sandbox Threat Hunting: How We Test Without Touching Production</h1>
            <p className="text-muted-foreground">
              {new Date("2025-03-01").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} • 4 min read
            </p>
            <img
              src="/images/blog/safe-sandbox-thumb.webp"
              alt="Abstract sandbox thumbnail"
              loading="lazy"
              width={1200}
              height={675}
              className="w-full h-auto rounded-xl border border-muted shadow-soft"
            />
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none text-foreground">
            <p>Reactive security is like changing your brake pads after the crash. We wanted a safer rehearsal.</p>
            
            <p>ColleaiQ runs realistic attack steps inside a sandbox that mirrors your environment. We record what we attempted, what we observed, and why it matters, then propose a practical fix. A human analyst reviews every result and the decision is logged for audit.</p>
            
            <p>Why this matters: you get proactive coverage without touching production, evidence that survives scrutiny, and a workflow that gets faster as the system learns.</p>
            
            <p>If you want to help shape the pilot, email us at <a href="mailto:kontakt@colleaiq.dk" className="text-primary hover:underline">kontakt@colleaiq.dk</a>.</p>
          </div>

          <Card className="border-border">
            <CardContent className="p-6 text-center space-y-3">
              <p className="text-lg text-muted-foreground">Want to discuss how this applies to your environment?</p>
              <Button asChild>
                <a href="mailto:kontakt@colleaiq.dk">Email us</a>
              </Button>
            </CardContent>
          </Card>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Post;
