import { Geist, Geist_Mono, Roboto_Slab } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Header from "@/components/header";

const robotoSlab = Roboto_Slab({ subsets: ['latin'], variable: '--font-serif' });

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased scroll-smooth", fontSans.variable, fontMono.variable, "font-serif", robotoSlab.variable)}
    >
      <body className="relative z-0">
        <ThemeProvider>
          <div
            className="absolute inset-0 h-full -z-10 w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-l-from-80% mask-r-from-80% mask-t-from-90% opacity-40"
          />
          <div className="w-11/12 md:w-8/12 mx-auto">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
