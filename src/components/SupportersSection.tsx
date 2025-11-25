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
  ];

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
          <div className="flex animate-scroll-horizontal gap-12 md:gap-16">
            {/* Duplicate logos for seamless infinite scroll */}
            {[...supporters, ...supporters].map((supporter, index) => (
              <div
                key={`${supporter.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={supporter.logo}
                  alt={supporter.alt}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportersSection;
