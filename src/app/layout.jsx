import "../styles/globals.css";
import chesnaGrotesk from "@/styles/fonts/fonts";

export const metadata = {
  title: "Fernandes & Souza Advogados Associados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${chesnaGrotesk.className}`}>
      <body>{children}</body>
    </html>
  );
}
