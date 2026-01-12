import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';

export interface CookiePreferences {
  necessary: boolean; // Always true, cannot be disabled
  statistics: boolean;
  marketing: boolean;
  personalization: boolean;
}

const CONSENT_KEY = 'cookie-consent';
const PREFERENCES_KEY = 'cookie-preferences';

const defaultPreferences: CookiePreferences = {
  necessary: true,
  statistics: false,
  marketing: false,
  personalization: false,
};

export const getConsentStatus = (): 'pending' | 'decided' => {
  if (typeof window === 'undefined') return 'pending';
  const stored = localStorage.getItem(CONSENT_KEY);
  return stored === 'decided' ? 'decided' : 'pending';
};

export const getCookiePreferences = (): CookiePreferences => {
  if (typeof window === 'undefined') return defaultPreferences;
  const stored = localStorage.getItem(PREFERENCES_KEY);
  if (stored) {
    try {
      return { ...defaultPreferences, ...JSON.parse(stored), necessary: true };
    } catch {
      return defaultPreferences;
    }
  }
  return defaultPreferences;
};

export const hasAcceptedCookies = (category: keyof CookiePreferences): boolean => {
  const prefs = getCookiePreferences();
  return prefs[category];
};

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const status = getConsentStatus();
    if (status === 'pending') {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(CONSENT_KEY, 'decided');
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(prefs));
    setIsVisible(false);
    
    // Clear cookies for declined categories
    clearCookiesByCategory(prefs);
    
    // Dispatch event with preferences
    window.dispatchEvent(new CustomEvent('cookies-consent-updated', { detail: prefs }));
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      statistics: true,
      marketing: true,
      personalization: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const handleRejectNonEssential = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      statistics: false,
      marketing: false,
      personalization: false,
    };
    setPreferences(onlyNecessary);
    savePreferences(onlyNecessary);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const clearCookiesByCategory = (prefs: CookiePreferences) => {
    const cookies = document.cookie.split(';');
    
    // Define which cookies belong to which category
    const statisticsCookies = ['_ga', '_gid', '_gat', 'plausible', 'analytics'];
    const marketingCookies = ['_fbp', '_gcl', 'ads', 'doubleclick', 'adroll'];
    const personalizationCookies = ['personalization', 'preferences'];
    
    for (const cookie of cookies) {
      const [name] = cookie.split('=');
      const trimmedName = name.trim().toLowerCase();
      
      const shouldDelete = 
        (!prefs.statistics && statisticsCookies.some(c => trimmedName.includes(c))) ||
        (!prefs.marketing && marketingCookies.some(c => trimmedName.includes(c))) ||
        (!prefs.personalization && personalizationCookies.some(c => trimmedName.includes(c)));
      
      if (shouldDelete) {
        document.cookie = `${name.trim()}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        document.cookie = `${name.trim()}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
      }
    }
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot toggle necessary cookies
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  const cookieCategories = [
    {
      key: 'necessary' as const,
      title: 'Necessary cookies',
      description: 'Essential for the website to function properly. These cannot be disabled.',
      required: true,
    },
    {
      key: 'statistics' as const,
      title: 'Statistics cookies',
      description: 'Help us understand how visitors interact with our website by collecting anonymous information.',
      required: false,
    },
    {
      key: 'marketing' as const,
      title: 'Marketing cookies',
      description: 'Used to track visitors across websites to display relevant advertisements.',
      required: false,
    },
    {
      key: 'personalization' as const,
      title: 'Personalization cookies',
      description: 'Allow the website to remember choices you make and provide enhanced features.',
      required: false,
    },
  ];

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
      >
        <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="p-6 pb-4 border-b border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <h2 id="cookie-consent-title" className="text-xl font-semibold">
                Cookie preferences
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your experience. You can choose which cookies you allow. 
              Your consent is required before we can store non-essential cookies on your device.{' '}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy policy
              </Link>
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="flex-1 overflow-y-auto p-6 pt-4 space-y-3">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              {showDetails ? 'Hide details' : 'Show cookie details'}
            </button>

            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3"
              >
                {cookieCategories.map((category) => (
                  <div
                    key={category.key}
                    className="p-4 rounded-xl border border-border bg-muted/30"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{category.title}</span>
                          {category.required && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {category.description}
                        </p>
                      </div>
                      {category.required ? (
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                      ) : (
                        <Switch
                          checked={preferences[category.key]}
                          onCheckedChange={() => togglePreference(category.key)}
                          aria-label={`Toggle ${category.title}`}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Actions */}
          <div className="p-6 pt-4 border-t border-border space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleAcceptAll}
                className="flex-1"
                size="lg"
              >
                Accept all
              </Button>
              <Button 
                variant="outline" 
                onClick={handleRejectNonEssential}
                className="flex-1"
                size="lg"
              >
                Reject non-essential
              </Button>
            </div>
            {showDetails && (
              <Button 
                variant="secondary" 
                onClick={handleSavePreferences}
                className="w-full"
                size="lg"
              >
                Save my preferences
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;

