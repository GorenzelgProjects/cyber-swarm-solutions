import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Target, Eye, Network } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SupportersSection from "@/components/SupportersSection";
import FormattedText from "@/components/FormattedText";
import posts from "@/data/blog";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="px-4 pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="content-wrapper text-center space-y-6 animate-fade-in">
          <h1 className="text-foreground">
            {t("index.hero.headline")}
          </h1>

          <div className="text-lg md:text-xl text-muted-foreground space-y-4 max-w-2xl mx-auto">
            <p>{t("index.hero.paragraph1")}</p>
            <p>{t("index.hero.paragraph2")}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild size="lg" className="text-base px-8">
              <a href="mailto:kontakt@colleaiq.dk">{t("index.hero.ctaPrimary")}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <a href="/story">{t("index.hero.ctaSecondary")}</a>
            </Button>
          </div>

          <div className="pt-4">
            <a
              href={`/blog/${posts[0].slug}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Latest post: {posts[0].title} →
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="px-4 bg-muted/30 py-16 md:py-20">
        <div className="content-wrapper space-y-8 animate-fade-in">
          <h2 className="text-center text-foreground">{t("index.challenge.headline")}</h2>

          <FormattedText 
            text={`${t("index.challenge.paragraph1")}\n\n${t("index.challenge.paragraph2")}\n\n${t("index.challenge.paragraph3")}`}
            className="text-lg text-muted-foreground space-y-4"
          />
        </div>
      </section>

      {/* Media Blocks */}
      <section className="px-4 py-16 md:py-20">
        <div className="content-wrapper text-center space-y-4">
          <h2 className="text-foreground">{t("index.howItWorks.headline")}</h2>
          <FormattedText 
            text={t("index.howItWorks.description")}
            className="text-lg text-muted-foreground space-y-4 max-w-4xl mx-auto text-left"
          />
        </div>
      </section>

      {/* Alternating media sections */}
      <section className="px-4 py-0">
        <div className="container-wide">
          {/* Why teams work with us – image right */}
          <div className="py-8 md:py-12">
            <div className="max-w-[1180px] mx-auto grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 order-1 text-left">
                <h3 className="text-xl font-serif text-foreground mb-4">{t("index.whyTeams.headline")}</h3>
                <FormattedText 
                  text={t("index.whyTeams.description")}
                  className="text-muted-foreground space-y-4"
                />
              </div>
              <div className="md:col-span-2 order-2">
                <img
                  src="/images/why-teams-work-with-us.png"
                  alt={t("index.whyTeams.imageAlt1")}
                  loading="lazy"
                  width={960}
                  height={540}
                  className="w-full h-auto rounded-xl border border-muted shadow-soft"
                />
              </div>
            </div>
          </div>

          {/* What you get today – image left */}
          <div className="py-8 md:py-12">
            <div className="max-w-[1180px] mx-auto grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 order-2 md:order-1">
                <img
                  src="/images/what-you-get-today.png"
                  alt={t("index.whyTeams.imageAlt2")}
                  loading="lazy"
                  width={960}
                  height={540}
                  className="w-full h-auto rounded-xl border border-muted shadow-soft"
                />
              </div>
              <div className="md:col-span-3 order-1 md:order-2 text-left">
                <h3 className="text-xl font-serif text-foreground mb-4">{t("index.whatYouGet.headline")}</h3>
                <FormattedText 
                  text={t("index.whatYouGet.description")}
                  className="text-muted-foreground space-y-4"
                />
              </div>
            </div>
          </div>

          {/* How the platform works – row 1 image right */}
          <div className="py-8 md:py-12">
            <div className="max-w-[1180px] mx-auto grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 order-1 text-left">
                <h3 className="text-xl font-serif text-foreground mb-4">{t("index.rehearsal.headline")}</h3>
                <FormattedText 
                  text={t("index.rehearsal.description")}
                  className="text-muted-foreground space-y-4"
                />
              </div>
              <div className="md:col-span-2 order-2">
                <img
                  src="/images/safe-rehearsal-flow.png"
                  alt={t("index.rehearsal.imageAlt")}
                  loading="lazy"
                  width={960}
                  height={540}
                  className="w-full h-auto rounded-xl border border-muted shadow-soft"
                />
              </div>
            </div>
          </div>

          {/* How the platform works – row 2 image left */}
          <div className="py-8 md:py-12">
            <div className="max-w-[1180px] mx-auto grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 order-2 md:order-1">
                <img
                  src="/images/analyst-approval-learning.png"
                  alt={t("index.learning.imageAlt")}
                  loading="lazy"
                  width={960}
                  height={540}
                  className="w-full h-auto rounded-xl border border-muted shadow-soft"
                />
              </div>
              <div className="md:col-span-3 order-1 md:order-2 text-left">
                <h3 className="text-xl font-serif text-foreground mb-4">{t("index.learning.headline")}</h3>
                <FormattedText 
                  text={t("index.learning.description")}
                  className="text-muted-foreground space-y-4"
                />
              </div>
            </div>
          </div>

          {/* Compliance & documentation – image right 35% */}
          <div className="py-8 md:py-12">
            <div className="max-w-[1180px] mx-auto grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 order-1 text-left">
                <h3 className="text-xl font-serif text-foreground mb-4">{t("index.compliance.headline")}</h3>
                <FormattedText 
                  text={t("index.compliance.description")}
                  className="text-muted-foreground space-y-4"
                />
              </div>
              <div className="md:col-span-2 order-2">
                <img
                  src="/images/structured-finding-evidence.png"
                  alt={t("index.compliance.imageAlt")}
                  loading="lazy"
                  width={960}
                  height={540}
                  className="w-full h-auto rounded-xl border border-muted shadow-soft"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases / Who It's For */}
      <section className="px-4 bg-muted/30 py-16 md:py-20">
        <div className="content-wrapper space-y-8 animate-fade-in">
          <h2 className="text-center text-foreground">{t("index.builtFor.headline")}</h2>

          <FormattedText 
            text={`${t("index.builtFor.ciso")}\n\n${t("index.builtFor.redTeams")}\n\n${t("index.builtFor.regulated")}`}
            className="text-lg text-muted-foreground space-y-4"
          />
        </div>
      </section>

      {/* From the lab (if post exists) */}
      {posts.length > 0 && (
        <section className="px-4 py-16 md:py-20">
          <div className="content-wrapper space-y-8 animate-fade-in">
            <h2 className="text-center text-foreground">From the lab</h2>
            <div className="flex justify-center">
              <a href={`/blog/${posts[0].slug}`} className="block group max-w-[380px] w-full">
                <Card className="shadow-card hover:shadow-hover transition-all">
                  <img
                    src={posts[0].thumbnail}
                    alt="Blog post thumbnail"
                    width={1200}
                    height={675}
                    loading="lazy"
                    className="w-full h-auto rounded-t-xl border-b border-border"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {posts[0].title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {new Date(posts[0].date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                      {posts[0].readTime && ` • ${posts[0].readTime}`}
                    </p>
                    <p className="text-muted-foreground">{posts[0].excerpt}</p>
                  </div>
                </Card>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Why ColleaiQ / Differentiators */}
      <section className="px-4 py-16 md:py-20">
        <div className="content-wrapper space-y-8 animate-fade-in">
          <h2 className="text-center text-foreground">{t("index.whyColleaiQ.headline")}</h2>

          <FormattedText 
            text={`${t("index.whyColleaiQ.point1")}\n\n${t("index.whyColleaiQ.point2")}\n\n${t("index.whyColleaiQ.point3")}`}
            className="text-lg text-muted-foreground space-y-4"
          />
        </div>
      </section>

      {/* Supporters Section */}
      <SupportersSection />

      {/* Final CTA Section */}
      <section className="px-4 bg-muted/30 py-16 md:py-20">
        <div className="content-wrapper text-center space-y-8 animate-fade-in">
          <h2 className="text-foreground">{t("index.finalCTA.headline")}</h2>

          <FormattedText 
            text={t("index.finalCTA.description")}
            className="text-lg text-muted-foreground max-w-2xl mx-auto space-y-4"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-base px-8">
              <a href="mailto:kontakt@colleaiq.dk?subject=Pilot%20interest">{t("index.finalCTA.ctaPrimary")}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <a href="/story">{t("index.finalCTA.ctaSecondary")}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
