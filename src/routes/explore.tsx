import { Link, createFileRoute } from "@tanstack/react-router";
import { Sparkle } from "lucide-react";

import { PageHeader, SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { EXPLORE_CATEGORIES } from "@/lib/travel-content";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore South Africa — Mzansi Travel AI" },
      {
        name: "description",
        content:
          "Browse South African destinations, activities, food and practical travel information, then ask the AI for details.",
      },
      { property: "og:title", content: "Explore South Africa — Mzansi Travel AI" },
      {
        property: "og:description",
        content:
          "Simple cards covering destinations, activities, food and travel basics — each one opens a question in the AI chat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExplorePage,
});

function ExplorePage() {
  return (
    <SiteLayout>
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <PageHeader
          eyebrow="Explore"
          title="South Africa at a glance"
          description="Short, text-first cards. Tap Ask AI on any card to continue the conversation in the chat."
        />

        <div className="mt-12 space-y-12">
          {EXPLORE_CATEGORIES.map((category) => (
            <section key={category.id} aria-labelledby={`${category.id}-heading`}>
              <h2 id={`${category.id}-heading`} className="text-2xl font-semibold">
                {category.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{category.blurb}</p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.cards.map((card) => (
                  <li
                    key={card.name}
                    className="flex flex-col rounded-3xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-lift"
                  >
                    <span className="text-2xl" aria-hidden="true">
                      {card.icon}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold">{card.name}</h3>
                    <p className="mt-1.5 flex-1 text-sm text-muted-foreground">
                      {card.description}
                    </p>
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      className="mt-4 w-full rounded-full"
                    >
                      <Link
                        to="/chat"
                        search={{ q: card.question }}
                        aria-label={`Ask AI: ${card.question}`}
                      >
                        <Sparkle aria-hidden="true" />
                        Ask AI
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
