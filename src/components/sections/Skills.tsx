import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    accent: "from-primary to-secondary",
    skills: [
      { name: "C++", level: 90 },
      { name: "Java", level: 85 },
      { name: "Python", level: 88 },
      { name: "C", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Core CS Concepts",
    accent: "from-secondary to-accent",
    skills: [
      { name: "Data Structures", level: 90 },
      { name: "Algorithms", level: 85 },
      { name: "OOP", level: 92 },
      { name: "DBMS", level: 78 },
      { name: "Operating Systems", level: 75 },
    ],
  },
  {
    title: "Tools & Tech",
    accent: "from-accent to-neon",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Git / GitHub", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "MongoDB / SQL", level: 78 },
    ],
  },
];

const Bar = ({ name, level, accent }: { name: string; level: number; accent: string }) => (
  <div>
    <div className="flex justify-between text-sm mb-2">
      <span className="font-medium">{name}</span>
      <span className="font-mono text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-muted overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`h-full rounded-full bg-gradient-to-r ${accent}`}
      />
    </div>
  </div>
);

export const Skills = () => {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-secondary/15 blur-[120px]" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-sm text-accent uppercase tracking-widest">/ 02 — Skills</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-4">
            My <span className="text-gradient">toolkit</span> for shipping software.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From low-level languages to modern frameworks — a balanced stack to build
            anything from algorithms to full-stack products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass-card rounded-3xl p-7 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${cat.accent} mb-5`} />
              <h3 className="font-display text-2xl font-semibold mb-6">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((s) => (
                  <Bar key={s.name} name={s.name} level={s.level} accent={cat.accent} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
