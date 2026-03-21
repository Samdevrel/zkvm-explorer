import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "zkVM Explorer | @samdevrel",
  description: "Explore general-purpose zero-knowledge computation use cases on Ethereum.",
  keywords: ["zkvm", "zero-knowledge", "general-purpose", "computation", "privacy"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
