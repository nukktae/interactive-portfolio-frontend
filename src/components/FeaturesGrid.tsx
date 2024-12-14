import { motion } from 'framer-motion';

interface FeaturesGridProps {
  features?: string[];
}

export default function FeaturesGrid({ features }: FeaturesGridProps) {
  if (!features?.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <span className="text-purple-400 text-lg">{index + 1}</span>
            </div>
            <h3 className="text-lg font-medium text-white">{feature}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 