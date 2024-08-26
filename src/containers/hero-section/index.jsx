"use client";

import Image from "next/image";
import HeroBg from "../../../public/images/hero-bg.webp";
import Logo from "../../../public/logo-2.webp"

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
      <section id="hero" className="flex flex-col items-center justify-around h-screen w-screen absolute bg-gradient-to-r from-[#000] via-transparent to-[#000]">
        <Image src={Logo} alt="Fernandes e Souza" className="w-[40rem] mt-10" />
        <button
        onClick={() => scrollToSection()}
        className="uppercase font-bold bg-custom-beige p-4 rounded-xl text-custom-blue transition duration-200 active:scale-95 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none"
        >
          entre em contato
        </button>
      </section>
    </>
  );
}
