import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AgentData {
  id: string;
  name: string;
  role: string;
  directive: string;
  capabilities: string[];
  autonomy: number;
  riskTolerance: number;
  color: string;
  x: number;
  y: number;
}

const agents: AgentData[] = [
  {
    id: 'planner',
    name: 'Planner_Agent',
    role: 'STRATEGIC COORDINATOR',
    directive: 'Orchestrates the overall operation. Breaks down objectives into actionable tasks and assigns them to specialized agents.',
    capabilities: ['Task decomposition', 'Resource allocation', 'Timeline management'],
    autonomy: 90,
    riskTolerance: 20,
    color: '#3b82f6',
    x: 50,
    y: 15,
  },
  {
    id: 'red',
    name: 'RedTeam_Agent',
    role: 'OFFENSIVE OPERATOR',
    directive: 'Executes attack simulations against target systems. Tests defenses by attempting exploitation within sandbox boundaries.',
    capabilities: ['Vulnerability scanning', 'Exploit execution', 'Lateral movement'],
    autonomy: 75,
    riskTolerance: 85,
    color: '#ef4444',
    x: 20,
    y: 50,
  },
  {
    id: 'blue',
    name: 'BlueTeam_Agent',
    role: 'DEFENSIVE MONITOR',
    directive: 'Watches system logs and alerts. Identifies the Red Team\'s actions and evaluates if current defenses were sufficient.',
    capabilities: ['Log analysis', 'Threat detection', 'Defense assessment'],
    autonomy: 70,
    riskTolerance: 15,
    color: '#22c55e',
    x: 80,
    y: 50,
  },
  {
    id: 'auditor',
    name: 'Auditor_Agent',
    role: 'COMPLIANCE VERIFIER',
    directive: 'Reviews all agent actions for policy compliance. Ensures operations stay within defined boundaries and ethical guidelines.',
    capabilities: ['Policy enforcement', 'Action validation', 'Risk assessment'],
    autonomy: 60,
    riskTolerance: 5,
    color: '#6b7280',
    x: 70,
    y: 80,
  },
  {
    id: 'reporter',
    name: 'Reporter_Agent',
    role: 'INTELLIGENCE SYNTHESIZER',
    directive: 'Compiles findings into actionable reports. Translates technical observations into business-relevant insights.',
    capabilities: ['Report generation', 'Finding prioritization', 'Executive briefing'],
    autonomy: 50,
    riskTolerance: 10,
    color: '#f59e0b',
    x: 30,
    y: 80,
  },
];

const connections = [
  { from: 'planner', to: 'red' },
  { from: 'planner', to: 'blue' },
  { from: 'red', to: 'blue' },
  { from: 'blue', to: 'auditor' },
  { from: 'red', to: 'reporter' },
  { from: 'blue', to: 'reporter' },
  { from: 'auditor', to: 'reporter' },
  { from: 'planner', to: 'auditor' },
];

export const AgentNetworkGraph = () => {
  const [selectedAgent, setSelectedAgent] = useState<AgentData | null>(agents[2]); // Default to Blue Team
  const containerRef = useRef<HTMLDivElement>(null);

  const getAgentPosition = (agent: AgentData) => ({
    x: agent.x,
    y: agent.y,
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
      {/* Graph Container */}
      <div 
        ref={containerRef}
        className="relative bg-background border border-border rounded-xl p-4 min-h-[400px]"
      >
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          {connections.map((conn, idx) => {
            const fromAgent = agents.find(a => a.id === conn.from);
            const toAgent = agents.find(a => a.id === conn.to);
            if (!fromAgent || !toAgent) return null;
            
            return (
              <line
                key={idx}
                x1={`${fromAgent.x}%`}
                y1={`${fromAgent.y}%`}
                x2={`${toAgent.x}%`}
                y2={`${toAgent.y}%`}
                stroke="currentColor"
                strokeOpacity={0.15}
                strokeWidth={1}
              />
            );
          })}
        </svg>

        {/* Agent Nodes */}
        {agents.map((agent) => (
          <motion.div
            key={agent.id}
            className="absolute cursor-pointer group"
            style={{
              left: `${agent.x}%`,
              top: `${agent.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: selectedAgent?.id === agent.id ? 10 : 1,
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedAgent(agent)}
          >
            <div
              className={`w-4 h-4 rounded-full transition-all duration-200`}
              style={{ 
                backgroundColor: agent.color,
                boxShadow: selectedAgent?.id === agent.id ? `0 0 20px ${agent.color}50, 0 0 0 4px ${agent.color}30` : 'none',
              }}
            />
            <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap font-medium">
              {agent.id.charAt(0).toUpperCase() + agent.id.slice(1).replace('-', ' ')}
              {agent.id === 'red' && ' Team'}
              {agent.id === 'blue' && ' Team'}
            </span>
          </motion.div>
        ))}

        {/* Footer */}
        <div className="absolute bottom-3 left-3 text-xs text-muted-foreground/60 font-mono">
          Visualization: Interactive | Mode: Click to explore
        </div>
      </div>

      {/* Agent Details Panel */}
      <AnimatePresence mode="wait">
        {selectedAgent && (
          <motion.div
            key={selectedAgent.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="bg-zinc-900 text-zinc-100 rounded-xl p-6 space-y-4"
          >
            <div>
              <span 
                className="inline-block px-2 py-1 text-xs font-mono rounded mb-2"
                style={{ backgroundColor: selectedAgent.color + '30', color: selectedAgent.color }}
              >
                {selectedAgent.role}
              </span>
              <h3 className="text-lg font-mono font-semibold">{selectedAgent.name}</h3>
            </div>

            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Primary Directive</p>
              <p className="text-sm text-zinc-300">{selectedAgent.directive}</p>
            </div>

            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-wider mb-2">Capability Profile</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">Autonomy</span>
                  <div className="w-24 h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full"
                      style={{ width: `${selectedAgent.autonomy}%`, backgroundColor: '#3b82f6' }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">Risk Tolerance</span>
                  <div className="w-24 h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full"
                      style={{ width: `${selectedAgent.riskTolerance}%`, backgroundColor: '#ef4444' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-700">
              <p className="text-xs text-zinc-500 font-mono">
                &gt; Agent ID: AGT-0{agents.findIndex(a => a.id === selectedAgent.id) + 1}-{selectedAgent.id.toUpperCase().slice(0, 3)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AgentNetworkGraph;
