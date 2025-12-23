import { motion } from "framer-motion";

interface AgentNode {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface Connection {
  from: number;
  to: number;
  delay: number;
}

const agents: AgentNode[] = [
  { id: "cti", label: "CTI Researcher", x: 18, y: 28 },
  { id: "planner", label: "Planner", x: 48, y: 18 },
  { id: "auditor", label: "Auditor", x: 78, y: 32 },
  { id: "executor", label: "Executor", x: 32, y: 58 },
  { id: "reporter", label: "Reporter", x: 68, y: 62 },
  { id: "analyst", label: "Analyst", x: 52, y: 42 },
];

const connections: Connection[] = [
  { from: 0, to: 1, delay: 0 },
  { from: 1, to: 2, delay: 0.8 },
  { from: 1, to: 5, delay: 1.2 },
  { from: 5, to: 3, delay: 2 },
  { from: 5, to: 4, delay: 2.4 },
  { from: 3, to: 4, delay: 3 },
  { from: 2, to: 4, delay: 3.6 },
  { from: 0, to: 3, delay: 4.2 },
];

export const AgentNetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 80"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient for pulse effect */}
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--sage))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--sage))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--sage))" stopOpacity="0" />
          </linearGradient>
          
          {/* Glow filter for nodes */}
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Static connection lines */}
        {connections.map((conn, i) => {
          const from = agents[conn.from];
          const to = agents[conn.to];
          return (
            <line
              key={`line-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              className="stroke-slate-400/10 dark:stroke-slate-500/10"
              strokeWidth="0.15"
            />
          );
        })}

        {/* Animated pulse lines */}
        {connections.map((conn, i) => {
          const from = agents[conn.from];
          const to = agents[conn.to];
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          
          return (
            <motion.line
              key={`pulse-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#pulseGradient)"
              strokeWidth="0.25"
              strokeLinecap="round"
              strokeDasharray={`${length * 0.3} ${length * 0.7}`}
              initial={{ strokeDashoffset: length }}
              animate={{ strokeDashoffset: -length }}
              transition={{
                duration: 4,
                delay: conn.delay,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "linear",
              }}
            />
          );
        })}

        {/* Agent nodes */}
        {agents.map((agent, i) => (
          <g key={agent.id}>
            {/* Outer glow ring */}
            <motion.circle
              cx={agent.x}
              cy={agent.y}
              r="2.5"
              className="fill-transparent stroke-sage/5"
              strokeWidth="0.3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Main node */}
            <motion.circle
              cx={agent.x}
              cy={agent.y}
              r="1.2"
              className="fill-sage/20 dark:fill-sage/15"
              filter="url(#nodeGlow)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
            
            {/* Inner dot */}
            <motion.circle
              cx={agent.x}
              cy={agent.y}
              r="0.5"
              className="fill-sage/40 dark:fill-sage/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.3,
                delay: i * 0.1 + 0.2,
                ease: "easeOut",
              }}
            />
            
            {/* Label */}
            <motion.text
              x={agent.x}
              y={agent.y + 4}
              textAnchor="middle"
              className="fill-slate-500/40 dark:fill-slate-400/30 text-[1.8px] font-medium tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.15 + 0.5,
              }}
            >
              {agent.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
};
