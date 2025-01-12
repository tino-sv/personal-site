import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'tino',
  description: 'Web Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono bg-[#1a1a1a] text-green-400/90 antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          <div className="scanlines pointer-events-none fixed inset-0" />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <footer className="text-sm text-green-400/50 border-t border-green-400/20 p-4">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400/90">tino@home</span>
                  <span className="text-white/90">~</span>
                  <span className="text-blue-400/90">$</span>
                  <span className="cursor"></span>
                  <span className="text-green-400/90" ><a href="https://x.com/0xtinodev" target="_blank" rel="noopener noreferrer">x</a></span>
                  <span className="text-green-400/90" ><a href="https://github.com/tino-sv" target="_blank" rel="noopener noreferrer">github</a></span>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

