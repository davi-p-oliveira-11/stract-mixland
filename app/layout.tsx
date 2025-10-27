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
      <body className="font-[var(--font-space-grotesk)] bg-white text-gray-900 antialiased">
        <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
