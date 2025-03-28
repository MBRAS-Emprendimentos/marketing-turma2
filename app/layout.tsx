import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

// Load fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#121212" }, { color: "#ffffff" }],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: "%s | MBRAS Empreendimentos",
    default: "MBRAS - Marketing Imobiliário",
  },
  description: "Fundamentos de Marketing Imobiliário para corretores MBRAS",
  keywords: ["imobiliária", "marketing", "imóveis", "corretores", "MBRAS", "empreendimentos"],
  authors: [{ name: "MBRAS Empreendimentos" }],
  creator: "MBRAS Empreendimentos",
  metadataBase: new URL("https://mbras.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "MBRAS Empreendimentos",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mbrasimoveis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${montserrat.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground min-h-screen flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex-grow w-full flex flex-col overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
