import { useEffect, useRef } from "react";

/**
 * FireField — high-performance ember + flame particle system.
 * Renders rising embers with additive blending for an intense fire glow.
 */
export const FireField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const resize = () => {
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();
    window.addEventListener("resize", resize);

    type Ember = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      life: number;
      maxLife: number;
      hue: number;
    };

    const embers: Ember[] = [];
    const maxEmbers = 140;

    const spawn = (): Ember => {
      const maxLife = 60 + Math.random() * 90;
      return {
        x: Math.random() * w,
        y: h + Math.random() * 30 * dpr,
        vx: (Math.random() - 0.5) * 0.8 * dpr,
        vy: -(1.2 + Math.random() * 2.4) * dpr,
        r: (0.5 + Math.random() * 1.2) * dpr,
        life: 0,
        maxLife,
        hue: 10 + Math.random() * 35,
      };
    };

    for (let i = 0; i < maxEmbers; i++) {
      const e = spawn();
      e.life = Math.random() * e.maxLife;
      e.y = Math.random() * h;
      embers.push(e);
    }

    let raf = 0;
    let lastT = performance.now();

    const draw = (t: number) => {
      const dt = Math.min((t - lastT) / 16.67, 2);
      lastT = t;

      // Stronger fade so trails clear quickly
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.life += dt;
        e.x += e.vx * dt + Math.sin((e.life + i) * 0.05) * 0.3 * dpr;
        e.y += e.vy * dt;
        e.vy -= 0.005 * dpr * dt; // slight upward acceleration

        if (e.life >= e.maxLife || e.y < -20) {
          embers[i] = spawn();
          continue;
        }

        const lifeRatio = e.life / e.maxLife;
        const alpha = Math.sin(lifeRatio * Math.PI) * 0.9;
        const radius = e.r * (1 + lifeRatio * 0.6);

        // Outer glow
        const grad = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, radius * 4);
        grad.addColorStop(0, `hsla(${e.hue}, 100%, 65%, ${alpha})`);
        grad.addColorStop(0.4, `hsla(${e.hue - 5}, 100%, 50%, ${alpha * 0.3})`);
        grad.addColorStop(1, `hsla(${e.hue - 10}, 100%, 40%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(e.x, e.y, radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Hot core
        ctx.fillStyle = `hsla(${e.hue + 10}, 100%, 80%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
};
