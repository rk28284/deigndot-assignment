import React from 'react'
import { Search, ArrowRight, ChevronDown, Globe } from 'lucide-react';


export const News = () => {
    const news = [
    "Parliament Introduces Income Tax Bill...",
    "Indian Export Earnings at Risk...",
    "India Eases Select BIS Norms...",
    "India Modernizes Maritime Law..."
  ];
  return (
      <section className="max-w-[1920px] mx-auto px-6 lg:px-20 py-12 flex flex-col lg:flex-row gap-12 border-b">
        <div className="bg-[#FF8000] text-white px-6 py-3 text-xs font-black  ">
          HOT TOPICS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {news.map((res, index) => (
            <div key={index} className="group  border-t-2 border-slate-100 pt-4">
              <p className="text-[16px] font-semibold ">{res}</p>
              <ArrowRight size={16} className="mt-4 " />
            </div>
          ))}
        </div>
      </section>
  )
}
