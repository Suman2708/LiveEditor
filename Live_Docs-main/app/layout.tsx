
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import{ cn } from "@/lib/utils"
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import Provider from "./Provider"
// import Provider from "./Provider"
import { Variable } from "lucide-react";
const fontSans = FontSans({ subsets: ["latin"],
  variable : "--font-sans",
 });
export const metadata: Metadata = {
  title: "LiveDocs",
  description: "your collab editor",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
      variables: { 
        colorPrimary: "#3377FF" ,
        fontSize: '16px'
      },
    }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
>
  <Provider>
            {children}
            </Provider>
        </body>
      </html>
      </ClerkProvider>
  )
}