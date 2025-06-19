'use client'
import { useAppContext } from "@/context/AppContext";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Building2, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Footer from '@/components/Footer'

export default function Contato(){
    const { page } = useAppContext()
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        empresa: '',
        telefone: '',
        assunto: '',
        mensagem: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aqui você pode implementar a lógica de envio do formulário
        console.log('Dados do formulário:', formData)
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
        // Resetar formulário
        setFormData({
            nome: '',
            email: '',
            empresa: '',
            telefone: '',
            assunto: '',
            mensagem: ''
        })
    }

    return(
        <div className={`bg-zinc-900 h-screen overflow-x-auto ${page === 'contact' ? 'min-w-[100vw]' : 'min-w-0'} duration-300`}>

            {/* Hero Section */}
            <section className="relative overflow-hidden animate-fade animate-delay-[1500ms]">
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900 to-indigo-900/20"></div>
                <div className="relative max-w-7xl mx-auto px-6 pt-24 h-72">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white quicksand animate-fade-up animate-delay-[1600ms]">
                            Entre em <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Contato</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-zinc-300 mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-up animate-delay-[1900ms]">
                            Conheça nossa história, missão e os valores que nos guiam na criação de soluções inovadoras
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info & Form Section */}
            <section className="py-12 lg:py-16 bg-zinc-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-4xl font-bold mb-8 quicksand text-white">
                                Fale <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Conosco</span>
                            </h2>
                            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                                Nossa equipe está pronta para entender suas necessidades e criar soluções sob medida para seu negócio.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 p-4 bg-zinc-800 border border-zinc-700 hover:border-blue-500/50 duration-300 group">
                                    <div className="bg-zinc-700 group-hover:bg-blue-600 p-3 duration-300">
                                        <Mail className="w-6 h-6 text-blue-500 group-hover:text-white duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold quicksand">Email</h4>
                                        <p className="text-zinc-300">contato@erptools.com.br</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 bg-zinc-800 border border-zinc-700 hover:border-indigo-500/50 duration-300 group">
                                    <div className="bg-zinc-700 group-hover:bg-indigo-600 p-3 duration-300">
                                        <Phone className="w-6 h-6 text-indigo-500 group-hover:text-white duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold quicksand">Telefone</h4>
                                        <p className="text-zinc-300">(11) 9 9999-9999</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 bg-zinc-800 border border-zinc-700 hover:border-blue-500/50 duration-300 group">
                                    <div className="bg-zinc-700 group-hover:bg-blue-600 p-3 duration-300">
                                        <MapPin className="w-6 h-6 text-blue-500 group-hover:text-white duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold quicksand">Localização</h4>
                                        <p className="text-zinc-300">São Paulo - SP, Brasil</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 bg-zinc-800 border border-zinc-700 hover:border-indigo-500/50 duration-300 group">
                                    <div className="bg-zinc-700 group-hover:bg-indigo-600 p-3 duration-300">
                                        <Clock className="w-6 h-6 text-indigo-500 group-hover:text-white duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold quicksand">Horário</h4>
                                        <p className="text-zinc-300">Segunda à Sexta: 8h às 18h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-zinc-800 p-8 border border-zinc-700">
                            <div className="flex items-center space-x-3 mb-8">
                                <div className="bg-blue-600 p-3">
                                    <MessageSquare className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white quicksand">Envie sua Mensagem</h3>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="nome" className="block text-sm font-medium text-zinc-300 mb-2">
                                            Nome Completo *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                            <input
                                                type="text"
                                                id="nome"
                                                name="nome"
                                                value={formData.nome}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                placeholder="Seu nome completo"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                                            Email *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                placeholder="seu@email.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="empresa" className="block text-sm font-medium text-zinc-300 mb-2">
                                            Empresa
                                        </label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                            <input
                                                type="text"
                                                id="empresa"
                                                name="empresa"
                                                value={formData.empresa}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-3 bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                placeholder="Nome da sua empresa"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="telefone" className="block text-sm font-medium text-zinc-300 mb-2">
                                            Telefone
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                            <input
                                                type="tel"
                                                id="telefone"
                                                name="telefone"
                                                value={formData.telefone}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-3 bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                placeholder="(11) 9 9999-9999"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="assunto" className="block text-sm font-medium text-zinc-300 mb-2">
                                        Assunto *
                                    </label>
                                    <select
                                        id="assunto"
                                        name="assunto"
                                        value={formData.assunto}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                    >
                                        <option value="">Selecione um assunto</option>
                                        <option value="dashboards">Dashboards e Painéis</option>
                                        <option value="apps-campo">Apps de Campo</option>
                                        <option value="interfaces">Interfaces Personalizadas</option>
                                        <option value="relatorios">Relatórios e Insights</option>
                                        <option value="integracao">Integração com ERP</option>
                                        <option value="consultoria">Consultoria</option>
                                        <option value="outro">Outro</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="mensagem" className="block text-sm font-medium text-zinc-300 mb-2">
                                        Mensagem *
                                    </label>
                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        value={formData.mensagem}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-vertical"
                                        placeholder="Conte-nos sobre seu projeto, necessidades específicas e como podemos ajudar..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-indigo-700 px-8 py-4 text-xl font-medium transition-colors inline-flex justify-center items-center cursor-pointer group duration-300"
                                >
                                    <Send className="mr-2 w-6 h-6" />
                                    <span>Enviar Mensagem</span>
                                    <ArrowRight className="group-hover:ml-3 ml-1 w-6 h-6 duration-300" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 lg:py-20 bg-gradient-to-r from-zinc-800">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold mb-6 quicksand bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        Resposta Rápida Garantida
                    </h2>
                    <p className="text-xl text-zinc-300 mb-8">
                        Nossa equipe responde todas as mensagens em até 24 horas. Estamos ansiosos para conhecer seu projeto!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="bg-blue-600 p-4 inline-block mb-3">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-blue-400 quicksand">24 Horas</h4>
                            <p className="text-sm text-zinc-400">Tempo de resposta</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-indigo-600 p-4 inline-block mb-3">
                                <MessageSquare className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-indigo-400 quicksand">Consultoria</h4>
                            <p className="text-sm text-zinc-400">Inicial gratuita</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-600 p-4 inline-block mb-3">
                                <User className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-blue-400 quicksand">Especialistas</h4>
                            <p className="text-sm text-zinc-400">Equipe dedicada</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

        </div>
    )
}