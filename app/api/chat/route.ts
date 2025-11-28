// app/api/chat/route.ts

import { NextRequest, NextResponse } from 'next/server';
import type { ChatMessage, AdMode } from '@/lib/types';
import { callLLM, type SupportedModelId } from '@/lib/llm';
import { pickAdForPrompt } from '@/lib/ads';

type ChatRequestBody = {
  modelId?: SupportedModelId;
  mode?: AdMode;
  messages?: ChatMessage[];
};

export async function POST(req: NextRequest) {
  let body: ChatRequestBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 }
    );
  }

  const modelId: SupportedModelId = body.modelId ?? 'gpt-4o-mini';
  const mode: AdMode = body.mode ?? 'banner';
  const messages: ChatMessage[] = body.messages ?? [];

  if (!messages.length) {
    return NextResponse.json(
      { error: 'messages array must not be empty' },
      { status: 400 }
    );
  }

  const lastUser = messages.filter((m) => m.role === 'user').pop();
  if (!lastUser) {
    return NextResponse.json(
      { error: 'At least one user message is required' },
      { status: 400 }
    );
  }

  try {
    // Ad-Auswahl, basierend auf letztem User-Prompt + Modus
    const ad = pickAdForPrompt(lastUser.content, mode);

    // LLM-Call (Proxy, ohne serverseitigen Verlauf)
    const answer = await callLLM({ modelId, messages });

    return NextResponse.json(
      {
        answer,
        ad,
        modelId,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('Chat API error:', err);
    return NextResponse.json(
      { error: 'Internal error' },
      { status: 500 }
    );
  }
}
