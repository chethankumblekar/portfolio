/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import { useAI } from "@/app/hooks/useAI";
import { MessageSquare, X, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function FloatingAIChat({ section }: { section: string }) {
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
    if (!input.trim()) return;

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
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          bg-indigo-500 hover:bg-indigo-400
          text-white
          flex items-center justify-center
          shadow-lg shadow-indigo-500/30
          transition
        "
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* CHAT PANEL */}
      {open && (
        <div
          className="
            fixed bottom-6 right-6 z-50
            w-[380px] max-h-[540px]
            rounded-2xl
            bg-[#0b0f1a]
            border border-white/10
            backdrop-blur-xl
            flex flex-col
            shadow-2xl
          "
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div>
              <p className="text-sm font-medium text-white">
                Ask about Chethan
              </p>
              <p className="text-xs text-slate-400">AI Assistant</p>
            </div>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5 text-slate-400 hover:text-white" />
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-indigo-500 text-white rounded-2xl rounded-br-sm px-4 py-2"
                    : "mr-auto bg-white/5 text-slate-300 rounded-2xl rounded-bl-sm px-4 py-2"
                }`}
              >
                {msg.role === "assistant" ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({ inline, children }: any) {
                        return inline ? (
                          <code className="px-1 py-0.5 rounded bg-black/40 text-indigo-300">
                            {children}
                          </code>
                        ) : (
                          <pre className="mt-2 p-3 rounded-lg bg-black/60 overflow-x-auto text-xs">
                            <code>{children}</code>
                          </pre>
                        );
                      },
                      a({ children, href }) {
                        return (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 underline"
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

                {loading && msg.role === "assistant" && (
                  <span className="animate-pulse"> ▋</span>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* INPUT */}
          <div className="p-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask something..."
                className="
                  flex-1 px-3 py-2 rounded-lg
                  bg-black/40 border border-white/10
                  text-sm text-white
                  focus:outline-none
                "
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="
                  p-2 rounded-lg
                  bg-indigo-500 hover:bg-indigo-400
                  disabled:opacity-50
                  transition
                "
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
