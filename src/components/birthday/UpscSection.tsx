import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};

const UpscSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
    <motion.div {...fadeInUp}>
      <span className="text-5xl md:text-6xl mb-6 block">📚</span>
    </motion.div>

    <motion.h2
      {...fadeInUp}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="font-script text-3xl md:text-5xl text-primary mb-8"
    >
      Dear Future Officer
    </motion.h2>

    <motion.div
      {...fadeInUp}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="max-w-lg space-y-6"
    >
      <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
        <p className="text-foreground text-lg leading-relaxed italic font-script text-2xl">
          "If the universe can beat 0.00067 odds to bring us together, imagine what{" "}
          <span className="text-primary font-bold">you</span> can do with your preparation."
        </p>
      </div>

      <motion.p
        {...fadeInUp}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="text-foreground text-lg leading-relaxed"
      >
        I've seen how hard you work, Stranger. The late nights, the endless revisions, the quiet determination that defines you.
      </motion.p>

      <motion.p
        {...fadeInUp}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-foreground text-lg leading-relaxed"
      >
        UPSC doesn't stand a chance against someone who turns{" "}
        <span className="text-accent font-bold">impossible odds</span> into reality just by showing up. 💪
      </motion.p>

      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="bg-secondary/50 rounded-xl p-6 border border-border"
      >
        <p className="text-muted-foreground italic text-base">
          One day, people will read about you — not as a statistic, but as an{" "}
          <span className="text-primary font-semibold">inspiration</span>. Keep going, Sangeeta. 🌟
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default UpscSection;
