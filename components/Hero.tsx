
interface HeroProps {
    title: string;
    description: string;
}

export default function Hero({title, description}:HeroProps) {
    return(
        <>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 dark:from-zinc-900 via-zinc-300 dark:via-zinc-900 to-indigo-200 dark:to-indigo-900/20"></div>
                <div className="relative max-w-7xl mx-auto px-6 h-[13rem] pt-5 flex justify-center place-items-center">
                    <div className="text-center animate-fade">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white quicksand animate-fade-up">
                            <span className="text-indigo-700 dark:animated-gradient-smooth">{title}</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-up animate-delay-[200ms]">
                            {description}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}