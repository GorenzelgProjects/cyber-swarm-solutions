const SupportersSection = () => {
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
            They Support Us
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We're backed by leading innovation hubs and startup programs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 pt-4">
          {supporters.map((supporter) => (
            <div
              key={supporter.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
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
    </section>
  );
};

export default SupportersSection;
