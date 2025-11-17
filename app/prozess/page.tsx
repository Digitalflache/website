import { Section } from "@/components/section";

const steps = [
  {
    title: "Kontaktaufnahme und Kennenlerngespräch",
    body:
      "Du schreibst uns kurz, worum es geht. Im nächsten Schritt vereinbaren wir einen Call oder Video-Call, meist zwischen 30 und 45 Minuten."
  },
  {
    title: "Klärung der Details und Entwurfs-Ideen",
    body:
      "Wir besprechen Zielgruppen, Inhalte, groben Funktionsumfang und Prioritäten. Daraus entsteht eine erste Vorstellung, wie die Seite oder App aufgebaut sein kann."
  },
  {
    title: "Verbindliches Angebot",
    body:
      "Du erhältst ein transparentes Angebot auf Stundenbasis. Darin sind geschätzte Aufwände, Meilensteine und Zahlungsmodalitäten klar aufgeschlüsselt."
  },
  {
    title: "Ultra-schneller erster Designentwurf",
    body:
      "Auf Basis des Angebots entsteht sehr rasch ein erster Entwurf – je nach Projekt als klickbare Figma-Vorlage oder direkt als funktionierende Seite."
  },
  {
    title: "Umsetzung und Feedback-Schleifen",
    body:
      "Wir arbeiten in kurzen Iterationen. Du bekommst Zwischenversionen zu sehen und kannst Feedback geben, bevor alles fix live geht."
  },
  {
    title: "Launch, Übergabe und Wartung",
    body:
      "Nach dem Launch erhältst du Zugriff auf alle relevanten Zugänge und eine kurze Einführung. Auf Wunsch betreuen wir die Seite laufend weiter."
  }
];

export default function ProzessPage() {
  return (
    <Section
      eyebrow="Ablauf"
      title="So läuft ein Projekt mit Digitalfläche ab"
      subtitle="Der Prozess ist bewusst schlank gehalten. Ziel ist, dass du weißt, wo dein Projekt steht, ohne dich durch endlose Abstimmungsrunden kämpfen zu müssen."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.title} className="card h-full">
            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-sky-300">
              {index + 1}
            </div>
            <h3 className="mt-3 text-sm font-semibold text-white sm:text-base">
              {step.title}
            </h3>
            <p className="mt-2 text-xs text-slate-300 sm:text-sm">
              {step.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
