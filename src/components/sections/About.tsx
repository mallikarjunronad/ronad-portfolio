import { motion } from "framer-motion";
import { GraduationCap, Code2, Rocket, Heart } from "lucide-react";

const timeline = [
  {
    year: "2024 — Present",
    title: "B.E. Computer Science Engineering",
    subtitle: "Jain College of Engineering and Research",
    desc: "Currently in 4th semester, diving deep into Data Structures, OOP, and full-stack development.",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Started Programming Journey",
    subtitle: "C / C++ Foundations",
    desc: "Built strong fundamentals in problem solving and core CS concepts.",
    icon: Code2,
  },
  {
    year: "2024",
    title: "First Real Project Shipped",
    subtitle: "Full Stack Web App",
    desc: "Designed, built and deployed a production-grade application end-to-end.",
    icon: Rocket,
  },
  {
    year: "Today",
    title: "Building & Learning Daily",
    subtitle: "Open Source & DSA",
    desc: "5+ projects shipped, sharpening DSA, and exploring system design.",
    icon: Heart,
  },
];

const highlights = [
  { label: "Projects Built", value: "5+" },
  { label: "DSA Problems", value: "300+" },
  { label: "Languages", value: "5" },
  { label: "Coffee / Day", value: "∞" },
];

export const About = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-primary/15 blur-[120px]" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-sm text-accent uppercase tracking-widest">/ 01 — About Me</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-4">
            A curious mind, <span className="text-gradient">obsessed</span> with building.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a Computer Science student passionate about turning complex problems
            into clean, elegant, and high-performance software — from low-level systems
            to delightful user interfaces.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-3">
            <div className="relative pl-8 border-l border-border/60">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative mb-10 last:mb-0 group"
                >
                  <div className="absolute -left-[42px] top-1 w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary group-hover:scale-110 transition-transform">
                    <item.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-colors">
                    <span className="font-mono text-xs text-accent">{item.year}</span>
                    <h3 className="font-display text-xl font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm text-primary mt-1">{item.subtitle}</p>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 content-start">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform"
              >
                <div className="font-display text-4xl sm:text-5xl font-bold text-gradient">
                  {h.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{h.label}</div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-2 glass-card rounded-2xl p-6"
            >
              <h4 className="font-display text-lg font-semibold mb-2">What drives me</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building things that feel <span className="text-foreground">inevitable</span> —
                software so well-crafted that users forget there's even code behind it.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
