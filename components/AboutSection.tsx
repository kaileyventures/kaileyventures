export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-32 md:py-56 bg-[#FAFAFA] border-t border-black/5 overflow-hidden">
      {/* Decorative Background Number */}
      <div className="absolute -top-10 -right-10 text-[20rem] font-black text-black/[0.02] pointer-events-none select-none leading-none tracking-tighter">
        01
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative">
        
        {/* Editorial Header */}
        <div className="flex items-center gap-6 mb-20">
          <span className="text-[10px] md:text-xs font-black tracking-[0.4em] text-[#7F7F7F] uppercase">
            Holding Mandate
          </span>
          <div className="h-[1px] flex-grow bg-black/5"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Main Statement - Left Side (8 Columns) */}
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter text-[#0a0a0a] leading-[1] mb-16">
              Strategic holding company and parent organization of 
              <span className="block mt-8 text-[#7F7F7F] font-normal font-[family-name:var(--font-genty)] text-6xl md:text-9xl lowercase transform -rotate-1 origin-left transition-transform hover:rotate-0 duration-700 cursor-default">
                The Disposable Depot.
              </span>
            </h2>

            <div className="max-w-2xl border-l-2 border-black/5 pl-8 md:pl-12">
              <p className="text-lg md:text-2xl text-[#555] font-medium leading-[1.6] mb-8">
                We incubate, develop, and scale high-performing brands built for the future of 
                <span className="text-[#0a0a0a] italic"> modern operations.</span>
              </p>
            </div>
          </div>

          {/* Right Side Stats & Details (4 Columns) */}
          <div className="lg:col-span-4 space-y-20 pt-12">
            {/* Stat 01 */}
            <div className="relative group">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#7F7F7F] uppercase mb-4 group-hover:text-black transition-colors">Global Network</p>
              <div className="flex items-baseline gap-2">
                <h4 className="text-6xl md:text-7xl font-black text-[#0a0a0a] tracking-tighter">500</h4>
                <span className="text-3xl font-bold text-[#7F7F7F]">+</span>
              </div>
              <p className="text-sm text-[#7F7F7F] font-medium leading-relaxed mt-4 italic">
                Active clients sustained with absolute market authority.
              </p>
            </div>

            {/* Core Competency */}
            <div className="pt-10 border-t border-black/5">
              <h5 className="text-[10px] font-bold tracking-[0.2em] text-[#0a0a0a] uppercase mb-6">Wholesale Infrastructure</h5>
              <p className="text-sm md:text-base text-[#555] font-medium leading-relaxed">
                Bulk disposable supply, packaged water distribution, and factory-rate sourcing engineered for events, catering businesses, and retail operations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}