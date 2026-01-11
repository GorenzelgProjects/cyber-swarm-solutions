import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

type ConsentStatus = 'pending' | 'accepted' | 'declined';

const CONSENT_KEY = 'cookie-consent';

export const getConsentStatus = (): ConsentStatus => {
  if (typeof window === 'undefined') return 'pending';
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === 'accepted' || stored === 'declined') return stored;
  return 'pending';
};

export const hasAcceptedCookies = (): boolean => {
  return getConsentStatus() === 'accepted';
};

export const CookieConsent = () => {
  const [status, setStatus] = useState<ConsentStatus>('pending');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check consent status on mount
    const currentStatus = getConsentStatus();
    setStatus(currentStatus);
    
    // Only show banner if no decision has been made
    if (currentStatus === 'pending') {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setStatus('accepted');
    setIsVisible(false);
    
    // Enable analytics/tracking here if needed
    window.dispatchEvent(new CustomEvent('cookies-accepted'));
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setStatus('declined');
    setIsVisible(false);
    
    // Clear any existing non-essential cookies
    clearNonEssentialCookies();
    
    window.dispatchEvent(new CustomEvent('cookies-declined'));
  };

  const clearNonEssentialCookies = () => {
    // Get all cookies and remove non-essential ones
    const cookies = document.cookie.split(';');
    
    for (const cookie of cookies) {
      const [name] = cookie.split('=');
      const trimmedName = name.trim();
      
      // Keep only essential cookies (add your essential cookie names here)
      const essentialCookies = ['cookie-consent'];
      
      if (!essentialCookies.includes(trimmedName)) {
        // Delete the cookie by setting expiry to past
        document.cookie = `${trimmedName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        document.cookie = `${trimmedName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
      }
    }
    
    // Also clear sessionStorage for non-essential data
    const essentialStorageKeys = ['cookie-consent', 'i18nextLng'];
    const keysToRemove: string[] = [];
    
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && !essentialStorageKeys.includes(key)) {
        keysToRemove.push(key);
      }
    }
    
    keysToRemove.forEach(key => sessionStorage.removeItem(key));
  };

  if (status !== 'pending' || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-[1000] p-4 md:p-6"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              {/* Icon */}
              <div className="hidden md:flex h-12 w-12 rounded-xl bg-primary/10 items-center justify-center flex-shrink-0">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">We value your privacy</h3>
                  <button 
                    onClick={handleDecline}
                    className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use cookies to enhance your browsing experience and analyze site traffic. 
                  By clicking "Accept", you consent to our use of cookies in accordance with GDPR. 
                  You can change your preferences at any time.{' '}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Learn more
                  </Link>
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button 
                    onClick={handleAccept}
                    className="sm:order-2"
                  >
                    Accept all cookies
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleDecline}
                    className="sm:order-1"
                  >
                    Reject non-essential
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;

