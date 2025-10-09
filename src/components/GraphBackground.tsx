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


    };
    const resizeCanvas = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    };

    
    // TL-weighted distribution: 50-55% in upper-left third, rest spread
    const totalNodes = 42;

    let nodes: Node[] = [];
    
    const initNodes = () => {
      nodes = [];
      
      // Generate nodes with TL weighting: 50-55% in upper-left third
      for (let i = 0; i < totalNodes; i++) {
        let x, y;
        
        // 52% in upper-left third (upper 60% width, upper 50% height)
        if (i < totalNodes * 0.52) {
          x = Math.random() * canvas.width * 0.6;
          y = Math.random() * canvas.height * 0.5;
        } else {
          // Rest spread across remaining area
          x = Math.random() * canvas.width;
          y = Math.random() * canvas.height;
        }
        
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          connections: [],
          cluster: Math.floor(i / (totalNodes / 3))
        });
      }

      // Create connections within clusters and a few bridges
      nodes.forEach((node, i) => {
      // Connect to 1-2 nodes in same cluster (edgesPerNode ≈ 1.1-1.4)
        const sameCluster = nodes.filter((n, idx) => idx !== i && n.cluster === node.cluster);
        const connectCount = Math.random() < 0.7 ? Math.min(2, sameCluster.length) : Math.min(1, sameCluster.length);
        
        for (let j = 0; j < connectCount; j++) {
          const target = sameCluster[Math.floor(Math.random() * sameCluster.length)];
          const targetIndex = nodes.indexOf(target);
          if (targetIndex !== -1 && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
        
        // Occasional bridge to other cluster (20% chance)
        if (Math.random() < 0.2) {
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
      
      time += 0.016; // ~60fps

      const isDark = document.documentElement.classList.contains("dark");
      
      // Livelier opacity values
      const nodeOpacity = isDark ? 0.33 : 0.31;
      const edgeOpacity = isDark ? 0.26 : 0.22;
      
      const nodeColor = isDark 
        ? `rgba(212, 191, 165, ${nodeOpacity})` 
        : `rgba(100, 70, 45, ${nodeOpacity})`;
      
      const edgeColor = isDark
        ? `rgba(212, 191, 165, ${edgeOpacity})`
        : `rgba(100, 70, 45, ${edgeOpacity})`;

      // Draw connections first
      nodes.forEach((node) => {
        // Update position with smooth, faster drift (±8-10px over 4-6s)
        const driftX = Math.sin(time * 0.15 + node.baseX) * 9;
        const driftY = Math.cos(time * 0.16 + node.baseY) * 9;
        
        node.x = node.baseX + driftX;
        node.y = node.baseY + driftY;

        // Gentle re-layout every 16-22s
        if (time - lastReorganize > 19) {
          const shift = Math.random() * 3 - 1.5;
          node.baseX += shift;
          node.baseY += shift;
          lastReorganize = time;
        }

        // Draw connections with slight curves
        node.connections.forEach((targetIndex) => {
          const target = nodes[targetIndex];
          
          // Density-based fade: strongest at TL, fades toward BR
          const tlDistance = Math.sqrt(
            Math.pow(node.x, 2) + Math.pow(node.y, 2)
          );
          const maxDistance = Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2));
          const fadeFactor = Math.max(0.2, 1 - (tlDistance / maxDistance) * 0.75);
          
          ctx.strokeStyle = edgeColor;
          ctx.globalAlpha = fadeFactor;
          ctx.lineWidth = 1.15;
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
        // Density-based fade matching edges
        const tlDistance = Math.sqrt(
          Math.pow(node.x, 2) + Math.pow(node.y, 2)
        );
        const maxDistance = Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2));
        const fadeFactor = Math.max(0.2, 1 - (tlDistance / maxDistance) * 0.75);
        
        ctx.fillStyle = nodeColor;
        ctx.globalAlpha = fadeFactor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
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
