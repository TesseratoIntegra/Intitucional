'use client'
import { useEffect, useState } from "react";
import HomeLoader from "@/components/HomeLoader";
import Navbar from "@/components/Navbar";
import Home from '@/app/pages/Home/page'
import Services from '@/app/pages/ServicesPage/page'
import About from '@/app/pages/About/page'
import Contact from '@/app/pages/Contact/page'

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-auto min-h-screen bg-zinc-950">
      <div className={`fixed inset-0 transition-opacity duration-700 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <HomeLoader />
      </div>

      {/* Navegação Dinâmica */}
      <div className={`${loading ? 'opacity-0' : 'opacity-100'} overflow-y-hidden flex inter `}>

        <Navbar/>

        <Home/>
        <Services/>
        <About/>
        <Contact/>

      </div>  

    </div>
  );
}
