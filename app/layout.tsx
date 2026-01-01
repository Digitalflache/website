import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalflaeche.at"),
  title: {
    default: "Digitalfläche – Web-Studio für Start-ups in Tirol",
    template: "%s | Digitalfläche"
  },
  description:
    "Digitalfläche ist dein Web-Studio aus Tirol für Landingpages, One Pager und Web Apps. Fokus auf Start-ups, schnellen ersten Entwurf und persönliche Zusammenarbeit.",
  openGraph: {
    title: "Digitalfläche – Web-Studio für Start-ups in Tirol",
    description:
      "Landingpages, One Pager und Web Apps für Start-ups, NGOs und kleinere Unternehmen. Persönlicher Support, klare Abläufe und schnelle erste Entwürfe.",
    url: "https://digitalflaeche.at",
    siteName: "Digitalfläche",
    type: "website",
    locale: "de_AT"
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitalfläche – Web-Studio für Start-ups in Tirol",
    description:
      "Landingpages, One Pager und Web Apps für Start-ups, NGOs und kleinere Unternehmen."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-linear-to-b from-slate-950 via-slate-950 to-slate-950">
        <Analytics />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{props.children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}