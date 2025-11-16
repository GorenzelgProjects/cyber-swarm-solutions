import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import pricingData from "@/locales/pricing.json";

const Pricing = () => {
  const t = pricingData.pricing;

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-12 pb-8 px-4">
        {/* Hero */}
        <div className="content-wrapper text-center mb-6">
          <h1 className="text-foreground">{t.hero.headline}</h1>
        </div>

        {/* Platform Section */}
        <section className="container mx-auto max-w-5xl mb-6">
          <div className="max-w-xl mx-auto">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-4">{t.platform.card.title}</CardTitle>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {t.platform.card.pricingModel.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {t.platform.card.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" size="lg">
                  <Link to="/contact">{t.platform.card.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Consulting, Talks, Intro - Grid Layout */}
        <section className="container mx-auto max-w-6xl py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* AI Consulting */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{t.consulting.headline}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {t.consulting.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-foreground mb-2">{t.consulting.includes}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {t.consulting.items.map((item, index) => (
                      <li key={index}>· {item}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    {t.consulting.pricingNote}
                  </p>
                </div>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link to="/contact">{t.consulting.cta}</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Talks & Workshops */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{t.talks.headline}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {t.talks.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-foreground mb-2">{t.talks.formats}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {t.talks.items.map((item, index) => (
                      <li key={index}>· {item}</li>
                    ))}
                  </ul>
                </div>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link to="/contact">{t.talks.cta}</Link>
                </Button>
              </CardContent>
            </Card>

            {/* First Conversation */}
            <Card className="flex flex-col md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-xl">{t.intro.headline}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {t.intro.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-end">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">{t.intro.cta}</Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Legal Footnote */}
        <div className="container mx-auto max-w-5xl mt-16">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            {t.legal}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
