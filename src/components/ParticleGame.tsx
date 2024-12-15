import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ParticleGameProps {
  onScoreUpdate: (score: number) => void;
}

export const ParticleGame = ({ onScoreUpdate }: ParticleGameProps) => {
  const [score, setScore] = useState(0);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const controls = useAnimation();

  const spawnParticle = () => {
    const newParticle = {
      id: Date.now(),
      x: Math.random() * (window.innerWidth - 100),
      y: -20,
    };
    setParticles(prev => [...prev, newParticle]);
  };

  useEffect(() => {
    const interval = setInterval(spawnParticle, 2000);
    return () => clearInterval(interval);
  }, []);

  const collectParticle = (id: number) => {
    setParticles(prev => prev.filter(p => p.id !== id));
    const newScore = score + 1;
    setScore(newScore);
    onScoreUpdate(newScore);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-4 h-4 cursor-pointer pointer-events-auto"
          initial={{ x: particle.x, y: particle.y, opacity: 0 }}
          animate={{
            y: window.innerHeight + 20,
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            ease: "linear",
          }}
          onClick={() => collectParticle(particle.id)}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-br from-violet-400 to-fuchsia-300 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}; 