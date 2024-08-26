"use client";

import Image from "next/image";
import Logo from "../../../public/logo-3.webp"
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  const scrollToSection = (id) => {
    let element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <footer className="bg-custom-blue w-full">
      <div className="flex flex-col md:flex-row justify-around items-center mt-4 md:mt-0">
        <div className="flex flex-col">
          <h4 className="font-bold text-custom-beige uppercase text-center md:text-start">mande um e-mail</h4>
          <p>lucas@lucasfernandes.adv.br</p>
        </div>
        <Image src={Logo} className="w-64" />
        <div className="flex flex-col">
          <h4 className="font-bold text-custom-beige uppercase text-center md:text-start">ligue agora</h4>
          <p>(00) 912345678</p>
        </div>
      </div>

      <div className="w-[95%] h-[1px] bg-custom-beige m-auto my-6"></div>

      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-around md:items-start md:gap-0">
        <div>
          <h4 className="font-bold text-custom-beige uppercase text-center md:text-start">Sobre Nós</h4>
          <p className="w-64 text-justify">
            Oferecemos assessoria jurídica personalizada e ágil, utilizando tecnologia para garantir o controle dos processos jurídicos, proporcionando segurança aos nossos clientes.
          </p>
        </div>
        <div className="flex flex-col md:items-start gap-2">
          <h4 className="font-bold text-custom-beige uppercase text-center md:text-start">navegação</h4>
          <button className="hover:text-custom-beige transition duration-[200ms]" onClick={() => scrollToSection('hero')}>Início</button>
          <button className="hover:text-custom-beige transition duration-[200ms]" onClick={() => scrollToSection('about')}>Quem Somos</button>
          <button className="hover:text-custom-beige transition duration-[200ms]" onClick={() => scrollToSection('operation')}>Atuação</button>
          <button className="hover:text-custom-beige transition duration-[200ms]" onClick={() => scrollToSection('contact')}>Contato</button>
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-start gap-2">
          <h4 className="font-bold text-custom-beige uppercase text-center md:text-start">contato</h4>
          <p className="w-64">
            Rua Alfredo Alcure, Nº 200 - Villaggio Campo Grande Business, Sala 911 - Campo Grande, Cariacica-ES
          </p>
          <div className="flex gap-4 mt-2">
            <div className="bg-custom-blue-light rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-custom-beige-light hover:text-custom-blue text-xl transition duration-[200ms] ease-linear">
              <Link href={"#"} target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </Link>
            </div>
            <div className="bg-custom-blue-light rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-custom-beige-light hover:text-custom-blue text-xl transition duration-[200ms] ease-linear">
              <Link href={"#"} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </Link>
            </div>
            <div className="bg-custom-blue-light rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-custom-beige-light hover:text-custom-blue text-xl transition duration-[200ms] ease-linear">
              <Link href={"#"} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-8">Fernandez & Souza &#169; 2024 - Todos os direitos reservados</p>
    </footer>
  );
}
