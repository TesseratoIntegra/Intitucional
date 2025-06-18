'use client'
import { useEffect, useState } from "react";
import HomeLoader from "@/components/HomeLoader";
import Navbar from "@/components/Navbar";

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
      <div className={`${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar></Navbar>
      </div>
      <div className={`fixed inset-0 transition-opacity duration-700 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <HomeLoader />
      </div>
      
    </div>
  );
}
