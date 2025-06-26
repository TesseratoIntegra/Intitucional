'use client'
import { ArrowRight, BarChart3, Smartphone, Target, TrendingUp, Shield, Zap, Users } from 'lucide-react';
import ScrollReveal from "@/components/ScrollReveal";
import Banner from '@/app/pages/Home/components/Banner'
import Videos from '@/app/pages/Home/components/Videos'
import Footer from '@/components/Footer'
import Navbar from "@/components/Navbar";

export default function Home(){

    return(
        <div className={`bg-white dark:bg-zinc-900 h-screen overflow-x-auto min-w-[100vw] duration-300`}>

            <Navbar/>

            <Banner/>

            <section className="relative overflow-hidden animate-fade animate-delay-[1500ms]">
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 dark:from-zinc-900 via-white dark:via-zinc-900 to-indigo-100/20 dark:to-indigo-900/20"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-10 xl:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                        <h1 className="text-xl lg:text-5xl font-bold leading-tight mb-6 text-zinc-900 dark:text-white quicksand animate-fade-up animate-delay-[1600ms]">
                            Além do {' '}
                            <span className="text-indigo-700 dark:animated-gradient-smooth">ERP</span>: ferramentas que{' '}
                            <span className="text-indigo-700 dark:animated-gradient-smooth">impulsionam</span> sua operação
                        </h1>
                        <p className="text-lg lg:text-xl text-zinc-800 dark:text-zinc-300 mb-8 leading-relaxed animate-fade-up animate-delay-[1900ms]">
                            Um ERP isolado não supre todas as demandas operacionais. 
                            Por isso, criamos soluções inteligentes que se integram ao seu sistema principal, ampliando sua eficiência e capacidade de automação.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-blue-500 dark:bg-blue-600 hover:bg-indigo-500 dark:hover:bg-indigo-700 group text-white rounded-sm px-8 py-4 text-lg font-medium transition-colors flex items-center justify-center quicksand cursor-pointer lg:w-56 duration-300">
                            Fale Conosco
                            <ArrowRight className="group-hover:ml-3 ml-1 w-5 h-5 duration-300" />
                            </button>
                            <button className="border border-zinc-500 hover:border-zinc-900 dark:border-zinc-600 dark:hover:border-indigo-600 rounded-sm dark:hover:text-indigo-500 text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 px-8 py-4 text-lg font-medium transition-colors cursor-pointer quicksand duration-300">
                            Nossas Soluções
                            </button>
                        </div>
                        </div>
                        
                        <Videos/>

                    </div>
                    </div>
                </section>


                {/* Solutions Section */}
                <section id="solucoes" className="py-12 lg:pt-16 lg:pb-20 bg-zinc-200/70 dark:bg-zinc-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <ScrollReveal animation="fadeInUp" delay={100}>
                            <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4 quicksand text-indigo-700 dark:animated-gradient-smooth">
                                Nossas Soluções
                            </h2>
                            <p className="text-xl text-zinc-800 dark:text-zinc-300 max-w-3xl mx-auto">
                                Ferramentas inteligentes desenvolvidas para potencializar sua operação
                            </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ScrollReveal animation="fadeInUp" delay={200}>
                                <div className="bg-zinc-100 dark:bg-zinc-800 p-8 border border-zinc-400 hover:border-blue-600 dark:border-zinc-700 dark:hover:border-blue-500/50 duration-300 group rounded-sm">
                                    <div className="flex items-start space-x-4">
                                    <div className="bg-white dark:bg-zinc-700 group-hover:bg-blue-600 border border-zinc-400 dark:border-zinc-600 p-3 text-2xl duration-300 rounded-sm">
                                        <BarChart3 className="w-8 h-8 text-blue-600 dark:text-blue-500 group-hover:text-white duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-800 dark:group-hover:text-blue-400 duration-300 quicksand text-zinc-800 dark:text-white">
                                        Dashboards e painéis interativos
                                        </h3>
                                        <p className="text-zinc-800 dark:text-zinc-300 text-lg leading-relaxed">
                                        Para decisões mais rápidas com visualizações em tempo real dos seus dados mais importantes.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fadeInUp" delay={300}>
                                <div className="bg-zinc-100 dark:bg-zinc-800 p-8 border border-zinc-400 hover:border-indigo-600 dark:border-zinc-700 dark:hover:border-indigo-500/50 duration-300 group rounded-sm">
                                    <div className="flex items-start space-x-4">
                                    <div className="bg-white dark:bg-zinc-700 group-hover:bg-indigo-600 border border-zinc-400 dark:border-zinc-600 p-3 text-2xl duration-300 rounded-sm">
                                        <Smartphone className="w-8 h-8 text-indigo-600 dark:text-indigo-500 group-hover:text-white duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 duration-300 quicksand text-zinc-800 dark:text-white">
                                        Apps de campo
                                        </h3>
                                        <p className="text-zinc-800 dark:text-zinc-300 text-lg leading-relaxed">
                                        Para captura de dados em tempo real, permitindo que sua equipe trabalhe de qualquer lugar.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fadeInUp" delay={400}>
                                <div className="bg-zinc-100 dark:bg-zinc-800 p-8 border border-zinc-400 hover:border-blue-600 dark:border-zinc-700 dark:hover:border-blue-500/50 duration-300 group rounded-sm">
                                    <div className="flex items-start space-x-4">
                                    <div className="bg-white dark:bg-zinc-700 group-hover:bg-blue-600 border border-zinc-400 dark:border-zinc-600 p-3 text-2xl duration-300 rounded-sm">
                                        <Target className="w-8 h-8 text-blue-600 dark:text-blue-500 group-hover:text-white duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-800 dark:group-hover:text-blue-400 duration-300 quicksand text-zinc-800 dark:text-white">
                                        Interfaces personalizadas
                                        </h3>
                                        <p className="text-zinc-800 dark:text-zinc-300 text-lg leading-relaxed">
                                        Para áreas como vendas e logística, otimizando processos específicos do seu negócio.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fadeInUp" delay={550}>
                                <div className="bg-zinc-100 dark:bg-zinc-800 p-8 border border-zinc-400 hover:border-indigo-600 dark:border-zinc-700 dark:hover:border-indigo-500/50 duration-300 group rounded-sm">
                                    <div className="flex items-start space-x-4">
                                    <div className="bg-white dark:bg-zinc-700 group-hover:bg-indigo-600 border border-zinc-400 dark:border-zinc-600 p-3 text-2xl duration-300 rounded-sm">
                                        <TrendingUp className="w-8 h-8 text-indigo-600 dark:text-indigo-500 group-hover:text-white duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 duration-300 quicksand text-zinc-800 dark:text-white">
                                        Relatórios e insights
                                        </h3>
                                        <p className="text-zinc-800 dark:text-zinc-300 text-lg leading-relaxed">
                                        Conectados direto ao ERP, fornecendo análises profundas para tomada de decisão estratégica.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Integration Section */}
                <section id="integracao" className="py-12 lg:py-16 bg-white dark:bg-zinc-900">
                    <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>

                        <ScrollReveal animation="fadeInUp" delay={100}>
                            <h2 className="text-4xl font-bold mb-6 quicksand">
                                Integração <span className="text-indigo-700 dark:animated-gradient-smooth">Simples e Segura</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeInUp" delay={300}>
                            <p className="text-xl text-zinc-900 dark:text-zinc-300 mb-8 leading-relaxed">
                                Todas as nossas soluções são desenvolvidas com integração simples, segura e sob medida para o seu negócio.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeInUp" delay={400}>
                            <p className="text-lg text-zinc-900 dark:text-zinc-300 mb-8 leading-relaxed">
                                Nossa equipe especializada trabalha para entender suas necessidades específicas e criar ferramentas 
                                que realmente fazem a diferença no dia a dia da sua empresa.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fadeInUp" delay={500}>
                            <p className="text-lg text-zinc-900 dark:text-zinc-300 mb-8 leading-relaxed">
                                Com anos de experiência em desenvolvimento de microserviços e integração com sistemas ERP, 
                                garantimos soluções robustas e confiáveis.
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:mb-8">

                            <ScrollReveal animation="fadeInUp" delay={100}>
                                <div className="text-center">
                                    <div className="bg-blue-500 dark:bg-blue-600 p-4 inline-block mb-1 rounded-full">
                                        <Shield className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-blue-800 dark:text-blue-400 quicksand">Seguro</h4>
                                    <p className="text-sm text-zinc-800 dark:text-zinc-400">Proteção total dos dados</p>
                                </div>
                            </ScrollReveal> 

                            <ScrollReveal animation="fadeInUp" delay={200}>
                                <div className="text-center">
                                    <div className="bg-indigo-500 dark:bg-indigo-600 p-4 inline-block mb-1 rounded-full">
                                        <Zap className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-indigo-800 dark:text-indigo-400 quicksand">Rápido</h4>
                                    <p className="text-sm text-zinc-800 dark:text-zinc-400">Implementação ágil</p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fadeInUp" delay={300}>
                                <div className="text-center">
                                    <div className="bg-blue-500 dark:bg-blue-600 p-4 inline-block mb-1 rounded-full">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-blue-800 dark:text-blue-400 quicksand">Personalizado</h4>
                                    <p className="text-sm text-zinc-800 dark:text-zinc-400">Sob medida para você</p>
                                </div>
                            </ScrollReveal>
                        </div>
                        </div>

                        <div className="relative">
                        <div className="bg-zinc-50 border-zinc-400 dark:bg-zinc-800 border dark:border-zinc-700 p-8 rounded-sm">
                            <div className="space-y-6">
                            <ScrollReveal animation="fadeInUp" delay={100}>
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 dark:from-blue-600 to-indigo-500 dark:to-indigo-600 flex items-center justify-center rounded-sm">
                                    <span className="text-white font-bold">ERP</span>
                                    </div>
                                    <div className="flex-1">
                                    <div className="h-2 bg-zinc-300 dark:bg-zinc-600 mb-2 rounded-full"></div>
                                    <div className="h-2 bg-zinc-300 dark:bg-zinc-600 w-3/4 rounded-full"></div>
                                    </div>
                                </div>
                            </ScrollReveal>
                            
                            <div className="border-l-2 border-dashed border-zinc-400 dark:border-zinc-600 ml-8 h-12"></div>
                            
                            <ScrollReveal animation="fadeInUp" delay={200}>
                                <div className="flex items-center space-x-4 ml-8">
                                    <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 flex items-center justify-center rounded-sm">
                                    <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                    <div className="h-1.5 bg-blue-500 dark:bg-blue-500 mb-1 rounded-full"></div>
                                    <div className="h-1.5 bg-blue-500 dark:bg-blue-500 w-2/3 rounded-full"></div>
                                    </div>
                                </div>
                            </ScrollReveal>
                            
                            <ScrollReveal animation="fadeInUp" delay={300}>
                                <div className="flex items-center space-x-4 ml-8">
                                    <div className="w-12 h-12 bg-indigo-500 dark:bg-indigo-600 flex items-center justify-center rounded-sm">
                                    <Smartphone className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                    <div className="h-1.5 bg-indigo-500 dark:bg-indigo-500 mb-1 rounded-full"></div>
                                    <div className="h-1.5 bg-indigo-500 dark:bg-indigo-500 w-3/4 rounded-full"></div>
                                    </div>
                                </div>
                            </ScrollReveal>
                            
                            <ScrollReveal animation="fadeInUp" delay={400}>
                                <div className="flex items-center space-x-4 ml-8">
                                    <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 flex items-center justify-center rounded-sm">
                                    <Target className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                    <div className="h-1.5 bg-blue-500 dark:bg-blue-500 mb-1 rounded-full"></div>
                                    <div className="h-1.5 bg-blue-500 dark:bg-blue-500 w-1/2 rounded-full"></div>
                                    </div>
                                </div>
                            </ScrollReveal>
                            
                            <ScrollReveal animation="fadeInUp" delay={500}>
                                <div className="flex items-center space-x-4 ml-8">
                                    <div className="w-12 h-12 bg-indigo-500 dark:bg-indigo-600 flex items-center justify-center rounded-sm">
                                    <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                    <div className="h-1.5 bg-indigo-500 dark:bg-indigo-500 mb-1 rounded-full"></div>
                                    <div className="h-1.5 bg-indigo-500 dark:bg-indigo-500 w-4/5 rounded-full"></div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 lg:py-20 bg-gradient-to-r dark:from-zinc-800 from-zinc-200">
                    <div className="max-w-4xl mx-auto text-center px-6">

                    <ScrollReveal animation="fadeInUp" delay={100}>
                        <h2 className="text-4xl font-bold mb-6 quicksand text-indigo-700 dark:animated-gradient-smooth">
                            Pronto para potencializar sua operação?
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal animation="fadeInUp" delay={200}>
                        <p className="text-xl text-zinc-800 dark:text-zinc-300 mb-8">
                            Entre em contato conosco e descubra como nossas soluções podem transformar seu negócio.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fadeInUp" delay={300}>
                        <button className="bg-blue-600 hover:bg-indigo-700 rounded-sm px-12 py-4 text-xl font-medium transition-colors inline-flex justify-center place-items-center items-center cursor-pointer group duration-300 lg:w-96 text-center">
                            <p>Fale Conosco Agora</p>
                            <ArrowRight className="group-hover:ml-3 ml-1 w-6 h-6 duration-300" />
                        </button>
                    </ScrollReveal>

                    </div>
                </section>

                <Footer/>

            </div>
    )
}