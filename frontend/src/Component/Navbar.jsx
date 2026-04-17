import { Search, ChevronDown, } from 'lucide-react';


export const Navbar = () => {
    return (
        <nav className="max-w-[1920px] mx-auto px-6 lg:px-20 py-6 flex justify-between items-center bg-white sticky top-0 z-50">
            <div className="font-black text-2xl  border-2 border-black px-2 ">DEMO</div>
            <div className="hidden lg:flex items-center gap-8 text-[16px] font-bold tracking-widest">
                <a href="#" >WHO WE SERVE</a>
                <a href="#" >SOLUTIONS</a>
                <a href="#" >RESOURCES</a>
                <a href="#" >ABOUT US</a>
                <a href="#" >CONTACT US</a>
                <div className="flex items-center gap-5 ml-3.5 border-l pl-7">
                    <Search size={18} className="cursor-pointer" />
                    <div className="flex items-center gap-1 ">IND </div>
                    <div className="flex items-center gap-1 ">ENGLISH </div>
                </div>
            </div>
        </nav>
    )
}
