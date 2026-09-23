import { Link, createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { PageHeader, SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/trip-planner")({
  head: () => ({
    meta: [
      { title: "Trip Planner — Mzansi Travel AI" },
      {
        name: "description",
        content:
          "Plan your South African trip by chatting: share your days, interests and budget and the AI drafts an itinerary you can refine.",
      },
      { property: "og:title", content: "Trip Planner — Mzansi Travel AI" },
      {
        property: "og:description",
        content:
          "Build itineraries through conversation instead of forms — say what you like and adapt the plan as you go.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TripPlannerPage,
});

const PROMPTS = [
  "I have 5 days in South Africa and I like beaches, food and nature.",
  "Plan 3 days in Cape Town for a first-time visitor.",
  "I'm travelling with my family and want a relaxed safari trip.",
  "Make my itinerary cheaper and use less driving.",
];

const STEPS = [
  { title: "1. Say how long you have", body: "Three days, two weeks — the AI works with what you have." },
  { title: "2. Share what you enjoy", body: "Beaches, safari, wine, hiking, museums, street food, or all of it." },
  { title: "3. Refine by chatting", body: "Ask to make it cheaper, slower, family-friendly or more adventurous." },
];

function TripPlannerPage() {
  return (
    <SiteLayout>
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <PageHeader
          eyebrow="Trip Planner"
          title="Plan your trip by chatting"
          description="There are no long forms here. Tell Mzansi Travel AI about your trip and it drafts a day-by-day plan you can adjust in the conversation."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.title} className="rounded-3xl border border-border bg-card p-5 shadow-soft">
              <h2 className="text-base font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-secondary/60 p-6">
          <h2 className="text-xl font-semibold">Start with one of these</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {PROMPTS.map((prompt) => (
              <li key={prompt}>
                <Link
                  to="/chat"
                  search={{ q: prompt }}
                  className="block h-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  {prompt}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-6 w-full rounded-full sm:w-auto">
            <Link to="/chat">
              <MessageCircle aria-hidden="true" />
              Start planning in chat
            </Link>
          </Button>
        </div>
      </div>
    </SiteLayout>
  );
}
