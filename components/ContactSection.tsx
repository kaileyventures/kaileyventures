export default function ContactSection() {
  return (
    /* FIXED: 'min-h-screen' remove kar diya taaki footer niche se upar aa sake. 
       Padding ko balanced rakha hai: pt-32 (navbar space) aur pb-20 (footer se gap) */
    <section id="contact" className="relative w-full bg-white text-[#0A0A0A] flex flex-col pt-12 pb-20 overflow-hidden">
      <div className="w-full max-w-[90rem] mx-auto px-4 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 mb-16">
          <div className="flex flex-col">
            <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#7F7F7F] mb-4">
              Holding Portfolio // Comms
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter uppercase text-[#0A0A0A] leading-none">
              Direct <br /> Channels
            </h1>
          </div>
          
          <p className="mt-8 md:mt-0 max-w-sm text-sm md:text-base text-[#7F7F7F] font-medium leading-relaxed">
            Bypass intermediaries. Initiate direct contact with the Kailey Ventures management team via established operational protocols.
          </p>
        </div>

        {/* 3-Column Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Action 1: CALL */}
          <div className="group flex flex-col p-8 md:p-10 bg-[#FAFAFA] border border-black/5 hover:border-black/20 hover:bg-white transition-all duration-500">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[#7F7F7F] uppercase mb-12 group-hover:text-[#0A0A0A] transition-colors">Voice Link</span>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase text-[#0A0A0A] mb-4">Call Now</h3>
            <p className="text-sm text-[#7F7F7F] leading-relaxed mb-12">Immediate telephonic dispatch for urgent enterprise inquiries.</p>
            <a href="tel:+919815012623" className="mt-auto inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#0A0A0A] uppercase group-hover:gap-5 transition-all">
              Initiate Call <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>

          {/* Action 2: WHATSAPP */}
          <div className="group flex flex-col p-8 md:p-10 bg-[#FAFAFA] border border-black/5 hover:border-[#25D366]/40 hover:bg-white transition-all duration-500">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[#7F7F7F] uppercase mb-12 group-hover:text-[#25D366] transition-colors">Secure Text</span>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase text-[#0A0A0A] mb-4">WhatsApp</h3>
            <p className="text-sm text-[#7F7F7F] leading-relaxed mb-12">Direct text-based protocol for fast queries and document sharing.</p>
            <a href="https://wa.me/919815012623" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#0A0A0A] uppercase group-hover:text-[#25D366] group-hover:gap-5 transition-all">
              Message Now <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>

          {/* Action 3: EMAIL */}
          <div className="group flex flex-col p-8 md:p-10 bg-[#FAFAFA] border border-black/5 hover:border-black/20 hover:bg-white transition-all duration-500">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[#7F7F7F] uppercase mb-12 group-hover:text-[#0A0A0A] transition-colors">Data Relay</span>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase text-[#0A0A0A] mb-4">Email Now</h3>
            <p className="text-sm text-[#7F7F7F] leading-relaxed mb-12">Formal communication channel for B2B inquiries and proposals.</p>
            <a href="mailto:kaileyventures@zohomail.in" className="mt-auto inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#0A0A0A] uppercase group-hover:gap-5 transition-all">
              Send Email <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}