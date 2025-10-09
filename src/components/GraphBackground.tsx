import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  connections: number[];
  cluster: number;
}

export const GraphBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      initNodes();
    };
    
    // Uniform distribution across entire hero
    const totalNodes = 50;

    let nodes: Node[] = [];
    
    const initNodes = () => {
      nodes = [];
      // Generate nodes uniformly distributed
      for (let i = 0; i < totalNodes; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          connections: [],
          cluster: Math.floor(i / (totalNodes / 3)) // 3 loose groups for connection logic
        });
      }

      // Create connections within clusters and a few bridges
      nodes.forEach((node, i) => {
        // Connect to 2-4 nodes in same cluster
        const sameCluster = nodes.filter((n, idx) => idx !== i && n.cluster === node.cluster);
        const connectCount = Math.min(Math.floor(Math.random() * 3) + 2, sameCluster.length);
        
        for (let j = 0; j < connectCount; j++) {
          const target = sameCluster[Math.floor(Math.random() * sameCluster.length)];
          const targetIndex = nodes.indexOf(target);
          if (targetIndex !== -1 && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
        
        // Occasional bridge to other cluster (15% chance)
        if (Math.random() < 0.15) {
          const otherCluster = nodes.filter((n, idx) => idx !== i && n.cluster !== node.cluster);
          if (otherCluster.length > 0) {
            const bridge = otherCluster[Math.floor(Math.random() * otherCluster.length)];
            const bridgeIndex = nodes.indexOf(bridge);
            if (bridgeIndex !== -1 && !node.connections.includes(bridgeIndex)) {
              node.connections.push(bridgeIndex);
            }
          }
        }
      });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationId: number;
    let time = 0;
    let lastReorganize = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (!prefersReducedMotion) {
        time += 0.016; // ~60fps
      }

      const isDark = document.documentElement.classList.contains("dark");
      
      // Light mode: espresso/sepia at specified opacities
      // Dark mode: warm beige/sepia on graphite
      const nodeOpacity = 0.4;
      const edgeOpacity = 0.3;
      
      const nodeColor = isDark 
        ? `rgba(212, 191, 165, ${nodeOpacity})` 
        : `rgba(100, 70, 45, ${nodeOpacity})`;
      
      const edgeColor = isDark
        ? `rgba(212, 191, 165, ${edgeOpacity})`
        : `rgba(100, 70, 45, ${edgeOpacity})`;

      // Draw connections first
      nodes.forEach((node) => {
        // Update position with very slow drift (~8px over ~8s)
        if (!prefersReducedMotion) {
          const driftX = Math.sin(time * 0.08 + node.baseX) * 8;
          const driftY = Math.cos(time * 0.09 + node.baseY) * 8;
          
          node.x = node.baseX + driftX;
          node.y = node.baseY + driftY;

          // Gentle re-layout every 15-20s
          if (time - lastReorganize > 17) {
            const shift = Math.random() * 4 - 2;
            node.baseX += shift;
            node.baseY += shift;
            lastReorganize = time;
          }
        } else {
          node.x = node.baseX;
          node.y = node.baseY;
        }

        // Draw connections with slight curves
        node.connections.forEach((targetIndex) => {
          const target = nodes[targetIndex];
          
          ctx.strokeStyle = edgeColor;
          ctx.globalAlpha = 1;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          
          // Add subtle curve to bridge edges
          if (Math.abs(target.cluster - node.cluster) > 0) {
            const midX = (node.x + target.x) / 2;
            const midY = (node.y + target.y) / 2;
            const offsetX = (target.y - node.y) * 0.12;
            const offsetY = -(target.x - node.x) * 0.12;
            ctx.quadraticCurveTo(midX + offsetX, midY + offsetY, target.x, target.y);
          } else {
            ctx.lineTo(target.x, target.y);
          }
          
          ctx.stroke();
        });
      });

      // Draw nodes on top
      nodes.forEach((node) => {
        ctx.fillStyle = nodeColor;
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Lazy init after first paint
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(() => animate());
    } else {
      setTimeout(animate, 100);
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
