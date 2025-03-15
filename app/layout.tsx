import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PeresNet | Soluções de TI, Segurança e Microsoft 365 em Cuiabá",
  description: "Otimize sua empresa com a PeresNet! Oferecemos gestão e suporte de TI, Microsoft 365, segurança digital e automação de processos. Atendimento especializado em Cuiabá.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import "./globals.css";
