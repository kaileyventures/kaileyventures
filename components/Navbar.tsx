'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);
  
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#FAFAFA]/50 backdrop-blur-xl border-b border-black/5 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between relative z-50">
          
          {/* Full Brand Logo */}
          <Link href="/" className="flex items-center" aria-label="Kailey Ventures Home">
            <img 
              src="https://res.cloudinary.com/dxojtisjb/image/upload/v1772779794/Kailey-Ventures-logo-new_nhsgzl.png" 
              alt="Kailey Ventures Logo" 
              className="h-6 w-auto object-contain"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase text-[#7F7F7F]">
            <Link href="#about" className="hover:text-black transition-colors duration-300">About</Link>
            <Link href="#brands" className="hover:text-black transition-colors duration-300">Our Brands</Link>
            <Link href="/contact" className="hover:text-black transition-colors duration-300">Contact</Link>
          </nav>
        
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-end gap-1.5 cursor-pointer z-50"
            aria-label="Toggle Menu"
          >
            <div className={`line w-6 h-[2px] bg-[#0a0a0a] transition-all duration-300 origin-right ${isOpen ? 'rotate-[-45deg] translate-x-[-2px] translate-y-[4px]' : ''}`}></div>
            <div className={`line h-[2px] bg-[#0a0a0a] transition-all duration-300 origin-right ${isOpen ? 'w-6 rotate-[45deg] translate-x-[-2px] translate-y-[-4px]' : 'w-4'}`}></div>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}