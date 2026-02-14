import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};

const FinalSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
    <motion.div {...fadeInUp}>
      <span className="text-6xl md:text-8xl mb-6 block">🌟</span>
    </motion.div>

    <motion.h2
      {...fadeInUp}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="font-script text-4xl md:text-6xl text-primary mb-8"
    >
      Happy Birthday, Sangeeta
    </motion.h2>

    <motion.div
      {...fadeInUp}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="max-w-md space-y-6"
    >
      <p className="text-foreground text-lg leading-relaxed">
        On your special day, I wish you the courage to chase every dream, the strength to conquer every challenge, and the joy that comes from knowing someone out there is always rooting for you.
      </p>

      <p className="text-foreground text-lg leading-relaxed">
        May this year bring you everything you've been working so hard for — and a few beautiful surprises along the way. 🎁
      </p>

      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-card border border-border rounded-2xl p-8 shadow-lg"
      >
        <p className="font-script text-2xl md:text-3xl text-accent mb-4">
          "Some friendships begin with a 0.00067 chance and last a lifetime."
        </p>
      </motion.div>

      <motion.p
        {...fadeInUp}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="font-script text-xl text-muted-foreground pt-4"
      >
        With love & maths (and a little chemistry),
      </motion.p>
      <motion.p
        {...fadeInUp}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="font-script text-2xl text-primary"
      >
        — Your Stranger 💛
      </motion.p>
    </motion.div>

    <motion.div
      {...fadeInUp}
      transition={{ duration: 0.8, delay: 1.05 }}
      className="mt-16 text-4xl"
    >
      🎂🎉🎈
    </motion.div>
  </section>
);

export default FinalSection;
