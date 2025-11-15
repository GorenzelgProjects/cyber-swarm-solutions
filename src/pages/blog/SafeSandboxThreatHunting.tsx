import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import posts from "@/data/blog";
import { teamMembers } from "@/data/team";

const Post = () => {
  // Get author details from team data
  const post = posts.find(p => p.slug === "safe-sandbox-threat-hunting");
  const author = post?.author ? teamMembers.find(m => m.slug === post.author) : null;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-24 px-4">
        <article className="container mx-auto max-w-[760px] space-y-8">
          <header className="space-y-6">
            <img
              src="/images/blog/safe-sandbox-thumb.webp"
              alt="Abstract sandbox thumbnail"
              loading="lazy"
              width={1600}
              height={900}
              className="w-full max-h-[320px] object-cover rounded-xl border border-muted shadow-soft"
            />
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Safe Sandbox Threat Hunting: How We Test Without Touching Production
              </h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                {author && (
                  <Link 
                    to={`/team/${author.slug}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <img 
                      src={author.image}
                      alt={author.name}
                      className="w-8 h-8 rounded-full object-cover border border-border"
                    />
                    <span>{author.name}</span>
                  </Link>
                )}
                <span>•</span>
                <span>
                  {new Date("2025-03-01").toLocaleDateString("en-US", { 
                    month: "short", 
                    day: "numeric", 
                    year: "numeric" 
                  })} • 4 min read
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none text-foreground space-y-4">
            <p>Reactive security is like changing your brake pads after the crash. We wanted a safer rehearsal.</p>
            
            <p>colleaq runs realistic attack steps inside a sandbox that mirrors your environment. We record what we attempted, what we observed, and why it matters, then propose a practical fix. A human analyst reviews every result and the decision is logged for audit.</p>
            
            <p>Why this matters: you get proactive coverage without touching production, evidence that survives scrutiny, and a workflow that gets faster as the system learns.</p>
            
            <p>If you want to help shape the pilot, email us at <a href="mailto:kontakt@colleaq.dk" className="text-primary hover:underline">kontakt@colleaq.dk</a>.</p>
          </div>

          <Card className="border-border">
            <CardContent className="p-6 text-center space-y-3">
              <p className="text-lg text-muted-foreground">Want to discuss how this applies to your environment?</p>
              <Button asChild>
                <a href="mailto:kontakt@colleaq.dk">Email us</a>
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
