import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export const PreviewBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateBannerHeight = () => {
      if (bannerRef.current) {
        const height = bannerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--banner-height', `${height}px`);
      }
    };

    // Update on mount and when fonts load
    updateBannerHeight();
    document.fonts.ready.then(updateBannerHeight);

    // Update on resize
    window.addEventListener('resize', updateBannerHeight);
    
    return () => {
      window.removeEventListener('resize', updateBannerHeight);
    };
  }, []);

  return (
    <div 
      ref={bannerRef}
      className="sticky top-0 left-0 right-0 border-b border-border"
      style={{ 
        zIndex: 1000,
        backgroundColor: 'hsl(var(--preview-banner))',
        margin: 0,
        padding: '10px 0'
      }}
      role="status"
      aria-live="polite"
    >
      <div className="container mx-auto px-4 flex items-center">
        <p className="text-sm md:text-base text-preview-banner-foreground dark:text-preview-banner-foreground-dark text-center w-full">
          ColleaiQ is in active development. Email{" "}
          <a 
            href="mailto:kontakt@colleaiq.dk" 
            className="underline hover:no-underline font-semibold"
          >
            kontakt@colleaiq.dk
          </a>
        </p>
      </div>
    </div>
  );
};
