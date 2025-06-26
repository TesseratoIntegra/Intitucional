'use client'
import { ArrowRight, BarChart3, Smartphone, Target, TrendingUp, Link, Shield, CheckCircle, Clock, Users, Database, Settings } from 'lucide-react';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero'
import ScrollReveal from '@/components/ScrollReveal';

export default function ServicesPage(){

    const services = [
        {
            id: 1,
            icon: BarChart3,
            title: "Dashboards Interativos",
            description: "Painéis de controle personalizados que transformam dados complexos em insights visuais claros e acionáveis.",
            features: [
                "Visualizações em tempo real",
                "Métricas personalizáveis", 
                "Exportação de relatórios"
            ],
            gradient: "from-blue-500 to-indigo-500",
            hoverColor: "hover:border-blue-500/50 dark:hover:border-blue-500/50",
            iconBg: "group-hover:bg-blue-600",
            titleHover: "group-hover:text-blue-800 dark:group-hover:text-blue-400"
        },
        {
            id: 2,
            icon: Smartphone,
            title: "Apps de Campo",
            description: "Aplicações móveis que permitem captura e sincronização de dados em tempo real.",
            features: [
                "Sincronização automática",
                "Interface intuitiva",
                "Captura de fotos e assinaturas"
            ],
            gradient: "from-indigo-500 to-blue-500",
            hoverColor: "hover:border-indigo-500/50 dark:hover:border-indigo-500/50",
            iconBg: "group-hover:bg-indigo-600",
            titleHover: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
        },
        {
            id: 3,
            icon: Target,
            title: "Interfaces Personalizadas",
            description: "Desenvolvimento de interfaces específicas para diferentes departamentos, otimizando fluxos de trabalho únicos.",
            features: [
                "Integração com ERP",
                "Workflows automatizados",
                "Controle de permissões"
            ],
            gradient: "from-blue-600 to-indigo-400",
            hoverColor: "hover:border-blue-500/50 dark:hover:border-blue-500/50",
            iconBg: "group-hover:bg-blue-600",
            titleHover: "group-hover:text-blue-800 dark:group-hover:text-blue-400"
        },
        {
            id: 4,
            icon: TrendingUp,
            title: "Relatórios e Insights",
            description: "Análises avançadas e relatórios inteligentes conectados diretamente aos dados do seu ERP.",
            features: [
                "Análise preditiva",
                "Relatórios automatizados",
                "Business Intelligence"
            ],
            gradient: "from-indigo-600 to-blue-400",
            hoverColor: "hover:border-indigo-500/50 dark:hover:border-indigo-500/50",
            iconBg: "group-hover:bg-indigo-600",
            titleHover: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
        },
        {
            id: 5,
            icon: Link,
            title: "Integração de Sistemas",
            description: "Conectamos diferentes sistemas e plataformas para criar um ecossistema tecnológico unificado.",
            features: [
                "APIs robustas",
                "Sincronização de dados",
                "Monitoramento contínuo"
            ],
            gradient: "from-blue-500 to-indigo-600",
            hoverColor: "hover:border-blue-500/50 dark:hover:border-blue-500/50",
            iconBg: "group-hover:bg-blue-600",
            titleHover: "group-hover:text-blue-800 dark:group-hover:text-blue-400"
        },
        {
            id: 6,
            icon: Shield,
            title: "Consultoria Técnica",
            description: "Orientação especializada para otimização de processos e implementação de melhores práticas.",
            features: [
                "Análise de processos",
                "Treinamento de equipes",
                "Suporte contínuo"
            ],
            gradient: "from-indigo-500 to-blue-600",
            hoverColor: "hover:border-indigo-500/50 dark:hover:border-indigo-500/50",
            iconBg: "group-hover:bg-indigo-600",
            titleHover: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
        }
    ];

    const benefits = [
        {
            icon: Clock,
            title: "Implementação Rápida",
            description: "Soluções prontas para uso em tempo record"
        },
        {
            icon: Users,
            title: "Equipe Especializada",
            description: "Profissionais com vasta experiência em ERP"
        },
        {
            icon: Database,
            title: "Integração Segura",
            description: "Conectividade robusta e protegida"
        },
        {
            icon: Settings,
            title: "Personalização Total",
            description: "Adaptado às suas necessidades específicas"
        }
    ];

    return(
        <div className='bg-white dark:bg-zinc-900 h-screen overflow-y-scroll duration-300'>
            
            <Navbar/>
            <Hero title='Serviços' description='Soluções completas para potencializar seu ERP e otimizar seu negócio.'/>

            {/* Services Grid */}
            <section className="py-16 bg-zinc-200/70 dark:bg-zinc-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <div key={service.id}>
                                <ScrollReveal animation="fadeInUp" delay={100}>
                                    <div className={`bg-zinc-100 dark:bg-zinc-800 p-8 border border-zinc-400 dark:border-zinc-700 h-80 ${service.hoverColor} duration-300 group animate-fade-up rounded-sm`}>
                                        <div className="flex items-start space-x-6">
                                            <div className={`bg-white dark:bg-zinc-700 ${service.iconBg} border border-zinc-400 dark:border-zinc-600 p-4 text-2xl duration-300 flex-shrink-0 rounded-sm`}>
                                                <service.icon className={`w-10 h-10 text-${service.gradient.includes('blue') ? 'blue' : 'indigo'}-600 dark:text-${service.gradient.includes('blue') ? 'blue' : 'indigo'}-500 group-hover:text-white duration-300`} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-2xl font-bold mb-4 text-zinc-800 dark:text-white ${service.titleHover} duration-300 quicksand`}>
                                                    {service.title}
                                                </h3>
                                                <p className="text-zinc-800 dark:text-zinc-300 text-lg leading-relaxed mb-6">
                                                    {service.description}
                                                </p>
                                                <ul className="space-y-3">
                                                    {service.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-center space-x-3">
                                                            <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                                                            <span className="text-zinc-800 dark:text-zinc-300">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white dark:bg-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <ScrollReveal animation="fadeInUp" delay={100}>
                            <h2 className="text-4xl font-bold mb-4 quicksand text-indigo-700 dark:animated-gradient-smooth">
                                Por que escolher nossas soluções?
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeInUp" delay={200}>
                            <p className="text-xl text-zinc-800 dark:text-zinc-300 max-w-3xl mx-auto">
                                Unimos excelência técnica a um entendimento estratégico dos processos de negócio.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index}>
                                <ScrollReveal animation="fadeInUp" delay={150 * index}>
                                    <div className="text-center group">
                                        <div className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-600 to-indigo-600' : 'from-indigo-600 to-blue-600'} p-6 inline-block mb-4 group-hover:scale-110 duration-300 rounded-sm`}>
                                            <benefit.icon className="w-10 h-10 text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-2 quicksand text-zinc-800 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 duration-300">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-zinc-800 dark:text-zinc-300">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-zinc-200/70 dark:bg-zinc-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">

                        <ScrollReveal animation="fadeInUp" delay={100}>
                            <h2 className="text-4xl font-bold mb-4 quicksand text-zinc-900 dark:text-white">
                                Como <span className="text-indigo-700 dark:animated-gradient-smooth">Trabalhamos</span>
                            </h2>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fadeInUp" delay={200}>
                            <p className="text-xl text-zinc-800 dark:text-zinc-300 max-w-3xl mx-auto">
                                Processo estruturado para garantir o sucesso do seu projeto
                            </p>
                        </ScrollReveal>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-zinc-100 dark:bg-zinc-800 p-8 border border-zinc-400 dark:border-zinc-700 hover:border-blue-600 dark:hover:border-blue-500/50 duration-300 group text-center rounded-sm">

                            <ScrollReveal animation="fadeInUp" delay={100}>
                                <div className="bg-blue-600 group-hover:bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold duration-300 text-white">
                                    1
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fadeInUp" delay={200}>
                                <h3 className="text-2xl font-bold mb-4 quicksand text-zinc-800 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 duration-300">
                                    Análise e Planejamento
                                </h3>
                            </ScrollReveal>

                            <ScrollReveal animation="fadeInUp" delay={300}>
                                <p className="text-zinc-800 dark:text-zinc-300 leading-relaxed">
                                    Compreendemos suas necessidades e desafios específicos para criar a solução ideal.
                                </p>
                            </ScrollReveal>

                        </div>

                        <div className="bg-zinc-100 dark:bg-zinc-800 p-8 border border-zinc-400 dark:border-zinc-700 hover:border-indigo-600 dark:hover:border-indigo-500/50 duration-300 group text-center rounded-sm">

                            <ScrollReveal animation="fadeInUp" delay={400}>
                                <div className="bg-blue-600 group-hover:bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold duration-300 text-white">
                                    2
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fadeInUp" delay={500}>
                                <h3 className="text-2xl font-bold mb-4 quicksand text-zinc-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 duration-300">
                                    Desenvolvimento
                                </h3>
                            </ScrollReveal>

                            <ScrollReveal animation="fadeInUp" delay={600}>
                                <p className="text-zinc-800 dark:text-zinc-300 leading-relaxed">
                                    Criamos e desenvolvemos a solução com as melhores práticas e tecnologias modernas.
                                </p>
                            </ScrollReveal>

                        </div>

                        <div className="bg-zinc-100 dark:bg-zinc-800 p-8 border border-zinc-400 dark:border-zinc-700 hover:border-blue-600 dark:hover:border-blue-500/50 duration-300 group text-center rounded-sm">

                            <ScrollReveal animation="fadeInUp" delay={700}>
                                <div className="bg-blue-600 group-hover:bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold duration-300 text-white">
                                    3
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fadeInUp" delay={800}>
                                <h3 className="text-2xl font-bold mb-4 quicksand text-zinc-800 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 duration-300">
                                    Implementação e Suporte
                                </h3>
                            </ScrollReveal>

                            <ScrollReveal animation="fadeInUp" delay={900}>
                                <p className="text-zinc-800 dark:text-zinc-300 leading-relaxed">
                                    Implementamos a solução e oferecemos suporte contínuo para garantir o sucesso.
                                </p>
                            </ScrollReveal>

                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-zinc-200 dark:from-zinc-800 to-zinc-300 dark:to-zinc-900">
                <div className="max-w-4xl mx-auto text-center px-6">

                    <ScrollReveal animation="fadeInUp" delay={100}>
                        <h2 className="text-4xl font-bold mb-6 quicksand text-indigo-700 dark:animated-gradient-smooth">
                            Pronto para transformar sua operação?
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal animation="fadeInUp" delay={200}>
                        <p className="text-xl text-zinc-800 dark:text-zinc-300 mb-8 leading-relaxed">
                            Entre em contato conosco e descubra como nossas soluções podem potencializar seu ERP e otimizar seus processos.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fadeInUp" delay={300}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-500 dark:bg-blue-600 hover:bg-indigo-500 dark:hover:bg-indigo-700 text-white rounded-sm px-8 py-4 text-lg font-medium transition-colors inline-flex justify-center items-center cursor-pointer group duration-300 quicksand">
                                <a href="https://wa.me/5516992416689" target="_blank" rel="noopener noreferrer">Solicitar Orçamento</a>
                                <ArrowRight className="group-hover:ml-3 ml-2 w-5 h-5 duration-300" />
                            </button>
                            <a href="https://wa.me/5516992416689" target="_blank" rel="noopener noreferrer" className="border border-zinc-500 hover:border-zinc-900 dark:border-zinc-600 dark:hover:border-indigo-600 rounded-sm dark:hover:text-indigo-500 text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 px-8 py-4 text-lg font-medium transition-colors cursor-pointer quicksand duration-300">
                                Agendar Demonstração
                            </a>
                        </div>
                    </ScrollReveal>

                </div>
            </section>

            <Footer/>
        </div>
    )
}