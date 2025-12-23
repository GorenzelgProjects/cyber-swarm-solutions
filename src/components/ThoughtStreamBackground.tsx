import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const NODE_COUNT = 12;
const CONNECTION_DISTANCE = 15;

export const ThoughtStreamBackground = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  // Initialize nodes
  useEffect(() => {
    const newNodes: Node[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      // Start nodes spread across the canvas
      const angle = (i / NODE_COUNT) * Math.PI * 2;
      const radius = 20 + Math.random() * 25;
      newNodes.push({
        id: i,
        x: 50 + Math.cos(angle) * radius,
        y: 50 + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.03,
        vy: (Math.random() - 0.5) * 0.03,
        size: 2.5 + Math.random() * 1.5,
      });
    }
    setNodes(newNodes);
  }, []);

  // Animation loop - organic, calm movement
  useEffect(() => {
    if (nodes.length === 0) return;

    const animate = () => {
      timeRef.current += 1;

      setNodes((prevNodes) => {
        return prevNodes.map((node, index) => {
          // Very gentle organic drift using sine waves
          const timeOffset = index * 0.7;
          const driftX = Math.sin(timeRef.current * 0.003 + timeOffset) * 0.008;
          const driftY = Math.cos(timeRef.current * 0.0025 + timeOffset * 1.3) * 0.006;

          // Add slight wandering
          let newVx = node.vx + driftX;
          let newVy = node.vy + driftY;

          // Damping for smooth, calm movement
          newVx *= 0.995;
          newVy *= 0.995;

          // Soft boundary steering
          const margin = 10;
          const center = 50;
          const pullStrength = 0.0003;
          
          if (node.x < margin) newVx += pullStrength * (margin - node.x);
          if (node.x > 100 - margin) newVx -= pullStrength * (node.x - (100 - margin));
          if (node.y < margin) newVy += pullStrength * (margin - node.y);
          if (node.y > 100 - margin) newVy -= pullStrength * (node.y - (100 - margin));

          // Gentle pull toward center to keep nodes visible
          newVx += (center - node.x) * 0.00005;
          newVy += (center - node.y) * 0.00005;

          // Clamp velocity for calm movement
          const maxSpeed = 0.08;
          const speed = Math.sqrt(newVx * newVx + newVy * newVy);
          if (speed > maxSpeed) {
            newVx = (newVx / speed) * maxSpeed;
            newVy = (newVy / speed) * maxSpeed;
          }

          let newX = node.x + newVx;
          let newY = node.y + newVy;

          // Keep in bounds
          newX = Math.max(5, Math.min(95, newX));
          newY = Math.max(5, Math.min(95, newY));

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
  }, [nodes.length]);

  // Find connections between nodes that are close
  const getConnections = () => {
    const connections: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];
    
    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach((other) => {
        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < CONNECTION_DISTANCE) {
          // Fade connection based on distance
          const opacity = Math.max(0, 1 - dist / CONNECTION_DISTANCE) * 0.25;
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
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Connections - thin, faint lines */}
        {connections.map((conn, i) => (
          <motion.line
            key={`conn-${i}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="hsl(143, 25%, 55%)"
            strokeWidth="0.15"
            style={{ opacity: conn.opacity }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}

        {/* Nodes - small circles, sage and white */}
        {nodes.map((node, index) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size * 0.15}
            fill={index % 3 === 0 ? "hsl(143, 25%, 55%)" : "hsl(60, 15%, 95%)"}
            style={{ opacity: index % 3 === 0 ? 0.7 : 0.5 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: index % 3 === 0 ? 0.7 : 0.5 }}
            transition={{ delay: node.id * 0.05, duration: 0.4 }}
          />
        ))}
      </svg>
    </div>
  );
};
