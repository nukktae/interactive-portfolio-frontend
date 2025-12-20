"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.bookCall': 'Book a Call',
    
    // Hero Section
    'hero.headlinePart1': "I help founders turn ideas into seamless",
    'hero.headlineItalic': 'digital',
    'hero.headlinePart2': 'experiences',
    'hero.greeting': "Hello, I'm Anu Bilegdemberel",
    'hero.role': 'Product Engineer (Full-Stack & Design)',
    
    // Projects Section
    'projects.workExperience': 'Work Experience',
    'projects.workExperienceLabel': 'PROFESSIONAL EXPERIENCE',
    'projects.competitions': 'Competitions & Projects',
    'projects.competitionsLabel': 'PERSONAL PROJECTS & COMPETITIONS',
    'projects.visitSite': 'Visit Site',
    'projects.viewAll': 'VIEW ALL PROJECTS',
    
    // Tech Stack Section
    'techStack.services': 'MY SERVICES',
    'techStack.title': "I CAN HELP\nYOU WITH",
    'techStack.branding': 'BRANDING',
    'techStack.brandingDesc': 'Unique identity that makes brands memorable',
    'techStack.design': 'DESIGN',
    'techStack.designDesc': 'Beautiful interfaces that work perfectly',
    'techStack.development': 'DEVELOPMENT',
    'techStack.developmentDesc': 'Concepts into powerful digital experiences',
    'techStack.innovation': 'INNOVATION',
    'techStack.innovationDesc': 'Interactive elements that engage users',
    
    // About Section
    'about.title': 'ABOUT ME',
    'about.yearsExperience': 'YEARS PROGRAMMING EXPERIENCE',
    'about.companiesWorked': 'COMPANIES WORKED WITH',
    'about.projectsCompleted': 'PROJECTS COMPLETED',
    'about.headline': 'FROM BACKEND TO',
    'about.headlineHighlight': 'DESIGN',
    'about.story1': 'Started in backend development, discovered my passion for creating beautiful, user-centered experiences.',
    'about.story2': 'Now I bridge design and development to deliver exceptional digital solutions.',
    'about.currently': 'CURRENTLY',
    'about.currentRole': 'UI/UX Designer and Frontend Developer at Bestia Group LLC.',
    
    // Contact Section
    'contact.heading': "LET'S TALK",
    'contact.title': 'READY TO\nCREATE?',
    'contact.description': "Have a project in mind? Let's discuss how we can bring your ideas to life. I'm always excited to work on new challenges.",
    'contact.downloadResume': 'Download Resume',
    'contact.github': 'GITHUB',
    'contact.linkedin': 'LINKEDIN',
    'contact.available': 'AVAILABLE FOR WORK',
    
    // Project Detail Pages
    'project.viewProject': 'View Project',
    'project.keyImpact': 'Key Impact',
    'project.notFound': 'Project Not Found',
    'project.notFoundDesc': "The project you're looking for doesn't exist.",
    'project.backToProjects': 'Back to Projects',
    
    // Project Detail Section Labels
    'project.overview': 'Overview',
    'project.myRole': 'My Role',
    'project.problem': 'Problem',
    'project.goals': 'Goals',
    'project.research': 'Research',
    'project.architecture': 'Architecture & Flows',
    'project.designSystem': 'Design System',
    'project.systemArchitecture': 'System Architecture',
    'project.keyFeatures': 'Key Features',
    'project.challenges': 'Challenges',
    'project.results': 'Results & Impact',
    'project.learnings': 'Learnings',
    'project.techStack': 'Tech Stack',
    
    // Book a Call Page
    'bookCall.contact': 'CONTACT',
    'bookCall.title': "Let's Get",
    'bookCall.titleHighlight': 'In Touch',
    'bookCall.meetingTitle': '30 Min Meeting',
    'bookCall.requiresConfirmation': 'Requires confirmation',
    'bookCall.duration': '30m',
    'bookCall.videoPlatform': 'Google Meet',
    'bookCall.completeBooking': 'Complete Your Booking',
    'bookCall.successMessage': 'Booking request sent successfully! Check your email for confirmation.',
    'bookCall.name': 'Name',
    'bookCall.email': 'Email',
    'bookCall.message': 'Message (Optional)',
    'bookCall.namePlaceholder': 'Your name',
    'bookCall.emailPlaceholder': 'your.email@example.com',
    'bookCall.messagePlaceholder': "Tell me about what you'd like to discuss...",
    'bookCall.selectedTime': 'Selected Meeting Time:',
    'bookCall.submitting': 'Submitting...',
    'bookCall.confirmBooking': 'Confirm Booking',
    'bookCall.errorRequired': 'Please fill in all required fields and select a time slot',
    'bookCall.errorGeneric': 'An error occurred. Please try again.',
    'bookCall.calendarDays': 'SUN,MON,TUE,WED,THU,FRI,SAT',
  },
  ko: {
    // Navigation
    'nav.work': '작업',
    'nav.about': '소개',
    'nav.contact': '연락처',
    'nav.bookCall': '통화 예약',
    
    // Hero Section
    'hero.headlinePart1': '기획부터',
    'hero.headlineItalic': '런칭까지,',
    'hero.headlinePart2': '전 과정에서 사용자 경험을 설계합니다.',
    'hero.greeting': '아노 빌렉뎀베렐',
    'hero.role': '프로덕트 엔지니어 (풀스택 & 디자인)',
    
    // Projects Section
    'projects.workExperience': '경력',
    'projects.workExperienceLabel': '전문 경력',
    'projects.competitions': '프로젝트 & 공무전',
    'projects.competitionsLabel': '개인 프로젝트 & 공무전',
    'projects.visitSite': '사이트 방문',
    'projects.viewAll': '모든 프로젝트 보기',
    
    // Tech Stack Section
    'techStack.services': '제공 서비스',
    'techStack.title': '제가 도와드릴 수 있는\n영역입니다',
    'techStack.branding': '브랜딩',
    'techStack.brandingDesc': '브랜드를 기억에 남게 만드는 독특한 정체성',
    'techStack.design': '디자인',
    'techStack.designDesc': '완벽하게 작동하는 아름다운 인터페이스',
    'techStack.development': '개발',
    'techStack.developmentDesc': '아이디어를 강력한 디지털 경험으로 전환',
    'techStack.innovation': '혁신',
    'techStack.innovationDesc': '사용자를 참여시키는 인터랙티브 요소',
    
    // About Section
    'about.title': '소개',
    'about.yearsExperience': '년 프로그래밍 경력',
    'about.companiesWorked': '협력 기업',
    'about.projectsCompleted': '완료 프로젝트',
    'about.headline': '백엔드에서',
    'about.headlineHighlight': '디자인으로',
    'about.story1': '백엔드 개발로 시작하여 아름답고 사용자 중심의 경험을 만드는 열정을 발견했습니다.',
    'about.story2': '이제 디자인과 개발을 연결하여 탁월한 디지털 솔루션을 제공합니다.',
    'about.currently': '현재',
    'about.currentRole': 'Bestia Group LLC. UI/UX 디자이너 및 프론트엔드 개발자',
    
    // Contact Section
    'contact.heading': '함께 이야기해요',
    'contact.title': '함께\n만들 준비되셨나요?',
    'contact.description': '프로젝트 아이디어가 있으신가요? 아이디어를 현실로 만드는 방법에 대해 논의해봐요. 새로운 도전에 항상 기쁩니다.',
    'contact.downloadResume': '이력서 다운로드',
    'contact.github': '깃허브',
    'contact.linkedin': '링크드인',
    'contact.available': '채용 가능',
    
    // Project Detail Pages
    'project.viewProject': '프로젝트 보기',
    'project.keyImpact': '주요 성과',
    'project.notFound': '프로젝트를 찾을 수 없습니다',
    'project.notFoundDesc': '찾고 계신 프로젝트가 존재하지 않습니다.',
    'project.backToProjects': '프로젝트로 돌아가기',
    
    // Project Detail Section Labels
    'project.overview': '개요',
    'project.myRole': '역할',
    'project.problem': '문제',
    'project.goals': '목표',
    'project.research': '연구',
    'project.architecture': '아키텍처 & 플로우',
    'project.designSystem': '디자인 시스템',
    'project.systemArchitecture': '시스템 아키텍처',
    'project.keyFeatures': '주요 기능',
    'project.challenges': '도전 과제',
    'project.results': '결과 & 영향',
    'project.learnings': '학습 내용',
    'project.techStack': '기술 스택',
    
    // Book a Call Page
    'bookCall.contact': '연락처',
    'bookCall.title': '함께',
    'bookCall.titleHighlight': '소통해요',
    'bookCall.meetingTitle': '30분 미팅',
    'bookCall.requiresConfirmation': '확인 필요',
    'bookCall.duration': '30분',
    'bookCall.videoPlatform': 'Google Meet',
    'bookCall.completeBooking': '예약 완료하기',
    'bookCall.successMessage': '예약 요청이 성공적으로 전송되었습니다! 확인을 위해 이메일을 확인해주세요.',
    'bookCall.name': '이름',
    'bookCall.email': '이메일',
    'bookCall.message': '메시지 (선택사항)',
    'bookCall.namePlaceholder': '이름을 입력하세요',
    'bookCall.emailPlaceholder': 'your.email@example.com',
    'bookCall.messagePlaceholder': '논의하고 싶은 내용을 알려주세요...',
    'bookCall.selectedTime': '선택한 미팅 시간:',
    'bookCall.submitting': '제출 중...',
    'bookCall.confirmBooking': '예약 확인',
    'bookCall.errorRequired': '모든 필수 항목을 입력하고 시간대를 선택해주세요',
    'bookCall.errorGeneric': '오류가 발생했습니다. 다시 시도해주세요.',
    'bookCall.calendarDays': '일,월,화,수,목,금,토',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage === 'en' || savedLanguage === 'ko') {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ko' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

