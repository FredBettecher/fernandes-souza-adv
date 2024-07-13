"use client";

import Image from "next/image";
import Logo from "../../../public/logo.webp";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    let element = document.getElementById(id);
    if (!element) return;
    if (menuOpen) toggleMenu();
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <nav className={`${show ? 'animate-fade-down animate-duration-[500ms] animate-ease-linear' : 'hidden'} bg-gradient-to-b from-black from-10% to-transparent w-full flex justify-between items-center p-4 lg:px-8 text-sm lg:text-base fixed top-0 left-0 z-10`}>
      <div className="flex items-center gap-4">
        <Image src={Logo} alt="Fernandes e Souza" className="pointer-events-none w-10" />
        <h1 className="font-bold select-none text-lg lg:text-xl">Fernandes & Souza</h1>
      </div>
      <div className="hidden lg:flex gap-20 font-bold">
        <button className="hover:text-[#ffffff99] transition duration-[200ms]" onClick={() => scrollToSection('hero')}>Início</button>
        <button className="hover:text-[#ffffff99] transition duration-[200ms]" onClick={() => scrollToSection('about')}>Quem Somos</button>
        <button className="hover:text-[#ffffff99] transition duration-[200ms]" onClick={() => scrollToSection('operation')}>Atuação</button>
        <button className="hover:text-[#ffffff99] transition duration-[200ms]" onClick={() => scrollToSection('contact')}>Contato</button>
      </div>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        {menuOpen && (
          <div className="flex flex-col items-end gap-2 mt-2 absolute top-16 right-4">
            <button className="hover:text-[#ffffff99] transition duration-[200ms]" onClick={() => scrollToSection('hero')}>Início</button>
            <button className="hover:text-[#ffffff99] transition duration-[200ms]" onClick={() => scrollToSection('about')}>Quem Somos</button>
            <button className="hover:text-[#ffffff99] transition duration-[200ms]" onClick={() => scrollToSection('operation')}>Atuação</button>
            <button className="hover:text-[#ffffff99] transition duration-[200ms]" onClick={() => scrollToSection('contact')}>Contato</button>
          </div>
        )}
      </div>
    </nav>
  );
}
