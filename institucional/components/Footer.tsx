'use client'
import Image from "next/image"

export default function Footer() {

  return (
    <footer className="w-full bg-zinc-800 border-t border-zinc-700 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
            <Image src='/img/logo.png' width={300} height={300} alt="" className="w-auto h-20"></Image>
            <p className="text-zinc-300 max-w-md">
                Desenvolvemos ferramentas inteligentes que trabalham ao lado do seu ERP, 
                potencializando sua operação com soluções sob medida.
            </p>
            </div>
            <div>
            <h3 className="font-bold mb-4">Soluções</h3>
            <ul className="space-y-2 text-zinc-300">
                <li>Dashboards Interativos</li>
                <li>Apps de Campo</li>
                <li>Interfaces Personalizadas</li>
                <li>Relatórios e Insights</li>
            </ul>
            </div>
            <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-zinc-300">
                <li>comercial@erpsolutions.com</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
            </ul>
            </div>
        </div>
        <div className="border-t border-zinc-700 mt-12 pt-8 text-center text-zinc-400">
            <p>&copy; 2025 Tesserato Integra. Todos os direitos reservados.</p>
        </div>
        </div>
    </footer>
  )
}
