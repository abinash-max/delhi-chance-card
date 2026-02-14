import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Birthday music! 🎉
const MUSIC_URLS = [
  "/andriig-happy-birthday-471211.mp3", // Your birthday music! 🎂
];

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const urlIndexRef = useRef(0);

  useEffect(() => {
    const loadAudio = (urlIndex: number) => {
      if (urlIndex >= MUSIC_URLS.length) {
        console.error("All audio URLs failed to load");
        return;
      }

      // Clean up previous audio if exists
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("error", () => {});
        audioRef.current.removeEventListener("canplaythrough", () => {});
      }

      const audio = new Audio(MUSIC_URLS[urlIndex]);
      audio.loop = true;
      audio.volume = 0.6; // Increased volume for birthday celebration! 🎉
      audio.preload = "auto";
      
      // Handle audio loading errors - try next URL
      const errorHandler = (e: Event) => {
        console.error(`Audio loading error for URL ${urlIndex}:`, e);
        if (urlIndex < MUSIC_URLS.length - 1) {
          console.log(`Trying next audio URL...`);
          urlIndexRef.current = urlIndex + 1;
          loadAudio(urlIndex + 1);
        } else {
          console.error("All audio URLs exhausted");
        }
      };
      
      // Handle when audio can play
      const canPlayHandler = () => {
        console.log("Audio ready to play");
      };
      
      audio.addEventListener("error", errorHandler);
      audio.addEventListener("canplaythrough", canPlayHandler);
      
      audioRef.current = audio;
    };

    loadAudio(0);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const toggle = async () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.error("Error playing audio:", error);
        // Try to load the audio again if it failed
        audioRef.current.load();
        try {
          await audioRef.current.play();
          setPlaying(true);
        } catch (retryError) {
          console.error("Retry failed:", retryError);
        }
      }
    }
  };

  return (
    <motion.button
      onClick={toggle}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform"
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {playing ? "🔊" : "🎵"}
    </motion.button>
  );
};

export default MusicToggle;
