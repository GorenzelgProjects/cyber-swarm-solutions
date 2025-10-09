import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export const PreviewBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if banner was dismissed in this session
    const dismissed = sessionStorage.getItem('preview-banner-dismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('preview-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 bg-preview-banner dark:bg-preview-banner-dark border-b border-border"
      role="status"
      aria-live="polite"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <p className="text-sm md:text-base text-preview-banner-foreground dark:text-preview-banner-foreground-dark flex-1">
          This is a preview website for ColleaiQ. The product is under active development and does not yet match all specifications shown. If you're interested,{" "}
          <Link 
            to="/contact" 
            className="underline hover:no-underline font-semibold"
          >
            contact us
          </Link>
          {" "}— we'd love to talk.
        </p>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Dismiss preview notice"
        >
          <X className="h-5 w-5 text-preview-banner-foreground dark:text-preview-banner-foreground-dark" />
        </button>
      </div>
    </div>
  );
};
