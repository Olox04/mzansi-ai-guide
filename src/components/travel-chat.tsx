import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";
import { SUGGESTED_QUESTIONS } from "@/lib/travel-content";
import { cn } from "@/lib/utils";

const WELCOME_MESSAGE =
  "👋 Welcome to South Africa! I'm Mzansi Travel AI, your virtual travel companion. Ask me anything about travelling around South Africa, from destinations and food to transport, activities and local culture.";

export function TravelChat({
  initialQuestion,
  className,
  compact = false,
}: {
  initialQuestion?: string;
  className?: string;
  compact?: boolean;
}) {
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);
  const [chatKey, setChatKey] = useState(0);
  const { messages, sendMessage, status, error, stop, setMessages } = useChat({
    id: `mzansi-chat-${chatKey}`,
    transport,
  });
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const sentInitial = useRef<string | undefined>(undefined);

  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    textareaRef.current?.focus();
  }, [chatKey]);

  useEffect(() => {
    if (!initialQuestion || sentInitial.current === initialQuestion) return;
    sentInitial.current = initialQuestion;
    void sendMessage({ text: initialQuestion });
  }, [initialQuestion, sendMessage]);

  const ask = (text: string) => {
    if (isBusy) return;
    void sendMessage({ text });
    textareaRef.current?.focus();
  };

  const startNewConversation = () => {
    if (isBusy) stop();
    setMessages([]);
    sentInitial.current = initialQuestion;
    setChatKey((value) => value + 1);
  };

  return (
    <section
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lift",
        compact ? "h-[min(72vh,620px)]" : "h-[calc(100dvh-8.5rem)] min-h-[520px]",
        className,
      )}
      aria-label="Mzansi Travel AI chat"
    >
      <header className="flex items-center gap-3 border-b border-border bg-card/80 px-4 py-3 sm:px-5">
        <BrandMark className="size-10" />
        <div className="min-w-0 flex-1">
          <h2 className="truncate font-display text-base font-semibold sm:text-lg">
            Mzansi Travel AI
          </h2>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            Travel Assistant Online
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={startNewConversation}
          disabled={messages.length === 0}
          aria-label="Start a new conversation and clear these messages"
        >
          <RotateCcw aria-hidden="true" />
          <span className="hidden sm:inline">New chat</span>
        </Button>
      </header>

      <Conversation className="min-h-0 flex-1">
        <ConversationContent className="gap-6">
          <Message from="assistant">
            <MessageContent>
              <MessageResponse>{WELCOME_MESSAGE}</MessageResponse>
            </MessageContent>
          </Message>

          {messages.length === 0 && (
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Try asking
              </p>
              <ul className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:grid sm:grid-cols-2 sm:overflow-visible">
                {SUGGESTED_QUESTIONS.map((question) => (
                  <li key={question} className="shrink-0 sm:shrink">
                    <button
                      type="button"
                      onClick={() => ask(question)}
                      className="h-full w-full rounded-2xl border border-border bg-background px-4 py-3 text-left text-sm font-medium transition-colors hover:border-primary/40 hover:bg-secondary"
                    >
                      {question}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {messages.map((message) => {
            const text = message.parts
              .filter((part) => part.type === "text")
              .map((part) => ("text" in part ? part.text : ""))
              .join("");

            if (!text) return null;

            return (
              <Message key={message.id} from={message.role}>
                <MessageContent>
                  {message.role === "assistant" ? (
                    <MessageResponse>{text}</MessageResponse>
                  ) : (
                    <p className="whitespace-pre-wrap">{text}</p>
                  )}
                </MessageContent>
              </Message>
            );
          })}

          {status === "submitted" && (
            <Message from="assistant">
              <MessageContent>
                <Shimmer>Mzansi AI is thinking…</Shimmer>
              </MessageContent>
            </Message>
          )}

          {error && (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-2xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-foreground"
            >
              <AlertTriangle className="mt-0.5 size-4 text-destructive" aria-hidden="true" />
              <span>I&apos;m having trouble connecting right now. Please try again.</span>
            </div>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="border-t border-border bg-card/80 p-3 sm:p-4">
        <PromptInput
          onSubmit={(message) => {
            const text = message.text?.trim();
            if (!text || isBusy) return;
            void sendMessage({ text });
          }}
        >
          <PromptInputTextarea
            ref={textareaRef}
            aria-label="Ask Mzansi Travel AI a question"
            placeholder="Ask about destinations, food, safari, transport, safety…"
          />
          <PromptInputFooter className="justify-between">
            <span className="text-xs text-muted-foreground">
              Press Enter to send. Always verify visas and live prices officially.
            </span>
            <PromptInputSubmit status={status} onStop={stop} />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </section>
  );
}
