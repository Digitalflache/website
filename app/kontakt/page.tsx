import { Section } from "@/components/section";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

export default function KontaktPage() {
  return (
    <Section
      eyebrow="Kontakt"
      title="Kostenloses Kennenlerngespräch anfragen"
      subtitle="Erzähl kurz, worum es bei deinem Projekt geht. Wir melden uns innerhalb von ein bis zwei Werktagen mit Rückfragen oder einem Vorschlag für das weitere Vorgehen."
    >
      <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
        <div className="card">
          <ContactForm />
        </div>
        <div className="space-y-6 text-sm text-slate-300">
          <div className="card space-y-3">
            <h3 className="text-base font-semibold text-white">
              Direktkontakt
            </h3>
            <p>
              Wenn du lieber direkt schreiben möchtest, erreichst du
              Digitalfläche unter:
            </p>
            <p className="text-sm font-medium text-sky-300">
              kontakt@digitalflaeche.at
            </p>
            <p className="text-xs text-slate-400 sm:text-sm">
              Auf Wunsch vereinbaren wir einen Call oder Video-Call.
              Termine sind flexibel und können auch abends stattfinden.
            </p>
          </div>
          <div className="card space-y-3">
            <h3 className="text-base font-semibold text-white">
              Standort
            </h3>
            <p>
              Digitalfläche ist ein Web-Studio mit Sitz in Tirol,
              arbeitet aber zu einem großen Teil remote. Projekte aus
              anderen Bundesländern oder dem DACH-Raum sind ebenfalls
              möglich.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4 text-xs text-slate-400 sm:text-sm">
            <p>
              Wichtig: Durch das Absenden der Anfrage kommt noch kein
              Auftrag zustande. Zuerst prüfen wir gemeinsam, ob dein
              Vorhaben zu Digitalfläche passt und welche nächsten
              Schritte sinnvoll sind.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
