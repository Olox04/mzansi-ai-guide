import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import { TravelChat } from "@/components/travel-chat";

type ChatSearch = { q?: string };

export const Route = createFileRoute("/chat")({
  validateSearch: (search: Record<string, unknown>): ChatSearch => ({
    q: typeof search.q === "string" && search.q.trim() ? search.q.trim() : undefined,
  }),
  head: () => ({
    meta: [
      { title: "AI Chat — Mzansi Travel AI" },
      {
        name: "description",
        content:
          "Chat with Mzansi Travel AI about South African destinations, safaris, food, transport, safety and itineraries.",
      },
      { property: "og:title", content: "AI Chat — Mzansi Travel AI" },
      {
        property: "og:description",
        content:
          "Ask natural-language questions about travelling in South Africa and get instant, conversational answers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChatPage,
});

function ChatPage() {
  const { q } = Route.useSearch();

  return (
    <SiteLayout>
      <div className="mx-auto w-full max-w-4xl px-3 py-4 sm:px-6 sm:py-6">
        <TravelChat initialQuestion={q} />
      </div>
    </SiteLayout>
  );
}
