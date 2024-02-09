import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ServerThemeProvider } from "@wits/next-themes";
import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });

import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import "@/styles/theme.config.css";
import AuthContext from "@/context/AuthContext";
import ToasterContext from "@/context/ToasterContext";
import { SocketProvider } from "@/providers/socket-provider";

export const metadata: Metadata = {
  title: "iMessaging",
  description: "iMessaging Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ServerThemeProvider>
      <html lang="en">
        <body className={inter.className}>
          <AuthContext>
            <SocketProvider>
              <ToasterContext />
              <Providers>{children}</Providers>
            </SocketProvider>
          </AuthContext>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
