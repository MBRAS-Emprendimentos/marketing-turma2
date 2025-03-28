"use client"
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps & Record<string, unknown>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
