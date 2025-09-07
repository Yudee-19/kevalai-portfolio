import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// import localFont from "next/font/local";
// const Switzer = localFont({
//     src: "../../public/fonts/WEB/fonts/Switzer-Regular.woff2",
//     display: "swap",
//     variable: "--font-switzer",
// });
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "KevalAI",
    description: "The best Solutions for your AI needs.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
