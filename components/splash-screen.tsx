"use client";

import { useEffect, useState } from "react";

export function SplashScreen({
  onComplete,
  logoSrc,
  name,
}: {
  onComplete: () => void;
  logoSrc?: string;
  name?: string;
}) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExiting(true), 1400);
    const completeTimer = setTimeout(() => onComplete(), 1800);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background ${
        isExiting ? "animate-splash-exit" : ""
      }`}
    >
      <div className="animate-fade-in flex flex-col items-center gap-4">
        {logoSrc ? (
          <img
            src={logoSrc || "/placeholder.svg"}
            alt={name || "Logo"}
            className="h-60 w-60 rounded-xl object-contain"
          />
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-10 w-10 text-primary-foreground"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </div>
        )}
        <p
          className="animate-fade-in text-lg font-semibold text-foreground"
          style={{ animationDelay: "0.3s" }}
        >
          {/* {name || "Cargando..."} */}
        </p>
      </div>
    </div>
  );
}
