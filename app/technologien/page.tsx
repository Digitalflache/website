import { Section } from "@/components/section";

export default function TechnologienPage() {
  return (
    <Section
      eyebrow="Technologie"
      title="Der Stack hinter Digitalfläche"
      subtitle="Wir setzen bewusst auf Technologien, die langfristig wartbar bleiben und gut mit modernen Hosting-Plattformen funktionieren."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article className="card h-full">
          <h3 className="text-sm font-semibold text-white sm:text-base">
            WordPress für klassische Seiten
          </h3>
          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            Für viele Landingpages und kleinere Unternehmensseiten ist
            WordPress nach wie vor sinnvoll. Wichtig ist ein schlankes
            Setup ohne Plugin-Wildwuchs und ein sauber entwickeltes Theme.
          </p>
        </article>
        <article className="card h-full">
          <h3 className="text-sm font-semibold text-white sm:text-base">
            Next.js und TypeScript für Web Apps
          </h3>
          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            Für komplexere Projekte, MVPs oder interne Tools setzen wir
            auf Next.js mit TypeScript. Das ermöglicht schnelle
            Entwicklung, saubere Typen und gute Performance.
          </p>
        </article>
        <article className="card h-full">
          <h3 className="text-sm font-semibold text-white sm:text-base">
            Tailwind CSS für konsistentes Design
          </h3>
          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            Tailwind hilft dabei, wiederverwendbare UI-Bausteine zu
            entwickeln und Designs konsistent umzusetzen, ohne sich in
            komplexen CSS-Strukturen zu verlieren.
          </p>
        </article>
        <article className="card h-full">
          <h3 className="text-sm font-semibold text-white sm:text-base">
            Supabase und ähnliche Dienste
          </h3>
          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            Für Projekte mit Nutzerkonten, einfachen Datenbanken oder
            Authentifizierung nutzen wir unter anderem Supabase. So
            lassen sich MVPs zügig realisieren.
          </p>
        </article>
        <article className="card h-full">
          <h3 className="text-sm font-semibold text-white sm:text-base">
            Deployment auf Vercel oder vergleichbaren Plattformen
          </h3>
          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            Next.js-Projekte werden in der Regel über Vercel
            bereitgestellt. Für WordPress-Instanzen kommen je nach
            Anforderung unterschiedliche Hoster in Frage.
          </p>
        </article>
        <article className="card h-full">
          <h3 className="text-sm font-semibold text-white sm:text-base">
            Fokus auf pragmatische Lösungen
          </h3>
          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            Nicht jedes Projekt braucht den neuesten Hype-Stack.
            Technologieentscheidungen orientieren sich an deinen
            Zielen, nicht an Buzzwords.
          </p>
        </article>
      </div>
    </Section>
  );
}
