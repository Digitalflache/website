import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  background?: "default" | "muted" | "soft";
  children: ReactNode;
};

export function Section(props: SectionProps) {
  const align = props.align ?? "left";
  const background = props.background ?? "default";

  return (
    <section
      id={props.id}
      className={cn(
        "py-16 sm:py-20",
        background === "default" && "bg-transparent",
        background === "muted" && "bg-slate-950/40",
        background === "soft" && "bg-slate-900/40"
      )}
    >
      <Container>
        <div
          className={cn(
            "flex flex-col gap-6 sm:gap-8",
            align === "center" && "items-center text-center"
          )}
        >
          <div>
            {props.eyebrow && (
              <p className="section-eyebrow">{props.eyebrow}</p>
            )}
            <h2 className="section-title">{props.title}</h2>
            {props.subtitle && (
              <p className="section-subtitle">{props.subtitle}</p>
            )}
          </div>
          {props.children}
        </div>
      </Container>
    </section>
  );
}
