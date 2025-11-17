import { Section } from "@/components/section";
import { Button } from "@/components/button";

const placeholders = [
  {
    title: "Case Study: Start-up Landingpage",
    type: "Landingpage",
    status: "In Planung",
    text:
      "Geplant ist eine Landingpage für ein frühes SaaS-Produkt, inklusive klarer Messaging-Struktur und A/B-testbaren Hero-Varianten."
  },
  {
    title: "Case Study: Mini-Site für Initiative",
    type: "NGO / Verein",
    status: "Partner gesucht",
    text:
      "Wir suchen eine Organisation, die eine kleine, moderne Website benötigt und bereit ist, gemeinsam eine ausführliche Case Study zu erstellen."
  },
  {
    title: "Case Study: Kleine Web App / MVP",
    type: "Web App",
    status: "Offen",
    text:
      "Ein erstes, bewusst schlank gehaltenes Tool, das zeigt, wie ein MVP mit Next.js, Supabase und modernem UI umgesetzt werden kann."
  }
];

export default function PortfolioPage() {
  return (
    <Section
      eyebrow="Portfolio"
      title="Aktuell im Aufbau – werde eines der ersten Projekte"
      subtitle="Digitalfläche befindet sich bewusst in der Aufbauphase. Das bedeutet: viel persönliche Betreuung, direkte Zusammenarbeit und attraktive Konditionen für Pilotprojekte."
    >
      <div className="mb-6 rounded-2xl border border-dashed border-sky-500/40 bg-slate-950/60 p-5 text-sm text-slate-200">
        <p>
          Wir arbeiten derzeit an den ersten Referenzen. Wenn du
          gerade eine Landingpage, einen Relaunch oder eine kleine
          Web App planst, kannst du eines der ersten Projekte von
          Digitalfläche werden und von Sonderkonditionen profitieren.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((item) => (
          <article key={item.title} className="card h-full">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-white sm:text-base">
                {item.title}
              </h3>
              <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] font-medium text-sky-300">
                {item.type}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-300 sm:text-sm">
              {item.text}
            </p>
            <p className="mt-4 inline-flex rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium text-amber-300">
              {item.status}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 border-t border-slate-800/60 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Du möchtest, dass dein Projekt hier als erste Case Study
          auftaucht? Dann lass uns kurz sprechen und prüfen, ob es
          gut zu Digitalfläche passt.
        </p>
        <Button href="/kontakt">
          Projekt als Case Study vorschlagen
        </Button>
      </div>
    </Section>
  );
}
