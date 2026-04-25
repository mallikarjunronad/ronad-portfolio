/**
 * FlameBase — layered SVG flames flickering at the bottom of the hero.
 * Pure CSS animation, no JS cost.
 */
export const FlameBase = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] overflow-hidden">
      {/* Base heat haze gradient */}
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[hsl(15_100%_45%/0.45)] via-[hsl(20_100%_50%/0.18)] to-transparent" />

      {/* Flickering flame layers */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="flame-a" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="hsl(45 100% 65%)" stopOpacity="0.9" />
            <stop offset="40%" stopColor="hsl(20 100% 55%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(0 100% 45%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flame-b" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="hsl(35 100% 60%)" stopOpacity="0.8" />
            <stop offset="60%" stopColor="hsl(10 100% 50%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(0 100% 40%)" stopOpacity="0" />
          </linearGradient>
          <filter id="blur-soft">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        <g filter="url(#blur-soft)" className="animate-flame-flicker origin-bottom">
          <path
            d="M0,600 C100,400 180,320 260,380 C340,440 380,260 460,340 C540,420 600,200 680,300 C760,400 820,260 900,340 C980,420 1060,300 1200,380 L1200,600 Z"
            fill="url(#flame-a)"
          />
        </g>
        <g filter="url(#blur-soft)" className="animate-flame-flicker-2 origin-bottom" style={{ animationDelay: "0.4s" }}>
          <path
            d="M0,600 C80,460 200,300 300,400 C400,500 460,280 560,360 C660,440 740,240 840,340 C940,440 1040,320 1200,420 L1200,600 Z"
            fill="url(#flame-b)"
          />
        </g>
      </svg>
    </div>
  );
};
