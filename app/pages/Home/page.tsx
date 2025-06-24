'use client'
import { useAppContext } from "@/context/AppContext";
import { ArrowRight, BarChart3, Smartphone, Target, TrendingUp, Shield, Zap, Users } from 'lucide-react';
import Banner from '@/app/pages/Home/components/Banner'
import Footer from '@/components/Footer'

export default function Home(){
    const { page, setPage } = useAppContext()

    return(
        <div className={`bg-zinc-900 h-screen overflow-x-auto ${page === 'home' ? 'min-w-[100vw]' : 'min-w-0 text-nowrap'} duration-300`}>

            <Banner/>

            <section className="relative overflow-hidden animate-fade animate-delay-[1500ms]">
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900 to-indigo-900/20"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-10 xl:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                        <h1 className="text-xl lg:text-5xl font-bold leading-tight mb-6 text-white quicksand animate-fade-up animate-delay-[1600ms]">
                            Além do {' '}
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">ERP</span>: ferramentas que{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">impulsionam</span> sua operação
                        </h1>
                        <p className="text-lg lg:text-xl text-zinc-300 mb-8 leading-relaxed animate-fade-up animate-delay-[1900ms]">
                            Um ERP isolado não supre todas as demandas operacionais. 
                            Por isso, criamos soluções inteligentes que se integram ao seu sistema principal, ampliando sua eficiência e capacidade de automação.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-blue-600 hover:bg-indigo-700 group text-white px-8 py-4 text-lg font-medium transition-colors flex items-center justify-center quicksand cursor-pointer lg:w-56 duration-300"
                            onClick={()=>setPage('contact')}>
                            Fale Conosco
                            <ArrowRight className="group-hover:ml-3 ml-1 w-5 h-5 duration-300" />
                            </button>
                            <button className="border border-zinc-600 hover:border-indigo-600 hover:text-indigo-500 text-zinc-400 px-8 py-4 text-lg font-medium transition-colors cursor-pointer quicksand duration-300"
                            onClick={()=>setPage('services')}>
                            Nossas Soluções
                            </button>
                        </div>
                        </div>
                        <div className="relative">
                        <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/40 p-8 border border-zinc-700">
                            <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zinc-800 p-4 border border-zinc-700">
                                <div className="w-full h-20 bg-gradient-to-r from-blue-500 to-indigo-500 mb-3 animate-fade-up animate-delay-[1700ms]"></div>
                                <div className="space-y-2">
                                <div className="h-2 bg-zinc-600 w-3/4 animate-fade animate-delay-[1700ms]"></div>
                                <div className="h-2 bg-zinc-600 w-1/2 animate-fade animate-delay-[2100ms]"></div>
                                </div>
                            </div>
                            <div className="bg-zinc-800 p-4 border border-zinc-700">
                                <div className="w-full h-20 bg-gradient-to-r from-indigo-500 to-blue-500 mb-3 animate-fade-up animate-delay-[2100ms]"></div>
                                <div className="space-y-2">
                                <div className="h-2 bg-zinc-600 w-2/3 animate-fade animate-delay-[2100ms]"></div>
                                <div className="h-2 bg-zinc-600 w-3/4 animate-fade animate-delay-[3100ms]"></div>
                                </div>
                            </div>
                            <div className="bg-zinc-800 p-4 border border-zinc-700">
                                <div className="w-full h-20 bg-gradient-to-r from-blue-600 to-indigo-400 mb-3 animate-fade-up animate-delay-[2500ms]"></div>
                                <div className="space-y-2">
                                <div className="h-2 bg-zinc-600 w-1/2 animate-fade animate-delay-[3100ms]"></div>
                                <div className="h-2 bg-zinc-600 w-2/3 animate-fade animate-delay-[3500ms]"></div>
                                </div>
                            </div>
                            <div className="bg-zinc-800 p-4 border border-zinc-700">
                                <div className="w-full h-20 bg-gradient-to-r from-indigo-600 to-blue-400 mb-3 animate-fade-up animate-delay-[2900ms]"></div>
                                <div className="space-y-2">
                                <div className="h-2 bg-zinc-600 w-3/4 animate-fade animate-delay-[3500ms]"></div>
                                <div className="h-2 bg-zinc-600 w-1/3 animate-fade animate-delay-[3900ms]"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section id="solucoes" className="py-12 lg:pt-16 lg:pb-20 bg-zinc-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 quicksand bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Nossas Soluções</h2>
                        <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                        Ferramentas inteligentes desenvolvidas para potencializar sua operação
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-blue-500/50 duration-300 group">
                        <div className="flex items-start space-x-4">
                            <div className="bg-zinc-700 group-hover:bg-blue-600 border border-zinc-600 p-3 text-2xl duration-300">
                            <BarChart3 className="w-8 h-8 text-blue-500 group-hover:text-white duration-300" />
                            </div>
                            <div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 duration-300 quicksand">
                                Dashboards e painéis interativos
                             </h3>
                            <p className="text-zinc-300 text-lg leading-relaxed">
                                Para decisões mais rápidas com visualizações em tempo real dos seus dados mais importantes.
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-indigo-500/50 duration-300 group">
                        <div className="flex items-start space-x-4">
                            <div className="bg-zinc-700 group-hover:bg-indigo-600 border border-zinc-600 p-3 text-2xl duration-300">
                            <Smartphone className="w-8 h-8 text-indigo-500 group-hover:text-white duration-300" />
                            </div>
                            <div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 duration-300 quicksand">
                                Apps de campo
                            </h3>
                            <p className="text-zinc-300 text-lg leading-relaxed">
                                Para captura de dados em tempo real, permitindo que sua equipe trabalhe de qualquer lugar.
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-blue-500/50 duration-300 group">
                        <div className="flex items-start space-x-4">
                            <div className="bg-zinc-700 group-hover:bg-blue-600 border border-zinc-600 p-3 text-2xl duration-300">
                                <Target className="w-8 h-8 text-blue-500 group-hover:text-white duration-300" />
                            </div>
                            <div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 duration-300 quicksand">
                                Interfaces personalizadas
                            </h3>
                            <p className="text-zinc-300 text-lg leading-relaxed">
                                Para áreas como vendas e logística, otimizando processos específicos do seu negócio.
                            </p>
                            </div>
                        </div>
                        </div>

                        <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-indigo-500/50 duration-300 group">
                        <div className="flex items-start space-x-4">
                            <div className="bg-zinc-700 group-hover:bg-indigo-600 border border-zinc-600 p-3 text-2xl duration-300">
                            <TrendingUp className="w-8 h-8 text-indigo-500 group-hover:text-white duration-300" />
                            </div>
                            <div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 duration-300 quicksand">
                                Relatórios e insights
                            </h3>
                            <p className="text-zinc-300 text-lg leading-relaxed">
                                Conectados direto ao ERP, fornecendo análises profundas para tomada de decisão estratégica.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Integration Section */}
                <section id="integracao" className="py-12 lg:py-16">
                    <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                        <h2 className="text-4xl font-bold mb-6 quicksand">
                            Integração <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Simples e Segura</span>
                        </h2>
                        <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                            Todas as nossas soluções são desenvolvidas com integração simples, segura e sob medida para o seu negócio.
                        </p>
                        <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                            Nossa equipe especializada trabalha para entender suas necessidades específicas e criar ferramentas 
                            que realmente fazem a diferença no dia a dia da sua empresa.
                        </p>
                        <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                            Com anos de experiência em desenvolvimento de microserviços e integração com sistemas ERP, 
                            garantimos soluções robustas e confiáveis.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:mb-8">
                            <div className="text-center">
                            <div className="bg-blue-600 p-4 inline-block mb-3">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-blue-400 quicksand">Seguro</h4>
                            <p className="text-sm text-zinc-400">Proteção total dos dados</p>
                            </div>
                            <div className="text-center">
                            <div className="bg-indigo-600 p-4 inline-block mb-3">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-indigo-400 quicksand">Rápido</h4>
                            <p className="text-sm text-zinc-400">Implementação ágil</p>
                            </div>
                            <div className="text-center">
                            <div className="bg-blue-600 p-4 inline-block mb-3">
                                <Users className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-blue-400 quicksand">Personalizado</h4>
                            <p className="text-sm text-zinc-400">Sob medida para você</p>
                            </div>
                        </div>
                        </div>

                        <div className="relative">
                        <div className="bg-zinc-800 border border-zinc-700 p-8">
                            <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                                <span className="text-white font-bold">ERP</span>
                                </div>
                                <div className="flex-1">
                                <div className="h-2 bg-zinc-600 mb-2"></div>
                                <div className="h-2 bg-zinc-600 w-3/4"></div>
                                </div>
                            </div>
                            
                            <div className="border-l-2 border-dashed border-zinc-600 ml-8 h-12"></div>
                            
                            <div className="flex items-center space-x-4 ml-8">
                                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                                <BarChart3 className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                <div className="h-1.5 bg-blue-500 mb-1"></div>
                                <div className="h-1.5 bg-blue-500 w-2/3"></div>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 ml-8">
                                <div className="w-12 h-12 bg-indigo-600 flex items-center justify-center">
                                <Smartphone className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                <div className="h-1.5 bg-indigo-500 mb-1"></div>
                                <div className="h-1.5 bg-indigo-500 w-3/4"></div>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 ml-8">
                                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                                <Target className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                <div className="h-1.5 bg-blue-500 mb-1"></div>
                                <div className="h-1.5 bg-blue-500 w-1/2"></div>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 ml-8">
                                <div className="w-12 h-12 bg-indigo-600 flex items-center justify-center">
                                <TrendingUp className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                <div className="h-1.5 bg-indigo-500 mb-1"></div>
                                <div className="h-1.5 bg-indigo-500 w-4/5"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 lg:py-20 bg-gradient-to-r from-zinc-800">
                    <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold mb-6 quicksand bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Pronto para potencializar sua operação?
                    </h2>
                    <p className="text-xl text-zinc-300 mb-8">
                        Entre em contato conosco e descubra como nossas soluções podem transformar seu negócio.
                    </p>
                    <button className="bg-blue-600 hover:bg-indigo-700 px-12 py-4 text-xl font-medium transition-colors inline-flex justify-center place-items-center items-center cursor-pointer group duration-300 lg:w-96 text-center"
                    onClick={()=>setPage('contact')}>
                        <p>Fale Conosco Agora</p>
                        <ArrowRight className="group-hover:ml-3 ml-1 w-6 h-6 duration-300" />
                    </button>
                    </div>
                </section>

                <Footer/>

            </div>
    )
}