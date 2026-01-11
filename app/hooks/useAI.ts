import { useState } from "react";

export function useAI() {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function ask(question: string, section: string) {
    setAnswer("");
    setLoading(true);

    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, section }),
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split("\n");

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        if (line === "data: [DONE]") {
          setLoading(false);
          return;
        }

        try {
          const json = JSON.parse(line.replace("data: ", ""));
          const token = json.choices?.[0]?.delta?.content;
          if (token) setAnswer((prev) => prev + token);
        } catch {
          // ignore malformed chunks
        }
      }
    }

    setLoading(false);
  }

  return { ask, answer, loading };
}
