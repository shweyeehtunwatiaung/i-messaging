"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ToastContainer } from "react-toastify";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
      <ToastContainer
        limit={5}
        theme="colored"
        className="flex justify-center items-center flex-col"
        toastClassName="w-[90%] rounded-md mt-4"
      />
    </NextThemesProvider>
  );
}
