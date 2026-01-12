import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Cookie, Shield, Database, Eye, UserCheck, Mail, Clock, RefreshCw } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      id: 'introduction',
      icon: Shield,
      title: 'Introduction',
      content: `ColleaiQ ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.

We comply with the General Data Protection Regulation (GDPR) and other applicable data protection laws. By using our services, you agree to the collection and use of information in accordance with this policy.`,
    },
    {
      id: 'data-controller',
      icon: UserCheck,
      title: 'Data Controller',
      content: `ColleaiQ ApS is the data controller responsible for your personal data.

**Contact Information:**
- Company: ColleaiQ ApS
- Address: Copenhagen, Denmark
- Email: info@colleaiq.com

For any questions about this Privacy Policy or our data practices, please contact us using the information above.`,
    },
    {
      id: 'data-collection',
      icon: Database,
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us and information collected automatically when you use our services.

**Information You Provide:**
- Contact information (name, email address, phone number)
- Professional information (company name, job title)
- Communications you send to us
- Information provided through contact forms

**Information Collected Automatically:**
- Device information (browser type, operating system)
- IP address and approximate location
- Pages visited and time spent on our website
- Referring website or source
- Cookies and similar tracking technologies (see Cookie Policy below)`,
    },
    {
      id: 'cookies',
      icon: Cookie,
      title: 'Cookie Policy',
      content: `We use cookies and similar technologies to enhance your experience on our website. Cookies are small data files stored on your device.

**Types of Cookies We Use:**

**1. Necessary Cookies (Always Active)**
Essential for the website to function properly. These include cookies for security, accessibility, and basic functionality. These cannot be disabled.

**2. Statistics Cookies (Requires Consent)**
Help us understand how visitors interact with our website by collecting anonymous information about page visits, traffic sources, and user behavior. We use this data to improve our website and services.

**3. Marketing Cookies (Requires Consent)**
Used to track visitors across websites to display relevant advertisements. These cookies may be set by third-party advertising partners.

**4. Personalization Cookies (Requires Consent)**
Allow the website to remember choices you make (such as language preferences) and provide enhanced, personalized features.

**Managing Your Cookie Preferences:**
You can manage your cookie preferences at any time by clicking the "Cookie Settings" link in our website footer. You can also configure your browser to refuse cookies, although this may affect your experience on our website.`,
    },
    {
      id: 'data-use',
      icon: Eye,
      title: 'How We Use Your Information',
      content: `We use the information we collect for the following purposes:

- **Provide Services:** To deliver and maintain our services
- **Communication:** To respond to your inquiries and send important updates
- **Improvement:** To analyze usage patterns and improve our website and services
- **Security:** To detect, prevent, and address technical issues and security threats
- **Legal Compliance:** To comply with applicable laws and regulations
- **Marketing:** With your consent, to send promotional communications about our products and services

We will only process your personal data when we have a lawful basis to do so, such as:
- Your consent
- Performance of a contract
- Compliance with legal obligations
- Our legitimate business interests`,
    },
    {
      id: 'data-sharing',
      icon: RefreshCw,
      title: 'Data Sharing and Transfers',
      content: `We do not sell your personal information. We may share your information with:

**Service Providers:**
Third-party companies that help us operate our business (hosting, analytics, email services). These providers are contractually obligated to protect your data.

**Legal Requirements:**
When required by law, court order, or governmental authority.

**Business Transfers:**
In connection with a merger, acquisition, or sale of assets.

**International Transfers:**
Your data may be transferred to and processed in countries outside the European Economic Area (EEA). When we transfer data outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.`,
    },
    {
      id: 'your-rights',
      icon: UserCheck,
      title: 'Your Rights Under GDPR',
      content: `Under the GDPR, you have the following rights regarding your personal data:

- **Right of Access:** Request a copy of your personal data
- **Right to Rectification:** Request correction of inaccurate data
- **Right to Erasure:** Request deletion of your personal data ("right to be forgotten")
- **Right to Restrict Processing:** Request limitation of how we use your data
- **Right to Data Portability:** Receive your data in a structured, machine-readable format
- **Right to Object:** Object to processing based on legitimate interests or direct marketing
- **Right to Withdraw Consent:** Withdraw consent at any time (without affecting prior processing)

To exercise any of these rights, please contact us at info@colleaiq.com. We will respond to your request within 30 days.

You also have the right to lodge a complaint with a supervisory authority, in particular in the EU Member State of your residence or place of work.`,
    },
    {
      id: 'data-retention',
      icon: Clock,
      title: 'Data Retention',
      content: `We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including:

- **Contact Form Submissions:** Retained for 2 years after last interaction
- **Analytics Data:** Aggregated and anonymized after 26 months
- **Cookie Consent Records:** Retained for 1 year

After the retention period, data is securely deleted or anonymized. We may retain certain information longer if required by law or for legitimate business purposes.`,
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:

- Encryption of data in transit (HTTPS/TLS)
- Secure hosting infrastructure
- Access controls and authentication
- Regular security assessments
- Employee training on data protection

While we strive to protect your data, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.`,
    },
    {
      id: 'updates',
      icon: RefreshCw,
      title: 'Updates to This Policy',
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons.

When we make material changes, we will notify you by:
- Posting the updated policy on our website
- Updating the "Last Updated" date below
- Sending an email notification (for significant changes)

We encourage you to review this Privacy Policy periodically.`,
    },
    {
      id: 'contact',
      icon: Mail,
      title: 'Contact Us',
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

**Email:** info@colleaiq.com

**Address:**
ColleaiQ ApS
Copenhagen, Denmark

We aim to respond to all inquiries within 30 days.`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | ColleaiQ</title>
        <meta
          name="description"
          content="Learn how ColleaiQ collects, uses, and protects your personal data. Our privacy policy explains your rights under GDPR and our cookie practices."
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Last Updated:</strong> January 2026
              </p>
            </div>

            {/* Table of Contents */}
            <nav className="mb-12 p-6 rounded-xl border border-border bg-card">
              <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {index + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Content Sections */}
            <div className="space-y-12">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-semibold pt-1">{section.title}</h2>
                    </div>
                    <div className="pl-14 prose prose-sm dark:prose-invert max-w-none">
                      {section.content.split('\n\n').map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-muted-foreground leading-relaxed whitespace-pre-line"
                          dangerouslySetInnerHTML={{
                            __html: paragraph
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                              .replace(/\n- /g, '<br/>• ')
                          }}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;
