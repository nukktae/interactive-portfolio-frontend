import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/project';
import { Cloud, Shield, Zap, BarChart3, Brain, Video } from 'lucide-react';

export default function AwsProjectDetail({ project }: { project: Project }) {
  return (
    <>
      {/* Cloud Architecture Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl">
        <div className="px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Cloud className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-black text-gray-900">Cloud Content Moderation</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Content Security</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A sophisticated cloud-native content moderation system leveraging AWS services 
                for real-time video and image analysis. Features automated threat detection, 
                scalable architecture, and comprehensive security monitoring.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">Real-time</div>
                  <div className="text-sm text-gray-600">Content Analysis</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-cyan-200 shadow-sm">
                  <Brain className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">AI Detection</div>
                  <div className="text-sm text-gray-600">Machine Learning</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-4">AWS Services</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Video className="w-5 h-5 text-blue-300" />
                        Rekognition API
                      </li>
                      <li className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-blue-300" />
                        Lambda Functions
                      </li>
                      <li className="flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-blue-300" />
                        CloudWatch Analytics
                      </li>
                    </ul>
                  </div>
                  <div className="text-4xl font-black opacity-20">AWS</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 mb-12 text-center"
          >
            System Architecture
          </motion.h2>
          
          <div className="relative aspect-[16/9] mb-8">
            <Image
              src="/assets/images/aws-architecture.png"
              alt="AWS Architecture Diagram"
              fill
              className="object-contain rounded-xl"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                layer: "API Gateway",
                tech: "REST API + Lambda",
                description: "Secure endpoint handling with serverless compute",
                icon: <Zap className="w-8 h-8" />
              },
              {
                layer: "AI Analysis",
                tech: "AWS Rekognition",
                description: "Real-time content moderation and threat detection",
                icon: <Brain className="w-8 h-8" />
              },
              {
                layer: "Monitoring",
                tech: "CloudWatch + SNS",
                description: "Comprehensive logging and alert systems",
                icon: <BarChart3 className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 group-hover:border-blue-400 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.layer}</h3>
                  <div className="text-sm font-medium text-blue-600 mb-4">{item.tech}</div>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-white mb-12 text-center"
          >
            AWS Technology Stack
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[...project.technologies, ...(project.tools || [])].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:border-blue-400 transition-all duration-300"
              >
                <div className="text-sm font-medium text-white">{tech}</div>
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
          Platform Features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature}</h3>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-600"
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

      {/* Performance Metrics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl text-white">
        <div className="px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black mb-12"
          >
            System Performance
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <div className="text-3xl font-black text-white mb-2">{metric.split(':')[0]}</div>
                  <div className="text-sm opacity-80">{metric.split(':')[1]}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 mb-12 text-center"
          >
            Security & Compliance
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Security Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">End-to-end encryption with AWS KMS</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">IAM role-based access control</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">VPC security groups and NACLs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">AWS CloudTrail audit logging</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Compliance Standards</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">SOC 2 Type II compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">GDPR data protection requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">ISO 27001 security framework</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">HIPAA compliance ready</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Live Demo
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-2xl"
          >
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="/assets/images/content-mod.png"
            >
              <source src="/assets/videos/demoaws.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>
    </>
  );
} 