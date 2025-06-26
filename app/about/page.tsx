'use client'
import { Target, Wrench, HandHeart, Rocket, Shield, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";

export default function Sobre(){

    return(
        <div className={`bg-zinc-900 h-screen overflow-x-auto duration-300`}>

            <Navbar/>
            <Hero title='Sobre Nós' description='Conheça nossa história, missão e os valores que nos guiam na criação de soluções inovadoras'/>

            {/* Nossa Missão Section */}
            <section className="py-12 bg-zinc-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 quicksand text-white animate-fade-up animate-delay-[200ms]">
                                Nossa <span className="animated-gradient-smooth">Missão</span>
                            </h2>
                            <p className="text-xl text-zinc-300 mb-6 leading-relaxed inter animate-fade-up animate-delay-[400ms]">
                                Acreditamos que um ERP sozinho não basta para impulsionar verdadeiramente uma operação. Nossa missão é desenvolver ferramentas inteligentes e microserviços que trabalham em perfeita harmonia com seu sistema principal, potencializando cada aspecto do seu negócio.
                            </p>
                            <p className="text-lg text-zinc-300 leading-relaxed inter animate-fade-up animate-delay-[600ms]">
                                Com anos de experiência no desenvolvimento de soluções corporativas, nossa equipe especializada entende as complexidades e desafios únicos que cada empresa enfrenta. Por isso, criamos soluções sob medida que se adaptam perfeitamente às suas necessidades específicas.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/40 p-8 border border-zinc-700 rounded-sm">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center rounded-sm animate-fade-up animate-delay-[100ms]">
                                            <Target className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-bold mb-2 quicksand animate-fade-up animate-delay-[200ms]">Soluções Integradas</h4>
                                            <div className="h-2 bg-blue-500 mb-1 rounded-full animate-fade-up animate-delay-[300ms]"></div>
                                            <div className="h-2 bg-blue-500 w-3/4 rounded-full animate-fade-up animate-delay-[400ms]"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center rounded-sm animate-fade-up animate-delay-[600ms]">
                                            <CheckCircle className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-bold mb-2 quicksand animate-fade-up animate-delay-[800ms]">Resultados Comprovados</h4>
                                            <div className="h-2 bg-indigo-500 mb-1 rounded-full animate-fade-up animate-delay-[1000ms]"></div>
                                            <div className="h-2 bg-indigo-500 w-4/5 rounded-full animate-fade-up animate-delay-[1200ms]"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center rounded-sm animate-fade-up animate-delay-[1400ms]">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-bold mb-2 quicksand animate-fade-up animate-delay-[1600ms]">Equipe Especializada</h4>
                                            <div className="h-2 bg-blue-500 mb-1 rounded-full animate-fade-up animate-delay-[1800ms]"></div>
                                            <div className="h-2 bg-blue-500 w-2/3 rounded-full animate-fade-up animate-delay-[2000ms]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nossa Abordagem Section */}
            <section className="py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <ScrollReveal animation="fadeInUp" delay={100}>
                            <h2 className="text-4xl font-bold mb-4 quicksand text-white">
                                Nossa <span className="animated-gradient-smooth">Abordagem</span>
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeInUp" delay={300}>
                            <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed inter">
                                Trabalhamos com uma metodologia ágil e colaborativa, sempre priorizando a integração simples e segura com seus sistemas existentes. 
                                Cada projeto é tratado como único, com soluções personalizadas que realmente fazem a diferença no dia a dia da sua empresa.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {/* Foco no Cliente */}
                        <ScrollReveal animation="fadeInUp" delay={100}>
                            <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-blue-500/50 duration-300 group rounded-sm">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-zinc-700 group-hover:bg-blue-600 border border-zinc-600 p-4 mb-6 text-2xl duration-300 rounded-sm">
                                        <Target className="w-10 h-10 text-blue-500 group-hover:text-white duration-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 duration-300 quicksand">
                                        Foco no Cliente
                                    </h3>
                                    <p className="text-zinc-300 text-lg leading-relaxed inter">
                                        Cada solução é desenvolvida pensando nas necessidades específicas e objetivos únicos de cada cliente.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Excelência Técnica */}
                        <ScrollReveal animation="fadeInUp" delay={200}>
                            <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-indigo-500/50 duration-300 group rounded-sm">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-zinc-700 group-hover:bg-indigo-600 border border-zinc-600 p-4 mb-6 text-2xl duration-300 rounded-sm">
                                        <Wrench className="w-10 h-10 text-indigo-500 group-hover:text-white duration-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 duration-300 quicksand">
                                        Excelência Técnica
                                    </h3>
                                    <p className="text-zinc-300 text-lg leading-relaxed inter">
                                        Utilizamos as melhores práticas e tecnologias mais modernas para garantir soluções robustas e escaláveis.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Parceria */}
                        <ScrollReveal animation="fadeInUp" delay={300}>
                            <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-blue-500/50 duration-300 group rounded-sm">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-zinc-700 group-hover:bg-blue-600 border border-zinc-600 p-4 mb-6 text-2xl duration-300 rounded-sm">
                                        <HandHeart className="w-10 h-10 text-blue-500 group-hover:text-white duration-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 duration-300 quicksand">
                                        Parceria
                                    </h3>
                                    <p className="text-zinc-300 text-lg leading-relaxed inter">
                                        Não somos apenas fornecedores, somos parceiros estratégicos no crescimento e sucesso do seu negócio.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Inovação */}
                        <ScrollReveal animation="fadeInUp" delay={100}>
                            <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-indigo-500/50 duration-300 group rounded-sm">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-zinc-700 group-hover:bg-indigo-600 border border-zinc-600 p-4 mb-6 text-2xl duration-300 rounded-sm">
                                        <Rocket className="w-10 h-10 text-indigo-500 group-hover:text-white duration-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 duration-300 quicksand">
                                        Inovação
                                    </h3>
                                    <p className="text-zinc-300 text-lg leading-relaxed inter">
                                        Estamos sempre buscando novas formas de otimizar processos e criar soluções que antecipem as necessidades futuras.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Segurança */}
                        <ScrollReveal animation="fadeInUp" delay={200}>
                            <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-blue-500/50 duration-300 group rounded-sm">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-zinc-700 group-hover:bg-blue-600 border border-zinc-600 p-4 mb-6 text-2xl duration-300 rounded-sm">
                                        <Shield className="w-10 h-10 text-blue-500 group-hover:text-white duration-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 duration-300 quicksand">
                                        Segurança
                                    </h3>
                                    <p className="text-zinc-300 text-lg leading-relaxed inter">
                                        Todas as nossas soluções são desenvolvidas com os mais altos padrões de segurança e proteção de dados.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Agilidade */}
                        <ScrollReveal animation="fadeInUp" delay={300}>
                            <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-indigo-500/50 duration-300 group rounded-sm">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-zinc-700 group-hover:bg-indigo-600 border border-zinc-600 p-4 mb-6 text-2xl duration-300 rounded-sm">
                                        <Zap className="w-10 h-10 text-indigo-500 group-hover:text-white duration-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 duration-300 quicksand">
                                        Agilidade
                                    </h3>
                                    <p className="text-zinc-300 text-lg leading-relaxed inter">
                                        Entregamos soluções rapidamente sem comprometer a qualidade, permitindo que você veja resultados em pouco tempo.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 lg:py-20 bg-gradient-to-r from-zinc-800">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <ScrollReveal animation="fadeInUp" delay={100}>
                        <h2 className="text-4xl font-bold mb-6 quicksand animated-gradient-smooth">
                            Vamos trabalhar juntos?
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal animation="fadeInUp" delay={200}>
                        <p className="text-xl text-zinc-300 mb-8 inter">
                            Entre em contato conosco e descubra como podemos impulsionar o crescimento do seu negócio com nossas soluções personalizadas.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal animation="fadeInUp" delay={300}>
                        <button className="bg-blue-600 hover:bg-indigo-700 px-12 py-4 text-xl font-medium transition-colors rounded-sm inline-flex justify-center place-items-center items-center cursor-pointer group duration-300 lg:w-96 text-center">
                            <p>Fale Conosco</p>
                            <ArrowRight className="group-hover:ml-3 ml-1 w-6 h-6 duration-300" />
                        </button>
                    </ScrollReveal>
                </div>
            </section>

            <Footer/>

        </div>
    )
}