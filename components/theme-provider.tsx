"use client"

import { useEffect } from "react"
import type { SiteConfig } from "@/lib/site-config"

/**
 * Aplica los colores del config como CSS custom properties en :root.
 * Esto permite cambiar la paleta completa solo editando site-config.ts.
 */
export function ConfigThemeProvider({ theme }: { theme: SiteConfig["theme"] }) {
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty("--primary", theme.primary)
    root.style.setProperty("--primary-foreground", theme.primaryForeground)
    root.style.setProperty("--background", theme.background)
    root.style.setProperty("--foreground", theme.foreground)
    root.style.setProperty("--card", theme.card)
    root.style.setProperty("--card-foreground", theme.foreground)
    root.style.setProperty("--muted", theme.muted)
    root.style.setProperty("--muted-foreground", theme.mutedForeground)
    root.style.setProperty("--border", theme.border)
    root.style.setProperty("--input", theme.border)
    root.style.setProperty("--ring", theme.primary)
    root.style.setProperty("--accent", theme.primary)
    root.style.setProperty("--accent-foreground", theme.primaryForeground)
  }, [theme])

  return null
}
