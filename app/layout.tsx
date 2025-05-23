import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.scss";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
