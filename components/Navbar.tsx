'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
    <div className="bg-zinc-200 dark:bg-zinc-900 w-full h-16"></div>
    <nav className={`backdrop-blur-sm bg-white/70 dark:bg-zinc-900/65 border-indigo-400/90 dark:border-indigo-500/30 border-b text-white quicksand fixed top-0 left-0 w-full z-50 duration-300 ${pathname === '/' && 'animate-fade animate-delay-[1300ms]'}`}>
      <ThemeSwitch/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

        <Link href='/' className='flex justify-center items-center h-20 group'>
          <div className={`w-12 h-[57%] ${pathname === '/' && 'animate-fade animate-delay-[1400ms]'} rotate-0 group-hover:rotate-[120deg] relative duration-300`}>
            <Image src='/img/tesserato.png' alt='' fill className='hidden dark:inline absolute select-none object-contain' />
            <Image src='/img/tesserato-dark.png' alt='' fill className='dark:hidden opacity-85 absolute select-none object-contain' />
          </div>
          <div className={`w-44 h-[90%] ml-[-0.3rem] ${pathname === '/' && 'animate-fade animate-delay-[1400ms]'} relative`}>
            <Image src='/img/type.png' alt='' fill className='hidden dark:inline absolute select-none object-contain' />
            <Image src='/img/type-dark.png' alt='' fill className='dark:hidden opacity-85 absolute select-none object-contain' />
          </div>
        </Link>

          <div className="hidden md:flex space-x-6 mr-12">
            <Link href='/' className={`hover:text-zinc-500 dark:hover:text-white bg-gradient-to-r dark:from-blue-300 from-blue-300 dark:to-indigo-200 to-indigo-200 bg-clip-text ${pathname === '/' && 'animate-fade animate-delay-[1400ms]'} ${pathname === '/' ? 'text-zinc-800 dark:text-white' : 'text-zinc-800 dark:text-transparent'} w-16 text-center cursor-pointer duration-300`} >
              <p>Início</p>
              <div className={`${pathname === '/' ? 'w-full' : 'w-0'} h-[1px] bg-zinc-500/70 dark:bg-white duration-300`}></div>
            </Link>
            <Link href='/services' className={`hover:text-zinc-500 dark:hover:text-white bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text ${pathname === '/' && 'animate-fade animate-delay-[1700ms]'} ${pathname === '/services' ? 'text-zinc-900 dark:text-white' : 'text-zinc-800 dark:text-transparent'} w-16 text-center cursor-pointer duration-300`} >
              <p>Serviços</p>
              <div className={`${pathname === '/services' ? 'w-full' : 'w-0'} h-[1px] bg-zinc-500/70 dark:bg-white duration-300`}></div>
            </Link>
            <Link href='/about' className={`hover:text-zinc-500 dark:hover:text-white bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text ${pathname === '/' && 'animate-fade animate-delay-[2000ms]'} ${pathname === '/about' ? 'text-zinc-900 dark:text-white' : 'text-zinc-800 dark:text-transparent'} w-16 text-center cursor-pointer duration-300`} >
              <p>Sobre</p>
              <div className={`${pathname === '/about' ? 'w-full' : 'w-0'} h-[1px] bg-zinc-500/70 dark:bg-white duration-300`}></div>
            </Link>
            <Link href='/contact' className={`hover:text-zinc-500 dark:hover:text-white bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text ${pathname === '/' && 'animate-fade animate-delay-[2300ms]'} ${pathname === '/contact' ? 'text-zinc-900 dark:text-white' : 'text-zinc-800 dark:text-transparent'} w-16 text-center cursor-pointer duration-300`} >
              <p>Contato</p>
              <div className={`${pathname === '/contact' ? 'w-full' : 'w-0'} h-[1px] bg-zinc-500/70 dark:bg-white duration-300`}></div>
            </Link>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X className="text-zinc-800 dark:text-white" /> : <Menu className="text-zinc-800 dark:text-white" />}
          </button>
        </div>
      </div>

        <div className={`md:hidden  px-2 ${open ? 'max-h-96 pt-6 pb-8 space-y-1' : 'max-h-0 pt-0 pb-0 space-y-0'} duration-300 overflow-hidden text-xl`}>
          <Link href='/' className={`block text-zinc-900 dark:text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100' : 'opacity-0'} duration-300`}
            onClick={()=> setOpen(false)}>
              Início
          </Link>
          <Link href='/services' className={`block text-zinc-900 dark:text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100' : 'opacity-0'} duration-300`}
            onClick={()=> setOpen(false)}>
              Serviços
          </Link>
          <Link href='/about' className={`block text-zinc-900 dark:text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100' : 'opacity-0'} duration-300`}
            onClick={()=> setOpen(false)}>
              Sobre
          </Link>
          <Link href='/contact' className={`block text-zinc-900 dark:text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100' : 'opacity-0'} duration-300`}
            onClick={()=> setOpen(false)}>
              Contato
          </Link>
        </div>
    </nav>
    </>
  )
}
