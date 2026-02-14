import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
    <motion.div
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
      className="text-7xl md:text-9xl mb-6"
    >
      🎂
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="font-script text-5xl md:text-7xl font-bold text-primary mb-4"
    >
      Happy Birthday, Stranger!
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="text-lg md:text-xl text-muted-foreground max-w-md italic"
    >
      "To the rarest encounter at Delhi Airport..."
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
      className="mt-12 text-muted-foreground animate-bounce"
    >
      <p className="text-sm mb-2">Scroll down</p>
      <span className="text-2xl">↓</span>
    </motion.div>
  </section>
);

export default HeroSection;
