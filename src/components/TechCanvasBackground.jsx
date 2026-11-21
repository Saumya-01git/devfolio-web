import React, { useEffect, useRef } from 'react';

/**
 * TechCanvasBackground
 * Interactive High-Tech Engineering & Cybersecurity Particle Matrix
 * Palette:
 *  - Mauve: #C2AFF0
 *  - Soft Periwinkle: #9191E9
 *  - Steel Blue: #457EAC
 *  - Baltic Blue: #2D5D7B
 *  - Dim Grey: #686868
 */
export default function TechCanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates (default off-screen)
    const mouse = { x: -1000, y: -1000, active: false };

    // Ripple click waves
    const ripples = [];

    // Engineering code snippets that gently drift in the background
    const codeTokensList = [
      '{ RBAC: true }',
      'const auth = JWT.verify()',
      '0x7FFD_E489',
      'POST /api/v1/auth/tokens',
      'SELECT * FROM "SecurityAudit"',
      'async (req, res) => {',
      'git commit -m "verified"',
      'AES-256-GCM',
      'prisma.$queryRaw(stmt)',
      'HTTP/2 200 OK',
      'λ => next()',
      'WebSocket: connected',
      'O(log n) binary search',
      'Container: healthy',
      'sha256(salt + password)',
      'TLS 1.3 Handshake',
      'Cache-Control: private',
      'docker run -d -p 5000:5000',
      'enum Role { ADMIN, USER }',
      'redis.set("session", token)'
    ];

    const isMobile = window.innerWidth < 768;
    const NODE_COUNT = isMobile ? 32 : 65;
    const CONNECT_DIST = isMobile ? 95 : 135;
    const MOUSE_CONNECT_DIST = isMobile ? 120 : 180;
    const TOKEN_COUNT = isMobile ? 8 : 16;

    const paletteColors = [
      { r: 194, g: 175, b: 240, hex: '#C2AFF0' }, // Mauve
      { r: 145, g: 145, b: 233, hex: '#9191E9' }, // Soft Periwinkle
      { r: 69, g: 126, b: 172, hex: '#457EAC' },   // Steel Blue
      { r: 45, g: 93, b: 123, hex: '#2D5D7B' }    // Baltic Blue
    ];

    // Initialize Network Nodes
    const nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const colorObj = paletteColors[Math.floor(Math.random() * paletteColors.length)];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        radius: Math.random() * 2.2 + 1.2,
        color: colorObj,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.025 + Math.random() * 0.02
      });
    }

    // Initialize Floating Code Tokens
    const tokens = [];
    for (let i = 0; i < TOKEN_COUNT; i++) {
      const colorObj = paletteColors[i % paletteColors.length];
      tokens.push({
        text: codeTokensList[i % codeTokensList.length],
        x: Math.random() * width,
        y: Math.random() * height,
        vy: -0.22 - Math.random() * 0.28, // gentle upward drift
        wavePhase: Math.random() * Math.PI * 2,
        color: colorObj,
        fontSize: Math.floor(Math.random() * 2) + 11, // 11-12px
        opacity: 0.16 + Math.random() * 0.16
      });
    }

    // Window resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Mouse movement handler
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    // Click ripple handler
    const handleClick = (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 180,
        opacity: 0.75,
        color: paletteColors[Math.floor(Math.random() * 2)] // Mauve or Periwinkle
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    let time = 0;

    // Render loop
    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw & Update Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 3.5;
        r.opacity *= 0.96;

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r.color.r}, ${r.color.g}, ${r.color.b}, ${r.opacity})`;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Expanding outer wave
        ctx.beginPath();
        ctx.arc(r.x, r.y, Math.max(0, r.radius - 20), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r.color.r}, ${r.color.g}, ${r.color.b}, ${r.opacity * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        if (r.opacity < 0.02 || r.radius > r.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      // 2. Draw & Update Floating Code Tokens
      ctx.textBaseline = 'middle';
      for (let i = 0; i < tokens.length; i++) {
        const tok = tokens[i];
        tok.y += tok.vy;
        tok.wavePhase += 0.012;
        const currentX = tok.x + Math.sin(tok.wavePhase) * 20;

        // Wrap around top/bottom
        if (tok.y < -30) {
          tok.y = height + 20;
          tok.x = Math.random() * width;
        }

        ctx.font = `${tok.fontSize}px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
        ctx.fillStyle = `rgba(${tok.color.r}, ${tok.color.g}, ${tok.color.b}, ${tok.opacity})`;
        ctx.fillText(tok.text, currentX, tok.y);
      }

      // 3. Update & Draw Network Nodes & Laser Connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off canvas edges
        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;

        // Mouse gentle magnetic pull
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_CONNECT_DIST) {
            // Draw energetic laser beam to cursor
            const mouseAlpha = (1 - dist / MOUSE_CONNECT_DIST) * 0.45;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${mouseAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Very subtle gravitational attraction
            const force = (1 - dist / MOUSE_CONNECT_DIST) * 0.25;
            node.x += (dx / dist) * force;
            node.y += (dy / dist) * force;
          }
        }

        // Draw connections between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.28;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            // Blend line color
            ctx.strokeStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Pulsing glowing node dot
        const pulse = Math.sin(time * 3 + node.pulseOffset) * 0.5 + 0.5;
        const currentRadius = node.radius + pulse * 1.2;
        const glowAlpha = 0.45 + pulse * 0.4;

        // Outer ambient glow ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${glowAlpha * 0.18})`;
        ctx.fill();

        // Inner solid core
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${glowAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Dynamic Moving Ambient Fluid Aurora Meshes */}
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#457EAC]/20 via-[#2D5D7B]/25 to-transparent blur-[140px] animate-aurora-drift-1"></div>
      <div className="absolute top-[35%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-bl from-[#C2AFF0]/18 via-[#9191E9]/15 to-transparent blur-[150px] animate-aurora-drift-2"></div>
      <div className="absolute -bottom-[15%] left-[25%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-tr from-[#2D5D7B]/25 via-[#457EAC]/18 to-[#9191E9]/12 blur-[160px] animate-aurora-drift-3"></div>

      {/* 2. Cyber Perspective Grid with Animated Scanline */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-40"></div>
      <div className="absolute inset-0 cyber-scanline-beam"></div>

      {/* 3. High-Performance Interactive Canvas (Particles, Constellations & Floating Code Tokens) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

