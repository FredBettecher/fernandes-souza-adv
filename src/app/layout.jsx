import "../styles/globals.css";
import chesnaGrotesk from "@/styles/fonts/fonts";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${chesnaGrotesk.className}`}>
      <body>{children}</body>
    </html>
  );
}
