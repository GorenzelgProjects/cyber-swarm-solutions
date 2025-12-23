import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LogEntry {
  id: number;
  agent: string;
  action: string;
  timestamp: string;
}

interface NarrativeEntry {
  id: number;
  text: string;
  icon: string;
}

const technicalLogs: Omit<LogEntry, "id">[] = [
  { agent: "Recon_Agent", action: "Scanning external attack surface...", timestamp: "00:00:02" },
  { agent: "Recon_Agent", action: "Discovered exposed service on port 443", timestamp: "00:00:04" },
  { agent: "CTI_Agent", action: "Cross-referencing CVE database...", timestamp: "00:00:07" },
  { agent: "CTI_Agent", action: "Match found: CVE-2024-3094 (Critical)", timestamp: "00:00:09" },
  { agent: "Planner_Agent", action: "Generating attack path hypothesis...", timestamp: "00:00:12" },
  { agent: "RedTeam_Agent", action: "Attempting credential spray on /admin", timestamp: "00:00:15" },
  { agent: "RedTeam_Agent", action: "Access denied. Rotating technique...", timestamp: "00:00:18" },
  { agent: "RedTeam_Agent", action: "Testing session token weakness...", timestamp: "00:00:21" },
  { agent: "RedTeam_Agent", action: "Session hijack successful in sandbox", timestamp: "00:00:24" },
  { agent: "Auditor_Agent", action: "Logging evidence chain to trace...", timestamp: "00:00:26" },
  { agent: "Auditor_Agent", action: "Capturing system state snapshot", timestamp: "00:00:28" },
  { agent: "Reporter_Agent", action: "Compiling narrative summary...", timestamp: "00:00:31" },
];

const narrativeEntries: Omit<NarrativeEntry, "id">[] = [
  { text: "Reconnaissance began on external-facing services.", icon: "🔍" },
  { text: "An exposed HTTPS endpoint was identified.", icon: "🎯" },
  { text: "Threat intelligence flagged a critical vulnerability.", icon: "⚠️" },
  { text: "The planner mapped a plausible attack path.", icon: "🗺️" },
  { text: "Initial access attempts were blocked by security controls.", icon: "🛡️" },
  { text: "A session token weakness was discovered and exploited.", icon: "🔓" },
  { text: "Full evidence chain captured for review.", icon: "📋" },
];

const agentColors: Record<string, string> = {
  Recon_Agent: "text-cyan-400",
  CTI_Agent: "text-amber-400",
  Planner_Agent: "text-violet-400",
  RedTeam_Agent: "text-rose-400",
  Auditor_Agent: "text-emerald-400",
  Reporter_Agent: "text-blue-400",
};

const TypewriterText = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
        onComplete?.();
      }
    }, 35);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return (
    <span>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

export const SimulationView = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [narratives, setNarratives] = useState<NarrativeEntry[]>([]);
  const [currentNarrativeIndex, setCurrentNarrativeIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Add logs progressively
  useEffect(() => {
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < technicalLogs.length) {
        setLogs((prev) => [...prev, { ...technicalLogs[logIndex], id: logIndex }]);
        logIndex++;
      } else {
        // Reset after a pause
        setTimeout(() => {
          setLogs([]);
          logIndex = 0;
        }, 4000);
      }
    }, 1800);

    return () => clearInterval(logInterval);
  }, []);

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Add narratives progressively with typewriter
  useEffect(() => {
    if (currentNarrativeIndex < narrativeEntries.length && !isTyping) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setNarratives((prev) => [
          ...prev,
          { ...narrativeEntries[currentNarrativeIndex], id: currentNarrativeIndex },
        ]);
      }, currentNarrativeIndex === 0 ? 2000 : 3500);

      return () => clearTimeout(timer);
    }

    // Reset after completion
    if (currentNarrativeIndex >= narrativeEntries.length) {
      const resetTimer = setTimeout(() => {
        setNarratives([]);
        setCurrentNarrativeIndex(0);
        setIsTyping(false);
      }, 6000);

      return () => clearTimeout(resetTimer);
    }
  }, [currentNarrativeIndex, isTyping]);

  const handleNarrativeComplete = () => {
    setIsTyping(false);
    setCurrentNarrativeIndex((prev) => prev + 1);
  };

  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6 w-full max-w-5xl mx-auto">
      {/* Terminal View */}
      <div className="rounded-lg overflow-hidden border border-slate-700/50 bg-slate-950 shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border-b border-slate-700/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs text-slate-400 font-mono ml-2">agent_trace.log</span>
        </div>

        {/* Terminal Content */}
        <div
          ref={logContainerRef}
          className="h-64 md:h-80 overflow-y-auto p-4 font-mono text-xs md:text-sm space-y-1.5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
        >
          <AnimatePresence>
            {logs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="flex gap-2 leading-relaxed"
              >
                <span className="text-slate-500 shrink-0">[{log.timestamp}]</span>
                <span className={`${agentColors[log.agent] || "text-slate-300"} shrink-0`}>
                  {log.agent}:
                </span>
                <span className="text-slate-300">{log.action}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          {logs.length === 0 && (
            <div className="text-slate-500 animate-pulse">Initializing agent swarm...</div>
          )}
        </div>
      </div>

      {/* Narrative View */}
      <div className="rounded-lg overflow-hidden border border-border bg-card shadow-lg">
        {/* Narrative Header */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b border-border">
          <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
          <span className="text-sm font-medium text-foreground">Live Briefing</span>
        </div>

        {/* Narrative Content */}
        <div className="h-64 md:h-80 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {narratives.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3 items-start"
              >
                <div className="flex flex-col items-center">
                  <span className="text-lg">{entry.icon}</span>
                  {index < narratives.length - 1 && (
                    <div className="w-px h-6 bg-border mt-1" />
                  )}
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-0.5">
                  {index === narratives.length - 1 ? (
                    <TypewriterText text={entry.text} onComplete={handleNarrativeComplete} />
                  ) : (
                    entry.text
                  )}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
          {narratives.length === 0 && (
            <div className="text-muted-foreground/60 text-sm animate-pulse">
              Awaiting agent activity...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
