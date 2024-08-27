"use client";

import Image from "next/image";
import HeroBg from "../../../public/images/hero-bg.webp";
import Logo from "../../../public/logo-4.webp"

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
      <section id="hero" className="flex flex-col items-center justify-around h-screen w-screen absolute bg-gradient-to-r from-custom-blue-dark via-transparent to-custom-blue-dark">
        <Image src={Logo} alt="Fernandes e Souza" className="w-[40rem] mt-10" />
        <button
          onClick={() => scrollToSection()}
          className="uppercase font-bold bg-custom-beige p-4 rounded-xl text-custom-blue transition duration-300 ease-linear active:scale-95 shadow-md hover:shadow-lg transform hover:bg-custom-blue hover:text-custom-beige focus:outline-none "
        >
          entre em contato
        </button>
      </section>
    </>
  );
}
