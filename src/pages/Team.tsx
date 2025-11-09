import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type TeamMember = {
  name: string;
  title: string;
  slug: string;
  image: string;
  focus: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Mikkel Romvig Grøngaard",
    title: "CEO & Co-founder",
    slug: "mikkel-romvig-grongaard",
    image: "/images/team/mikkel.png",
    focus: "Leads ColleaiQ's direction and partnerships.",
  },
  {
    name: "Martin Christoffersen",
    title: "CTO & Co-founder",
    slug: "martin-christoffersen",
    image: "/images/team/martin.png",
    focus: "Builds the technical foundation of our multi-agent platform.",
  },
  {
    name: "Christoffer Christian Dreist",
    title: "CFO & Co-founder",
    slug: "christoffer-christian-dreist",
    image: "/images/team/christoffer.png",
    focus: "Operations, funding and customer discovery.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-24 px-4">
        <div className="content-wrapper text-center space-y-4">
          <h1 className="text-foreground">Our <span className="text-sage">team</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three founders building the future of proactive cybersecurity.
          </p>
        </div>

        <section className="mt-12">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
              {teamMembers.map((member) => (
                <Link 
                  key={member.slug} 
                  to={`/team/${member.slug}`}
                  className="group"
                >
                  <Card className="border-[#E6E8E6] shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-200">
                    <CardContent className="p-6 text-center space-y-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-28 h-28 rounded-full object-cover border-2 border-border mx-auto"
                      />
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {member.name}
                        </h3>
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
