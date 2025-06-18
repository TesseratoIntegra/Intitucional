'use client'
import { useEffect, useState } from "react";
import HomeLoader from "@/components/HomeLoader";
import Navbar from "@/components/Navbar";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1900);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-auto min-h-screen bg-zinc-950">
      <Navbar></Navbar>
      <div className={`fixed inset-0 transition-opacity duration-700 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <HomeLoader />
      </div>
      
    </div>
  );
}
