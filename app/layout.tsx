import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stract Mixland | Modern Landing Page",
  description:
    "Landing page built by Voltaris Digital Solutions using Next.js, TypeScript, and TailwindCSS.",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
          {children}
      </body>
    </html>
  );
}
