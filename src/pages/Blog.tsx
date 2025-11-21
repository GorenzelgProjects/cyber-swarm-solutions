import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import posts from "@/data/blog";
const Blog = () => {
  const list = posts; // single post for now

  return <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <section className="px-4 py-10">
          <div className="container mx-auto max-w-4xl text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Short field notes as we build ColleaiQ—what we tried, what worked, and what we changed.
            </p>
          </div>
        </section>

        <section className="px-4 py-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {list.map(post => <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                  <Card className="border-border hover:shadow-hover transition-shadow h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      <img src={post.thumbnail} alt="Blog post thumbnail" width={800} height={450} loading="lazy" className="w-full max-w-[400px] h-auto aspect-video object-cover rounded-t-xl border-b border-border" />
                      <div className="p-5 space-y-2 flex-1 flex flex-col">
                        <h2 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                          {post.readTime && ` • ${post.readTime}`}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Blog;