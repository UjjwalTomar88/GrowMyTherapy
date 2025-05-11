import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const freightDisplayProLight = localFont({
  src: [
    { path: "./fonts/FreightDispProLight-Regular.woff", weight: "300" },
  ],
  variable: "--font-freight-display-pro-light",
  display: "swap"
});

const freightDisplayPro = localFont({
  src: [
    { path: "./fonts/FreightDispProMedium-Regular.woff", weight: "500" },
  ],
  variable: "--font-freight-display-pro",
  display: "swap"
});

const freightDisplayProBold = localFont({
  src: [
    { path: "./fonts/FreightDispProBold-Regular.woff", weight: "700" },
  ],
  variable: "--font-freight-display-pro-bold",
  display: "swap"
})

const freightSansProLight = localFont({
  src: [
    { path: "./fonts/FreightSansProLight-Regular.woff", weight: "300" },
  ],
  variable: "--font-freight-sans-pro-light",
  display: "swap"
})

const freightSansPro = localFont({
  src: [
    { path: "./fonts/FreightSansProMedium-Regular.woff", weight: "500" },
  ],
  variable: "--font-freight-sans-pro",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Serena Blake Psy.D. Clinical Psychology, PLLC",
  description: "Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={
          `${freightDisplayProLight.variable} 
          ${freightDisplayPro.variable} 
          ${freightDisplayProBold.variable} 
          ${freightSansPro.variable}    
          ${freightSansProLight.variable} 
          antialiased`
        }
      >
        {children}
      </body>
    </html>
  );
}
