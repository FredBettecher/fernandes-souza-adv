"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Lucas from "../../../public/images/lucas.png";
import Leonardo from "../../../public/images/leonardo.png";

export default function TeamCarousel() {
  const teamMembers = [
    {
      name: "Lucas Fernandes de Souza",
      photo: Lucas,
      specialization: "Direito do Trabalho e Direito Processual Civil",
      description:
        "Graduado em Direito pela Faculdade de Direito – FACES (2005-2010), Lucas possui pós-graduação em Direito e Processo do Trabalho pela universidade Anhanguera-UNIDERP e em Direito Processual Civil pela Damásio Educacional S/A.",
    },
    {
      name: "Leonardo Ribeiro Barboza",
      photo: Leonardo,
      specialization:
        "Direito Administrativo, Direito Civil, Direito do Trabalho e Direito Empresarial",
      description:
        "Graduado em Direito pela Faculdade Nacional – FINAC (2007-2012), Leonardo possui pós-graduação em Direito Processual Civil pela Faculdade de Direito de Vitória – FDV. Advogado inscrito na OAB/ES sob o nº 26098, atua desde 2016. Foi Gerente Jurídico da Melhado Advogados Associados (antiga LC Marcon Advogados Associados) de 2007 a 2017.",
    }
  ];
  return (
    <Carousel>
      <CarouselContent>
        {teamMembers.map((member, index) => (
          <CarouselItem
            key={index}
            className="w-full flex items-center justify-center"
          >
            <div className="p-1">
              <Card className="w-96">
                <CardContent className="flex flex-col aspect-square justify-center p-3">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={200}
                    height={300}
                    className="m-auto rounded-lg"
                  />
                  <h3 className="text-xl font-semibold my-1 text-custom-blue">
                    {member.name}
                  </h3>
                  <p className="text-sm mb-1 text-custom-blue-light">
                    {member.specialization}
                  </p>
                  <p className="text-sm text-custom-blue-dark">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex md:ml-64" />
      <CarouselNext className="hidden md:flex md:mr-64" />
    </Carousel>
  );
}
