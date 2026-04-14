import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { askAssistant } from "@/lib/api";

const ChatBubble: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ id: number; text: string; from: "user" | "bot" }[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim()) return;
    const prompt = input.trim();
    const id = Date.now();
    setMessages((m) => [...m, { id, text: prompt, from: "user" }]);
    setInput("");
    setLoading(true);

    try {
      const result = await askAssistant(prompt);
      const reply = result.reply || "Sorry, something went wrong.";
      setMessages((m) => [...m, { id: id + 1, text: reply, from: "bot" }]);
      setSuggestions(Array.isArray(result.suggestions) ? result.suggestions : []);
    } catch {
      setMessages((m) => [...m, { id: id + 1, text: "Assistant is temporarily unavailable. Please try again.", from: "bot" }]);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="fixed right-6 bottom-6 z-50">
        <div className="flex flex-col items-end">
          {open && (
            <div className="w-80 max-w-full mb-3 bg-background border border-border/40 rounded-lg shadow-lg overflow-hidden">
              <div className="p-3 border-b border-border/30 font-medium">Aselea Assistant</div>
              <div className="p-3 max-h-64 overflow-y-auto space-y-2">
                {messages.length === 0 && <div className="text-sm text-muted-foreground">Ask about Aselea services, pricing, careers, security, or global reach.</div>}
                {messages.map((m) => (
                  <div key={m.id} className={`${m.from === "user" ? "text-right" : "text-left"}`}>
                    <div className={`${m.from === "user" ? "inline-block bg-primary text-white" : "inline-block bg-muted text-muted-foreground"} rounded-md px-3 py-2 text-sm`}>{m.text}</div>
                  </div>
                ))}
                {loading && <div className="text-sm text-muted-foreground">Assistant is typing...</div>}
                {suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => {
                          setInput(suggestion);
                        }}
                        className="px-2 py-1 text-xs rounded-full border border-border/30 bg-card/40 hover:bg-card"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-3 border-t border-border/30 flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") void send(); }}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 rounded border border-border/20 bg-background text-sm"
                />
                <button onClick={() => void send()} disabled={loading || !input.trim()} className="px-3 py-2 bg-primary text-white rounded disabled:opacity-60">Send</button>
              </div>
            </div>
          )}

          <button
            onClick={() => setOpen((s) => !s)}
            className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white shadow-lg focus:outline-none"
            title="Chat with Aselea Assistant"
          >
            <MessageSquare className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
