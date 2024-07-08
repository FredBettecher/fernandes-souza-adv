"use client";

import Image from "next/image";
import HeroBg from "../../../public/images/hero-bg.webp";
import Logo from "../../../public/logo.webp"

export default function HeroSection() {
  const scrollToSection = () => {
    const element = document.getElementById('contact');
    if (!element) return;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <>
      <div className="relative w-screen h-screen">
        <Image src={HeroBg} alt="Justiça" className="absolute inset-0 object-cover h-screen opacity-[0.4]" />
      </div>
      <section id="hero" className="flex flex-col items-center justify-center gap-28 h-screen w-screen absolute bg-gradient-to-r from-[#000] via-transparent to-[#000]">
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="Fernandes e Souza" />
          <h1 className="font-bold text-2xl lg:text-4xl">Fernandes<br />
            <span className="ml-12">& Souza</span>
          </h1>
        </div>
        <h4 className="text-center text-lg lg:text-xl px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, et.</h4>
        <button onClick={() => scrollToSection()} className="uppercase font-bold bg-[#FFFFFF] p-4 rounded-lg text-black hover:bg-[#bbbbbb] transition duration-[200ms] active:scale-95">entre em contato</button>
      </section>
    </>
  );
}
