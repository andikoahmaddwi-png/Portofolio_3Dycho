import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounter";  
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
const Hero = () => {
useGSAP(() =>{
    gsap.fromTo('.hero-text h1', 
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 2,
            ease: 'power2.inOut'
        },
    )
})

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                {/* LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Shaping Designs&nbsp;
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((item) => (
                                            <span key={item.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img 
                                                    src={item.imgPath}
                                                    alt={item.text}
                                                    className="xl:size md:size-10 size-7 md:p-2 p-1 rounded-full bg-white bg-opacity-50"
                                                />
                                                <span>{item.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>Into real projects</h1>
                            <h1>That deliver results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                                Hi, I'm Ahmad Dwi Andiko Santoso Putra, a landing page developer in the front-end section.
                            </p>
                            <Button 
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="work"
                            text="See my Work"
                            />
                    </div>
                </header>

                {/* RIGHT: 3d MODEL */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    );
}

export default Hero;