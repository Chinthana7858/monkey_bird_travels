import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppIcon from "@/components/whatsAppIcon";
import { BooleanProvider } from "@/context/boolcontext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monkey Bird Travels - Your Gateway to Adventure",
  description: "Embark on unforgettable journeys with Monkey Bird Travels. Discover breathtaking destinations, curated travel experiences, and exclusive deals for your next adventure.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <BooleanProvider>{children}</BooleanProvider>
        <WhatsAppIcon />
      </body>
    </html>
  );
}
