import { useTranslation } from "react-i18next";

const SupportersSection = () => {
  const { t } = useTranslation();
  
  const supporters = [
    {
      name: "DTU Skylab",
      alt: "DTU Skylab logo",
      logo: "/images/supporters/dtu-skylab.png",
    },
    {
      name: "Sagalabs",
      alt: "Sagalabs logo",
      logo: "/images/supporters/sagalabs.webp",
    },
    {
      name: "Den Danske Maritime Fond",
      alt: "Den Danske Maritime Fond logo",
      logo: "/images/supporters/maritime-fond.jpg",
    },
    {
      name: "Google for Startups",
      alt: "Google for Startups logo",
      logo: "/images/supporters/google-for-startups.png",
    },
    {
      name: "Mikrolegat",
      alt: "Mikrolegat logo",
      logo: "/images/supporters/mikrolegat.png",
    },
    {
      name: "Scaleway",
      alt: "Scaleway logo",
      logo: "/images/supporters/scaleway.png",
    },
  ];

  // Double the array for seamless infinite scroll
  const scrollItems = [...supporters, ...supporters];

  return (
    <section className="px-4 py-16 md:py-20 bg-muted/20">
      <div className="content-wrapper text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground">
            {t("index.supporters.headline")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
            {t("index.supporters.description")}
          </p>
        </div>

        <div className="relative overflow-hidden w-full pt-4">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/20 to-transparent z-10 pointer-events-none" />
          
          {/* Infinite scroll container */}
          <div 
            className="flex gap-12 md:gap-16"
            style={{
              animation: 'scroll-infinite 30s linear infinite',
              width: 'max-content',
            }}
          >
            {scrollItems.map((supporter, index) => (
              <div
                key={`${supporter.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={supporter.logo}
                  alt={supporter.alt}
                  className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default SupportersSection;
