import { Section } from "@/components/section";
import { Button } from "@/components/button";

export default function LeistungenPage() {
  return (
    <>
      <Section
        eyebrow="Leistungen"
        title="Was Digitalfläche für dich umsetzen kann"
        subtitle="Wir kombinieren technische Umsetzung mit klarer Gestaltung. Ziel ist immer, dass deine Website verständlich, schnell und leicht erweiterbar bleibt."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card h-full">
            <h3 className="text-lg font-semibold text-white">
              Landingpages und One Pager
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Eine fokussierte Seite, die genau eine Sache gut
              erklärt und Besucher zu einer klaren Handlung führt.
              Perfekt für Produkt-Launches, Kampagnen, MVPs oder
              Veranstaltungen.
            </p>
            <h4 className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Wann ist das sinnvoll?
            </h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li>• Du willst deine Idee online testen</li>
              <li>• Du brauchst eine Seite für ein neues Angebot</li>
              <li>• Du möchtest Leads für Newsletter oder Wartelisten</li>
            </ul>
            <h4 className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Vorteile
            </h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li>• Schnelle Umsetzung in klaren Schritten</li>
              <li>• Konversionsorientiertes Layout statt Baukasten</li>
              <li>• Wartung und kleinere Anpassungen inklusive</li>
            </ul>
          </div>

          <div className="card h-full">
            <h3 className="text-lg font-semibold text-white">
              Individuelle Web Apps
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Du willst nicht nur eine Website, sondern ein
              funktionales Tool: etwa ein kleines Portal, ein
              Dashboard oder die erste Version eines SaaS-Produkts.
            </p>
            <h4 className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Typische Use Cases
            </h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li>• Interne Tools für kleine Teams</li>
              <li>• Kundenportale oder einfache Buchungslösungen</li>
              <li>• MVPs, um Investoren oder Pilotkunden zu überzeugen</li>
            </ul>
            <h4 className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Was du bekommst
            </h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li>• Strukturierte Architektur auf Basis von Next.js</li>
              <li>• Saubere Schnittstellen für spätere Erweiterungen</li>
              <li>• Technische Dokumentation für zukünftige Teams</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card h-full">
            <h3 className="text-lg font-semibold text-white">
              Überarbeitung und Optimierung bestehender Websites
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Deine Website steht bereits, aber fühlt sich langsam,
              veraltet oder schwer zu warten an. Wir analysieren
              den Status und schlagen konkrete Schritte vor.
            </p>
            <h4 className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Mögliche Themen
            </h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li>• Performance-Checks und Core Web Vitals</li>
              <li>• Reduktion unnötiger Plugins und Skripte</li>
              <li>• UX-Verbesserungen und verständlichere Navigation</li>
            </ul>
            <p className="mt-4 text-sm text-slate-300">
              Die Optimierung kann schrittweise erfolgen, damit
              du Budget und Aufwand gut planen kannst.
            </p>
          </div>

          <div className="card h-full">
            <h3 className="text-lg font-semibold text-white">
              Texte, Bildmaterial und laufende Betreuung
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Im ersten Schritt steht die technische und visuelle
              Umsetzung im Fokus. Texte und Fotos kannst du selbst
              bereitstellen oder später ergänzend beauftragen.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Unterstützung bei Struktur und Inhaltsplanung</li>
              <li>• Auf Wunsch Zusammenarbeit mit spezialisierten Partnern</li>
              <li>• Laufende Wartung mit kleinen Kontingenten möglich</li>
            </ul>
            <p className="mt-4 text-sm text-slate-300">
              So bleibt dein Einstieg in der Regel schlank, ohne
              dir spätere Entwicklungsschritte zu verbauen.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-800/60 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Unsicher, welche Leistung zu dir passt? Im Erstgespräch
            klären wir gemeinsam, was wirklich sinnvoll ist und
            welche Schritte Priorität haben.
          </p>
          <Button href="/kontakt">
            Projekt unverbindlich anfragen
          </Button>
        </div>
      </Section>
    </>
  );
}
