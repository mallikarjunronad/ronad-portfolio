import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Message too short";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setForm({ name: "", email: "", message: "" });
    toast.success("Message sent!", { description: "I'll get back to you soon." });
  };

  const socials = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-neon/15 blur-[120px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="font-mono text-sm text-accent uppercase tracking-widest">/ 05 — Contact</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-4">
            Let's build something <span className="text-gradient">amazing</span>.
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind, an opportunity, or just want to say hi? My inbox is open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Email</h4>
              </div>
              <a
                href="mailto:mallikarjun@example.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
              >
                mallikarjun@example.com
              </a>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-secondary" />
                <h4 className="font-semibold">Location</h4>
              </div>
              <p className="text-sm text-muted-foreground">Karnataka, India</p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h4 className="font-semibold mb-4">Find me online</h4>
              <div className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:scale-110 hover:glow-primary transition-all"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 glass-card rounded-3xl p-7 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-12 px-4 rounded-xl bg-muted/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="Your name"
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-12 px-4 rounded-xl bg-muted/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-muted/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                placeholder="Tell me about your project or idea..."
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full h-12 rounded-xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] text-primary-foreground font-semibold glow-primary hover:bg-right transition-all duration-500 disabled:opacity-60 inline-flex items-center justify-center gap-2"
            >
              {sending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>

        <div className="text-center mt-20 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Mallikarjun Ronad — Built with{" "}
            <span className="text-primary">React</span>,{" "}
            <span className="text-secondary">Tailwind</span> &{" "}
            <span className="text-accent">Framer Motion</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
