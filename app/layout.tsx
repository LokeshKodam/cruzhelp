import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CruzAssist",
  description: "Scrape websites and ask AI questions about the content",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-primary text-primary-foreground py-4">
            <div className="container mx-auto px-4">
              <Link href="/" className="inline-block logo-link">
                <h1 className="text-2xl font-bold hover:text-blue-200 transition-colors duration-200">CruzAssist</h1>
              </Link>
            </div>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          <footer className="bg-muted py-4">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              © 2023 CruzAssist. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

