'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
            <Image src='/img/logo.png' alt='' width={300} height={300} className='w-auto h-full'></Image>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-indigo-300 transition">
              Início
            </Link>
            <Link href="/sobre" className="hover:text-indigo-300 transition">
              Sobre
            </Link>
            <Link href="/contato" className="hover:text-indigo-300 transition">
              Contato
            </Link>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

        <div className={`md:hidden bg-zinc-800 px-2 ${open ? 'h-96 pt-2 pb-3 space-y-1' : 'h-0 pt-0 pb-0 space-y-0'} duration-300 overflow-hidden`}>
          <Link href="/" className={`block text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100 animate-fade-right animate-delay-[100ms] animate-duration-[500ms]' : 'opacity-0'} duration-300`}>
            Início
          </Link>
          <Link href="/sobre" className={`block text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100 animate-fade-right animate-delay-[300ms] animate-duration-[500ms]' : 'opacity-0'} duration-300`}>
            Sobre
          </Link>
          <Link href="/contato" className={`block text-white px-3 py-2 rounded hover:bg-zinc-700 ${open ? 'opacity-100 animate-fade-right animate-delay-[500ms] animate-duration-[500ms]' : 'opacity-0'} duration-300`}>
            Contato
          </Link>
        </div>

    </nav>
  )
}
