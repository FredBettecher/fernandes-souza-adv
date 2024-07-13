import OperationBg from "../../../public/images/operation-bg.webp";
import { FaScaleBalanced, FaGavel, FaHandshake, FaBriefcase, FaScaleUnbalancedFlip } from "react-icons/fa6";

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
        <div className="bg-[#000000D9] h-full w-full flex flex-col items-center py-8 lg:py-16 px-2 lg:px-12">
          <div className="flex flex-col items-start w-full">
            <div>
              <h4 className="uppercase flex items-center gap-2 text-lg lg:text-xl">
                <FaScaleBalanced className="text-2xl lg:text-3xl" />
                Áreas de Atuação
              </h4>
              <h1 className="mt-2 text-2xl lg:text-4xl">Soluções Jurídicas Abrangentes e Personalizadas</h1>
            </div>
            <p className="mt-4 text-justify">
              Na LFSouza Advogados Associados, nosso atendimento abrange uma ampla gama de serviços jurídicos, tanto no âmbito judicial quanto extrajudicial. Atuamos em diversas áreas do direito para oferecer soluções completas e personalizadas a nossos clientes.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8 text-black">
            <div className="border border-2 rounded-lg bg-[#f7f7f7] p-4 h-96 lg:w-2/3">
              <FaGavel className="text-6xl mb-4" />
              <h4 className="font-bold italic text-lg mb-4">Direito Cível e Administrativo</h4>
              <p>Prestamos assessoria em processos judiciais e administrativos, incluindo licitações e processos administrativos diversos. Nossa equipe está preparada para lidar com questões complexas e garantir a proteção dos interesses de nossos clientes.</p>
            </div>
            <div className="border border-2 rounded-lg bg-[#f7f7f7] p-4 h-96 lg:w-2/3">
              <FaHandshake className="text-6xl mb-4" />
              <h4 className="font-bold italic text-lg mb-4">Direito Comercial</h4>
              <p>Oferecemos serviços especializados em marcas e patentes, ajudando nossos clientes a proteger e gerenciar seus ativos intelectuais com eficiência e segurança.</p>
            </div>
            <div className="border border-2 rounded-lg bg-[#f7f7f7] p-4 h-96 lg:w-2/3">
              <FaBriefcase className="text-6xl mb-4" />
              <h4 className="font-bold italic text-lg mb-4">Direito Trabalhista</h4>
              <p>Nossa assessoria trabalhista abrange tanto a prevenção quanto a resolução de conflitos. Atendemos casos contenciosos e fornecemos consultoria preventiva para evitar litígios futuros.</p>
            </div>
            <div className="border border-2 rounded-lg bg-[#f7f7f7] p-4 h-96 lg:w-2/3">
              <FaScaleUnbalancedFlip className="text-6xl mb-4" />
              <h4 className="font-bold italic text-lg mb-4">Direito Tributário e Criminal</h4>
              <p>Atuamos em casos de crimes tributários e ambientais, oferecendo uma defesa robusta e bem fundamentada. Nossa equipe está preparada para enfrentar desafios complexos e garantir a melhor representação possível.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
