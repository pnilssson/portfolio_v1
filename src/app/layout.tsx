import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pär Nilsson",
  description:
    "A personal portfolio by Pär Nilsson. Created using Next.js, Sanity headless CMS and Talwind CSS. Design inspired by Brittany Chiangs personal portfolios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-slate-950 to-slate-900 text-slate-400`}
      >
        {children}
      </body>
    </html>
  );
}
