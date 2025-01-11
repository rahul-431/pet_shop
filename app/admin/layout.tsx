import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import AppSidebar from "@/components/admin/AppSidebar";
import { SidebarProvider } from "@/context/SidebarContext";
import Navbar from "@/components/admin/Navbar";
export const metadata: Metadata = {
  title: "Dashboard-Waggy",
  description: "Pet shop",
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="flex h-screen py-4 gap-4">
            <AppSidebar />
            <main className="flex flex-col gap-5 w-full pe-6">
              <Navbar />
              <hr />
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
