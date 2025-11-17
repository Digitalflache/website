import Link from "next/link";
import { Container } from "@/components/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/80">
      <Container className="flex flex-col gap-6 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="font-medium text-slate-200">
            Digitalfläche
          </p>
          <p className="text-xs text-slate-500">
            Web-Studio für Landingpages, One Pager und Web Apps in Tirol.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/kontakt"
            className="transition hover:text-slate-200"
          >
            Kontakt
          </Link>
          <a
            href="mailto:kontakt@digitalflaeche.at"
            className="transition hover:text-slate-200"
          >
            kontakt@digitalflaeche.at
          </a>
          <span className="text-xs text-slate-500">
            © {year} Digitalfläche
          </span>
        </div>
      </Container>
    </footer>
  );
}
