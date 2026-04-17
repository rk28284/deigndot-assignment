import {  ChevronDown } from 'lucide-react';

export const Albulm = () => {
  return (
  <section className="max-w-[1920px] mx-auto px-6 lg:px-20 py-24 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">HLS Global Group</h2>
          <p className="text-slate-500 text-[16px] ">is an international accounting and business advisory firm with a focus on providing superior services in the areas of accounting, tax, audit, and consulting...</p>
          <div className="grid grid-cols-2 gap-10 border-t pt-10">
            <div><h3 className="text-4xl font-black">250+</h3><p className="text-[16px] font-bold text-slate-400 uppercase mt-2">Professional Staff</p></div>
            <div><h3 className="text-4xl font-black">1000+</h3><p className="text-[16px] font-bold text-slate-400 uppercase mt-2">Global Clients</p></div>
            <div><h3 className="text-4xl font-black">35+</h3><p className="text-[16px] font-bold text-slate-400 uppercase mt-2">Years Experience</p></div>
            <div><h3 className="text-4xl font-black">15+</h3><p className="text-[16px] font-bold text-slate-400 uppercase mt-2">Countries Covered</p></div>
          </div>
        </div>
        <div className="relative">
          
 <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] w-full " alt="office" />

        </div>
      </section>
  )
}
