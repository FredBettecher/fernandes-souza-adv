"use client";

import Email from "@/components/Email";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { IoChatboxEllipsesOutline, IoMail, IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="w-screen h-full flex flex-col items-center bg-[#fff] text-black py-8 lg:py-16 px-2 lg:px-12 text-custom-blue">
      <div className="flex flex-col mb-8 lg:items-end lg:w-full">
        <div>
          <motion.h4
          initial = {{ opacity:0, y:100 }}
          whileInView={{ opacity:1, y: 0}}
          transition={{ duration:0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="uppercase flex items-center gap-2 text-lg lg:text-xl text-custom-beige-dark"
          >
            <IoChatboxEllipsesOutline className="text-xl lg:text-3xl" />
            Fale conosco
          </motion.h4>
          <motion.h1
          initial = {{ opacity:0, y:100 }}
          whileInView={{ opacity:1, y: 0}}
          transition={{ duration:0.3, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-2 text-2xl lg:text-4xl"
          >
            Estamos Aqui Para Ajudar Você
          </motion.h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <motion.div
        initial = {{ opacity:0, y:100 }}
        whileInView={{ opacity:1, y: 0}}
        transition={{ duration:0.3, delay: 0.4 }}
        viewport={{ once: true }}
        className="lg:w-1/2"
        >
          <p className="text-justify lg:text-lg">
            Entre em contato conosco para discutir suas necessidades jurídicas, obter consultoria ou simplesmente para tirar suas dúvidas. Nossa equipe está pronta para ajudar você.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 mt-4">
            <div>
              <h4 className="lg:text-lg text-custom-beige-dark uppercase">Redes Sociais</h4>
              <div className="flex gap-8 mt-2 text-custom-beige">
                <div className="bg-custom-blue-light rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-custom-beige-light hover:text-custom-blue text-2xl transition duration-[200ms] ease-linear">
                  <Link href={"https://www.facebook.com/fernandessouzaadvogadosassociados"} target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </Link>
                </div>
                <div className="bg-custom-blue-light rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-custom-beige-light hover:text-custom-blue text-2xl transition duration-[200ms] ease-linear">
                  <Link href={"https://www.instagram.com/fernandesesouza_associados/"} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h4 className="lg:text-lg text-custom-beige-dark uppercase">Contatos</h4>
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="bg-custom-blue-light rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-custom-beige-light hover:text-custom-blue text-2xl transition duration-[200ms] ease-linear text-custom-beige-dark">
                    <Link href={"https://wa.me/5527999865750"} target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp />
                    </Link>
                  </div>
                  <p>(27) 99986-5750</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-custom-blue-light rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-custom-beige-light hover:text-custom-blue text-2xl transition duration-[200ms] ease-linear text-custom-beige-dark">
                    <IoMail />
                  </div>
                  <p>lucas@lucasfernandes.adv.br</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h4 className="lg:text-lg mb-2 uppercase text-custom-beige-dark">Nosso Escritório</h4>
            <div className="flex gap-2 item-center">
              <IoLocationOutline className="text-7xl lg:text-5xl" />
              <p className="lg:text-lg">
                Rua Alfredo Alcure, Nº 200 - Villaggio Campo Grande Business, Sala 911
                - Campo Grande, Cariacica-ES
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.64086176315215!2d-40.38626632544939!3d-20.33637586936441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83eaa1413fdc5%3A0xd2c89726665e26b4!2sEdificio%20Comercial%20Villaggio%20Campo%20Grande!5e0!3m2!1spt-BR!2sbr!4v1720898033040!5m2!1spt-BR!2sbr"
              className="h-60 w-full"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </motion.div>
        <div className="lg:w-1/2">
          <Email />
        </div>
      </div>
    </section>
  );
}
