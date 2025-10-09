import { Link } from "react-router-dom";

export const PreviewBanner = () => {
  return (
    <div 
      className="fixed top-0 left-0 right-0 border-b border-border m-0"
      style={{ 
        zIndex: 1000,
        backgroundColor: 'hsl(var(--preview-banner))',
        height: '52px'
      }}
      role="status"
      aria-live="polite"
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        <p className="text-sm md:text-base text-preview-banner-foreground dark:text-preview-banner-foreground-dark text-center w-full">
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
