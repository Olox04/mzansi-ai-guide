import { Link, createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { PageHeader, SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mzansi Travel AI" },
      {
        name: "description",
        content:
          "Mzansi Travel AI is a university prototype showing how conversational AI can make South African travel information easier to access.",
      },
      { property: "og:title", content: "About — Mzansi Travel AI" },
      {
        property: "og:description",
        content:
          "A student prototype exploring an AI chatbot as a single conversational interface for tourist information about South Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const FUTURE = [
  "Maps",
  "Currency conversion",
  "Flight information",
  "Hotel information",
  "Restaurant information",
  "Booking systems",
  "Official tourism APIs",
  "Multilingual support",
];

function AboutPage() {
  return (
    <SiteLayout>
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
        <PageHeader
          eyebrow="About"
          title="About Mzansi Travel AI"
          description="Your AI travel companion for South Africa — a group project prototype."
        />

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Mzansi Travel AI is an AI chatbot prototype designed to assist international tourists
              visiting South Africa. The system demonstrates how conversational AI can make travel
              information easier to access through a simple natural-language interface.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-lg font-semibold">The problem</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tourists often need to search through multiple websites to find information about
                destinations, activities, transport, food and culture.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-lg font-semibold">The solution</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Mzansi Travel AI provides one conversational interface where tourists can ask
                questions naturally and receive relevant travel information.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-semibold">Future possibilities</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {FUTURE.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-accent/50 p-6">
            <h2 className="text-lg font-semibold">A note on accuracy</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The assistant gives general orientation only. For visas, immigration rules, exchange
              rates, flights and safety advisories, always confirm the latest details with official
              sources before travelling.
            </p>
          </div>

          <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
            <Link to="/chat">
              <MessageCircle aria-hidden="true" />
              Try the assistant
            </Link>
          </Button>
        </div>
      </div>
    </SiteLayout>
  );
}
