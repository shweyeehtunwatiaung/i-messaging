"use client";

import React, { PropsWithChildren } from "react";
import { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import { ThemeProvider } from "@/providers/theme";
import { Theme } from "@radix-ui/themes";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <Theme>
          {children}
          <ProgressBar
            height="4px"
            color="#fffd"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </Theme>
      </ThemeProvider>
    </SWRConfig>
  );
}
