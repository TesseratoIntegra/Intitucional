import { useState, useEffect } from 'react';

export default function Videos() {
    const [expandedVideo, setExpandedVideo] = useState(null);
    
    const videos = [
        {
            src: "/vid/Tesserato1.mp4",
            title: "API Protheus - Estoque"
        },
        {
            src: "/vid/Tesserato2.mp4", 
            title: "Controle de Estoque Upload"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setExpandedVideo((prev) => {
                if (prev === null) return 0; // Primeiro vídeo
                if (prev === 0) return 1; // Segundo vídeo
                return null; // Volta ao layout normal
            });
        }, 5000); // Alterna a cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/40 p-8 border border-zinc-700 rounded-sm h-[25rem] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className={`bg-zinc-800 h-44 p-4 border border-zinc-700 rounded-sm overflow-hidden ${
                        expandedVideo === 0 ? 'absolute inset-0 z-50 m-0 rounded-none h-full w-auto transition-all duration-1000 ease-in-out' : 'relative'
                    }`}>
                        <div className={`w-full animate-fade-up animate-delay-[1700ms] rounded-sm ${
                            expandedVideo === 0 ? 'h-[95%] mb-0 flex items-center justify-center transition-all duration-1000 ease-in-out mt-[-1rem]' : 'h-20 mb-10'
                        }`}>
                            <video 
                                src="/vid/Tesserato1.mp4" 
                                controls={expandedVideo === 0} 
                                autoPlay 
                                loop 
                                muted 
                                className={`rounded-sm transition-all duration-1000 ${
                                    expandedVideo === 0 ? 'w-full h-full object-contain' : 'w-auto h-auto'
                                }`} 
                            />
                        </div>
                        <div className={`animate-fade-up animate-delay-[1900ms] transition-all duration-1000 ${
                            expandedVideo === 0 ? 'text-center' : ''
                        }`}>
                            <p className={`quicksand animated-gradient-smooth ${
                                expandedVideo === 0 ? 'text-3xl font-bold' : ''
                            }`}>
                                API Protheus - Estoque
                            </p>
                        </div>
                        {expandedVideo === 0 && (
                            <button 
                                onClick={() => setExpandedVideo(null)}
                                className="absolute top-4 right-4 bg-zinc-800/80 hover:bg-zinc-700 text-white h-2 w-2 flex justify-center place-items-center rounded-full transition-colors cursor-pointer duration-300"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                    
                    <div className={`bg-zinc-800 h-44 p-4 border border-zinc-700 rounded-sm overflow-hidden ${
                        expandedVideo === 1 ? 'absolute inset-0 z-50 m-0 rounded-none h-full w-auto transition-all duration-1000 ease-in-out' : 'relative'
                    }`}>
                        <div className={`w-full animate-fade-up animate-delay-[2100ms] rounded-sm ${
                            expandedVideo === 1 ? 'h-[95%] mb-0 flex items-center justify-center transition-all duration-1000 ease-in-out mt-[-1rem]' : 'h-20 mb-10'
                        }`}>
                            <video 
                                src="/vid/Tesserato2.mp4" 
                                controls={expandedVideo === 1} 
                                autoPlay 
                                loop 
                                muted 
                                className={`rounded-sm transition-all duration-1000 ${
                                    expandedVideo === 1 ? 'w-full h-full object-contain' : 'w-auto h-auto'
                                }`} 
                            />
                        </div>
                        <div className={`animate-fade-up animate-delay-[2500ms] transition-all duration-1000 ${
                            expandedVideo === 1 ? 'text-center' : ''
                        }`}>
                            <p className={`quicksand animated-gradient-smooth ${
                                expandedVideo === 1 ? 'text-3xl font-bold' : ''
                            }`}>
                                Controle de Estoque Upload
                            </p>
                        </div>
                        {expandedVideo === 1 && (
                            <button 
                                onClick={() => setExpandedVideo(null)}
                                className="absolute top-4 right-4 bg-zinc-800/80 hover:bg-zinc-700 text-white h-2 w-2 flex justify-center place-items-center rounded-full transition-colors cursor-pointer duration-300"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                    
                    <div className="bg-zinc-800 p-4 border border-zinc-700 rounded-sm">
                        <div className="w-full h-20 text-zinc-800 flex justify-center place-items-center bg-gradient-to-r from-blue-600 to-indigo-400 mb-3 animate-fade-up animate-delay-[2500ms] rounded-sm">
                            Em breve...
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 bg-zinc-600 w-1/2 animate-fade animate-delay-[3100ms] rounded-full"></div>
                            <div className="h-2 bg-zinc-600 w-2/3 animate-fade animate-delay-[3500ms] rounded-full"></div>
                        </div>
                    </div>
                    
                    <div className="bg-zinc-800 p-4 border border-zinc-700 rounded-sm">
                        <div className="w-full h-20 text-zinc-800 flex justify-center place-items-center bg-gradient-to-r from-indigo-600 to-blue-400 mb-3 animate-fade-up animate-delay-[2900ms] rounded-sm">
                            Em breve...
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 bg-zinc-600 w-3/4 animate-fade animate-delay-[3500ms] rounded-full"></div>
                            <div className="h-2 bg-zinc-600 w-1/3 animate-fade animate-delay-[3900ms] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}