import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 8 + 4,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
  emoji: ["✨", "🌸", "💛", "⭐", "🎀", "💫"][i % 6],
}));

const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {particles.map((p) => (
      <motion.div
        key={p.id}
        className="absolute text-lg select-none"
        style={{ left: `${p.x}%`, top: `${p.y}%`, fontSize: p.size + 8 }}
        animate={{
          y: [0, -30, 0, 20, 0],
          x: [0, 15, -10, 5, 0],
          opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          delay: p.delay,
          ease: "easeInOut",
        }}
      >
        {p.emoji}
      </motion.div>
    ))}
  </div>
);

export default FloatingParticles;
