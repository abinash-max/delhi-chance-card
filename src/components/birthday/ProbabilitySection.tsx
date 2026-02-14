import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};

const ProbabilitySection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
    <motion.div {...fadeInUp}>
      <span className="text-5xl md:text-6xl mb-6 block">✈️</span>
    </motion.div>

    <motion.h2
      {...fadeInUp}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="font-script text-3xl md:text-5xl text-primary mb-8"
    >
      The Probability Story
    </motion.h2>

    <motion.div
      {...fadeInUp}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-lg shadow-lg mb-8"
    >
      <p className="text-muted-foreground text-sm uppercase tracking-widest mb-3">
        The odds of us meeting
      </p>
      <p className="font-script text-5xl md:text-7xl font-bold text-accent">
        P = 0.00067
      </p>
      <p className="text-muted-foreground mt-3 text-sm">
        That's 0.067% — nearly impossible.
      </p>
    </motion.div>

    <motion.div
      {...fadeInUp}
      transition={{ duration: 0.8, delay: 0.45 }}
      className="max-w-md space-y-4"
    >
      <p className="text-foreground text-lg leading-relaxed">
        Out of <span className="font-bold text-primary">millions</span> of people passing through Delhi Airport every day, the universe decided that{" "}
        <span className="font-script text-xl text-accent">you and I</span> should cross paths.
      </p>
      <p className="text-muted-foreground italic">
        Some things are just written in the stars — or in the departure lounge. ✨
      </p>
    </motion.div>
  </section>
);

export default ProbabilitySection;
