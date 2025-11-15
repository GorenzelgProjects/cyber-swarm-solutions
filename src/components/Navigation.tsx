import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { name: t('nav.mission'), path: "/story" },
    { name: t('nav.solution'), path: "/solution" },
    { name: t('nav.pricing'), path: "/pricing" },
    { name: t('nav.blog'), path: "/blog" },
    { name: t('nav.team'), path: "/team" },
    { name: t('nav.careers'), path: "/careers" },
    { name: t('nav.compliance'), path: "/compliance" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className="sticky w-full bg-background border-b border-border"
      style={{ 
        top: 'var(--banner-height, 0px)',
        zIndex: 900,
        backgroundColor: 'hsl(var(--background))',
        margin: 0,
        paddingTop: 0,
        paddingBottom: 0
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center space-x-2.5">
            <img src={logo} alt="colleaq Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold text-foreground">
              colleaq
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button asChild size="sm" className="rounded-2xl">
              <Link to="/contact">{t('nav.contact')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild size="sm" className="w-full rounded-2xl">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                {t('nav.contact')}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
