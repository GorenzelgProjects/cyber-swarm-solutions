import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import posts from "@/data/blog";
import { teamMembers } from "@/data/team";

const TeamMemberProfile = () => {
  const { slug } = useParams();
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return <Navigate to="/team" replace />;
  }

  // Filter posts by author
  const authorPosts = posts.filter((post) => post.author === slug);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        {/* Header */}
        <section className="container mx-auto max-w-4xl mb-0">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover object-top border-2 border-border"
            />
            <div className="flex-1 space-y-1">
              <h1 className="text-4xl font-bold text-foreground">{member.name}</h1>
              <p className="text-xl text-muted-foreground">{member.title}</p>
              {member.phone && (
                <p className="text-sm text-muted-foreground">
                  <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                    {member.phone}
                  </a>
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="container mx-auto max-w-4xl space-y-6 -mt-6 md:-mt-8">
          <div>
            <p className="text-lg text-foreground">{member.intro}</p>
          </div>

          {/* Background */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Background</h2>
            <ul className="space-y-2 mt-3">
              {member.background.map((item, idx) => (
                <li key={idx} className="text-muted-foreground flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I care about */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground">What I care about</h2>
            <p className="text-muted-foreground mt-3">{member.caresAbout}</p>
          </div>

          {/* Co-authored posts */}
          {authorPosts.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Co-authored posts</h2>
              <div className="grid gap-4">
                {authorPosts.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                    <Card className="border-border hover:shadow-hover transition-shadow">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}{" "}
                          • {post.readTime}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="pt-4">
            <Button asChild size="lg">
              <a href={`mailto:${member.email || "kontakt@colleaiq.dk"}?subject=To%20${member.firstName}`}>
                Email {member.firstName}
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamMemberProfile;
