import { Link } from "react-router-dom";

export const PreviewBanner = () => {
  return (
    <div 
      className="fixed top-0 left-0 right-0 border-b border-border"
      style={{ 
        zIndex: 1000,
        backgroundColor: 'hsl(var(--preview-banner))'
      }}
      role="status"
      aria-live="polite"
    >
      <div className="container mx-auto px-4 py-3">
        <p className="text-sm md:text-base text-preview-banner-foreground dark:text-preview-banner-foreground-dark text-center">
          Preview notice: ColleaiQ is under active development. Features and specifications are evolving. If this is relevant to you,{" "}
          <Link 
            to="/contact" 
            className="underline hover:no-underline font-semibold"
          >
            write to us
          </Link>
          {" "}and let's talk.
        </p>
      </div>
    </div>
  );
};
