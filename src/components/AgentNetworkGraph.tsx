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
    id: 'orchestrator',
    name: 'Orchestrator_Agent',
    role: 'STRATEGIC COORDINATOR',
    directive: 'Orchestrates the overall operation. Breaks down objectives into actionable tasks and assigns them to specialized agents.',
    capabilities: ['Task decomposition', 'Resource allocation', 'Timeline management'],
    autonomy: 90,
    riskTolerance: 20,
    color: '#22c55e',
    x: 50,
    y: 12,
  },
  {
    id: 'red',
    name: 'RedTeam_MAS',
    role: 'OFFENSIVE MULTI-AGENT SYSTEM',
    directive: 'A coordinated network of offensive agents. The Scout identifies targets, the Exploiter attempts access, and the Validator confirms impact. Together they simulate real adversary behavior.',
    capabilities: ['Vulnerability scanning', 'Exploit execution', 'Lateral movement', 'Attack chain coordination'],
    autonomy: 75,
    riskTolerance: 85,
    color: '#ef4444',
    x: 20,
    y: 45,
  },
  {
    id: 'blue',
    name: 'BlueTeam_MAS',
    role: 'DEFENSIVE MULTI-AGENT SYSTEM',
    directive: 'A coordinated network of defensive agents. The Monitor watches logs, the Analyst correlates events, and the Responder evaluates countermeasures. They work together to detect and assess threats.',
    capabilities: ['Log analysis', 'Threat detection', 'Defense assessment', 'Incident correlation'],
    autonomy: 70,
    riskTolerance: 15,
    color: '#3b82f6',
    x: 80,
    y: 45,
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
    y: 85,
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
    y: 85,
  },
];

// Sub-agents within Red Team MAS
const redSubAgents = [
  { id: 'red-scout', name: 'Scout', x: 10, y: 35 },
  { id: 'red-exploiter', name: 'Exploiter', x: 20, y: 55 },
  { id: 'red-validator', name: 'Validator', x: 30, y: 35 },
];

// Sub-agents within Blue Team MAS
const blueSubAgents = [
  { id: 'blue-monitor', name: 'Monitor', x: 70, y: 35 },
  { id: 'blue-analyst', name: 'Analyst', x: 80, y: 55 },
  { id: 'blue-responder', name: 'Responder', x: 90, y: 35 },
];

const connections = [
  { from: 'orchestrator', to: 'red' },
  { from: 'orchestrator', to: 'blue' },
  { from: 'red', to: 'blue' },
  { from: 'blue', to: 'auditor' },
  { from: 'red', to: 'reporter' },
  { from: 'blue', to: 'reporter' },
  { from: 'auditor', to: 'reporter' },
  { from: 'orchestrator', to: 'auditor' },
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
          {/* Main agent connections */}
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
          
          {/* Red Team internal connections */}
          {redSubAgents.map((agent, idx) => {
            const nextAgent = redSubAgents[(idx + 1) % redSubAgents.length];
            return (
              <line
                key={`red-internal-${idx}`}
                x1={`${agent.x}%`}
                y1={`${agent.y}%`}
                x2={`${nextAgent.x}%`}
                y2={`${nextAgent.y}%`}
                stroke="#ef4444"
                strokeOpacity={0.3}
                strokeWidth={1}
                strokeDasharray="3,3"
              />
            );
          })}
          
          {/* Blue Team internal connections */}
          {blueSubAgents.map((agent, idx) => {
            const nextAgent = blueSubAgents[(idx + 1) % blueSubAgents.length];
            return (
              <line
                key={`blue-internal-${idx}`}
                x1={`${agent.x}%`}
                y1={`${agent.y}%`}
                x2={`${nextAgent.x}%`}
                y2={`${nextAgent.y}%`}
                stroke="#3b82f6"
                strokeOpacity={0.3}
                strokeWidth={1}
                strokeDasharray="3,3"
              />
            );
          })}
        </svg>

        {/* Red Team Sub-Agents */}
        {redSubAgents.map((subAgent) => (
          <div
            key={subAgent.id}
            className="absolute"
            style={{
              left: `${subAgent.x}%`,
              top: `${subAgent.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
            }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full opacity-60"
              style={{ 
                backgroundColor: '#ef4444',
              }}
            />
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/60 whitespace-nowrap">
              {subAgent.name}
            </span>
          </div>
        ))}

        {/* Blue Team Sub-Agents */}
        {blueSubAgents.map((subAgent) => (
          <div
            key={subAgent.id}
            className="absolute"
            style={{
              left: `${subAgent.x}%`,
              top: `${subAgent.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
            }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full opacity-60"
              style={{ 
                backgroundColor: '#3b82f6',
              }}
            />
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/60 whitespace-nowrap">
              {subAgent.name}
            </span>
          </div>
        ))}

        {/* Main Agent Nodes */}
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="absolute cursor-pointer group"
            style={{
              left: `${agent.x}%`,
              top: `${agent.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: selectedAgent?.id === agent.id ? 10 : 1,
            }}
            onClick={() => setSelectedAgent(agent)}
          >
            <div
              className={`rounded-full transition-all duration-200 hover:scale-110 ${
                agent.id === 'red' || agent.id === 'blue' ? 'w-5 h-5 ring-2 ring-offset-1 ring-offset-background ring-current/40' : 'w-4 h-4'
              }`}
              style={{ 
                backgroundColor: agent.color,
                boxShadow: selectedAgent?.id === agent.id ? `0 0 20px ${agent.color}50, 0 0 0 4px ${agent.color}30` : 'none',
                color: agent.color,
              }}
            />
            <span className="absolute top-7 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap font-medium">
              {agent.id === 'orchestrator' && 'Orchestrator'}
              {agent.id === 'red' && 'Red Team MAS'}
              {agent.id === 'blue' && 'Blue Team MAS'}
              {agent.id !== 'red' && agent.id !== 'blue' && agent.id !== 'orchestrator' && (agent.id.charAt(0).toUpperCase() + agent.id.slice(1))}
            </span>
          </div>
        ))}

        {/* Footer */}
        <div className="absolute bottom-3 left-3 text-xs text-muted-foreground/60 font-mono">
          MAS = Multi-Agent System | Click nodes to explore
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
