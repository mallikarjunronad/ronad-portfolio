import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Code2, GitBranch, Star, Award, Zap } from "lucide-react";

const stats = [
  { icon: Code2, label: "DSA Problems Solved", value: 320, suffix: "+", color: "text-primary" },
  { icon: GitBranch, label: "Projects Built", value: 5, suffix: "+", color: "text-secondary" },
  { icon: Star, label: "GitHub Stars", value: 48, suffix: "", color: "text-accent" },
  { icon: Trophy, label: "Hackathons Joined", value: 4, suffix: "", color: "text-neon" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
};

const profiles = [
  {
    name: "LeetCode",
    handle: "@mallikarjun",
    desc: "Solving DSA daily, climbing the ranks one problem at a time.",
    icon: Code2,
    accent: "from-primary to-secondary",
  },
  {
    name: "GitHub",
    handle: "@mallikarjun-ronad",
    desc: "Open source contributions, project repos and side experiments.",
    icon: GitBranch,
    accent: "from-secondary to-accent",
  },
  {
    name: "CodeChef",
    handle: "@mronad",
    desc: "Competitive programming and contest participation.",
    icon: Award,
    accent: "from-accent to-neon",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      <div className="absolute -bottom-20 left-1/4 w-96 h-96 rounded-full bg-neon/15 blur-[120px]" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-sm text-accent uppercase tracking-widest">/ 04 — Achievements</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-4">
            Numbers that <span className="text-gradient">tell a story</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Consistency over intensity. Showing up every day to build, solve and learn.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform group"
            >
              <s.icon className={`w-7 h-7 mb-4 ${s.color} group-hover:scale-110 transition-transform`} />
              <div className="font-display text-4xl font-bold text-gradient">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Coding profiles */}
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.accent} flex items-center justify-center mb-4 glow-primary group-hover:scale-110 transition-transform`}>
                <p.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className="text-sm font-mono text-accent mt-1">{p.handle}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                Visit profile <Zap className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
