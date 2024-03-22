import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootLayout from "@/components/RootLayout";
import { SidebarProvider } from "@/context/sidebarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go India Stocks Test",
  description: "Discussion Forum and Market Stories",
};

export default function MaintLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <RootLayout>{children}</RootLayout>
        </SidebarProvider>
      </body>
    </html>
  );
}
