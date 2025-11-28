import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import SpaceCursor from "@/components/SpaceCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spacins AI Studio",
  description: "Strategic product, design, and AI partners helping founders launch intelligent experiences faster.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SpaceCursor />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
