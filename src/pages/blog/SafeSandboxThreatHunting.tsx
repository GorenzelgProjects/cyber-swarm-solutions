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
            <h1 className="text-foreground">Safe Sandbox Threat Hunting</h1>
            <p className="text-muted-foreground">{new Date("2025-03-01").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
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
            <p>[[Intro paragraph – why safe sandboxing is essential for enterprise threat hunting without production risk.]]</p>
            <p>[[Context paragraph – how the environment mirrors production, what signals are observed, and how false positives are reduced.]]</p>
            <p>[[Outcome paragraph – what teams get today and how this integrates with audit/compliance.]]</p>
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
