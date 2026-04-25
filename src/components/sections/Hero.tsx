import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Flame } from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { FireField } from "@/components/FireField";
import { FlameBase } from "@/components/FlameBase";
import { Typewriter } from "@/components/Typewriter";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero noise"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <ParticleField />
      <FireField />
      <FlameBase />

      {/* Floating gradient orbs - molten */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/40 blur-[120px] animate-float animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-neon/40 blur-[120px] animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-secondary/30 blur-[140px] animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="container relative z-10 pt-24 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm border border-primary/40 glow-primary"
          >
            <Flame className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-muted-foreground">Available for collaborations & internships</span>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 animate-fire-text"
          >
            Hi, I'm{" "}
            <span className="text-gradient bg-[length:200%_auto] animate-gradient-shift">
              Mallikarjun
            </span>
            <br />
            <span className="text-gradient-primary bg-[length:200%_auto] animate-gradient-shift">
              Ronad
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-mono text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 h-8"
          >
            <Typewriter
              words={[
                "I build scalable and impactful software.",
                "Full Stack Developer.",
                "CSE Student @ Jain CER.",
                "C++ • Java • Python • DSA",
              ]}
              className="text-foreground"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            4th semester CSE student crafting performant, beautiful and meaningful
            digital experiences. I love clean code, elegant systems, and shipping
            real-world products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 h-12 px-7 rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] text-primary-foreground font-semibold glow-primary hover:scale-105 hover:bg-right transition-all duration-500"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 h-12 px-7 rounded-2xl glass font-semibold hover:scale-105 transition-transform"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-3"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 hover:glow-primary transition-all"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};
