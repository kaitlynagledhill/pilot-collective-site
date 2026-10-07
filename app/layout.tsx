import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pilot Collective",
  description:
    "Pilot Collective is a boutique agency that believes the most powerful brand stories are told by people.",
  openGraph: {
    title: "Pilot Collective",
    description:
      "Pilot Collective is a boutique agency that believes the most powerful brand stories are told by people.",
    images: [
      {
        url: "/images/pilot-collective-og.png",
        width: 1200,
        height: 630,
        alt: "Pilot Collective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilot Collective",
    description:
      "Pilot Collective is a boutique agency that believes the most powerful brand stories are told by people.",
    images: ["/images/pilot-collective-og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
