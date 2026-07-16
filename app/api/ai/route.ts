export const runtime = "nodejs";

import { buildPrompt } from "@/app/lib/buildPrompt";
import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return new Response(
      JSON.stringify({
        error: "The AI assistant is temporarily unavailable. Please try again later.",
      }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  const { question, section } = await req.json();

  const prompt = buildPrompt(question, section);

  let stream;
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      messages: [
        {
          role: "system",
          content: prompt,
        },
      ],
    });
  } catch {
    return new Response(
      JSON.stringify({
        error: "The AI assistant is temporarily unavailable. Please try again later.",
      }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  const encoder = new TextEncoder();

  return new Response(
    new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`)
            );
          }
        } catch {
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                choices: [
                  {
                    delta: {
                      content:
                        "\n\nSomething went wrong while generating a response. Please try again.",
                    },
                  },
                ],
              })}\n\n`
            )
          );
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      },
    }),
    {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    }
  );
}
