import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MediaBlockProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageSide?: "left" | "right";
  imageWidthPercent?: number; // 35..60
  children: React.ReactNode;
}

const MediaBlock = ({
  title,
  imageSrc,
  imageAlt,
  imageSide = "right",
  imageWidthPercent = 40,
  children,
}: MediaBlockProps) => {
  const imageFirst = imageSide === "left";
  const imageCol = `md:basis-[${imageWidthPercent}%]`;
  const textCol = "md:flex-1";

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="container-wide space-y-8">
        <h2 className="text-center text-foreground">{title}</h2>
        <div className={cn("mx-auto w-full max-w-[1180px] grid gap-8 md:gap-10 md:grid-cols-5 items-center")}
        >
          {/* Image */}
          <div className={cn("md:col-span-2", imageFirst ? "order-1 md:order-none" : "order-2 md:order-none")}
               style={{ gridColumn: imageFirst ? "span 2 / span 2" : undefined }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              width={960}
              height={540}
              className="w-full h-auto rounded-xl border border-muted shadow-soft"
            />
          </div>

          {/* Text */}
          <div className={cn("md:col-span-3", imageFirst ? "order-2 md:order-none" : "order-1 md:order-none")}
               style={{ gridColumn: imageFirst ? "span 3 / span 3" : undefined }}
          >
            <div className="content-wrapper !max-w-[820px] md:!max-w-none text-left">
              <div className="text-lg text-muted-foreground space-y-4">
                {children}
              </div>
              <div className="pt-6">
                <Button asChild>
                  <a href="mailto:kontakt@colleaq.dk">Talk to us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaBlock;
