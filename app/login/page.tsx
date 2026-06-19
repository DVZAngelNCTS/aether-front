import type { Metadata } from "next";
import Link from "next/link";
import DiscordLoginButton from "@/components/auth/Discordloginbutton";

export const metadata: Metadata = {
  title: "Connexion — AetherScan",
  description: "Connecte-toi ou crée ton compte AetherScan avec Discord.",
};

export default function LoginPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-bg-base flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm">
        <div className="bg-bg-card border border-border-base rounded-2xl p-8 shadow-xl">
          {/* Logo / titre */}
          <div className="text-center mb-8">
            <Link
              href="/"
              className="text-2xl font-bold text-violet-400 tracking-tight hover:text-violet-300 transition-colors"
            >
              AetherScan
            </Link>
            <p className="text-text-muted text-sm mt-2">
              Connecte-toi pour suivre tes lectures et accéder au planning des sorties.
            </p>
          </div>

          {/* Bouton de connexion Discord */}
          <DiscordLoginButton />

          <p className="text-text-faint text-xs text-center mt-4 leading-relaxed">
            Pas encore de compte ? Aucun souci : la connexion crée
            automatiquement ton compte et te lie à notre bot Discord.
          </p>

          <div className="flex items-center gap-3 my-6" aria-hidden="true">
            <span className="h-px flex-1 bg-border-base" />
            <span className="text-text-faint text-xs">Pourquoi Discord ?</span>
            <span className="h-px flex-1 bg-border-base" />
          </div>

          <ul className="space-y-2.5 text-text-muted text-sm">
            <li className="flex items-start gap-2.5">
              <CheckIcon />
              <span>Un seul clic, pas de mot de passe à retenir</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckIcon />
              <span>Notifications de nouveaux chapitres directement sur Discord</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckIcon />
              <span>Synchronisation de ta progression de lecture</span>
            </li>
          </ul>
        </div>

        <p className="text-text-faint text-xs text-center mt-6">
          En continuant, tu acceptes nos{" "}
          <Link href="/cgu" className="underline hover:text-text-muted transition-colors">
            conditions d&apos;utilisation
          </Link>{" "}
          et notre{" "}
          <Link href="/confidentialite" className="underline hover:text-text-muted transition-colors">
            politique de confidentialité
          </Link>
          .
        </p>
      </div>
    </main>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="text-violet-400 shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}