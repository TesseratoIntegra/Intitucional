'use client'
import { useAppContext } from "@/context/AppContext";
import { Target, Wrench, HandHeart, Rocket, Shield, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer'

export default function Sobre(){
    const { page } = useAppContext()

    return(
        <div className={`bg-zinc-900 h-screen overflow-x-auto ${page === 'about' ? 'min-w-[100vw]' : 'min-w-0'} duration-300`}>

            {/* Hero Section */}
            <section className="relative overflow-hidden animate-fade animate-delay-[1500ms]">
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900 to-indigo-900/20"></div>
                <div className="relative max-w-7xl mx-auto px-6 pt-24 h-72">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white quicksand animate-fade-up animate-delay-[1600ms]">
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Sobre Nós</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-zinc-300 mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-up animate-delay-[1900ms]">
                            Conheça nossa história, missão e os valores que nos guiam na criação de soluções inovadoras
                        </p>
                    </div>
                </div>
            </section>

            {/* Nossa Missão Section */}
            <section className="py-12 lg:py-16 bg-zinc-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 quicksand text-white">
                                Nossa <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Missão</span>
                            </h2>
                            <p className="text-xl text-zinc-300 mb-6 leading-relaxed">
                                Acreditamos que um ERP sozinho não basta para impulsionar verdadeiramente uma operação. Nossa missão é desenvolver ferramentas inteligentes e microserviços que trabalham em perfeita harmonia com seu sistema principal, potencializando cada aspecto do seu negócio.
                            </p>
                            <p className="text-lg text-zinc-300 leading-relaxed">
                                Com anos de experiência no desenvolvimento de soluções corporativas, nossa equipe especializada entende as complexidades e desafios únicos que cada empresa enfrenta. Por isso, criamos soluções sob medida que se adaptam perfeitamente às suas necessidades específicas.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/40 p-8 border border-zinc-700">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                                            <Target className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-bold mb-2 quicksand">Soluções Integradas</h4>
                                            <div className="h-2 bg-blue-500 mb-1"></div>
                                            <div className="h-2 bg-blue-500 w-3/4"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center">
                                            <CheckCircle className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-bold mb-2 quicksand">Resultados Comprovados</h4>
                                            <div className="h-2 bg-indigo-500 mb-1"></div>
                                            <div className="h-2 bg-indigo-500 w-4/5"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-bold mb-2 quicksand">Equipe Especializada</h4>
                                            <div className="h-2 bg-blue-500 mb-1"></div>
                                            <div className="h-2 bg-blue-500 w-2/3"></div>
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
                        <h2 className="text-4xl font-bold mb-4 quicksand text-white">
                            Nossa <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Abordagem</span>
                        </h2>
                        <p className="text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
                            Trabalhamos com uma metodologia ágil e colaborativa, sempre priorizando a integração simples e segura com seus sistemas existentes. 
                            Cada projeto é tratado como único, com soluções personalizadas que realmente fazem a diferença no dia a dia da sua empresa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {/* Foco no Cliente */}
                        <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-blue-500/50 duration-300 group">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-zinc-700 group-hover:bg-blue-600 border border-zinc-600 p-4 mb-6 text-2xl duration-300">
                                    <Target className="w-10 h-10 text-blue-500 group-hover:text-white duration-300" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 duration-300 quicksand">
                                    Foco no Cliente
                                </h3>
                                <p className="text-zinc-300 text-lg leading-relaxed">
                                    Cada solução é desenvolvida pensando nas necessidades específicas e objetivos únicos de cada cliente.
                                </p>
                            </div>
                        </div>

                        {/* Excelência Técnica */}
                        <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-indigo-500/50 duration-300 group">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-zinc-700 group-hover:bg-indigo-600 border border-zinc-600 p-4 mb-6 text-2xl duration-300">
                                    <Wrench className="w-10 h-10 text-indigo-500 group-hover:text-white duration-300" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 duration-300 quicksand">
                                    Excelência Técnica
                                </h3>
                                <p className="text-zinc-300 text-lg leading-relaxed">
                                    Utilizamos as melhores práticas e tecnologias mais modernas para garantir soluções robustas e escaláveis.
                                </p>
                            </div>
                        </div>

                        {/* Parceria */}
                        <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-blue-500/50 duration-300 group">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-zinc-700 group-hover:bg-blue-600 border border-zinc-600 p-4 mb-6 text-2xl duration-300">
                                    <HandHeart className="w-10 h-10 text-blue-500 group-hover:text-white duration-300" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 duration-300 quicksand">
                                    Parceria
                                </h3>
                                <p className="text-zinc-300 text-lg leading-relaxed">
                                    Não somos apenas fornecedores, somos parceiros estratégicos no crescimento e sucesso do seu negócio.
                                </p>
                            </div>
                        </div>

                        {/* Inovação */}
                        <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-indigo-500/50 duration-300 group">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-zinc-700 group-hover:bg-indigo-600 border border-zinc-600 p-4 mb-6 text-2xl duration-300">
                                    <Rocket className="w-10 h-10 text-indigo-500 group-hover:text-white duration-300" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 duration-300 quicksand">
                                    Inovação
                                </h3>
                                <p className="text-zinc-300 text-lg leading-relaxed">
                                    Estamos sempre buscando novas formas de otimizar processos e criar soluções que antecipem as necessidades futuras.
                                </p>
                            </div>
                        </div>

                        {/* Segurança */}
                        <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-blue-500/50 duration-300 group">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-zinc-700 group-hover:bg-blue-600 border border-zinc-600 p-4 mb-6 text-2xl duration-300">
                                    <Shield className="w-10 h-10 text-blue-500 group-hover:text-white duration-300" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 duration-300 quicksand">
                                    Segurança
                                </h3>
                                <p className="text-zinc-300 text-lg leading-relaxed">
                                    Todas as nossas soluções são desenvolvidas com os mais altos padrões de segurança e proteção de dados.
                                </p>
                            </div>
                        </div>

                        {/* Agilidade */}
                        <div className="bg-zinc-800 p-8 border border-zinc-700 hover:border-indigo-500/50 duration-300 group">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-zinc-700 group-hover:bg-indigo-600 border border-zinc-600 p-4 mb-6 text-2xl duration-300">
                                    <Zap className="w-10 h-10 text-indigo-500 group-hover:text-white duration-300" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 duration-300 quicksand">
                                    Agilidade
                                </h3>
                                <p className="text-zinc-300 text-lg leading-relaxed">
                                    Entregamos soluções rapidamente sem comprometer a qualidade, permitindo que você veja resultados em pouco tempo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 lg:py-20 bg-gradient-to-r from-zinc-800">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold mb-6 quicksand bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Vamos trabalhar juntos?
                    </h2>
                    <p className="text-xl text-zinc-300 mb-8">
                        Entre em contato conosco e descubra como podemos impulsionar o crescimento do seu negócio com nossas soluções personalizadas.
                    </p>
                    <button className="bg-blue-600 hover:bg-indigo-700 px-12 py-4 text-xl font-medium transition-colors inline-flex justify-center place-items-center items-center cursor-pointer group duration-300 lg:w-96 text-center">
                        <p>Fale Conosco</p>
                        <ArrowRight className="group-hover:ml-3 ml-1 w-6 h-6 duration-300" />
                    </button>
                </div>
            </section>

            <Footer/>

        </div>
    )
}