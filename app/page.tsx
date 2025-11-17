import Link from "next/link";
import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

const heroFeatures = [
  "Persönlicher Support per Call oder Video",
  "Sehr schneller erster Designentwurf",
  "Technische Umsetzung ohne Agentur-Overhead"
];

const processSteps = [
  "Kontaktaufnahme und kurzes Kennenlerngespräch",
  "Klärung der Details und Ausarbeitung eines Entwurfs",
  "Verbindliches Angebot auf Stundenbasis",
  "Ultra-schneller erster Designentwurf",
  "Umsetzung, Feedback-Schleifen und Feinschliff",
  "Launch, Übergabe und auf Wunsch Wartung"
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
        <Container className="flex flex-col gap-12 py-16 sm:py-20 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Aktuell auf der Suche nach Pilotprojekten</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Deine digitale Fläche
                <span className="block text-sky-400">
                  schnell, klar, startklar.
                </span>
              </h1>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                Digitalfläche ist ein kleines Web-Studio aus Tirol.
                Wir entwickeln Landingpages, One Pager und Web Apps
                für Start-ups und Organisationen, die schnell online
                gehen wollen, ohne an Qualität zu sparen.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/kontakt">
                Kostenloses Erstgespräch buchen
              </Button>
              <Button href="/leistungen" variant="ghost">
                Leistungen ansehen
              </Button>
            </div>
            <ul className="grid gap-3 text-xs text-slate-400 sm:grid-cols-2 sm:text-sm">
              {heroFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <div className="card relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.16),_transparent_55%)]" />
              <div className="relative space-y-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
                  Wie wir arbeiten
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-900/90 p-4">
                    <div>
                      <p className="text-xs text-slate-400">
                        Erster Entwurf
                      </p>
                      <p className="text-base font-semibold text-white">
                        in wenigen Tagen
                      </p>
                    </div>
                    <span className="rounded-full bg-slate-950 px-3 py-1 text-xs text-sky-300">
                      Ideal für Start-ups
                    </span>
                  </div>
                  <div className="grid gap-3 text-xs sm:grid-cols-3 sm:text-sm">
                    <div className="rounded-2xl bg-slate-900/80 p-3">
                      <p className="text-slate-400">
                        Landingpages
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Für Launch, MVP und Kampagnen
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-900/80 p-3">
                      <p className="text-slate-400">
                        Web Apps
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Kleine Tools und SaaS-MVPs
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-900/80 p-3">
                      <p className="text-slate-400">
                        Relaunch
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Bestehende Seiten modernisieren
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4">
                    <div>
                      <p className="text-xs text-slate-400">
                        Technologie-Stack
                      </p>
                      <p className="text-sm font-semibold text-white">
                        WordPress, Next.js, TypeScript, Tailwind, Supabase
                      </p>
                    </div>
                    <Link
                      href="/technologien"
                      className="text-xs font-medium text-sky-300 underline underline-offset-4 hover:text-sky-200"
                    >
                      Mehr über Technologien
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section
        id="leistungen"
        eyebrow="Leistungen"
        title="Landingpages, One Pager und Web Apps"
        subtitle="Digitalfläche deckt den technischen und visuellen Teil deines Web-Projekts ab. Texte und Fotos kannst du selbst beistellen oder später als Zusatzleistung buchen."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="card h-full">
            <h3 className="text-lg font-semibold text-white">
              Landingpages und One Pager
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Ideal für den Launch eines neuen Produkts, einer App,
              eines MVPs oder einer Kampagne. Klar strukturierte
              Seite, fokussiert auf eine zentrale Handlung.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Schnelle Umsetzung und frühes Feedback</li>
              <li>• Konversionsfokus statt Baukasten-Template</li>
              <li>• Technische Basis für spätere Erweiterungen</li>
            </ul>
          </div>
          <div className="card h-full">
            <h3 className="text-lg font-semibold text-white">
              Individuelle Web Apps
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Für Start-ups mit spezifischen Anforderungen. Von
              kleinen internen Tools bis zu ersten Versionen eines
              SaaS-Produkts.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Moderne Stack: Next.js, TypeScript, Supabase</li>
              <li>• MVP-Ansatz: klein starten, gezielt ausbauen</li>
              <li>• Saubere Codebasis für spätere Teams</li>
            </ul>
          </div>
          <div className="card h-full">
            <h3 className="text-lg font-semibold text-white">
              Überarbeitung bestehender Websites
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Deine Website existiert bereits, fühlt sich aber
              langsam, veraltet oder unübersichtlich an. Wir
              überarbeiten Technik und UX Schritt für Schritt.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Performance-Optimierung und Core Web Vitals</li>
              <li>• Aufräumen von Theme, Plugins und CSS</li>
              <li>• Bessere Struktur und klare Nutzerführung</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Texte und Bildmaterial kannst du selbst liefern oder
            später als separate Leistung beauftragen. So bleibt
            dein Start möglichst schlank.
          </p>
          <Button href="/leistungen" variant="ghost">
            Details zu den Leistungen
          </Button>
        </div>
      </Section>

      <Section
        id="prozess"
        eyebrow="Ablauf"
        title="Klarer Prozess in sechs Schritten"
        subtitle="Transparenter Ablauf vom ersten Kennenlernen bis zum Launch. Ohne Agentur-Jargon, dafür mit klaren Entscheidungen in jedem Schritt."
        background="muted"
      >
        <ol className="grid gap-4 text-sm text-slate-200 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <li key={step} className="card">
              <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-sky-300">
                {index + 1}
              </div>
              <p className="font-medium text-white">{step}</p>
              {index === 0 && (
                <p className="mt-2 text-xs text-slate-400">
                  Kurzes, unverbindliches Gespräch per Call oder
                  Video, in dem wir Ziel, Budgetrahmen und
                  Zeithorizont abklären.
                </p>
              )}
              {index === 3 && (
                <p className="mt-2 text-xs text-slate-400">
                  Du erhältst schnell einen klickbaren Entwurf oder
                  eine erste Version der Seite und kannst direkt
                  Feedback geben.
                </p>
              )}
              {index === 5 && (
                <p className="mt-2 text-xs text-slate-400">
                  Nach dem Launch bleiben wir ansprechbar und
                  unterstützen bei Wartung, kleinen Anpassungen und
                  weiteren Ausbaustufen.
                </p>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="zielgruppe"
        eyebrow="Für wen wir arbeiten"
        title="Ideal für Start-ups und Organisationen mit klaren Zielen"
        subtitle="Digitalfläche ist bewusst klein gehalten. Das erlaubt kurze Wege, schnelle Entscheidungen und direkte Zusammenarbeit ohne Zwischenebenen."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card h-full">
            <h3 className="text-lg font-semibold text-white">
              Start-ups und kleine Teams
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Du willst deine Idee testen, Investoren etwas zeigen
              oder endlich eine Website haben, die wirklich zu dir
              passt. Wir begleiten dich von der ersten Skizze bis
              zur produktiven Seite.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Fokus auf pragmatische Lösungen</li>
              <li>• Projekte im Budget- bis Mittelklasse-Bereich</li>
              <li>• Technische Entscheidungen werden erklärt</li>
            </ul>
          </div>
          <div className="card h-full">
            <h3 className="text-lg font-semibold text-white">
              NGOs, Vereine und medizinische Einrichtungen
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Für gemeinnützige Organisationen, Vereine oder
              Ordinationen gelten bei Digitalfläche besondere
              Konditionen. Wichtig ist der Mehrwert, nicht nur der
              Stundensatz.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Individuelle Vereinbarungen nach Betriebsart</li>
              <li>• Barrierearme Gestaltung nach Möglichkeit</li>
              <li>• Langfristige Betreuung, wenn gewünscht</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="technologien"
        eyebrow="Technologie"
        title="Moderner Stack ohne Experimente am Kunden"
        subtitle="Wir setzen auf Technologien, die sich im Alltag bewährt haben, leicht wartbar sind und gut mit Hosting-Plattformen wie Vercel zusammenarbeiten."
        background="soft"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="card flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Landingpages
            </p>
            <p className="text-sm font-semibold text-white">
              WordPress und Figma
            </p>
            <p className="text-xs text-slate-400">
              Für klassiche Seiten mit einfachem Redaktionsalltag.
              Saubere Themes, so wenig Plugins wie möglich.
            </p>
          </div>
          <div className="card flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Web Apps
            </p>
            <p className="text-sm font-semibold text-white">
              Next.js und TypeScript
            </p>
            <p className="text-xs text-slate-400">
              Ideal für MVPs, interne Tools und kleinere SaaS-
              Projekte mit klaren Anforderungen.
            </p>
          </div>
          <div className="card flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Styling
            </p>
            <p className="text-sm font-semibold text-white">
              Tailwind CSS
            </p>
            <p className="text-xs text-slate-400">
              Konsistente Designs, schnelle Anpassungen und
              saubere Komponenten ohne CSS-Spaghetti.
            </p>
          </div>
          <div className="card flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Datenhaltung
            </p>
            <p className="text-sm font-semibold text-white">
              Supabase und Co.
            </p>
            <p className="text-xs text-slate-400">
              Für Projekte, die Nutzerkonten, einfache Datenbanken
              oder Authentifizierung brauchen.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="cta"
        eyebrow="Starte dein Projekt"
        title="Sei eines der ersten Projekte von Digitalfläche"
        subtitle="In den nächsten Monaten bauen wir bewusst ein kleines, feines Portfolio auf. Dafür suchen wir Start-ups, Vereine und kleine Unternehmen, die mit uns gemeinsam wachsen wollen."
        align="center"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300 sm:text-sm">
            <span className="tag">
              Sonderkonditionen für Pilotprojekte
            </span>
            <span className="tag">
              Persönlicher Kontakt direkt mit dem Entwickler
            </span>
            <span className="tag">
              Antwort in der Regel innerhalb von 24–48 Stunden
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/kontakt">
              Kostenloses Kennenlerngespräch anfragen
            </Button>
            <Button href="/preise" variant="ghost">
              Mehr zu Preisen und Konditionen
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
