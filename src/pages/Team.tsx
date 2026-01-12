import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SupportersSection from "@/components/SupportersSection";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin } from "lucide-react";
import { teamMembers, advisoryBoard } from "@/data/team";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-12 pb-8 px-4">
        <div className="content-wrapper text-center space-y-3">
          <h1 className="text-foreground">
            Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the people who make ColleaiQ possible
          </p>
        </div>

        <section className="mt-6 mb-8">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3 grid-cols-1">
              {teamMembers.map((member) => (
                <Link
                  key={member.slug}
                  to={`/team/${member.slug}`}
                  className="group block"
                >
                  <Card className="relative overflow-hidden border border-border shadow-soft hover:shadow-hover transition-all duration-200 h-full">
                    {/* Card content - visible by default */}
                    <div className="relative">
                      {/* Profile image */}
                      <div className="aspect-square w-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Hover overlay - only on desktop */}
                      <div className="hidden md:block absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-all duration-200">
                        <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold text-background">
                              {member.name}
                            </h3>
                            <p className="text-sm text-background/90 font-medium">
                              {member.title}
                            </p>
                            <p className="text-sm text-background/85 leading-relaxed">
                              {member.focus}
                            </p>
                          </div>
                          <div className="flex items-center text-sm text-background font-medium pt-2">
                            View profile <ArrowRight className="ml-1 h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Info below image - always visible */}
                    <div className="p-6 text-center space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{member.title}</p>
                      <p className="text-sm text-muted-foreground md:hidden">
                        {member.focus}
                      </p>
                      <div className="flex items-center justify-center text-sm text-primary group-hover:underline pt-2">
                        View profile <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board Section */}
        <section className="mt-16 mb-8">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center space-y-3 mb-8">
              <h2 className="text-3xl font-bold text-foreground">
                Advisory Board
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Industry experts guiding our strategic direction
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 max-w-3xl mx-auto">
              {advisoryBoard.map((advisor) => (
                <Card
                  key={advisor.slug}
                  className="border border-border shadow-soft hover:shadow-hover transition-all duration-200"
                >
                  <div className="p-6 text-center space-y-3">
                    <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center">
                      <span className="text-2xl font-bold text-muted-foreground">
                        {advisor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {advisor.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {advisor.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {advisor.organization}
                      </p>
                    </div>
                    {advisor.linkedin && (
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SupportersSection />

      <Footer />
    </div>
  );
};

export default Team;
