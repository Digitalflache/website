import { Section } from "@/components/section";
import { Container } from "@/components/container";

export default function UeberUnsPage() {
  return (
    <>
      <Section
        eyebrow="Über uns"
        title="Digitalfläche – ein kleines Web-Studio aus Tirol"
        subtitle="Hinter Digitalfläche steht ein Freelance Full-Stack Developer aus Tirol, unterstützt von einem freien Mitarbeiter. Gemeinsam betreuen wir ausgewählte Projekte mit Fokus auf Qualität statt Masse."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card h-full">
            <h3 className="text-lg font-semibold text-white">
              Technischer Hintergrund
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Unsere Erfahrung liegt im Aufbau moderner Webanwendungen
              und performanter Websites. Von klassischen WordPress-
              Seiten bis zu individuellen Next.js-Projekten decken wir
              den gesamten technischen Stack ab.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Erfahrung mit Next.js, TypeScript und Tailwind CSS</li>
              <li>• Saubere Codebasis und nachvollziehbare Struktur</li>
              <li>• Fokus auf Performance und einfache Wartbarkeit</li>
            </ul>
          </div>
          <div className="card h-full">
            <h3 className="text-lg font-semibold text-white">
              Zusammenarbeit auf Augenhöhe
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Du arbeitest direkt mit der Person zusammen, die dein
              Projekt umsetzt. Das spart Zeit, reduziert Missverständnisse
              und ermöglicht schnelle Entscheidungen.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Direkter Kontakt per E-Mail, Call oder Video-Call</li>
              <li>• Ehrliche Einschätzungen statt übertriebener Versprechen</li>
              <li>• Klare Dokumentation, damit du nicht abhängig bleibst</li>
            </ul>
          </div>
        </div>
      </Section>

      <section className="pb-16 pt-2 sm:pb-20">
        <Container>
          <div className="grid gap-6 rounded-2xl border border-slate-800/60 bg-slate-950/60 p-6 text-sm text-slate-300 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white sm:text-base">
                Was uns wichtig ist
              </h3>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li>• Klare Kommunikation, wenig Fachjargon</li>
                <li>• Realistische Zeitpläne und machbare Ziele</li>
                <li>• Projekte, hinter denen wir inhaltlich stehen können</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white sm:text-base">
                Wie wir arbeiten
              </h3>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li>• Remote-first, flexibel bei Terminen</li>
                <li>• Kleine, überschaubare Projektpakete</li>
                <li>• Iterative Verbesserungen statt Big-Bang-Launch</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white sm:text-base">
                Für wen wir gut passen
              </h3>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li>• Start-ups in frühen Phasen</li>
                <li>• Vereine, NGOs und medizinische Einrichtungen</li>
                <li>• Kleine Unternehmen, die langfristig denken</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
