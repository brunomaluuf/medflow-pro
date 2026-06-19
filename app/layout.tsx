import * as React from "react"
import { ThemeProvider } from "./providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  title: "MedFlow Pro - Gestão Inteligente para Profissionais da Saúde",
  description: "Plataforma completa para médicos, dentistas, psicólogos e nutricionistas.",
}
