import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import MetaUpdater from "@/components/meta-updater"

// Define default metadata in English
export const metadata = {
  title: "KAIJA Tire - Advanced Puncture-Resistant Liner System",
  description: "KAIJA Tire provides an advanced tire puncture-resistant liner system, featuring a dragon scale texture design and a 15mm protective layer, which can reduce the risk of punctures by about 90%, significantly enhancing riding safety and comfort.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Dynamic meta tags will be updated by client-side code */}
        <title id="dynamic-title">KAIJA Tire - Advanced Puncture-Resistant Liner System</title>
        <meta id="dynamic-description" name="description" content="KAIJA Tire provides an advanced tire puncture-resistant liner system, featuring a dragon scale texture design and a 15mm protective layer, which can reduce the risk of punctures by about 90%, significantly enhancing riding safety and comfort." />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M7HCHQ64');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7HCHQ64" 
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <MetaUpdater />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
