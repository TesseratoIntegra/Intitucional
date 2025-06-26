'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useAppContext } from "@/context/AppContext";
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { page, setPage } = useAppContext()

  return (
    <nav className="bg-zinc-900 text-white quicksand fixed top-0 left-0 w-full z-50 duration-300 animate-fade animate-delay-[1300ms]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <Link href='/' className='flex justify-center items-center h-20 group'>
            <Image src='/img/tesserato.png' alt='' width={300} height={300} className='w-auto h-[57%] animate-fade animate-delay-[1400ms] rotate-0 group-hover:rotate-[120deg] duration-300'></Image>
            <Image src='/img/type.png' alt='' width={300} height={300} className='w-auto h-[90%] ml-[-0.3rem] animate-fade animate-delay-[1400ms]'></Image>
          </Link>

          <div className="hidden md:flex space-x-6">
            <div className={`hover:text-white bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text animate-fade animate-delay-[1400ms] ${page === 'home' ? 'text-white' : 'text-transparent'} w-16 text-center cursor-pointer duration-300`} 
              onClick={()=> setPage('home')}>
              <p>Início</p>
              <div className={`${page === 'home' ? 'w-full' : 'w-0'} h-[1px] bg-white duration-300`}></div>
            </div>
            <div className={`hover:text-white bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text animate-fade animate-delay-[1700ms] ${page === 'services' ? 'text-white' : 'text-transparent'} w-16 text-center cursor-pointer duration-300`} 
              onClick={()=> setPage('services')}>
              <p>Serviços</p>
              <div className={`${page === 'services' ? 'w-full' : 'w-0'} h-[1px] bg-white duration-300`}></div>
            </div>
            <div className={`hover:text-white bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text animate-fade animate-delay-[2000ms] ${page === 'about' ? 'text-white' : 'text-transparent'} w-16 text-center cursor-pointer duration-300`} 
              onClick={()=> setPage('about')}>
              <p>Sobre</p>
              <div className={`${page === 'about' ? 'w-full' : 'w-0'} h-[1px] bg-white duration-300`}></div>
            </div>
            <div className={`hover:text-white bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text animate-fade animate-delay-[2300ms] ${page === 'contact' ? 'text-white' : 'text-transparent'} w-16 text-center cursor-pointer duration-300`} 
              onClick={()=> setPage('contact')}>
              <p>Contato</p>
              <div className={`${page === 'contact' ? 'w-full' : 'w-0'} h-[1px] bg-white duration-300`}></div>
            </div>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

        <div className={`md:hidden bg-zinc-800 px-2 ${open ? 'h-96 pt-2 pb-3 space-y-1' : 'h-0 pt-0 pb-0 space-y-0'} duration-300 overflow-hidden text-xl`}>
          <div className={`block text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100' : 'opacity-0'} duration-300`}
            onClick={()=> {setPage('home'); setOpen(false)}}>
              Início
          </div>
          <div className={`block text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100' : 'opacity-0'} duration-300`}
            onClick={()=> {setPage('services'); setOpen(false)}}>
              Serviços
          </div>
          <div className={`block text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100' : 'opacity-0'} duration-300`}
            onClick={()=> {setPage('about'); setOpen(false)}}>
              Sobre
          </div>
          <div className={`block text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100' : 'opacity-0'} duration-300`}
            onClick={()=> {setPage('contact'); setOpen(false)}}>
              Contato
          </div>
        </div>

    </nav>
  )
}
