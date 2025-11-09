import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

type TeamMember = {
  name: string;
  title: string;
  image: string;
  bio: string;
  details?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Mikkel Romvig Grøngaard",
    title: "CEO & Co-founder",
    image: "/images/team/mikkel.jpg",
    bio: "Leading ColleaiQ's vision and strategy.",
    details: "Add extended bio and background here...",
  },
  {
    name: "Martin Christoffersen",
    title: "CTO & Co-founder",
    image: "/images/team/martin.jpg",
    bio: "Building the technical foundation of our multi-agent platform.",
    details: "Add extended bio and background here...",
  },
  {
    name: "Christoffer Christian Dreist",
    title: "CFO & Co-founder",
    image: "/images/team/christoffer.jpg",
    bio: "Managing finances and business operations.",
    details: "Add extended bio and background here...",
  },
];

const Team = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const toggleMember = (name: string) => {
    setExpandedMember(expandedMember === name ? null : name);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-24 px-4">
        <div className="content-wrapper text-center space-y-4">
          <h1 className="text-foreground">Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three founders building the future of proactive cybersecurity.
          </p>
        </div>

        <section className="mt-12">
          <div className="container mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-1">
              {teamMembers.map((member) => (
                <Card key={member.name} className="border-border shadow-soft overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
                      {/* Profile Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 rounded-full object-cover border-2 border-border"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {member.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{member.title}</p>
                        <p className="text-muted-foreground">{member.bio}</p>

                        {/* Expanded Details */}
                        {expandedMember === member.name && member.details && (
                          <div className="pt-4 border-t border-border mt-4">
                            <p className="text-muted-foreground">{member.details}</p>
                          </div>
                        )}

                        {/* Toggle Button */}
                        {member.details && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleMember(member.name)}
                            className="mt-2"
                          >
                            {expandedMember === member.name ? (
                              <>
                                Show less <ChevronUp className="ml-2 h-4 w-4" />
                              </>
                            ) : (
                              <>
                                Read more <ChevronDown className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16">
          <div className="content-wrapper text-center space-y-6">
            <h2 className="text-foreground">Want to work with us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always interested in connecting with talented people who share our vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="mailto:kontakt@colleaiq.dk">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/careers">View Open Positions</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
