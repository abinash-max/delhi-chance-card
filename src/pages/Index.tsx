import { useEffect } from "react";
import confetti from "canvas-confetti";
import HeroSection from "@/components/birthday/HeroSection";
import ProbabilitySection from "@/components/birthday/ProbabilitySection";
import UpscSection from "@/components/birthday/UpscSection";
import DebateSection from "@/components/birthday/DebateSection";
import FinalSection from "@/components/birthday/FinalSection";
import FloatingParticles from "@/components/birthday/FloatingParticles";

const Index = () => {
  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#e8798e", "#f0b27a", "#f7dc6f", "#abebc6", "#85c1e9"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#e8798e", "#f0b27a", "#f7dc6f", "#abebc6", "#85c1e9"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <HeroSection />
        <ProbabilitySection />
        <UpscSection />
        <DebateSection />
        <FinalSection />
      </div>
    </div>
  );
};

export default Index;
