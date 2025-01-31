
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Image from 'next/image'
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lista de Paises",
  description: "Curso: Uma lista de paises criada com Next da Codante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <main className="bg-gray-100 min-h-screen flex flex-col items-center p-5">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container flex items-center gap-3 p-20">
              <Image
                src="/Logo.svg"
                width={48}
                height={48}
                alt="Picture of the author"
              />
              <h1 className="font-bold text-2xl">Lista de Países</h1>
            </section>
          </nav>
          {children}
        </main>


      </body>
    </html>
  );
}
