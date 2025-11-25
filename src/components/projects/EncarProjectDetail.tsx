import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';
import { Brain, Layers, Zap, BarChart3, Target, Cpu, TrendingUp, GitBranch } from 'lucide-react';

export default function EncarProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Computer Vision Hero */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-3xl">
        <div className="px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl font-black text-gray-900">Car Image Classification</h2>
            </div>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Deep Learning Competition</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Encar Track 1 is a computer vision classification competition project achieving >90% accuracy 
                on an extremely small dataset (~100 images per class). The project demonstrates advanced 
                deep learning techniques including ensemble methods, cross-validation, and vision-language models 
                to overcome the challenge of limited training data.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-purple-200 shadow-sm">
                  <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">95%+</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-indigo-200 shadow-sm">
                  <Layers className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Models</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Key Technologies</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Brain className="w-5 h-5 text-purple-300" />
                        PyTorch & CLIP
                      </li>
                      <li className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-purple-300" />
                        EfficientNet-B0
                      </li>
                      <li className="flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-purple-300" />
                        Ensemble Learning
                      </li>
                    </ul>
                  </div>
                  <div className="text-4xl font-black opacity-20">AI</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 mb-12 text-center"
          >
            Model Architecture
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                model: "EfficientNet-B0",
                description: "Primary classification model with ImageNet pre-training, optimized for small datasets",
                icon: <Cpu className="w-8 h-8" />
              },
              {
                model: "MobileNetV3",
                description: "Secondary model for ensemble diversity, providing complementary feature extraction",
                icon: <Zap className="w-8 h-8" />
              },
              {
                model: "CLIP",
                description: "Vision-language model combining zero-shot and fine-tuned approaches for semantic understanding",
                icon: <Brain className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-8 group-hover:border-purple-400 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.model}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Advanced Techniques
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.features.slice(0, 6).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-purple-400 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature}</h3>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Training Strategy */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            Training Strategy
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <GitBranch className="w-6 h-6" />
                Cross-Validation
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">5-fold stratified cross-validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">3 seeds per fold (15 models total)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Robust performance estimation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Reduced overfitting risk</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Layers className="w-6 h-6" />
                Ensemble Methods
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Dual ensemble (EfficientNet + MobileNetV3)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">CLIP zero-shot + fine-tuned ensemble</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Test-time augmentation (8 variants)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white/90">Weighted prediction averaging</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Augmentation */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Advanced Augmentation
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              stage: "Early Stage",
              techniques: ["Strong augmentation", "Mixup & CutMix", "RandAugment", "Random erasing"],
              color: "from-red-500 to-orange-500"
            },
            {
              stage: "Mid Stage",
              techniques: ["Moderate augmentation", "Geometric transforms", "Color jitter", "Perspective"],
              color: "from-yellow-500 to-amber-500"
            },
            {
              stage: "Late Stage",
              techniques: ["Minimal augmentation", "Horizontal flip only", "Fine-tuning phase", "Stabilization"],
              color: "from-green-500 to-emerald-500"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-full h-2 bg-gradient-to-r ${item.color} rounded-full mb-6`}></div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.stage}</h3>
              <ul className="space-y-2">
                {item.techniques.map((tech, techIndex) => (
                  <li key={techIndex} className="flex items-center gap-2 text-gray-700">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${item.color} rounded-full`}></div>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl text-white">
        <div className="px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black mb-12"
          >
            Performance Results
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="text-2xl font-black text-white mb-2">{metric}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 mb-12 text-center"
          >
            Technology Stack
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-sm font-medium text-gray-900">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Challenges & Solutions
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenges</h3>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-green-50 border border-green-200 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solutions</h3>
            <ul className="space-y-4">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}

