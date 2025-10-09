import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
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
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create 3 clusters anchored near top-left
    const clusters = [
      { centerX: 0.15, centerY: 0.15, size: 20 },
      { centerX: 0.25, centerY: 0.30, size: 15 },
      { centerX: 0.35, centerY: 0.20, size: 12 }
    ];

    const nodes: Node[] = [];
    
    // Generate nodes in clusters
    clusters.forEach((cluster, clusterIndex) => {
      const clusterNodes = cluster.size;
      for (let i = 0; i < clusterNodes; i++) {
        const angle = (i / clusterNodes) * Math.PI * 2;
        const radius = (Math.random() * 0.08 + 0.05) * canvas.width;
        const x = cluster.centerX * canvas.width + Math.cos(angle) * radius;
        const y = cluster.centerY * canvas.height + Math.sin(angle) * radius;
        
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          connections: [],
          cluster: clusterIndex
        });
      }
    });

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
      
      // Occasional bridge to other cluster (10% chance)
      if (Math.random() < 0.1) {
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

    let animationId: number;
    let time = 0;
    let lastReorganize = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016; // ~60fps

      const isDark = document.documentElement.classList.contains("dark");
      
      // Light mode: espresso/sepia nodes and edges
      // Dark mode: warm beige/sepia on graphite
      const nodeOpacity = isDark ? 0.35 : 0.35;
      const edgeOpacity = isDark ? 0.26 : 0.26;
      
      const nodeColor = isDark 
        ? `rgba(212, 191, 165, ${nodeOpacity})` 
        : `rgba(70, 45, 25, ${nodeOpacity})`;
      
      const edgeColor = isDark
        ? `rgba(212, 191, 165, ${edgeOpacity})`
        : `rgba(70, 45, 25, ${edgeOpacity})`;

      // Apply radial fade mask from top-left
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.25,
        canvas.height * 0.25,
        0,
        canvas.width * 0.25,
        canvas.height * 0.25,
        canvas.width * 0.9
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.save();
      ctx.globalCompositeOperation = 'destination-in';

      // Update and draw nodes
      nodes.forEach((node) => {
        if (!prefersReducedMotion) {
          // Very slow drift (6-10px over 6-10s)
          const driftX = Math.sin(time * 0.1 + node.baseX) * 8;
          const driftY = Math.cos(time * 0.12 + node.baseY) * 8;
          
          node.x = node.baseX + driftX;
          node.y = node.baseY + driftY;

          // Slight reorganization every 12-20s
          if (time - lastReorganize > 15) {
            node.vx = (Math.random() - 0.5) * 0.05;
            node.vy = (Math.random() - 0.5) * 0.05;
            node.baseX += node.vx;
            node.baseY += node.vy;
          }
        }

        // Draw connections with slight curves
        node.connections.forEach((targetIndex) => {
          const target = nodes[targetIndex];
          const distance = Math.sqrt(
            Math.pow(target.x - node.x, 2) + Math.pow(target.y - node.y, 2)
          );
          
          // Distance-based fade
          const distanceFromOrigin = Math.sqrt(
            Math.pow(node.x - canvas.width * 0.15, 2) + 
            Math.pow(node.y - canvas.height * 0.15, 2)
          );
          const fadeFactor = Math.max(0.1, 1 - distanceFromOrigin / (canvas.width * 0.6));
          
          ctx.strokeStyle = edgeColor;
          ctx.globalAlpha = fadeFactor;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          
          // Add subtle curve to some edges
          if (Math.abs(target.cluster - node.cluster) > 0 || Math.random() < 0.3) {
            const midX = (node.x + target.x) / 2;
            const midY = (node.y + target.y) / 2;
            const offsetX = (target.y - node.y) * 0.1;
            const offsetY = -(target.x - node.x) * 0.1;
            ctx.quadraticCurveTo(midX + offsetX, midY + offsetY, target.x, target.y);
          } else {
            ctx.lineTo(target.x, target.y);
          }
          
          ctx.stroke();
        });

        // Draw node
        const distanceFromOrigin = Math.sqrt(
          Math.pow(node.x - canvas.width * 0.15, 2) + 
          Math.pow(node.y - canvas.height * 0.15, 2)
        );
        const fadeFactor = Math.max(0.1, 1 - distanceFromOrigin / (canvas.width * 0.6));
        
        ctx.fillStyle = nodeColor;
        ctx.globalAlpha = fadeFactor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
      
      // Apply radial mask
      ctx.globalCompositeOperation = 'destination-in';
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (time - lastReorganize > 15) {
        lastReorganize = time;
      }

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
    requestIdleCallback ? requestIdleCallback(() => animate()) : setTimeout(animate, 100);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
