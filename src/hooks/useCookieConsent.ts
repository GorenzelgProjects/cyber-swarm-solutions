import { useState, useEffect, useCallback } from 'react';

type ConsentStatus = 'pending' | 'accepted' | 'declined';

const CONSENT_KEY = 'cookie-consent';

export const useCookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');

  useEffect(() => {
    // Get initial status
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted' || stored === 'declined') {
      setConsentStatus(stored);
    }

    // Listen for consent changes
    const handleAccepted = () => setConsentStatus('accepted');
    const handleDeclined = () => setConsentStatus('declined');

    window.addEventListener('cookies-accepted', handleAccepted);
    window.addEventListener('cookies-declined', handleDeclined);

    return () => {
      window.removeEventListener('cookies-accepted', handleAccepted);
      window.removeEventListener('cookies-declined', handleDeclined);
    };
  }, []);

  const hasConsent = consentStatus === 'accepted';
  const hasMadeChoice = consentStatus !== 'pending';

  // Helper to run code only if cookies are accepted
  const withConsent = useCallback(<T,>(callback: () => T): T | undefined => {
    if (consentStatus === 'accepted') {
      return callback();
    }
    return undefined;
  }, [consentStatus]);

  // Reset consent (useful for settings page)
  const resetConsent = useCallback(() => {
    localStorage.removeItem(CONSENT_KEY);
    setConsentStatus('pending');
    window.location.reload();
  }, []);

  return {
    consentStatus,
    hasConsent,
    hasMadeChoice,
    withConsent,
    resetConsent,
  };
};

export default useCookieConsent;
