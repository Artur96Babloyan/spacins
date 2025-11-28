import "./globals.css";
import { Inter } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import AnimatedBackground from "@/components/AnimatedBackground";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://spacins.ai"),
  title: {
    default: "Spacins AI Studio | Strategic Product, Design & AI Partners",
    template: "%s | Spacins AI Studio",
  },
  description:
    "Strategic product, design, and AI partners helping founders launch intelligent experiences faster. We build modular systems for fintech, spatial commerce, and AI-native platforms.",
  keywords: [
    "AI product strategy",
    "product design",
    "AI engineering",
    "fintech solutions",
    "spatial commerce",
    "AI-native platforms",
    "product development",
    "AI copilots",
    "intelligent experiences",
    "startup development",
  ],
  authors: [{ name: "Spacins" }],
  creator: "Spacins",
  publisher: "Spacins",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacins.ai",
    siteName: "Spacins AI Studio",
    title: "Spacins AI Studio | Strategic Product, Design & AI Partners",
    description:
      "Strategic product, design, and AI partners helping founders launch intelligent experiences faster.",
    images: [
      {
        url: "/spacins-logo.svg",
        width: 1200,
        height: 630,
        alt: "Spacins AI Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spacins AI Studio | Strategic Product, Design & AI Partners",
    description:
      "Strategic product, design, and AI partners helping founders launch intelligent experiences faster.",
    images: ["/spacins-logo.svg"],
    creator: "@spacins",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
    shortcut: "/icon",
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedBackground />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
