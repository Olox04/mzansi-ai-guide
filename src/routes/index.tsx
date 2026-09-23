import { Link, createFileRoute } from "@tanstack/react-router";
import { Compass, MessageCircle, Sprout, Route as RouteIcon } from "lucide-react";

import { SiteLayout } from "@/components/site-layout";
import { TravelChat } from "@/components/travel-chat";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mzansi Travel AI — Explore South Africa with AI" },
      {
        name: "description",
        content:
          "Ask Mzansi Travel AI about South African destinations, food, culture, transport, activities and travel tips. Your AI travel companion for South Africa.",
      },
      { property: "og:title", content: "Mzansi Travel AI — Explore South Africa with AI" },
      {
        property: "og:description",
        content:
          "Chat with an AI travel assistant about destinations, safaris, food, transport and trip ideas across South Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const HIGHLIGHTS = [
  {
    icon: Compass,
    title: "Ask anything",
    body: "Destinations, attractions, food, transport, currency, culture and safety — in plain language.",
  },
  {
    icon: RouteIcon,
    title: "Plan by chatting",
    body: "Say how many days you have and what you like, and the AI drafts an itinerary you can refine.",
  },
  {
    icon: Sprout,
    title: "Honest answers",
    body: "For visas, exchange rates and advisories the assistant points you to official sources.",
  },
];

function Home() {
  return (
    <SiteLayout>
      <section className="hero-surface">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-12 sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
              Your AI travel companion for South Africa
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Explore South Africa with AI
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Ask Mzansi AI about destinations, food, culture, transport, activities and travel tips
              across South Africa.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
                <a href="#chat">
                  <MessageCircle aria-hidden="true" />
                  Start Chatting
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full rounded-full bg-background sm:w-auto"
              >
                <Link to="/explore">Explore South Africa</Link>
              </Button>
            </div>
          </div>

          <div id="chat" className="mt-10 scroll-mt-20 sm:mt-12">
            <TravelChat compact />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-secondary/60 p-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold">Ask. Discover. Explore South Africa.</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Open the full chat for a bigger conversation space and suggested questions.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/chat">
              <MessageCircle aria-hidden="true" />
              Ask AI
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
