import "../styles/globals.css";
import chesnaGrotesk from "@/styles/fonts/fonts";
import Logo from "../../public/images/logo-1.webp";

export const metadata = {
  title: "Fernandes & Souza Advogados Associados",
  description:
    "Escritório de advocacia especializado em Direito Civil e Administrativo, Direito Comercial, Direito Tributário e Criminal e Direito do Trabalho",
  keywords:
    "advogado, direito civil, direito comercial, direito do trabalho, direito tributário, direito criminal, advocacia, consultoria jurídica, escritório de advocacia",
  authors: [
    {
      name: "Fernandes & Souza Advogados Associados",
      url: "http://www.lucasfernandes.adv.br/",
    },
  ],
  openGraph: {
    title: "Fernandes & Souza Advogados Associados",
    description:
      "Especialistas em Direito Civil, Comercial e Trabalhista. Atendimento especializado e soluções jurídicas eficientes.",
    url: "http://www.lucasfernandes.adv.br/",
    siteName: "Fernandes & Souza Advogados",
    images: [
      {
        url: Logo,
        width: 1200,
        height: 630,
        alt: "Fernandes & Souza Advogados Associados",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${chesnaGrotesk.className}`}>
      <body>{children}</body>
    </html>
  );
}
