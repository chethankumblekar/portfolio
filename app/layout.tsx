import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import TopNav from "../components/TopNav";
import NetworkBackdrop from "../components/NetworkBackdrop";
import Footer from "../components/Footer";
import AskAI from "../components/AskAI";

export const metadata: Metadata = {
  metadataBase: new URL("https://chethank.vercel.app"),
  title: "Chethan K · Cloud · Platform · DevOps Engineer",
  description:
    "DevOps & Cloud Engineer with 4+ years designing, building, and operating production-grade Azure infrastructure, including AKS, CI/CD, and IaC, sustaining 99.7% uptime across a 60+ tenant platform.",
  openGraph: {
    title: "Chethan K · Cloud · Platform · DevOps Engineer",
    description:
      "DevOps & Cloud Engineer with 4+ years designing, building, and operating production-grade Azure infrastructure at scale.",
    url: "https://chethank.vercel.app",
    siteName: "Chethan K",
    images: ["/chethan.jpeg"],
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Chethan K · Cloud · Platform · DevOps Engineer",
    description:
      "DevOps & Cloud Engineer with 4+ years designing, building, and operating production-grade Azure infrastructure at scale.",
    images: ["/chethan.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <NetworkBackdrop />
        <TopNav />
        <main>{children}</main>
        <Footer />
        <AskAI />
      </body>
    </html>
  );
}
