import "./globals.css";
import type { Metadata } from "next";
import  Header  from "@/components/header"
export const  metadata: Metadata = {
  title:"Personal Investiment",
  description:"Sistema gerenciador de Investimento Pessoal"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        <main className="container mt-auto p-4">{children}</main>
      </body>
    </html>
  );
}
