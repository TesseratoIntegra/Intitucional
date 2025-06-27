'use client'
import { useEffect, useState } from "react";
import clsx from "clsx";

const phrases = [
  "de conectividade entre sistemas.",
  "de decisões baseadas em dados.",
  "ivonvar, automatizar e escalar.",
  "integrar seu ERP com Tesserato.",
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
      <header className={`bg-gradient-to-r from-blue-600/90 dark:from-blue-700 to-indigo-500 dark:to-indigo-600 text-white h-24 md:h-48 pt-5 md:pt-22 lg:h-58 xl:h-auto lg:pt-12 lg:pb-10 `}>
        <div className="max-w-7xl mx-auto px-6 text-center flex justify-center">
          <div className="text-xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold mb-4 xl:flex justify-start gap-3 flex-wrap">
            <p className="xl:text-right xl:w-[29rem] quicksand text-nowrap lg:ml-[-3rem]">Sua empresa precisa</p>
            <p className={
              clsx(
                  "duration-300 lg:w-[42rem] text-left text-nowrap lg:ml-1", 
                  {
                  "opacity-100 xl:mt-0": fade, 
                  "opacity-0 xl:mt-[-1rem]": !fade 
                  }
                  )}>
              {phrases[index]}
            </p>
          </div>
        </div>
      </header>
  );
}
