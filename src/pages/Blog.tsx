import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import posts from "@/data/blog";

const Blog = () => {
  const list = posts; // single post for now

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <section className="px-4 py-10">
          <div className="container mx-auto max-w-4xl text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Blog</h1>
            <p className="text-xl text-muted-foreground">[[Blog intro – short statement about research notes and updates.]]</p>
          </div>
        </section>

        <section className="px-4 py-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid gap-8">
              {list.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                  <Card className="border-border hover:shadow-hover transition-shadow">
                    <CardContent className="p-0">
                      <img
                        src={post.thumbnail}
                        alt="Abstract sandbox thumbnail"
                        width={1200}
                        height={675}
                        loading="lazy"
                        className="w-full h-auto rounded-t-xl border-b border-border"
                      />
                      <div className="p-6 space-y-2">
                        <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">{post.title}</h2>
                        <p className="text-sm text-muted-foreground">
                          {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </p>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
