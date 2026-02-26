"use client";

import { useState } from "react";
import siteConfig from "@/lib/site-config";
import { ConfigThemeProvider } from "@/components/theme-provider";
import { SplashScreen } from "@/components/splash-screen";

import V1 from "@/components/v1";

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <ConfigThemeProvider theme={siteConfig.theme} />

      {showSplash && (
        <SplashScreen
          onComplete={() => setShowSplash(false)}
          logoSrc={siteConfig.logoSrc}
          name={siteConfig.name}
        />
      )}

      <V1 />
    </>
  );
}
