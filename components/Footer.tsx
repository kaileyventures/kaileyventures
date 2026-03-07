'use client';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* BRAND IDENTITY - IMAGE REPLACED TEXT */}
        <Link 
          href="/" 
          onClick={handleLogoClick}
          className="reveal flex flex-col items-center text-center mb-16 group cursor-pointer no-underline"
        >
          <div className="mb-2 relative h-10 md:h-10 w-auto">
            <img 
              src="https://res.cloudinary.com/dxojtisjb/image/upload/v1772799502/Kailey-Ventures-logo-new-W_bwrykd.png" 
              alt="Kailey Ventures Logo" 
              className="h-full w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-125"
            />
          </div>

          <p className="text-sm font-normal text-[#7F7F7F] mb-1 transition-colors duration-300 group-hover:text-white">
            Parent Company & Holding Portfolio
          </p>
          <p className="text-sm font-normal text-[#7F7F7F] transition-colors duration-300 group-hover:text-white">
            Jalandhar, Punjab, India
          </p>
          
          <div className="mt-4 h-[1px] w-0 bg-white/20 transition-all duration-700 group-hover:w-12"></div>
        </Link>

        {/* DIRECT LINES SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 w-full mb-16 reveal">
          <div className="flex flex-col items-center gap-4 w-full md:w-1/2 md:border-r border-white/10 group">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[#7F7F7F] uppercase transition-colors duration-300 group-hover:text-white">Direct Lines</span>
            <div className="flex gap-4 justify-center">
              <a href="tel:+919815012623" className="contact-pill flex items-center justify-center px-8 py-3 text-[#7F7F7F] hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </a>
              <a href="https://wa.me/919815012623" target="_blank" rel="noreferrer" className="contact-pill flex items-center justify-center px-8 py-3 text-[#7F7F7F] hover:text-[#25D366] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full md:w-1/2 group">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[#7F7F7F] uppercase transition-colors duration-300 group-hover:text-white">Inquiries</span>
            <a href="mailto:kaileyventures@zohomail.in" className="contact-pill flex items-center gap-3 px-6 py-3">
              <svg className="w-4 h-4 text-[#7F7F7F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span className="text-sm font-medium tracking-wide">Email Now</span>
            </a>
          </div>
        </div>

        {/* COPYRIGHT SECTION */}
        <div className="w-full pt-8 border-t border-white/5 text-center reveal group cursor-pointer">
          <p className="text-[10px] font-bold tracking-[0.10em] text-[#7F7F7F] uppercase transition-colors duration-300 group-hover:text-white">
            &copy; {currentYear} KAILEY VENTURES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}