"use client";

import { useState } from "react";

// URL vers laquelle on redirige pour démarrer le flow OAuth Discord.
// Le backend (lié au bot) doit gérer cette route et faire la redirection
// finale vers Discord avec le bon client_id / redirect_uri / scope.
const DISCORD_AUTH_URL =
  process.env.NEXT_PUBLIC_DISCORD_AUTH_URL ?? "/api/auth/discord";

export default function DiscordLoginButton() {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    window.location.href = DISCORD_AUTH_URL;
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="group relative w-full inline-flex items-center justify-center gap-3 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-3.5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 focus:ring-offset-bg-card"
      aria-label="Continuer avec Discord"
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          Redirection vers Discord...
        </>
      ) : (
        <>
          {/* Icône Discord */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 127.14 96.36"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
          </svg>
          Continuer avec Discord
        </>
      )}
    </button>
  );
}