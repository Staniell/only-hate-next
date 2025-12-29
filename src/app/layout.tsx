import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "OnlyHate | Filter the Noise",
  description:
    "A Chrome Extension that hides positive comments and shows you only the hate. See the worst, ignore the rest.",
  icons: {
    icon: "/logo.png",
  },
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased bg-black text-white`}>{children}</body>
    </html>
  );
}
