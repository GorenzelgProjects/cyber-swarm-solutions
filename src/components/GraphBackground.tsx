import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  pulse: number;
  pulseDirection: number;
}

export const GraphBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse position for interactive ripple effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      });
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Initialize nodes with larger size and pulses
    const nodeCount = 35;
    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5, // Slightly faster movement
      vy: (Math.random() - 0.5) * 0.5,
      connections: [],
      pulse: Math.random() * Math.PI * 2, // Random starting pulse phase
      pulseDirection: 1,
    }));

    // Create connections
    nodes.forEach((node, i) => {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = Math.floor(Math.random() * nodeCount);
        if (targetIndex !== i && !node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex);
        }
      }
    });

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get theme colors - more prominent
      const isDark = document.documentElement.classList.contains("dark");
      const nodeColor = isDark ? "rgba(212, 191, 165, 0.6)" : "rgba(139, 99, 68, 0.5)";
      const lineColor = isDark ? "rgba(212, 191, 165, 0.3)" : "rgba(139, 99, 68, 0.25)";
      const pulseColor = isDark ? "rgba(212, 191, 165, 0.4)" : "rgba(139, 99, 68, 0.3)";

      // Update and draw nodes
      nodes.forEach((node, index) => {
        if (!prefersReducedMotion) {
          // Update position with subtle drift
          node.x += node.vx;
          node.y += node.vy;

          // Bounce off edges
          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

          // Keep in bounds
          node.x = Math.max(0, Math.min(canvas.width, node.x));
          node.y = Math.max(0, Math.min(canvas.height, node.y));

          // Update pulse (~0.5 Hz as specified)
          node.pulse += 0.03 * node.pulseDirection;
          if (node.pulse > Math.PI * 2 || node.pulse < 0) {
            node.pulseDirection *= -1;
          }

          // Interactive ripple effect near mouse
          const dx = mousePos.x - node.x;
          const dy = mousePos.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const rippleForce = (150 - distance) / 150;
            node.x -= (dx / distance) * rippleForce * 2;
            node.y -= (dy / distance) * rippleForce * 2;
          }
        }

        // Draw connections with varying opacity
        node.connections.forEach((targetIndex) => {
          const target = nodes[targetIndex];
          const distance = Math.sqrt(
            Math.pow(target.x - node.x, 2) + Math.pow(target.y - node.y, 2)
          );
          const opacity = Math.max(0.1, 1 - distance / 300);
          
          ctx.strokeStyle = isDark 
            ? `rgba(212, 191, 165, ${opacity * 0.3})` 
            : `rgba(139, 99, 68, ${opacity * 0.25})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        });

        // Draw pulsing glow
        const pulseIntensity = (Math.sin(node.pulse) + 1) / 2;
        const glowRadius = 8 + pulseIntensity * 4;
        
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        );
        gradient.addColorStop(0, pulseColor);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw main node - larger and more visible
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 5 + pulseIntensity * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw node border
        ctx.strokeStyle = isDark ? 'rgba(212, 191, 165, 0.8)' : 'rgba(139, 99, 68, 0.7)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };

    // Pause animation when tab is inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationId);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: "multiply", pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
};
