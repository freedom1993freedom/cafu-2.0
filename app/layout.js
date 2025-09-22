import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton"; // Importamos el botón

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Cafu 2.0 | Conexiones Sanitarias de Vanguardia",
  description: "La nueva experiencia digital de Cafu. Calidad, innovacion y servicio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={spaceGrotesk.variable + ' ' + inter.variable}>
      <body className="bg-background">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton /> {/* Lo añadimos aquí */}
      </body>
    </html>
  );
}

