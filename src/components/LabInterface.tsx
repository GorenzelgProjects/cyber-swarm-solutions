import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AgentStatus {
  id: number;
  name: string;
  status: string;
  progress: number;
  phase: number;
}

const tasks = [
  "Analyze Document Cluster",
  "Simulate Vulnerability Path",
  "Cross-Reference Policy Rules",
  "Map Attack Surface",
];

const agentPhases = [
  ["Initializing...", "Scanning corpus...", "Extracting entities...", "Complete"],
  ["Awaiting input...", "Synthesizing patterns...", "Building model...", "Complete"],
  ["Standby", "Validating outputs...", "Verifying consistency...", "Complete"],
];

export const LabInterface = () => {
  const [currentTask, setCurrentTask] = useState(0);
  const [agents, setAgents] = useState<AgentStatus[]>([
    { id: 1, name: "Reader", status: "Initializing...", progress: 0, phase: 0 },
    { id: 2, name: "Synthesizer", status: "Awaiting input...", progress: 0, phase: 0 },
    { id: 3, name: "Verifier", status: "Standby", progress: 0, phase: 0 },
  ]);
  const [isRunning, setIsRunning] = useState(true);

  // Cycle through tasks
  useEffect(() => {
    const taskInterval = setInterval(() => {
      setCurrentTask((prev) => (prev + 1) % tasks.length);
      // Reset agents when task changes
      setAgents([
        { id: 1, name: "Reader", status: "Initializing...", progress: 0, phase: 0 },
        { id: 2, name: "Synthesizer", status: "Awaiting input...", progress: 0, phase: 0 },
        { id: 3, name: "Verifier", status: "Standby", progress: 0, phase: 0 },
      ]);
    }, 12000);

    return () => clearInterval(taskInterval);
  }, []);

  // Animate agent progress
  useEffect(() => {
    if (!isRunning) return;

    const progressInterval = setInterval(() => {
      setAgents((prev) => {
        return prev.map((agent, index) => {
          // Stagger agent activation
          const delay = index * 25;
          let newProgress = agent.progress;
          let newPhase = agent.phase;

          if (agent.progress < 100) {
            // Progress speed varies by agent
            const speed = 1.2 + Math.random() * 0.8;
            newProgress = Math.min(100, agent.progress + speed);
            
            // Update phase based on progress
            if (newProgress > 75) newPhase = 3;
            else if (newProgress > 45) newPhase = 2;
            else if (newProgress > 15 - delay / 10) newPhase = 1;
          }

          return {
            ...agent,
            progress: newProgress,
            phase: newPhase,
            status: agentPhases[index][newPhase],
          };
        });
      });
    }, 120);

    return () => clearInterval(progressInterval);
  }, [isRunning]);

  const getStatusColor = (phase: number) => {
    switch (phase) {
      case 0: return "text-slate-400";
      case 1: return "text-amber-500 dark:text-amber-400";
      case 2: return "text-sage";
      case 3: return "text-emerald-500 dark:text-emerald-400";
      default: return "text-slate-400";
    }
  };

  const getProgressColor = (phase: number) => {
    switch (phase) {
      case 0: return "bg-slate-300 dark:bg-slate-600";
      case 1: return "bg-amber-400 dark:bg-amber-500";
      case 2: return "bg-sage";
      case 3: return "bg-emerald-400 dark:bg-emerald-500";
      default: return "bg-slate-300";
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Lab Session Active
            </span>
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            v0.4.2
          </span>
        </div>

        {/* Task Display */}
        <div className="px-5 py-4 border-b border-border">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
              Current Task
            </span>
          </div>
          <AnimatePresence mode="wait">
            <motion.h4
              key={currentTask}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-lg font-medium text-foreground"
            >
              {tasks[currentTask]}
            </motion.h4>
          </AnimatePresence>
        </div>

        {/* Agent Status Grid */}
        <div className="p-5 space-y-4">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-3">
            Agent Status
          </div>

          {agents.map((agent, index) => (
            <div key={agent.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded border border-border bg-muted/50 flex items-center justify-center">
                    <span className="text-xs font-mono text-muted-foreground">
                      {agent.id}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">
                      {agent.name}
                    </span>
                  </div>
                </div>
                <motion.span
                  key={agent.status}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-xs font-mono ${getStatusColor(agent.phase)}`}
                >
                  {agent.status}
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${getProgressColor(agent.phase)}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${agent.progress}%` }}
                  transition={{ duration: 0.15, ease: "linear" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-border bg-muted/20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs text-muted-foreground">3 agents</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-sage" />
              <span className="text-xs text-muted-foreground">Sandbox</span>
            </div>
          </div>
          <span className="text-xs font-mono text-muted-foreground/60">
            trace_id: {Math.random().toString(36).slice(2, 10)}
          </span>
        </div>
      </div>
    </div>
  );
};
