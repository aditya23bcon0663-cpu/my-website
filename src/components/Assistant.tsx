import React, { useState, useEffect, useRef } from "react";
import { X, MessageSquare } from "lucide-react";
import { askAssistant, AssistantMetadata } from "@/lib/api";

const Assistant = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [messages, setMessages] = useState<Array<{ from: "user" | "bot"; text: string }>>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [lastMetadata, setLastMetadata] = useState<AssistantMetadata | null>(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const quickPrompts = [
    "What services does Aselea provide?",
    "How does Aselea global reach work?",
    "What app and web stacks do you support?",
    "How can I start a project with Aselea?",
  ];

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        // welcome message
        setMessages((m) => (m.length === 0 ? [{ from: "bot", text: "Hi. I am your Aselea assistant. Ask me about Aselea services, global reach, security, pricing, careers, and status." }] : m));
      }, 200);
    }
  }, [open]);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages, loading]);

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => inputRef.current?.focus(), 120);
    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  // local fallback (lightweight) when backend is unreachable
  function localSimpleReply(prompt: string) {
    const p = prompt.trim().toLowerCase();
    if (/pricing|project|quote|budget/.test(p)) {
      return "I can help with Aselea project onboarding. Please use the Contact section for tailored pricing and timeline details.";
    }
    if (/career|hiring|job|recruit/.test(p)) {
      return "For recruitment and roles, please contact career@aselea.com.";
    }
    return "I can help only with Aselea website topics: services, global reach, architecture, marketing, careers, status, and project onboarding.";
  }

  const send = async (preset?: string) => {
    const prompt = (preset ?? input).trim();
    if (!prompt) return;

    setMessages((m) => [...m, { from: "user", text: prompt }]);
    if (!preset) {
      setInput("");
    }

    setLoading(true);
    try {
      const result = await askAssistant(prompt);
      const reply = result.reply || "Sorry, something went wrong.";
      setMessages((m) => [...m, { from: "bot", text: String(reply) }]);
      setLastMetadata(result.metadata ?? null);
      setSuggestions(Array.isArray(result.suggestions) ? result.suggestions : []);
    } catch (err) {
      const fallback = localSimpleReply(prompt);
      setMessages((m) => [...m, { from: "bot", text: String(fallback) }]);
      setLastMetadata(null);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative w-full h-[86dvh] sm:h-auto sm:max-h-[85vh] sm:max-w-2xl bg-background border border-border/30 rounded-t-2xl sm:rounded-2xl shadow-lg overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/20 shrink-0">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            <div className="font-medium">Aselea Assistant</div>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div ref={ref} className="flex-1 min-h-0 overflow-auto p-3 sm:p-4 space-y-3 bg-gradient-to-b from-background/50 to-background">
          {messages.length === 0 && !loading && (
            <div className="rounded-lg border border-border/40 bg-card/30 p-3 sm:p-4">
              <p className="text-sm text-muted-foreground">Ask basic questions about layout, bugs, or quick edits.</p>
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={m.from === "user" ? "text-right" : "text-left"}>
              <div
                className={`inline-block max-w-[92%] sm:max-w-[85%] px-3 py-2 rounded-lg text-sm sm:text-base whitespace-pre-wrap break-words ${m.from === "user" ? "bg-primary text-white" : "bg-card text-foreground"}`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {loading && <div className="text-left text-muted-foreground">Assistant is typing…</div>}

          {lastMetadata?.leadType === "pricing_or_project" && (
            <div className="text-left">
              <a href="#contact" className="inline-block text-sm px-3 py-2 rounded-md bg-primary text-white">
                Open Contact Section
              </a>
            </div>
          )}

          {lastMetadata?.leadType === "recruitment" && (
            <div className="text-left text-sm text-muted-foreground">
              Recruitment contact: career@aselea.com
            </div>
          )}

          {lastMetadata?.statusConstraintApplied && (
            <div className="text-left text-xs text-muted-foreground border border-border/40 rounded-md p-2">
              Real-time status is unavailable. Please use official support channels for live infrastructure updates.
            </div>
          )}

          {suggestions.length > 0 && (
            <div className="text-left flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => void send(suggestion)}
                  disabled={loading}
                  className="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-border/40 bg-card/40 hover:bg-card disabled:opacity-60"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="px-3 sm:px-4 py-2 border-t border-border/20 shrink-0 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => void send(prompt)}
                disabled={loading}
                className="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-border/40 bg-card/40 hover:bg-card disabled:opacity-60"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3 border-t border-border/20 flex items-end gap-2 shrink-0">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void send();
              }
            }}
            rows={2}
            placeholder="Ask me about responsiveness, code edits, or site issues..."
            className="flex-1 resize-none px-3 py-2 border rounded-md bg-transparent outline-none text-sm sm:text-base"
          />
          <button
            onClick={() => void send()}
            disabled={loading || !input.trim()}
            className="px-3 sm:px-4 py-2.5 bg-primary text-white rounded-md disabled:opacity-60"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
