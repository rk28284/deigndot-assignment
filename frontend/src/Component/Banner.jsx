import React from 'react'
import { Search, ArrowRight, ChevronDown, Globe } from 'lucide-react';


export const Banner = () => {
  return (
     
      <section className="max-w-[1920px] mx-auto flex flex-col lg:flex-row min-h-[600px]">
        <div className="bg-[#003893] text-white p-10 lg:p-24 lg:w-[60%] flex flex-col justify-center">
          <span className="text-[16px] uppercase  mb-6 opacity-70">Accountants and Global Business Advisors</span>
          <h1 className="text-6xl lg:text-8xl font-bold border-b-8 border-white pb-6 w-fit mb-8">
            EMPOWERED <br /> WORKPLACES
          </h1>
          <p className="max-w-md text-[16px]  opacity-80 mb-10">
            By fostering inclusivity, encouraging growth, promoting collaboration, valuing diversity, supporting innovation, and building trust for shared success.
          </p>
          <button className="bg-[#FF8000] hover:scale-105 transition-transform px-10 py-4 flex items-center gap-4 font-bold text-xs w-fit">
            <ArrowRight size={20} /> LETS CONNECT
          </button>
        </div>
        <div className="lg:w-[40%] relative overflow-hidden h-[400px] lg:h-auto">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Office" className="w-full h-full object-cover" />
        </div>
      </section>
  );
  
}
