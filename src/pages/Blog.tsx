import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Multi-Agent AI: The Future of Cybersecurity",
      excerpt: "Exploring why 2025 is the year of agentic AI and how multi-agent networks are revolutionizing threat detection and response.",
      date: "2025-03-15",
      category: "AI & Innovation",
      readTime: "5 min read"
    },
    {
      title: "Understanding NIS2 Compliance Requirements",
      excerpt: "A comprehensive guide to NIS2 directive requirements and how multi-agent AI helps organizations meet these standards.",
      date: "2025-03-10",
      category: "Compliance",
      readTime: "8 min read"
    },
    {
      title: "Zero-Day Vulnerabilities: Proactive vs Reactive Defense",
      excerpt: "Why traditional reactive cybersecurity is no longer sufficient and how continuous attack simulation changes the game.",
      date: "2025-03-05",
      category: "Cybersecurity",
      readTime: "6 min read"
    },
    {
      title: "The Cost of Cyber Attacks: Lessons from NotPetya",
      excerpt: "Analyzing the Mærsk incident and why proactive defense could have prevented billions in losses.",
      date: "2025-02-28",
      category: "Case Study",
      readTime: "7 min read"
    },
    {
      title: "Building Explainable AI for Security Operations",
      excerpt: "How we ensure every AI decision is traceable and auditable for security analysts and compliance teams.",
      date: "2025-02-20",
      category: "AI & Innovation",
      readTime: "6 min read"
    },
    {
      title: "Europe's Cybersecurity Talent Gap and AI Solutions",
      excerpt: "Addressing the 4.7 million unfilled cybersecurity roles with intelligent automation and multi-agent systems.",
      date: "2025-02-15",
      category: "Industry Insights",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Blog & <span className="bg-gradient-accent bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert perspectives on AI, cybersecurity, and the future of proactive defense.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="px-4 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}</span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-3xl">
            <Card className="bg-gradient-cyber border-border shadow-glow">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold">Stay Updated</h2>
                <p className="text-lg text-muted-foreground">
                  Subscribe to our newsletter for the latest insights on AI-driven cybersecurity, 
                  industry trends, and product updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="lg">Subscribe</Button>
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

export default Blog;
