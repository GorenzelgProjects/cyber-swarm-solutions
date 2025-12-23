import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ResearchArea {
  label: string;
  active?: boolean;
  tooltip?: string;
}

const researchAreas: ResearchArea[] = [
  { label: "Cybersecurity", active: true },
  { label: "Legal", tooltip: "Traceable document chains for contract analysis and compliance verification." },
  { label: "Biotech" },
];

export const ResearchTimeline = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      {/* Horizontal line */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border" />
        
        {/* Labels */}
        <div className="relative flex justify-between items-center">
          {researchAreas.map((area, index) => (
            <div key={area.label} className="flex flex-col items-center">
              {/* Dot marker */}
              <div className="relative mb-3">
                {area.active ? (
                  <div className="relative">
                    {/* Pulse animation */}
                    <span className="absolute inline-flex h-3 w-3 rounded-full bg-sage opacity-40 animate-ping" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-sage" />
                  </div>
                ) : (
                  <span className="inline-flex h-2 w-2 rounded-full bg-muted-foreground/30" />
                )}
              </div>
              
              {/* Label with optional tooltip */}
              {area.tooltip ? (
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="font-serif text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors cursor-default">
                        {area.label}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="bottom" 
                      className="max-w-[240px] text-center font-sans text-xs"
                    >
                      {area.tooltip}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <span 
                  className={`font-serif text-sm md:text-base transition-colors ${
                    area.active 
                      ? "text-foreground" 
                      : "text-muted-foreground/60"
                  }`}
                >
                  {area.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
