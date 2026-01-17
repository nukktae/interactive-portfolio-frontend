'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SkillItem {
  type: 'text' | 'image';
  content: string;
  imagePath?: string;
}

const skills: SkillItem[] = [
  { type: 'image', content: 'React', imagePath: '/assets/images/stack/react.png' },
  { type: 'image', content: 'Next.js', imagePath: '/assets/images/stack/nextjs.png' },
  { type: 'image', content: 'TypeScript', imagePath: '/assets/images/stack/typescript.png' },
  { type: 'image', content: 'JavaScript', imagePath: '/assets/images/stack/javascript.webp' },
  { type: 'image', content: 'Node.js', imagePath: '/assets/images/stack/nodejs.png' },
  { type: 'image', content: 'HTML', imagePath: '/assets/images/stack/html.png' },
  { type: 'image', content: 'CSS', imagePath: '/assets/images/stack/css.png' },
  { type: 'image', content: 'Flutter', imagePath: '/assets/images/stack/flutter.png' },
  { type: 'image', content: 'Python', imagePath: '/assets/images/stack/python.png' },
  { type: 'image', content: 'PostgreSQL', imagePath: '/assets/images/stack/postgresql.png' },
  { type: 'image', content: 'AWS', imagePath: '/assets/images/stack/aws.png' },
  { type: 'image', content: 'Figma', imagePath: '/assets/images/stack/figma.png' },
  { type: 'image', content: 'Firebase', imagePath: '/assets/images/stack/firebase.png' },
  { type: 'image', content: 'OpenAI', imagePath: '/assets/images/stack/openai.png' },
  { type: 'image', content: 'FastAPI', imagePath: '/assets/images/stack/fastapi.png' },
  { type: 'image', content: 'Supabase', imagePath: '/assets/images/stack/supabase.png' },
  { type: 'image', content: 'Tailwind CSS', imagePath: '/assets/images/stack/tailwind.png' },
  { type: 'image', content: 'C++', imagePath: '/assets/images/stack/c++.png' },
  { type: 'image', content: 'Postman', imagePath: '/assets/images/stack/postman.webp' },
  { type: 'image', content: 'GitHub', imagePath: '/assets/images/stack/github.png' },
  { type: 'image', content: 'Arduino', imagePath: '/assets/images/stack/arduino.svg' },
  { type: 'image', content: 'Raspberry Pi', imagePath: '/assets/images/stack/raspberrry pi.png' },
];

// Split skills into two rows
const row1Skills = skills.slice(0, Math.ceil(skills.length / 2));
const row2Skills = skills.slice(Math.ceil(skills.length / 2));

const ScrollRow = ({ skills: rowSkills, reverse = false }: { skills: SkillItem[]; reverse?: boolean }) => {
  return (
    <div className={`flex ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} gap-4 items-center`}>
      {rowSkills.map((skill, index) => (
        <div
          key={`${skill.content}-${index}`}
          className="flex-shrink-0 px-4 py-2 rounded-full border border-border/80 bg-transparent backdrop-blur-sm text-sm font-semibold text-foreground/80 whitespace-nowrap flex items-center gap-2 h-10"
        >
          {skill.type === 'image' && skill.imagePath ? (
            <>
              <Image
                src={skill.imagePath}
                alt={skill.content}
                width={20}
                height={20}
                className="object-contain"
                unoptimized
              />
              <span>{skill.content}</span>
            </>
          ) : (
            <span>{skill.content}</span>
          )}
        </div>
      ))}
      {/* Duplicate for seamless loop */}
      {rowSkills.map((skill, index) => (
        <div
          key={`${skill.content}-dup-${index}`}
          className="flex-shrink-0 px-4 py-2 rounded-full border border-border/80 bg-transparent backdrop-blur-sm text-sm font-semibold text-foreground/80 whitespace-nowrap flex items-center gap-2 h-10"
        >
          {skill.type === 'image' && skill.imagePath ? (
            <>
              <Image
                src={skill.imagePath}
                alt={skill.content}
                width={20}
                height={20}
                className="object-contain"
                unoptimized
              />
              <span>{skill.content}</span>
            </>
          ) : (
            <span>{skill.content}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default function InfiniteScrollSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="w-screen mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 overflow-hidden relative z-10 -mx-4 sm:-mx-6 md:-mx-12 lg:-mx-20 xl:-mx-32"
    >
      <div className="relative w-full space-y-4">
        {/* First Row */}
        <div className="relative w-full overflow-hidden">
          <ScrollRow skills={row1Skills} />
        </div>
        {/* Second Row - Reverse direction */}
        <div className="relative w-full overflow-hidden">
          <ScrollRow skills={row2Skills} reverse />
        </div>
      </div>
    </motion.div>
  );
}

