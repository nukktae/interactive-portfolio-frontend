"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar, Clock, Globe, Mail, Check, ChevronLeft, ChevronRight, Video, Loader2, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import SpaceBackground from '@/components/visuals/SpaceBackground';
import LightBackground from '@/components/visuals/LightBackground';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BookACallPage() {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [timeFormat, setTimeFormat] = useState<'12h' | '24h'>('12h');
  const [timezone, setTimezone] = useState<string>('Asia/Seoul');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const timeSlots = [
    '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00'
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatTime = (time: string) => {
    if (timeFormat === '12h') {
      const [hours, minutes] = time.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? (language === 'ko' ? '오후' : 'pm') : (language === 'ko' ? '오전' : 'am');
      const displayHour = hour % 12 || 12;
      return `${displayHour}:${minutes}${ampm}`;
    }
    return time;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setSelectedDate(new Date(currentYear, currentMonth + (direction === 'next' ? 1 : -1), 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !selectedTime) {
      setError(t('bookCall.errorRequired'));
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const dateString = selectedDate.toISOString().split('T')[0];
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          date: dateString,
          time: selectedTime,
          timezone,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t('bookCall.errorGeneric'));
      }

      setIsSuccess(true);
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setSelectedTime('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('bookCall.errorGeneric'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10" />);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === selectedDate.getDate();
      const isToday = day === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear();
      
      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(new Date(currentYear, currentMonth, day))}
          className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-300 ${
            isSelected
              ? 'bg-primary text-primary-foreground'
              : isToday
              ? 'bg-primary/20 text-foreground'
              : 'text-foreground/70 hover:bg-primary/10 hover:text-foreground'
          }`}
        >
          {day}
        </button>
      );
    }
    
    return days;
  };

  return (
    <div className="min-h-screen relative">
      {mounted && (theme === 'dark' ? <SpaceBackground /> : <LightBackground />)}
      {!mounted && <SpaceBackground />}
      <Navbar />
      
      <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-section-title text-foreground/60 mb-4">{t('bookCall.contact')}</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8">
              {t('bookCall.title')}{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {t('bookCall.titleHighlight')}
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <Mail className="w-5 h-5 text-foreground/70" />
              <a href="mailto:anu.bn@yahoo.com" className="text-lg text-foreground/90 hover:text-foreground transition-colors">
                anu.bn@yahoo.com
              </a>
            </div>
          </motion.div>

          {/* Bottom Section - Meeting Scheduler */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Left Column - Meeting Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  AB
                </div>
                <span className="text-foreground font-medium">Anu Bilegdemberel</span>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground">{t('bookCall.meetingTitle')}</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-foreground/70">
                  <Check className="w-4 h-4" />
                  <span className="text-sm">{t('bookCall.requiresConfirmation')}</span>
                </div>
                
                <div className="flex items-center gap-2 text-foreground/70">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{t('bookCall.duration')}</span>
                </div>
                
                <div className="flex items-center gap-2 text-foreground/70">
                  <Video className="w-4 h-4" />
                  <span className="text-sm">{t('bookCall.videoPlatform')}</span>
                </div>
                
                <div className="flex items-center gap-2 text-foreground/70">
                  <Globe className="w-4 h-4" />
                  <select 
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="bg-transparent text-foreground/70 text-sm border-none outline-none cursor-pointer"
                  >
                    <option value="Asia/Seoul">Asia/Seoul</option>
                    <option value="UTC">UTC</option>
                    <option value="America/New_York">America/New_York</option>
                    <option value="Europe/London">Europe/London</option>
                    <option value="Asia/Tokyo">Asia/Tokyo</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Middle Column - Calendar */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="w-8 h-8 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <h3 className="text-foreground font-semibold">
                  {selectedDate.toLocaleDateString(language === 'ko' ? 'ko-KR' : 'en-US', { month: 'long', year: 'numeric' })}
                </h3>
                <button
                  onClick={() => navigateMonth('next')}
                  className="w-8 h-8 flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-7 gap-2 mb-2">
                {t('bookCall.calendarDays').split(',').map((day, index) => (
                  <div key={index} className="text-center text-xs text-foreground/60 font-medium py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {renderCalendarDays()}
              </div>
            </div>

            {/* Right Column - Time Slots */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-foreground font-semibold">
                  {selectedDate.toLocaleDateString(language === 'ko' ? 'ko-KR' : 'en-US', { weekday: 'short', day: 'numeric' })}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setTimeFormat('12h')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      timeFormat === '12h'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-primary/10 text-foreground/70 hover:bg-primary/20 hover:text-foreground'
                    }`}
                  >
                    12h
                  </button>
                  <button
                    onClick={() => setTimeFormat('24h')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      timeFormat === '24h'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-primary/10 text-foreground/70 hover:bg-primary/20 hover:text-foreground'
                    }`}
                  >
                    24h
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedTime === time
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-primary/10 text-foreground/70 hover:bg-primary/20 hover:text-foreground'
                    }`}
                  >
                    {formatTime(time)}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          {selectedTime && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('bookCall.completeBooking')}</h3>
              
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <p className="text-green-400">{t('bookCall.successMessage')}</p>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                >
                  <p className="text-red-400">{error}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                      {t('bookCall.name')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                      placeholder={t('bookCall.namePlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                      {t('bookCall.email')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                      placeholder={t('bookCall.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                    {t('bookCall.message')}
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder={t('bookCall.messagePlaceholder')}
                  />
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-foreground/70 mb-2">{t('bookCall.selectedTime')}</p>
                  <p className="text-foreground font-medium">
                    {selectedDate.toLocaleDateString(language === 'ko' ? 'ko-KR' : 'en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })} {language === 'ko' ? '에' : 'at'} {formatTime(selectedTime)} ({timezone})
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t('bookCall.submitting')}
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      {t('bookCall.confirmBooking')}
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

