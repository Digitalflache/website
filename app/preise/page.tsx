import { Section } from "@/components/section";
import { Button } from "@/components/button";

const packages = [
  {
    name: "Starter Landingpage",
    description:
      "Eine klare, fokussierte Seite für ein Produkt, eine Dienstleistung oder ein Pilotprojekt. Ideal als erster professioneller Online-Auftritt.",
    suitedFor: [
      "Erste Produkt- oder Angebotsseite",
      "MVP-Landingpage mit Newsletter oder Warteliste",
      "Temporäre Kampagne oder Veranstaltung"
    ]
  },
  {
    name: "Erweiterte Landingpage / Mini-Site",
    description:
      "Ein One Pager mit zusätzlichen Bereichen oder wenigen Unterseiten, etwa für Team, FAQ oder Referenzen.",
    suitedFor: [
      "Start-ups mit mehreren Zielgruppen",
      "Unternehmen mit wenigen, aber wichtigen Unterseiten",
      "Organisationen, die etwas mehr Informationsbedarf haben"
    ]
  },
  {
    name: "Kleine Web App / MVP",
    description:
      "Ein erster funktionaler Prototyp oder ein kleines Tool mit Login, Datenhaltung oder interaktiven Komponenten.",
    suitedFor: [
      "SaaS-Ideen, die getestet werden sollen",
      "Interne Tools für kleine Teams",
      "Portale mit einfachen Rollen und Bereichen"
    ]
  }
];

export default function PreisePage() {
  return (
    <Section
      eyebrow="Preise und Konditionen"
      title="Transparente Stundenbasis statt starrer Paketpreise"
      subtitle="Jedes Projekt ist unterschiedlich. Darum rechnen wir auf Stundenbasis ab, geben dir aber von Beginn an eine ehrliche Einschätzung zu Umfang und Budgetrahmen."
    >
      <div className="grid gap-6 lg:grid-cols-[2fr,3fr]">
        <div className="card h-full space-y-4 text-sm text-slate-300">
          <h3 className="text-base font-semibold text-white">
            Wie abgerechnet wird
          </h3>
          <ul className="space-y-2">
            <li>
              • Abrechnung auf Stundenbasis, transparent nach
              Arbeitsschritten aufgegliedert
            </li>
            <li>
              • Der geschätzte Gesamtaufwand wird im Angebot klar
              ausgewiesen
            </li>
            <li>
              • Änderungen werden frühzeitig besprochen, bevor
              Mehrkosten entstehen
            </li>
          </ul>
          <h3 className="pt-2 text-base font-semibold text-white">
            Zahlung und Raten
          </h3>
          <ul className="space-y-2">
            <li>• Üblicherweise rund 40 % Anzahlung zum Projektstart</li>
            <li>
              • Restzahlung in ein oder zwei Raten nach Abnahme und
              Launch
            </li>
            <li>
              • Für NGOs, Vereine und medizinische Einrichtungen sind
              individuelle Modelle möglich
            </li>
          </ul>
          <p className="pt-2 text-xs text-slate-400 sm:text-sm">
            Konkrete Stundensätze und Zahlungsmodalitäten werden im
            Angebot festgehalten. So weißt du vor Projektstart
            genau, womit du rechnen kannst.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {packages.map((pkg) => (
              <article key={pkg.name} className="card h-full">
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {pkg.description}
                </p>
                <h4 className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Geeignet für
                </h4>
                <ul className="mt-2 space-y-1 text-xs text-slate-300 sm:text-sm">
                  {pkg.suitedFor.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-5 text-sm text-slate-300">
            <h3 className="text-sm font-semibold text-white sm:text-base">
              Was bedeutet Budget bis Mittelklasse?
            </h3>
            <p className="mt-2 text-xs text-slate-300 sm:text-sm">
              Digitalfläche richtet sich an Projekte, bei denen das
              Budget bewusst gesetzt ist, aber trotzdem Raum für eine
              saubere technische Umsetzung bleiben soll. Im
              Erstgespräch klären wir, ob deine Vorstellung und unser
              Aufwand gut zusammenpassen.
            </p>
          </div>
          <div className="flex flex-col gap-3 border-t border-slate-800/60 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-300">
              Du möchtest eine grobe Einschätzung für dein Projekt,
              bevor wir ins Detail gehen?
            </p>
            <Button href="/kontakt">
              Kurzprojekt oder MVP besprechen
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
