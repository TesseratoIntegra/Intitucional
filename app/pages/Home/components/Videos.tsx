export default function Videos() {
    
    // const videos = [
    //     {
    //         src: "/vid/Tesserato1.mp4",
    //         title: "API Protheus - Estoque"
    //     },
    //     {
    //         src: "/vid/Tesserato2.mp4", 
    //         title: "Controle de Estoque Upload"
    //     }
    // ];

    return (
        <div className="relative">
            <div className="bg-gradient-to-br from-blue-300/90 dark:from-blue-600/20 to-indigo-300/50 dark:to-indigo-600/40 p-8 border border-zinc-400 dark:border-zinc-700 rounded-sm h-auto overflow-hidden">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Primeiro vídeo */}
                    <div className='bg-zinc-100 dark:bg-zinc-800 h-44 p-4 border border-zinc-400 dark:border-zinc-700 rounded-sm overflow-hidden cursor-pointer transition-all duration-300 hover:bg-zinc-750'>
                        <div className="w-full h-28 mb-3 rounded-sm animate-fade-up animate-delay-[1700ms]">
                            <video 
                                src="/vid/Tesserato1.mp4"
                                autoPlay 
                                loop 
                                muted 
                                controls
                                className="w-full h-full object-contain rounded-sm" 
                            />
                        </div>
                        <div className="animate-fade-up animate-delay-[1900ms]">
                            <p className="quicksand text-indigo-950 dark:text-indigo-300 text-sm">
                                API Protheus - Estoque
                            </p>
                        </div>
                    </div>
                    
                    {/* Segundo vídeo */}
                    <div className='bg-zinc-100 dark:bg-zinc-800 h-44 p-4 border border-zinc-400 dark:border-zinc-700 rounded-sm overflow-hidden cursor-pointer transition-all duration-300 hover:bg-zinc-750'>
                        <div className="w-full h-28 mb-3 rounded-sm animate-fade-up animate-delay-[2100ms]">
                            <video 
                                src="/vid/Tesserato2.mp4"
                                autoPlay 
                                loop 
                                muted 
                                controls
                                className="w-full h-full object-contain rounded-sm" 
                            />
                        </div>
                        <div className="animate-fade-up animate-delay-[2500ms]">
                            <p className="quicksand text-indigo-950 dark:text-indigo-300 text-sm">
                                Controle de Estoque Upload
                            </p>
                        </div>
                    </div>

                    {/* Terceiro vídeo */}
                    <div className='bg-zinc-100 dark:bg-zinc-800 h-44 p-4 border border-zinc-400 dark:border-zinc-700 rounded-sm overflow-hidden cursor-pointer transition-all duration-300 hover:bg-zinc-750'>
                        <div className="w-full h-28 mb-3 rounded-sm animate-fade-up animate-delay-[2100ms]">
                            <video 
                                src="/vid/Tesserato3.mp4"
                                autoPlay 
                                loop 
                                muted 
                                controls
                                className="w-full h-full object-contain rounded-sm" 
                            />
                        </div>
                        <div className="animate-fade-up animate-delay-[2500ms]">
                            <p className="quicksand text-indigo-950 dark:text-indigo-300 text-sm">
                                Gerador de Catálogo - Bling
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-4 border border-zinc-400 dark:border-zinc-700 rounded-sm">
                        <div className="text-white dark:text-zinc-800 w-full h-20 flex justify-center place-items-center bg-gradient-to-r from-indigo-400 dark:from-indigo-600 to-blue-500 dark:to-blue-400 mb-3 animate-fade-up animate-delay-[2900ms] rounded-sm">
                            Em breve...
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 bg-zinc-300 dark:bg-zinc-600 w-3/4 animate-fade animate-delay-[3500ms] rounded-full"></div>
                            <div className="h-2 bg-zinc-300 dark:bg-zinc-600 w-1/3 animate-fade animate-delay-[3900ms] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}