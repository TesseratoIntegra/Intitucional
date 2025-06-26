'use client'
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

export default function Footer() {
  const { setPage } = useAppContext()

  return (
    <footer className="w-full bg-white dark:bg-zinc-800 border-t dark:border-zinc-700 py-8 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 h-16 sm:h-20 mb-4">
            <Image 
              src='/img/logo.png' 
              width={300} 
              height={300} 
              alt="Tesserato Integra Logo" 
              className="w-auto h-full hidden dark:inline"
            />
            <Image 
              src='/img/logo-dark.png' 
              width={300} 
              height={300} 
              alt="Tesserato Integra Logo" 
              className="w-auto h-full dark:hidden inline"
            />
            <p className="text-zinc-800 dark:text-zinc-300 text-sm sm:text-base max-w-md leading-relaxed">
              Desenvolvemos ferramentas inteligentes que trabalham ao lado do seu ERP, 
              potencializando sua operação com soluções sob medida.
            </p>
          </div>
          
          {/* Soluções */}
          <div className="col-span-1">
            <h3 className="font-bold text-zinc-800 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Soluções</h3>
            <ul 
              className="space-y-2 text-zinc-300 text-sm sm:text-base cursor-pointer" 
              onClick={() => setPage('services')}
            >
              <li className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white transition-colors duration-200">Dashboards Interativos</li>
              <li className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white transition-colors duration-200">Apps de Campo</li>
              <li className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white transition-colors duration-200">Interfaces Personalizadas</li>
              <li className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white transition-colors duration-200">Relatórios e Insights</li>
            </ul>
          </div>
          
          {/* Contato */}
          <div className="col-span-1">
            <h3 className="font-bold text-zinc-800 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Contato</h3>
            <ul className="space-y-2 text-zinc-800 dark:text-zinc-300 text-sm sm:text-base">
              <li className="break-words">
                <a 
                  href="mailto:tesseratointegra@gmail.com" 
                  className="text-zinc-800 dark:text-zinc-300 dark:hover:text-white transition-colors duration-200"
                >
                  tesseratointegra@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5516992416689" 
                  className="hover:text-white transition-colors duration-200"
                >
                  (16) 99241-6689
                </a>
              </li>
              <li className="text-xs sm:text-sm leading-relaxed">
                Rua José Garcia Duarte, 182 (AP 104)<br />
                Santa Rosa de Viterbo - SP
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-zinc-400 dark:border-zinc-700 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-zinc-800 dark:text-zinc-400">
          <p className="text-xs sm:text-sm">
            &copy; 2025 Tesserato Integra. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}