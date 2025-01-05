"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import LandingPage from '../components/LandingPage';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <LandingPage />
    </main>
  );
}
