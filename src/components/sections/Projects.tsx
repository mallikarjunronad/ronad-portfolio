import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Category = "All" | "Web" | "DSA" | "ML" | "App";

interface Project {
  title: string;
  category: Exclude<Category, "All">;
  tagline: string;
  description: string;
  tech: string[];
  challenges: string;
  learned: string;
  github: string;
  demo: string;
  gradient: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: "DevConnect",
    category: "Web",
    tagline: "Social network for developers",
    description:
      "A full-stack platform where developers share projects, follow each other, and collaborate. Includes auth, real-time feed, and rich profiles.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Socket.io"],
    challenges:
      "Designing a scalable real-time feed with optimistic updates and handling auth securely with JWT + refresh tokens.",
    learned:
      "End-to-end product thinking — from data modeling to deployment, plus performance tuning for real-time UIs.",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-primary via-secondary to-accent",
    emoji: "🚀",
  },
  {
    title: "AlgoVisualizer",
    category: "DSA",
    tagline: "Interactive algorithm visualizer",
    description:
      "Visualize sorting, pathfinding, and graph algorithms step-by-step with adjustable speed, dataset size and theming.",
    tech: ["React", "TypeScript", "Canvas API", "Framer Motion"],
    challenges:
      "Synchronizing animation frames with algorithm steps without blocking the main thread.",
    learned:
      "Deep understanding of algorithm complexity and how to visually communicate computer science concepts.",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-secondary via-accent to-neon",
    emoji: "🧠",
  },
  {
    title: "SmartNotes AI",
    category: "ML",
    tagline: "AI-powered note summarizer",
    description:
      "Upload long-form notes or PDFs and get clean summaries, flashcards, and quiz questions powered by LLMs.",
    tech: ["Python", "FastAPI", "OpenAI", "React", "PostgreSQL"],
    challenges:
      "Token cost control with smart chunking, caching, and streaming responses for instant feedback.",
    learned:
      "Practical ML application design, prompt engineering and async backend architecture.",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-neon via-primary to-secondary",
    emoji: "✨",
  },
  {
    title: "CodeArena",
    category: "Web",
    tagline: "Competitive coding playground",
    description:
      "Online IDE + judge supporting C++, Java, and Python with instant test cases, leaderboards and contests.",
    tech: ["Next.js", "Docker", "Redis", "Monaco Editor"],
    challenges:
      "Sandboxing untrusted code execution safely with Docker and resource limits.",
    learned:
      "DevOps fundamentals, container security and building developer-focused UX.",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-accent via-primary to-neon",
    emoji: "⚔️",
  },
  {
    title: "PathFinder OS",
    category: "DSA",
    tagline: "OS scheduling simulator",
    description:
      "A tool to simulate FCFS, SJF, Round Robin and Priority scheduling with Gantt charts and metrics.",
    tech: ["Java", "JavaFX", "OOP"],
    challenges:
      "Modeling real OS scheduler behavior with clean OOP abstractions while keeping the UI responsive.",
    learned:
      "Operating systems internals and applying SOLID principles to a real desktop app.",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-primary via-neon to-secondary",
    emoji: "🛰️",
  },
  {
    title: "FitTrack Mobile",
    category: "App",
    tagline: "Fitness companion app",
    description:
      "Track workouts, nutrition and progress with beautiful charts, streaks and personalized goals.",
    tech: ["React Native", "Expo", "SQLite", "Reanimated"],
    challenges:
      "Building smooth 60fps animations on low-end devices and offline-first sync.",
    learned:
      "Mobile-first design, gesture systems and offline data architecture.",
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-secondary via-neon to-accent",
    emoji: "💪",
  },
];

const filters: Category[] = ["All", "Web", "DSA", "ML", "App"];

export const Projects = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[160px]" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="font-mono text-sm text-accent uppercase tracking-widest">/ 03 — Projects</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-4">
            Things I've <span className="text-gradient">built</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A selection of projects spanning the web, algorithms, ML and mobile —
            each shipped with care.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-primary"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setActive(p)}
                className="group relative text-left glass-card rounded-3xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)]"
              >
                {/* Gradient header */}
                <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                    {p.emoji}
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass text-xs font-medium">
                    {p.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.tagline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-muted/60 font-mono text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span className="text-xs px-2.5 py-1 rounded-md bg-muted/60 font-mono text-muted-foreground">
                        +{p.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl glass-card border-border/50 p-0 overflow-hidden">
          {active && (
            <>
              <div className={`relative h-40 bg-gradient-to-br ${active.gradient}`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {active.emoji}
                </div>
              </div>
              <div className="p-7">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl">{active.title}</DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground mt-1">{active.tagline}</p>

                <p className="mt-5 text-sm leading-relaxed">{active.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {active.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-muted/40 p-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent mb-2">
                      <Sparkles className="w-3 h-3" /> CHALLENGES
                    </div>
                    <p className="text-sm text-muted-foreground">{active.challenges}</p>
                  </div>
                  <div className="rounded-xl bg-muted/40 p-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2">
                      <Sparkles className="w-3 h-3" /> LEARNED
                    </div>
                    <p className="text-sm text-muted-foreground">{active.learned}</p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 h-10 px-4 rounded-xl glass text-sm font-medium hover:scale-105 transition-transform"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a
                    href={active.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium hover:scale-105 transition-transform glow-primary"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
