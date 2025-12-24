import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const companyItems = [
    {
      name: t('nav.mission'),
      path: "/story",
      description: "Why we're building explainable multi-agent cybersecurity in Europe.",
    },
    {
      name: "Open Positions",
      path: "/careers",
      description: "Join us in building proactive, explainable cyber defence.",
    },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isDropdownActive = (items: typeof companyItems) =>
    items.some((item) => isActive(item.path));

  return (
    <nav
      className="sticky w-full bg-background border-b border-border"
      style={{
        top: "var(--banner-height, 0px)",
        zIndex: 900,
        backgroundColor: "hsl(var(--background))",
        margin: 0,
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center space-x-2.5">
            <img src={logo} alt="ColleaiQ Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold tracking-tight">
              ColleaiQ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/solution"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary hover:bg-accent ${
                isActive("/solution") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Solution
            </Link>

            <Link
              to="/pricing"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary hover:bg-accent ${
                isActive("/pricing") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Pricing & Services
            </Link>

            <Link
              to="/team"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary hover:bg-accent ${
                isActive("/team") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About us
            </Link>

            <Link
              to="/blog"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary hover:bg-accent ${
                isActive("/blog") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Blog
            </Link>

            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary hover:bg-accent flex items-center gap-1 ${
                  isDropdownActive(companyItems)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Company
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80 bg-background border-border">
                {companyItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      to={item.path}
                      className={`flex flex-col items-start gap-1 p-3 cursor-pointer ${
                        isActive(item.path) ? "bg-accent" : ""
                      }`}
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="ml-4 flex items-center space-x-3">
              <ThemeToggle />
              <Button asChild size="sm" className="rounded-2xl">
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2 animate-fade-in border-t border-border">
            <Link
              to="/solution"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/solution")
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-primary hover:bg-accent"
              }`}
            >
              Solution
            </Link>

            <Link
              to="/pricing"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/pricing")
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-primary hover:bg-accent"
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/team"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/team")
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-primary hover:bg-accent"
              }`}
            >
              About us
            </Link>

            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/blog")
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-primary hover:bg-accent"
              }`}
            >
              Blog
            </Link>

            {/* Company Collapsible */}
            <Collapsible open={companyOpen} onOpenChange={setCompanyOpen}>
              <CollapsibleTrigger
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isDropdownActive(companyItems)
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-primary hover:bg-accent"
                }`}
              >
                Company
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    companyOpen ? "rotate-180" : ""
                  }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 mt-1 ml-3">
                {companyItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(item.path)
                        ? "text-primary bg-accent"
                        : "text-muted-foreground hover:text-primary hover:bg-accent"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <div className="pt-2 mt-2 border-t border-border">
              <Button asChild size="sm" className="w-full rounded-2xl">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
