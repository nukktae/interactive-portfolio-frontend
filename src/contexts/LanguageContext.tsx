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
    'nav.caseStudies': 'Case Studies',
    'nav.contact': 'Contact',
    'nav.bookCall': 'Coffee Chat',
    
    // Hero Section
    'hero.headlinePart1': "A global product engineer who moves fast, builds end-to-end, and turns data into shipped products.",
    'hero.headlineItalic': '',
    'hero.headlinePart2': '',
    'hero.headlinePart3': '',
    'hero.greeting': "Hello, I'm Anu",
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
    'techStack.productManagement': 'PRODUCT MANAGEMENT',
    'techStack.productManagementDesc': 'Strategic planning and execution from concept to launch',
    'techStack.design': 'DESIGN',
    'techStack.designDesc': 'Beautiful interfaces that work perfectly',
    'techStack.development': 'DEVELOPMENT',
    'techStack.developmentDesc': 'Concepts into powerful digital experiences',
    'techStack.globalExpansion': 'GLOBAL EXPANSION',
    'techStack.globalExpansionDesc': 'Scaling products across international markets',
    
    // About Section
    'about.title': 'ABOUT ME',
    'about.yearsExperience': 'YEARS PROGRAMMING EXPERIENCE',
    'about.companiesWorked': 'COMPANIES WORKED WITH',
    'about.projectsCompleted': 'PROJECTS COMPLETED',
    'about.headline': 'CASE STUDIES',
    'about.headlineHighlight': '',
    'about.caseStudiesDesc': 'Selected projects showcasing product engineering, design, and development expertise',
    'about.currently': 'CURRENTLY',
    'about.currentRole': 'UI/UX Designer and Frontend Developer at Bestia Group LLC.',
    
    // Case Studies Section
    'caseStudies.heading': 'SELECTED WORK',
    'caseStudies.title': 'Case Studies',
    'caseStudies.description': 'Selected projects showcasing product engineering, design, and development expertise',
    
    // Contact Section
    'contact.heading': "LET'S CHAT",
    'contact.title': '커피 한 잔\n어떠세요?',
    'contact.description': "Want to grab a coffee and chat? Whether it's about tech, projects, or just life—I'm always up for a good conversation. No pressure, just good vibes.",
    'contact.downloadResume': 'Download Resume',
    'contact.selectResumeLanguage': 'Select Resume Language',
    'contact.englishResume': 'English',
    'contact.koreanResume': 'Korean',
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
    'bookCall.title': "Let's Grab",
    'bookCall.titleHighlight': 'Coffee ☕',
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
    'nav.caseStudies': '케이스 스터디',
    'nav.contact': '연락처',
    'nav.bookCall': '커피챗',
    
    // Hero Section
    'hero.headlinePart1': '기획부터 런칭까지,',
    'hero.headlineItalic': '데이터와 속도를 기반으로',
    'hero.headlinePart2': '제품 전 과정을',
    'hero.headlinePart3': '설계·구현하는 글로벌 프로덕트 엔지니어입니다.',
    'hero.greeting': '아노',
    'hero.role': '프로덕트 엔지니어 (풀스택 & 디자인)',
    
    // Projects Section
    'projects.workExperience': '경력',
    'projects.workExperienceLabel': '전문 경력',
    'projects.competitions': '대외 활동',
    'projects.competitionsLabel': '대외 활동 (연구, 창업, 공무전, 대회)',
    'projects.visitSite': '사이트 방문',
    'projects.viewAll': '모든 프로젝트 보기',
    
    // Tech Stack Section
    'techStack.services': '제공 서비스',
    'techStack.title': '제가 도와드릴 수 있는\n영역입니다',
    'techStack.productManagement': '프로덕트 매니지먼트',
    'techStack.productManagementDesc': '기획부터 런칭까지 전략적 계획 및 실행',
    'techStack.design': '디자인',
    'techStack.designDesc': '완벽하게 작동하는 아름다운 인터페이스',
    'techStack.development': '개발',
    'techStack.developmentDesc': '아이디어를 강력한 디지털 경험으로 전환',
    'techStack.globalExpansion': '글로벌 진출',
    'techStack.globalExpansionDesc': '국제 시장으로 제품 확장',
    
    // About Section
    'about.title': '소개',
    'about.yearsExperience': '년 프로그래밍 경력',
    'about.companiesWorked': '협력 기업',
    'about.projectsCompleted': '완료 프로젝트',
    'about.headline': '케이스 스터디',
    'about.headlineHighlight': '',
    'about.caseStudiesDesc': '제품 엔지니어링, 디자인 및 개발 전문성을 보여주는 선별된 프로젝트',
    'about.currently': '현재',
    'about.currentRole': 'Bestia Group LLC. UI/UX 디자이너 및 프론트엔드 개발자',
    
    // Case Studies Section
    'caseStudies.heading': '선별된 작업',
    'caseStudies.title': '케이스 스터디',
    'caseStudies.description': '제품 엔지니어링, 디자인 및 개발 전문성을 보여주는 선별된 프로젝트',
    
    // Contact Section
    'contact.heading': '함께 이야기해요',
    'contact.title': '커피챗',
    'contact.description': '커피 한 잔 하면서 편하게 얘기해요 ☕️\n기술이나 프로젝트 얘기도 좋고, 그냥 사는 얘기도 환영이에요.\n온라인으로도 괜찮고, 직접 만나서 이야기해도 좋아요.\n편하게 연락 주세요!',
    'contact.downloadResume': '이력서 다운로드',
    'contact.selectResumeLanguage': '이력서 언어 선택',
    'contact.englishResume': '영어',
    'contact.koreanResume': '한국어',
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
    'bookCall.title': '커피 한 잔',
    'bookCall.titleHighlight': '어떠세요? ☕',
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
  const [isDetecting, setIsDetecting] = useState(true);

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage === 'en' || savedLanguage === 'ko') {
      setLanguage(savedLanguage);
      setIsDetecting(false);
      return;
    }

    // If no saved preference, detect language based on IP country
    const detectLanguageFromIP = async () => {
      try {
        const response = await fetch('/api/geo/country');
        if (response.ok) {
          const data = await response.json();
          const countryCode = data.countryCode;
          
          // Set to Korean if country is South Korea (KR), otherwise English
          const detectedLanguage: Language = countryCode === 'KR' ? 'ko' : 'en';
          setLanguage(detectedLanguage);
          // Save the detected language so it persists
          localStorage.setItem('language', detectedLanguage);
        } else {
          // Default to English if detection fails
          setLanguage('en');
          localStorage.setItem('language', 'en');
        }
      } catch (error) {
        console.error('Error detecting language from IP:', error);
        // Default to English on error
        setLanguage('en');
        localStorage.setItem('language', 'en');
      } finally {
        setIsDetecting(false);
      }
    };

    detectLanguageFromIP();
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

