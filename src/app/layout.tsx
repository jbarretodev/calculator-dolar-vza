import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Precio del Dolar En Venezuela",
  description:
    "Aplicación web Venezolana que consulta el precio del dólar! de una manera y rápida, Sin publicidad",
  keywords: "dólar, venezuela, precio, consulta",
  authors: [
    {
      name: "Juan Barreto",
      url: "https://github.com/jbarretodev",
    },
  ],
  manifest: "/manifest.json",
  icons:{
    apple: "/vercel.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
