import { Link, createFileRoute } from "@tanstack/react-router";
import { Sparkle } from "lucide-react";

import { PageHeader, SiteLayout } from "@/components/site-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ_CATEGORIES } from "@/lib/travel-content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Mzansi Travel AI" },
      {
        name: "description",
        content:
          "Common tourist questions about South African currency, languages, destinations, food, transport and safety.",
      },
      { property: "og:title", content: "FAQ — Mzansi Travel AI" },
      {
        property: "og:description",
        content:
          "Quick answers on currency, languages, safaris, food, transport and safety — with an Ask AI button on every question.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
        <PageHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Short answers to the questions tourists ask most. Want more detail? Ask the AI."
        />

        <div className="mt-10 space-y-8">
          {FAQ_CATEGORIES.map((category) => (
            <section key={category.title}>
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <span aria-hidden="true">{category.icon}</span>
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="mt-3">
                {category.items.map((item) => (
                  <AccordionItem
                    key={item.question}
                    value={item.question}
                    className="rounded-2xl border border-border bg-card px-4 shadow-soft data-[state=open]:shadow-lift mb-3 border-b"
                  >
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 text-sm text-muted-foreground">
                      <p>{item.answer}</p>
                      <Button asChild variant="secondary" size="sm" className="rounded-full">
                        <Link
                          to="/chat"
                          search={{ q: item.question }}
                          aria-label={`Ask AI: ${item.question}`}
                        >
                          <Sparkle aria-hidden="true" />
                          Ask AI
                        </Link>
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
