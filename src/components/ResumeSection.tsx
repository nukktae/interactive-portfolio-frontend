import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';

export default function ResumeSection() {
  return (
    <SectionWrapper className="py-24">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#498FD8]/5 via-[#D86089]/5 to-[#FB9D5B]/5 rounded-3xl blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative z-10 mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            For{' '}
            <span className="bg-gradient-to-r from-[#498FD8] via-[#D86089] to-[#FB9D5B] bg-clip-text text-transparent">
              Employers
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my experience and skills
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="bg-[#DDCCD0]/5 backdrop-blur-sm border border-[#DDCCD0]/20 rounded-3xl p-12 text-center">
            <motion.div
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <a
                href="/assets/files/AnuBilegdemberel_Resume.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#498FD8] via-[#D86089] to-[#FB9D5B] rounded-full text-white font-medium text-lg hover:shadow-xl hover:shadow-[#498FD8]/20 transition-all duration-300"
              >
                <FaFileDownload className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
} 