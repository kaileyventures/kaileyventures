export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[10dvh] bg-white text-[#7F7F7F] overflow-hidden flex flex-col justify-center pt-5 pb-10">
      
      {/* bg-white parent par globally background block kar dega */}
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0px; }
          100% { background-position: 0 80px; }
        }
        @keyframes spinY {
          0% { transform: perspective(1000px) rotateY(0deg); }
          100% { transform: perspective(1000px) rotateY(360deg); }
        }
        .animated-grid {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-size: 80px 80px;
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          animation: gridMove 4s linear infinite;
          mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
          z-index: 0;
          pointer-events: none;
        }
        .animate-spin-y {
          animation: spinY 8s linear infinite;
          transform-style: preserve-3d;
        }
      `}</style>
      <div className="animated-grid"></div>

      <div className="w-full max-w-[90rem] mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 items-center relative z-10">
        
        {/* Left Column: Vertical Brand Marker (Hidden on Mobile) */}
        <div className="hidden md:flex col-span-1 h-full flex-col justify-between items-start border-r border-stone-200 py-4">
          <p className="text-[0.65rem] font-bold tracking-[0.3em] uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
            Kailey Ventures
          </p>
          <div className="w-[1px] h-24 bg-[#7F7F7F]"></div>
        </div>

        {/* Center Column: Massive Typography */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center">
          
          <div className="inline-flex items-center gap-3 mb-8 md:mb-12">
            <span className="h-[1px] w-8 md:w-16 bg-[#7F7F7F]"></span>
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-stone-400 uppercase">
              Holding Portfolio
            </p>
          </div>

          <h1 className="text-[13vw] md:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem] font-black tracking-tighter leading-[0.85] uppercase text-[#050505]">
            Curating<br />
            <span className="text-transparent border-text" style={{ WebkitTextStroke: '1.5px #7F7F7F', color: 'transparent' }}>Modern</span><br />
            Commerce.
          </h1>

          <p className="mt-8 md:mt-12 text-sm md:text-lg lg:text-xl text-[#7F7F7F] font-medium max-w-[90%] md:max-w-md leading-relaxed">
            We incubate, develop, and oversee a portfolio of high-performing brands designed for the future of enterprise and physical goods.
          </p>
          
        </div>

        {/* Right Column: Floating 3D Rotating Logo */}
        <div className="col-span-1 md:col-span-4 flex justify-center items-center relative mt-8 md:mt-0">
          
          <div className="w-full aspect-square flex items-center justify-center animate-spin-y pointer-events-none">
            <img 
              src="https://res.cloudinary.com/dxojtisjb/image/upload/v1772779794/Kailey-Ventures-logo-new-black_rjxujq.png" 
              alt="Kailey Ventures Logo" 
              className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain drop-shadow-md"
            />
          </div>

        </div>

      </div>
    </section>
  );
}