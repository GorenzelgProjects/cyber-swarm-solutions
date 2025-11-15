import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import pricingData from "@/locales/pricing.json";

const ThesisPhd = () => {
  const t = pricingData.thesis;

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-24 px-4">
        {/* Hero */}
        <div className="content-wrapper text-center space-y-4 mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs tracking-wide">
            {t.hero.badge}
          </span>
          <h1 className="text-foreground">{t.hero.headline}</h1>
        </div>

        {/* Content */}
        <section className="container mx-auto max-w-3xl">
          <Card className="border-border shadow-soft">
            <CardContent className="p-8 md:p-10 space-y-8">
              
              {/* Intro */}
              <p className="text-muted-foreground leading-relaxed">
                {t.intro}
              </p>

              {/* What We Offer */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">{t.offer.headline}</h2>
                <ul className="space-y-2">
                  {t.offer.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Expect */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">{t.expect.headline}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t.expect.description}
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href="mailto:kontakt@colleaiq.dk?subject=Thesis/PhD collaboration">
                    {t.cta}
                  </a>
                </Button>
              </div>

            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThesisPhd;
