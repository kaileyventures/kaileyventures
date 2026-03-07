'use client';

import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div className={`fixed inset-0 bg-[#FAFAFA]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <Link href="#about" onClick={() => setIsOpen(false)} className="text-3xl font-semibold tracking-tighter text-brand-900 uppercase">About</Link>
      <Link href="#brands" onClick={() => setIsOpen(false)} className="text-3xl font-semibold tracking-tighter text-brand-900 uppercase">Our Brands</Link>
      <Link href="#contact" onClick={() => setIsOpen(false)} className="text-3xl font-semibold tracking-tighter text-brand-900 uppercase">Contact</Link>
    </div>
  );
}