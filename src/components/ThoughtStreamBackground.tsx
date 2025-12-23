import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface Node {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  driftSpeed: number;
  driftAngle: number;
}

const NODE_COUNT = 28;
const CLUSTER_RADIUS = 120;
const CLUSTER_FORCE = 0.015;
const RETURN_FORCE = 0.008;

export const ThoughtStreamBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  // Initialize nodes
  useEffect(() => {
    const initNodes = () => {
      const newNodes: Node[] = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        newNodes.push({
          id: i,
          x,
          y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          size: 3 + Math.random() * 4,
          opacity: 0.15 + Math.random() * 0.25,
          driftSpeed: 0.0003 + Math.random() * 0.0004,
          driftAngle: Math.random() * Math.PI * 2,
        });
      }
      setNodes(newNodes);
    };

    initNodes();
  }, []);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: -1000, y: -1000 });
  }, []);

  // Animation loop
  useEffect(() => {
    if (nodes.length === 0) return;

    const animate = () => {
      timeRef.current += 1;

      setNodes((prevNodes) => {
        return prevNodes.map((node, index) => {
          let newVx = node.vx * 0.92;
          let newVy = node.vy * 0.92;

          // Gentle base drift
          const driftX = Math.sin(timeRef.current * node.driftSpeed + node.driftAngle) * 0.02;
          const driftY = Math.cos(timeRef.current * node.driftSpeed * 0.8 + node.driftAngle) * 0.015;

          // Calculate distance to mouse
          const dx = mousePos.x - node.x;
          const dy = mousePos.y - node.y;
          const distToMouse = Math.sqrt(dx * dx + dy * dy);

          if (distToMouse < CLUSTER_RADIUS && mousePos.x > 0) {
            // Find nearby nodes to cluster with
            const nearbyNodes = prevNodes.filter((other, otherIndex) => {
              if (otherIndex === index) return false;
              const odx = other.x - node.x;
              const ody = other.y - node.y;
              return Math.sqrt(odx * odx + ody * ody) < 25;
            });

            // Cluster into groups of 3-4
            if (nearbyNodes.length < 4) {
              // Attract to mouse area but maintain some distance
              const targetDist = 15 + (index % 4) * 8;
              const angle = (index / NODE_COUNT) * Math.PI * 2;
              const targetX = mousePos.x + Math.cos(angle) * targetDist;
              const targetY = mousePos.y + Math.sin(angle) * targetDist;
              
              newVx += (targetX - node.x) * CLUSTER_FORCE;
              newVy += (targetY - node.y) * CLUSTER_FORCE;
            }

            // Soft repulsion from very close nodes
            nearbyNodes.slice(0, 3).forEach((other) => {
              const odx = node.x - other.x;
              const ody = node.y - other.y;
              const oDist = Math.sqrt(odx * odx + ody * ody);
              if (oDist < 8 && oDist > 0) {
                newVx += (odx / oDist) * 0.05;
                newVy += (ody / oDist) * 0.05;
              }
            });
          } else {
            // Return to base position with drift
            newVx += (node.baseX + driftX * 100 - node.x) * RETURN_FORCE;
            newVy += (node.baseY + driftY * 100 - node.y) * RETURN_FORCE;
          }

          // Apply velocities with bounds
          let newX = node.x + newVx + driftX;
          let newY = node.y + newVy + driftY;

          // Soft bounds
          if (newX < 0) newX = 0;
          if (newX > 100) newX = 100;
          if (newY < 0) newY = 0;
          if (newY > 100) newY = 100;

          return {
            ...node,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [nodes.length, mousePos]);

  // Find connections between nearby nodes
  const getConnections = () => {
    const connections: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];
    
    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach((other) => {
        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 18) {
          const opacity = Math.max(0, 1 - dist / 18) * 0.15;
          connections.push({
            x1: node.x,
            y1: node.y,
            x2: other.x,
            y2: other.y,
            opacity,
          });
        }
      });
    });
    
    return connections;
  };

  const connections = getConnections();

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Connections */}
        {connections.map((conn, i) => (
          <motion.line
            key={`conn-${i}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            className="stroke-sage"
            strokeWidth="0.08"
            style={{ opacity: conn.opacity }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size * 0.12}
            className="fill-slate-400 dark:fill-slate-500"
            style={{ opacity: node.opacity }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: node.id * 0.02, duration: 0.3 }}
          />
        ))}

        {/* Accent nodes - sage colored */}
        {nodes.filter((_, i) => i % 5 === 0).map((node) => (
          <motion.circle
            key={`accent-${node.id}`}
            cx={node.x}
            cy={node.y}
            r={node.size * 0.08}
            className="fill-sage"
            style={{ opacity: node.opacity * 0.8 }}
          />
        ))}
      </svg>
    </div>
  );
};
