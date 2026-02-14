import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};

const subjects = [
  { emoji: "⚛️", name: "Physics", color: "text-blue-400" },
  { emoji: "🧪", name: "Chemistry", color: "text-green-400" },
  { emoji: "🧬", name: "Biology", color: "text-pink-400" },
  { emoji: "🔢", name: "Maths", color: "text-accent" },
];

const DebateSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
    <motion.div {...fadeInUp}>
      <span className="text-5xl md:text-6xl mb-6 block">🔬 ➕</span>
    </motion.div>

    <motion.h2
      {...fadeInUp}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="font-script text-3xl md:text-5xl text-primary mb-8"
    >
      The Great Debate
    </motion.h2>

    <motion.div
      {...fadeInUp}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="max-w-lg w-full space-y-6"
    >
      {/* Her side */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
          Your argument 🫵
        </p>
        <p className="text-foreground text-lg mb-4 italic">
          "The world is made up of..."
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          {subjects.map((s) => (
            <motion.div
              key={s.name}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-secondary rounded-xl px-4 py-3 flex flex-col items-center gap-1 min-w-[70px]"
            >
              <span className="text-2xl">{s.emoji}</span>
              <span className={`text-xs font-semibold ${s.color}`}>{s.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* My side */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
          My argument 🙋‍♂️
        </p>
        <p className="text-foreground text-lg mb-4 italic">
          "The world is just..."
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-secondary rounded-xl px-6 py-4 inline-flex flex-col items-center gap-1"
        >
          <span className="text-4xl">🔢</span>
          <span className="text-sm font-bold text-accent">Maths</span>
        </motion.div>
      </div>

      {/* Apology */}
      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-primary/10 border border-primary/20 rounded-2xl p-8"
      >
        <p className="font-script text-2xl md:text-3xl text-primary mb-4">
          Okay fine...
        </p>
        <p className="text-foreground text-lg leading-relaxed">
          Maybe the world needs a little{" "}
          <span className="font-bold">chemistry</span> 🧪 and{" "}
          <span className="font-bold">biology</span> 🧬 and{" "}
          <span className="font-bold">physics</span> ⚛️ too.
        </p>
        <p className="text-foreground text-lg mt-3">
          But mostly, it needed <span className="font-script text-xl text-accent">us meeting</span> at that airport.
        </p>
        <p className="font-script text-2xl text-primary mt-4">
          I'm sorry, Stranger 💛
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default DebateSection;
