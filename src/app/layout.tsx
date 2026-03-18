import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Babilonia AIOS",
  description:
    "Plataforma de squads de agentes IA autonomos. Combine as maiores mentes artificiais para resolver problemas complexos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-page font-sans antialiased">
        <Sidebar />
        <main className="ml-[240px] min-h-screen">{children}</main>
      </body>
    </html>
  );
}
