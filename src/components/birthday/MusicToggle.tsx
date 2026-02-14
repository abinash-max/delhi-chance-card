import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const MUSIC_URL = "https://cdn.pixabay.com/audio/2022/03/15/audio_4a6b95e25b.mp3";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
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
