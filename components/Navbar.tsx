'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className={`backdrop-blur-sm bg-zinc-900/65 border-indigo-500/30 border-b text-white quicksand fixed top-0 left-0 w-full z-50 duration-300 ${pathname === '/' && 'animate-fade animate-delay-[1300ms]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <Link href='/' className='flex justify-center items-center h-20 group'>
            <Image src='/img/tesserato.png' alt='' width={300} height={300} className={`w-12 h-[57%] ${pathname === '/' && 'animate-fade animate-delay-[1400ms]'} rotate-0 group-hover:rotate-[120deg] duration-300`}></Image>
            <Image src='/img/type.png' alt='' width={300} height={300} className={`w-44 h-[90%] ml-[-0.3rem] ${pathname === '/' && 'animate-fade animate-delay-[1400ms]'}`}></Image>
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link href='/' className={`hover:text-white bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text ${pathname === '/' && 'animate-fade animate-delay-[1400ms]'} ${pathname === '/' ? 'text-white' : 'text-transparent'} w-16 text-center cursor-pointer duration-300`} >
              <p>Início</p>
              <div className={`${pathname === '/' ? 'w-full' : 'w-0'} h-[1px] bg-white duration-300`}></div>
            </Link>
            <Link href='/services' className={`hover:text-white bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text ${pathname === '/' && 'animate-fade animate-delay-[1700ms]'} ${pathname === '/services' ? 'text-white' : 'text-transparent'} w-16 text-center cursor-pointer duration-300`} >
              <p>Serviços</p>
              <div className={`${pathname === '/services' ? 'w-full' : 'w-0'} h-[1px] bg-white duration-300`}></div>
            </Link>
            <Link href='/about' className={`hover:text-white bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text ${pathname === '/' && 'animate-fade animate-delay-[2000ms]'} ${pathname === '/about' ? 'text-white' : 'text-transparent'} w-16 text-center cursor-pointer duration-300`} >
              <p>Sobre</p>
              <div className={`${pathname === '/about' ? 'w-full' : 'w-0'} h-[1px] bg-white duration-300`}></div>
            </Link>
            <Link href='/contact' className={`hover:text-white bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text ${pathname === '/' && 'animate-fade animate-delay-[2300ms]'} ${pathname === '/contact' ? 'text-white' : 'text-transparent'} w-16 text-center cursor-pointer duration-300`} >
              <p>Contato</p>
              <div className={`${pathname === '/contact' ? 'w-full' : 'w-0'} h-[1px] bg-white duration-300`}></div>
            </Link>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

        <div className={`md:hidden bg-zinc-800 px-2 ${open ? 'h-96 pt-2 pb-3 space-y-1' : 'h-0 pt-0 pb-0 space-y-0'} duration-300 overflow-hidden text-xl`}>
          <Link href='/' className={`block text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100' : 'opacity-0'} duration-300`}
            onClick={()=> setOpen(false)}>
              Início
          </Link>
          <Link href='/services' className={`block text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100' : 'opacity-0'} duration-300`}
            onClick={()=> setOpen(false)}>
              Serviços
          </Link>
          <Link href='/about' className={`block text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100' : 'opacity-0'} duration-300`}
            onClick={()=> setOpen(false)}>
              Sobre
          </Link>
          <Link href='/contact' className={`block text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100' : 'opacity-0'} duration-300`}
            onClick={()=> setOpen(false)}>
              Contato
          </Link>
        </div>

    </nav>
  )
}
