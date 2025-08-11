import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '700'],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bullsnips Barbershop - Cairns, Australia",
  description: "Premium barbershop in Cairns offering quality haircuts, traditional shaves, fades, and grooming services for men. Established in 1995.",
  keywords: "barbershop, haircuts, shaves, Cairns, Australia, men's grooming, traditional barbershop",
  authors: [{ name: "Bullsnips Barbershop" }],
  openGraph: {
    title: "Bullsnips Barbershop - Cairns, Australia",
    description: "Premium barbershop in Cairns offering quality haircuts, traditional shaves, fades, and grooming services for men.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
