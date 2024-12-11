"use client";

import OperationBg from "../../../public/images/operation-bg.webp";
import { FaScaleBalanced, FaGavel, FaHandshake, FaBriefcase, FaScaleUnbalancedFlip } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Operation() {
  return (
    <>
      <section
        id="operation"
        className="relative w-screen h-auto"
        style={{
          backgroundImage: `url(${OperationBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#2a3143B2] h-full w-full flex flex-col items-center py-8 md:py-16 px-2 md:px-12">
          <div className="flex flex-col items-start w-full">
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="uppercase flex items-center gap-2 text-lg md:text-xl text-custom-beige-dark"
              >
                <FaScaleBalanced className="text-2xl md:text-3xl" />
                Áreas de Atuação
              </motion.h4>
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-2 text-2xl md:text-4xl"
              >
                Soluções Jurídicas Abrangentes e Personalizadas
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-4 text-justify"
            >
              Na LFSouza Advogados Associados, nosso atendimento abrange uma ampla gama de serviços jurídicos, tanto no âmbito judicial quanto extrajudicial. Atuamos em diversas áreas do direito para oferecer soluções completas e personalizadas a nossos clientes.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 text-white"
          >
            <div className="group rounded-lg bg-custom-blue-light p-4 h-96 w-[95vw] md:w-96 hover:bg-custom-beige-dark transition duration-300 ease-in-out shadow shadow-xl">
              <FaGavel className="text-6xl mb-4 text-custom-beige-dark group-hover:text-white transition duration-300 ease-in-out" />
              <h4 className="font-bold italic text-lg font-bold translate-y-48 group-hover:text-white group-hover:translate-y-0 transition duration-500 ease-in-out">Direito Cível e Administrativo</h4>
              <p className="opacity-0 group-hover:opacity-100 group-hover:animate-fade-up animate-delay-[150ms] animate-duration-[400ms] animate-ease-linear">Prestamos assessoria em processos judiciais e administrativos, incluindo licitações e processos administrativos diversos. Nossa equipe está preparada para lidar com questões complexas e garantir a proteção dos interesses de nossos clientes.</p>
            </div>
            <div className="group rounded-lg bg-custom-blue-light p-4 h-96 w-[95vw] md:w-96 hover:bg-custom-beige-dark transition duration-300 ease-in-out shadow shadow-xl">
              <FaHandshake className="text-6xl mb-4 text-custom-beige-dark group-hover:text-white transition duration-300 ease-in-out" />
              <h4 className="font-bold italic text-lg font-bold translate-y-48 group-hover:text-white group-hover:translate-y-0 transition duration-500 ease-in-out">Direito Comercial</h4>
              <p className="opacity-0 group-hover:opacity-100 group-hover:animate-fade-up animate-duration-[400ms] animate-ease-linear">Oferecemos serviços especializados em marcas e patentes, ajudando nossos clientes a proteger e gerenciar seus ativos intelectuais com eficiência e segurança.</p>
            </div>
            <div className="group rounded-lg bg-custom-blue-light p-4 h-96 w-[95vw] md:w-96 hover:bg-custom-beige-dark transition duration-300 ease-in-out shadow shadow-xl">
              <FaBriefcase className="text-6xl mb-4 text-custom-beige-dark group-hover:text-white transition duration-300 ease-in-out" />
              <h4 className="font-bold italic text-lg font-bold translate-y-48 group-hover:text-white group-hover:translate-y-0 transition duration-500 ease-in-out">Direito Trabalhista</h4>
              <p className="opacity-0 group-hover:opacity-100 group-hover:animate-fade-up animate-duration-[400ms] animate-ease-linear">Nossa assessoria trabalhista abrange tanto a prevenção quanto a resolução de conflitos. Atendemos casos contenciosos e fornecemos consultoria preventiva para evitar litígios futuros.</p>
            </div>
            <div className="group rounded-lg bg-custom-blue-light p-4 h-96 w-[95vw] md:w-96 hover:bg-custom-beige-dark transition duration-300 ease-in-out shadow shadow-xl">
              <FaScaleUnbalancedFlip className="text-6xl mb-4 text-custom-beige-dark group-hover:text-white transition duration-300 ease-in-out" />
              <h4 className="font-bold italic text-lg font-bold translate-y-48 group-hover:text-white group-hover:translate-y-0 transition duration-500 ease-in-out">Direito Tributário e Criminal</h4>
              <p className="opacity-0 group-hover:opacity-100 group-hover:animate-fade-up animate-duration-[400ms] animate-ease-linear">Atuamos em casos de crimes tributários e ambientais, oferecendo uma defesa robusta e bem fundamentada. Nossa equipe está preparada para enfrentar desafios complexos e garantir a melhor representação possível.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
