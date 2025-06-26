
interface HeroProps {
    title: string;
    description: string;
}

export default function Hero({title, description}:HeroProps) {
    return(
        <>
            <div className="bg-zinc-900 w-full h-16"></div>
            <section className="relative overflow-hidden animate-fade">
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900 to-indigo-900/20"></div>
                <div className="relative max-w-7xl mx-auto px-6 h-[13rem] pt-5 flex justify-center place-items-center">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white quicksand animate-fade-up">
                            <span className="animated-gradient-smooth">{title}</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-zinc-300 mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-up animate-delay-[200ms]">
                            {description}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}