import { MdAccountBalance } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <section id="about" className="h-full flex flex-col items-center bg-[#f7f7f7] text-black py-8 lg:py-16 px-2 lg:px-12">
      <div className="flex flex-col mb-4 lg:items-end lg:w-full">
        <div>
          <h4 className="uppercase flex items-center gap-2 text-lg lg:text-xl">
            <MdAccountBalance className="text-xl lg:text-3xl" />
            Quem Somos
          </h4>
          <h1 className="mt-2 text-2xl lg:text-4xl">Excelência Jurídica e Atendimento Personalizado</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-justify">
          Na LFSouza Advogados Associados, dedicamo-nos a fornecer uma assessoria jurídica diferenciada e de excelência. Nosso compromisso é atender nossos clientes com total dedicação, oferecendo um atendimento personalizado que assegura maior comodidade e agilidade na prestação de serviços jurídicos.
        </p>
        <p className="text-justify">
          Nosso escritório se destaca pela infraestrutura sólida e pela equipe de advogados altamente experientes e especializados em diversas áreas do direito. Estamos preparados para oferecer tanto assessoria contenciosa quanto consultiva/preventiva, sempre com foco na qualidade e na eficiência.
        </p>
        <p className="text-justify">
          Utilizamos um moderno sistema informatizado para o acompanhamento processual, garantindo um monitoramento preciso e atualizado das publicações no diário oficial, incluindo decisões, intimações e sentenças. Essa tecnologia nos permite manter um controle rigoroso dos andamentos processuais, proporcionando aos nossos clientes uma tranquilidade e segurança adicionais. Na LFSouza Advogados Associados, estamos comprometidos em ser mais do que apenas seus advogados – somos seus parceiros na busca por soluções jurídicas eficazes e personalizadas.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-start lg:w-full">
        <h2 className="flex items-center gap-2 mb-4 text-xl lg:text-2xl">
          <FaUserTie className="text-lg lg:text-2xl" />
          Nossa Equipe
        </h2>
        <div>
          <h3 className="text-xl font-bold mb-1">Lucas Fernandes de Souza</h3>
          <h4 className="mb-2">Advogado Especializado em Direito do Trabalho e Direito Processual Civil</h4>
          <p>
            Lucas Fernandes de Souza é graduado em Direito pela Faculdade de Direito – FACES (2005-2010). Possui Pós-Graduação em Direito e Processo do Trabalho pela Universidade Anhanguera-UNIDERP e em Direito Processual Civil pela Damásio Educacional S/A. Com ampla experiência e dedicação, Lucas oferece assessoria jurídica de alta qualidade, combinando conhecimento profundo das leis com uma abordagem estratégica na resolução de conflitos. Sua expertise faz dele um membro valioso da LFSouza Advogados Associados.
          </p>
        </div>
      </div>
    </section>
  );
}
