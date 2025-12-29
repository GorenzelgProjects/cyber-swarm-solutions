import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Github, Linkedin, Calendar, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Community = () => {
  const channels = [
    {
      icon: MessageSquare,
      title: "Discussion Forum",
      description: "Join conversations about cybersecurity challenges, AI innovations, and best practices.",
      action: "Join Discussions",
      link: "#"
    },
    {
      icon: Github,
      title: "Open Source",
      description: "Contribute to our open-source tools and research projects for the cybersecurity community.",
      action: "View on GitHub",
      link: "#"
    },
    {
      icon: Linkedin,
      title: "LinkedIn Network",
      description: "Connect with cybersecurity professionals and stay updated on industry insights.",
      action: "Follow Us",
      link: "#"
    }
  ];

  const events = [
    {
      title: "AI in Cybersecurity Webinar Series",
      date: "Monthly",
      description: "Deep-dive sessions on implementing AI-driven security solutions"
    },
    {
      title: "Multi-Agent Systems Workshop",
      date: "Quarterly",
      description: "Hands-on workshops exploring multi-agent architectures"
    },
    {
      title: "Annual Cybersecurity Summit",
      date: "October 2025",
      description: "Industry leaders discussing the future of proactive defense"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Network with Experts",
      description: "Connect with cybersecurity professionals, researchers, and AI specialists"
    },
    {
      icon: Award,
      title: "Early Access",
      description: "Get early access to new features, research papers, and beta programs"
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Invitations to webinars, workshops, and industry conferences"
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
              Join Our <span className="bg-gradient-accent bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connect with cybersecurity professionals, AI researchers, and innovation leaders 
              shaping the future of proactive defense.
            </p>
          </div>
        </section>

        {/* Community Channels */}
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12">Community Channels</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {channels.map((channel, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-6">
                    <div className="h-14 w-14 rounded-lg bg-muted flex items-center justify-center">
                      <channel.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold">{channel.title}</h3>
                      <p className="text-muted-foreground">{channel.description}</p>
                    </div>
                    <Button className="w-full" asChild>
                      <a href={channel.link}>{channel.action}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Benefits */}
        <section className="px-4 py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12">Community Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="h-14 w-14 rounded-lg bg-muted flex items-center justify-center mx-auto">
                      <benefit.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card 
                  key={index}
                  className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <h3 className="text-2xl font-semibold">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-3">
                        <div className="flex items-center gap-2 text-primary">
                          <Calendar className="h-5 w-5" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <Button variant="outline">Learn More</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-3xl">
            <Card className="bg-muted/30 border-border shadow-card">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold">Ready to Get Involved?</h2>
                <p className="text-lg text-muted-foreground">
                  Join our community of cybersecurity professionals and help shape the future 
                  of AI-driven defense.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/blog">Read Our Blog</Link>
                  </Button>
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

export default Community;
