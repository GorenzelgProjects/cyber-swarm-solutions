const SupportersSection = () => {
  const supporters = [
    {
      name: "DTU Skylab",
      alt: "DTU Skylab logo",
      // Placeholder - replace with actual logo path when available
      logo: "/images/supporters/dtu-skylab.png",
    },
    {
      name: "Sagalabs",
      alt: "Sagalabs logo",
      logo: "/images/supporters/sagalabs.png",
    },
    {
      name: "Den Danske Maritime Fond",
      alt: "Den Danske Maritime Fond logo",
      logo: "/images/supporters/ddmf.png",
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
              <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center bg-card/50 rounded-lg border border-border/50 px-4">
                <span className="text-sm md:text-base font-medium text-muted-foreground text-center">
                  {supporter.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportersSection;
