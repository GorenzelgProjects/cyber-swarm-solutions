import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-border shadow-soft">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <img src={logo} alt="ColleaiQ Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold tracking-tight">
              ColleaiQ
            </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solution" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.solution')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.blog')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/story" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.mission')}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Open Positions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:kontakt@colleaiq.dk" className="hover:text-primary transition-colors">
                  {t('footer.email')}
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Linkedin className="h-4 w-4" />
                <a href="https://www.linkedin.com/company/colleaiq/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
