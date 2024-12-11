"use client";

import { MdAccountBalance } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import TeamCarousel from "@/components/TeamCarousel";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="h-full w-screen flex flex-col items-center bg-[#fff] text-custom-blue py-8 lg:py-16 px-2 lg:px-12">
      <div className="flex flex-col mb-4 lg:items-end lg:w-full">
        <div>
          <motion.h4
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="uppercase flex items-center gap-2 text-lg lg:text-xl text-custom-beige-dark"
          >
            <MdAccountBalance className="text-xl lg:text-3xl" />
            Quem Somos
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-2 text-2xl lg:text-4xl text-custom-blue-light"
          >
            Excelência Jurídica e Atendimento Personalizado
          </motion.h1>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2 text-custom-blue-dark"
      >
        <p className="text-justify">
          Na Fernandez & Souza Advogados Associados, nos dedicamos a fornecer uma assessoria jurídica diferenciada e de excelência. Nosso compromisso é atender nossos clientes com total dedicação, oferecendo um atendimento personalizado que assegura maior comodidade e agilidade na prestação de serviços jurídicos.
        </p>
        <p className="text-justify">
          Nosso escritório se destaca pela infraestrutura sólida e pela equipe de advogados altamente experientes e especializados em diversas áreas do direito. Estamos preparados para oferecer tanto assessoria contenciosa quanto consultiva/preventiva, sempre com foco na qualidade e na eficiência.
        </p>
        <p className="text-justify">
          Utilizamos um moderno sistema informatizado para o acompanhamento processual, garantindo um monitoramento preciso e atualizado das publicações no diário oficial, incluindo decisões, intimações e sentenças. Essa tecnologia nos permite manter um controle rigoroso dos andamentos processuais, proporcionando aos nossos clientes uma tranquilidade e segurança adicionais. Estamos comprometidos em ser mais do que apenas seus advogados, somos seus parceiros na busca por soluções jurídicas eficazes e personalizadas.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-col items-start w-full"
      >
        <h2 className="flex items-center gap-2 mb-4 text-xl lg:text-2xl text-custom-beige-dark uppercase">
          <FaUserTie className="text-lg lg:text-2xl" />
          nossa equipe
        </h2>
        <div className="flex justify-center w-full items-center">
          <TeamCarousel />
        </div>
      </motion.div>
    </section>
  );
}
