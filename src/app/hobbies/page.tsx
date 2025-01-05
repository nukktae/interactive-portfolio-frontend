"use client";

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import { FaNewspaper, FaSignLanguage, FaUsers, FaHeart, FaTimes } from 'react-icons/fa';
import { GiSewingNeedle } from 'react-icons/gi';
import { MdPhotoCamera } from 'react-icons/md';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Hobby {
  icon: JSX.Element;
  title: string;
  description: string;
  image?: string;
  details?: string[];
  link?: string;
  bgClass?: string;
}

const hobbies: Hobby[] = [
  {
    icon: <FaNewspaper className="w-12 h-12" />,
    title: "Journalism",
    description: "Contributing as a guest reporter at Kookmin University Press, sharing student experiences and global perspectives.",
    link: "https://press.kookmin.ac.kr/news/articleView.html?idxno=103623",
    image: "/assets/images/journalism.jpg",
    details: [
      "Student experience coverage",
      "Global perspective articles",
      "Cultural exchange stories",
      "Community engagement"
    ]
  },
  {
    icon: <GiSewingNeedle className="w-12 h-12" />,
    title: "Crocheting",
    description: "Creating handmade pieces through the art of crocheting, finding peace in every stitch.",
    bgClass: "from-pink-500/10 to-rose-500/10"
  },
  {
    icon: <FaSignLanguage className="w-12 h-12" />,
    title: "Language Learning",
    description: "Currently learning American Sign Language (ASL), passionate about breaking communication barriers.",
    bgClass: "from-green-500/10 to-teal-500/10"
  },
  {
    icon: <MdPhotoCamera className="w-12 h-12" />,
    title: "Photography",
    description: "Capturing moments and exploring visual storytelling through digital photography.",
    bgClass: "from-yellow-500/10 to-orange-500/10"
  },
  {
    icon: <FaUsers className="w-12 h-12" />,
    title: "Community Engagement",
    description: "Active in student council's international affairs, coding clubs, and UI/UX meetups, fostering connections in tech and design communities.",
    bgClass: "from-violet-500/10 to-indigo-500/10"
  },
  {
    icon: <FaHeart className="w-12 h-12" />,
    title: "Food Explorer",
    description: "Discovering diverse cuisines and sharing culinary experiences with others.",
    bgClass: "from-red-500/10 to-pink-500/10"
  }
];

export default function HobbiesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-end mb-8">
          <button
            onClick={() => router.push('/')}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaTimes className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-havelock via-cranberry to-tan bg-clip-text text-transparent mb-4">
            Passions & Interests
          </h1>
          <p className="text-xl text-gray-600">Exploring Life Beyond Tech</p>
        </motion.div>

        <div className="space-y-32">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {hobby.image ? (
                <div className="relative rounded-3xl overflow-hidden mb-12 group shadow-lg h-[50vh]">
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              ) : (
                <div className={`relative rounded-3xl overflow-hidden mb-12 group shadow-lg h-[50vh] bg-gradient-to-br ${hobby.bgClass || 'from-gray-500/10 to-gray-600/10'}`} />
              )}

              <div className="max-w-4xl mx-auto text-center">
                <motion.div className="mb-12">
                  <div className="flex justify-center text-cranberry mb-6">
                    {hobby.icon}
                  </div>
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-havelock via-cranberry to-tan bg-clip-text text-transparent">
                    {hobby.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-12">{hobby.description}</p>
                </motion.div>

                {hobby.details && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hobby.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm
                                 hover:bg-gradient-to-br hover:from-havelock/5 hover:via-cranberry/5 hover:to-tan/5 
                                 transition-all duration-300 group hover:shadow-md"
                      >
                        <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                          {detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 