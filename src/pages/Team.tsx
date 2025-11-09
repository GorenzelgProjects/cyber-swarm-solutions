import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { teamMembers } from "@/data/team";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-24 px-4">
        <div className="content-wrapper text-center space-y-4">
          <h1 className="text-foreground">
            Our <span className="text-sage">Team</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Meet the people who make ColleaiQ possible</p>
        </div>

        <section className="mt-12">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
              {teamMembers.map((member) => (
                <Link key={member.slug} to={`/team/${member.slug}`} className="group">
                  <Card className="border-[#E6E8E6] shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-200">
                    <CardContent className="p-6 text-center space-y-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-28 h-28 rounded-full object-cover border-2 border-border mx-auto"
                      />
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.title}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{member.focus}</p>
                      <div className="flex items-center justify-center text-sm text-primary group-hover:underline">
                        View profile <ArrowRight className="ml-1 h-4 w-4" />
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

export default Team;
