import "../styles/globals.css";
import { marcellus, merriweather, lora } from "./fonts";

export const metadata = {
  title: "Fernandes & Souza Advogados Associados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${marcellus.variable} ${merriweather.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
