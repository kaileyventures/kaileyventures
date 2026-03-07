'use client';

import { useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BrandsSection from '@/components/BrandsSection';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex-grow pt-24 relative overflow-hidden group">
      <AnimatedBackground />
      <HeroSection />
      <AboutSection />
      <BrandsSection />
    </main>
  );
}