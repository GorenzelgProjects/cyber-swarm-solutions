import { useState, useEffect, useCallback } from 'react';
import { CookiePreferences, getCookiePreferences, getConsentStatus } from '@/components/CookieConsent';

const CONSENT_KEY = 'cookie-consent';
const PREFERENCES_KEY = 'cookie-preferences';

export const useCookieConsent = () => {
  const [hasMadeChoice, setHasMadeChoice] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(getCookiePreferences());

  useEffect(() => {
    // Get initial status
    const status = getConsentStatus();
    setHasMadeChoice(status === 'decided');
    setPreferences(getCookiePreferences());

    // Listen for consent changes
    const handleConsentUpdated = (event: Event) => {
      const customEvent = event as CustomEvent<CookiePreferences>;
      setPreferences(customEvent.detail);
      setHasMadeChoice(true);
    };

    window.addEventListener('cookies-consent-updated', handleConsentUpdated);

    return () => {
      window.removeEventListener('cookies-consent-updated', handleConsentUpdated);
    };
  }, []);

  // Check if a specific category is allowed
  const hasConsent = useCallback((category: keyof CookiePreferences): boolean => {
    return preferences[category];
  }, [preferences]);

  // Helper to run code only if a specific cookie category is accepted
  const withConsent = useCallback(<T,>(
    category: keyof CookiePreferences,
    callback: () => T
  ): T | undefined => {
    if (preferences[category]) {
      return callback();
    }
    return undefined;
  }, [preferences]);

  // Reset consent (useful for settings page)
  const resetConsent = useCallback(() => {
    localStorage.removeItem(CONSENT_KEY);
    localStorage.removeItem(PREFERENCES_KEY);
    setHasMadeChoice(false);
    setPreferences({
      necessary: true,
      statistics: false,
      marketing: false,
      personalization: false,
    });
    window.location.reload();
  }, []);

  return {
    preferences,
    hasMadeChoice,
    hasConsent,
    withConsent,
    resetConsent,
  };
};

export default useCookieConsent;
