import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct mailto link with pre-filled content
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company || "N/A"}\n\n` +
        `Message:\n${formData.message}`,
    );

    const mailtoLink = `mailto:kontakt@colleaiq.dk?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Clear form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">{t("contact.headline")}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{t("contact.description")}</p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="px-4 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="bg-card border-border shadow-card">
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{t("contact.infoTitle")}</h3>
                      <p className="text-sm text-muted-foreground">{t("contact.description")}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-cyber flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">{t("contact.infoEmail")}</p>
                          <a
                            href="mailto:kontakt@colleaiq.dk"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {t("footer.email")}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-cyber flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">{t("contact.infoOffice")}</p>
                          <p className="text-sm text-muted-foreground">{t("footer.address")}</p>
                        </div>
                      </div>

                      <a
                        href="https://www.linkedin.com/company/colleaiq/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 group"
                      >
                        <div className="h-10 w-10 rounded-lg bg-gradient-cyber flex items-center justify-center flex-shrink-0">
                          <Linkedin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">{t("contact.infoLinkedIn")}</p>
                          <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                            ColleaiQ
                          </p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-cyber border-border shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to inquiries within 24 hours during business days.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="lg:col-span-2 bg-card border-border shadow-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("contact.formName")} *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder={t("contact.formName")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("contact.formEmail")} *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={t("contact.formEmail")}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">{t("contact.formCompany")}</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t("contact.formCompany")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("contact.formMessage")} *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your cybersecurity needs..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      {t("contact.formButton")}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and consent to be contacted regarding
                      your inquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo CTA */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-3xl">
            <Card className="bg-gradient-cyber border-border shadow-glow">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold">Request a Demo</h2>
                <p className="text-lg text-muted-foreground">
                  See ColleaiQ's multi-agent AI system in action. Schedule a personalized demonstration to learn how we
                  can strengthen your cybersecurity posture.
                </p>
                <Button size="lg">Schedule Demo</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
