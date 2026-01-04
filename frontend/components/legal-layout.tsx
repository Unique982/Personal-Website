import { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>

        {lastUpdated && (
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        )}
      </header>

      {/* Content */}
      <article className="space-y-10">{children}</article>
    </main>
  );
}
