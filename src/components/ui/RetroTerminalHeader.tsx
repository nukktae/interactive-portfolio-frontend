import { motion } from 'framer-motion';

export const RetroTerminalHeader = () => {
  return (
    <div className="relative flex items-center gap-2 p-2 border-b border-cyan-500/30">
      <div className="flex gap-1.5">
        {['red', 'yellow', 'green'].map((color, i) => (
          <motion.div 
            key={color}
            className={`w-2 h-2 rounded-full bg-${color}-500/70`}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-cyan-400/50 text-xs font-mono"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        MATRIX TERMINAL
      </motion.div>
    </div>
  );
}; 