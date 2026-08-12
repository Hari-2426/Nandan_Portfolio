import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hari Hara Nandan | Java Backend Developer & Spring Boot Specialist",
  description: "Portfolio of Hari Hara Nandan - Java Backend Developer specializing in Spring Boot, REST APIs, Microservices, Spring Security, and MySQL database engineering.",
  keywords: [
    "Hari Hara Nandan",
    "Java Backend Developer",
    "Spring Boot Developer",
    "REST API Developer",
    "MySQL",
    "Spring Security",
    "Portfolio"
  ],
  authors: [{ name: "Hari Hara Nandan" }],
  openGraph: {
    title: "Hari Hara Nandan | Java Backend Developer",
    description: "Java Backend Developer | Spring Boot | REST APIs | MySQL. National-level hackathon winner & AWS certified prompt engineer.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth dark`}>
      <body className="bg-[#0b0f17] text-slate-100 antialiased selection:bg-sky-500/30 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}
