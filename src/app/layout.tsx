import type { Metadata } from "next";
import { en } from "@/messages/en";
import "./globals.css";

export const metadata: Metadata = {
  title: `${en.brand} — ${en.preview}`,
  description: en.premise,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
