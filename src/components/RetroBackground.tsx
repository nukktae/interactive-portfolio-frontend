import { motion } from 'framer-motion';

export const RetroBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Scan lines effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/1 to-transparent"
        animate={{
          y: [0, 1000],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_transparent_0)] bg-[length:40px_40px] [background-position-x:50%]" 
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, 
            rgba(0, 255, 0, .05) 25%, 
            rgba(0, 255, 0, .05) 26%, 
            transparent 27%, 
            transparent 74%, 
            rgba(0, 255, 0, .05) 75%, 
            rgba(0, 255, 0, .05) 76%, 
            transparent 77%, 
            transparent),
            linear-gradient(90deg, 
            transparent 24%, 
            rgba(0, 255, 0, .05) 25%, 
            rgba(0, 255, 0, .05) 26%, 
            transparent 27%, 
            transparent 74%, 
            rgba(0, 255, 0, .05) 75%, 
            rgba(0, 255, 0, .05) 76%, 
            transparent 77%, 
            transparent)
          `
      }}/>

      {/* Glowing orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full bg-green-500/10 blur-3xl"
          animate={{
            x: [Math.random() * 100, Math.random() * -100],
            y: [Math.random() * 100, Math.random() * -100],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* CRT flicker effect */}
      <motion.div
        className="absolute inset-0 bg-green-500/5"
        animate={{
          opacity: [0, 0.02, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
          times: [0, 0.5, 1],
        }}
      />
    </div>
  );
}; 