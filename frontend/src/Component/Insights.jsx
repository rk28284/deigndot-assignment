export const Insights = () => {
  const items =  ["Market Entry", "Operations", "Growth & Expansion"]

  
  return (
      <section className="max-w-[1920px] mx-auto px-6 lg:px-20 py-24 grid lg:grid-cols-2 gap-20">
        <div className="flex gap-10">
          <div className="w-64 h-80 bg-slate-100 rounded-2xl flex items-center justify-center font-black text-center text-[24px] leading-tight shrink-0">INSPIRATION &<br/>INSIGHTS</div>
          <div className="space-y-8">
            <div className="border-b-2 border-blue-600 pb-4">
              <h4 className="font-bold text-blue-700 text-[16px]">Pre-market Entry</h4>
              <p className=" text-blue-700">Pre-market entry means trading securities before regular market hours...</p>
            </div>
            {items.map((data, index) => (
              <div key={index} className="border-b pb-4">
                <h4 className="font-bold text-[16px]">{data}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 h-[500px]">

          <div className="flex-[2] relative rounded-3xl overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Finance" />

            <img src="https://images.unsplash.com/photo-1554224155-169746997533?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Finance" />
            <div className="absolute bottom-6 left-6"><h5 className="font-bold text-lg">Pre-Market</h5><p className="text-[10px] opacity-80">Evaluating Supply Chain Readiness</p></div>
          </div>
          <div className="flex-1 relative rounded-3xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Ops" />
            <div className="absolute bottom-10 left-1/2  text-white font-bold ">OPERATIONS</div>
          </div>
          <div className="flex-1 relative rounded-3xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Growth" />
            <div className="absolute bottom-10 left-1/2  text-white font-bold">GROWTH & EXPANSION</div>
          </div>
        </div>
      </section>
  )

  
}


