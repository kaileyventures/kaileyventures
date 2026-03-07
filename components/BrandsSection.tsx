'use client';

import { useEffect, useState, useRef } from 'react';

export default function BrandsSection() {
  const [brandsData, setBrandsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const hasFetched = useRef(false); // Duplicate fetch prevent karne ke liye

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const SHEET_ID = "1UoLt0zSpSCSdNpaKelwdbUViYLp3qif7J5xAJ6patV8";
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

    fetch(url)
      .then(res => res.text())
      .then(text => {
        const jsonString = text.substring(47).slice(0, -2);
        const data = JSON.parse(jsonString);
        
        const parsedRows = data.table.rows.map((row: any) => ({
          category: row.c[1]?.v || '',
          name: row.c[2]?.v || '',
          description: row.c[3]?.v || '',
          image: row.c[4]?.v || '',
          link: row.c[5]?.v || ''
        })).slice(1);

        setBrandsData(parsedRows);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) return (
    <div className="h-[60vh] flex items-center justify-center font-mono text-[10px] tracking-[0.3em] uppercase opacity-40 animate-pulse">
      Rendering Portfolio...
    </div>
  );

  return (
    <section id="brands" className="relative z-10 py-24 md:py-40 bg-white border-t border-black/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* Editorial Header */}
        <div className="flex items-center justify-between mb-16 md:mb-32">
          <h2 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase">Brand Portfolio</h2>
          <div className="h-[1px] flex-grow bg-black/10 mx-6 md:mx-12"></div>
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7F7F7F] uppercase whitespace-nowrap">
            {String(brandsData.length).padStart(2, '0')} Active
          </p>
        </div>

        {/* Dynamic Mapping */}
        <div className="flex flex-col gap-32 md:gap-56">
          {brandsData.map((brand, index) => {
            const displayNumber = String(index + 1).padStart(2, '0');
            const isReverse = index % 2 !== 0; 

            return (
              <article key={`${brand.name}-${index}`} className={`group/brand relative flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-32 items-center`}>
                
                {/* Visual Showcase */}
                <div className="w-full lg:w-1/2 aspect-[4/4] relative overflow-hidden bg-[#FAFAFA] flex items-center justify-center p-12 md:p-20">
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="w-full h-full object-contain transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/brand:scale-110"
                  />
                </div>
                
                {/* Content Block */}
                <div className={`w-full lg:w-1/2 flex flex-col justify-center relative ${isReverse ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
                  
                  {/* Background Watermark Number - ELEVATED POSITIONING */}
<span className={`
  absolute 
  -top-12 md:-top-20 
  ${isReverse ? '-right-4 md:-right-12' : '-left-6 md:-left-12'} 
  text-[10rem] md:text-[14rem] 
  font-black 
  text-black/[0.03] 
  leading-none 
  pointer-events-none 
  select-none 
  z-0 
  tracking-tighter
`}>
  {displayNumber}
</span>
                  
                  {/* Category Tag */}
                  <div className={`relative z-10 flex items-center gap-4 mb-6 md:mb-10 ${isReverse ? 'flex-row-reverse' : 'flex-row'}`}>
                    <span className="w-10 h-[2px] bg-[#7F7F7F]"></span>
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#7F7F7F] uppercase">{brand.category}</span>
                  </div>
                  
                  {/* Brand Name */}
                  <h3 className="relative z-10 text-4xl md:text-6xl font-extrabold tracking-tight text-[#0a0a0a] mb-6 md:mb-8 leading-[1.1]">
                    {brand.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="relative z-10 text-base md:text-xl text-[#555] font-medium leading-[1.6] mb-12 md:mb-16 max-w-lg">
                    {brand.description}
                  </p>
                  
                  {/* Luxury CTA */}
                  {brand.link && (
                    <a href={brand.link} target="_blank" rel="noopener noreferrer" className="relative z-10 group/link inline-flex items-center gap-6 w-max">
                      <span className="text-black font-black uppercase tracking-[0.2em] text-[10px] md:text-xs border-b-2 border-black/10 group-hover/link:border-black transition-all duration-500 pb-1">
                        Visit Platform
                      </span>
                      <div className="relative w-12 h-12 rounded-full border border-black/10 flex items-center justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/link:bg-black group-hover/link:text-white group-hover/link:scale-110">
                         <svg className="w-5 h-5 transition-transform duration-500 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                         </svg>
                      </div>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}