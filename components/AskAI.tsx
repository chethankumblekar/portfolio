"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useAI } from "@/app/hooks/useAI";
import { MessageSquare, X, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const sectionLabels: Record<string, string> = {
  "/": "Home",
  "/case-studies": "Case Studies",
  "/skills": "Skills",
  "/experience": "Experience",
  "/resume": "Resume",
};

function sectionFromPathname(pathname: string) {
  if (sectionLabels[pathname]) return sectionLabels[pathname];
  if (pathname.startsWith("/projects/")) return "Project Detail";
  return "Home";
}

export default function FloatingAIChat() {
  const pathname = usePathname();
  const section = sectionFromPathname(pathname);
  const { ask, answer, loading } = useAI();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<Message[]>(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const question = input;
    setInput("");

    setMessages((prev) => [
      ...prev,
      { role: "user", content: question },
      { role: "assistant", content: "" },
    ]);

    await ask(question, section);
  };

  /* Stream answer into last assistant message */
  useEffect(() => {
    if (!answer) return;

    const prev = messagesRef.current;
    if (!prev.length) return;

    const last = prev[prev.length - 1];
    if (last.role !== "assistant") return;

    setMessages([...prev.slice(0, -1), { ...last, content: answer }]);
  }, [answer]);

  /* Auto-scroll */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* FLOATING BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 w-fit">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close AI assistant" : "Ask AI about Chethan"}
          className="
            w-14 h-14 rounded-full
            panel
            text-signal-cyan
            flex items-center justify-center
            hover:border-signal-cyan/40
            transition
          "
        >
          {open ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageSquare className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* CHAT PANEL */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-fit">
        <div
          className="
            w-[380px] max-w-[calc(100vw-3rem)] max-h-[540px]
            rounded-2xl
            panel
            flex flex-col
            overflow-hidden
          "
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08]">
            <div>
              <p className="text-sm font-medium text-white">
                Ask about Chethan
              </p>
              <p className="font-mono-eyebrow text-[10px] uppercase text-slate-500">
                AI Assistant · {section}
              </p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close">
              <X className="w-4 h-4 text-slate-400 hover:text-white" />
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.length === 0 && (
              <p className="text-sm text-slate-500 leading-relaxed">
                Ask about Chethan&apos;s experience, skills, or projects.
                Answers are grounded in the content of this site.
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-signal-cyan/15 text-white rounded-2xl rounded-br-sm px-4 py-2"
                    : "mr-auto bg-white/[0.05] text-slate-300 rounded-2xl rounded-bl-sm px-4 py-2"
                }`}
              >
                {msg.role === "assistant" ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({ children }) {
                        return (
                          <code className="px-1 py-0.5 rounded bg-black/40 text-signal-cyan">
                            {children}
                          </code>
                        );
                      },
                      a({ children, href }) {
                        return (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-signal-cyan underline"
                          >
                            {children}
                          </a>
                        );
                      },
                      ul({ children }) {
                        return (
                          <ul className="list-disc list-inside mt-2 space-y-1">
                            {children}
                          </ul>
                        );
                      },
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                ) : (
                  msg.content
                )}

                {loading && msg.role === "assistant" && !msg.content && (
                  <span className="animate-pulse text-signal-cyan"> ▋</span>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* INPUT */}
          <div className="p-3 border-t border-white/[0.08]">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask something..."
                disabled={loading}
                className="
                  flex-1 px-3 py-2 rounded-lg
                  bg-black/30 border border-white/[0.08]
                  text-sm text-white placeholder:text-slate-600
                  focus:outline-none focus:border-signal-cyan/40
                  disabled:opacity-60
                "
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="
                  p-2 rounded-lg
                  bg-signal-cyan/15 hover:bg-signal-cyan/25
                  text-signal-cyan
                  disabled:opacity-40
                  transition
                "
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
}
