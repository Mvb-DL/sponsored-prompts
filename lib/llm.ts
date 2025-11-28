// lib/llm.ts

import type { ChatMessage } from './types';

export type SupportedModelId = 'gpt-4o-mini';

type CallLLMOptions = {
  modelId: SupportedModelId;
  messages: ChatMessage[];
};

const USE_DUMMY_LLM = process.env.USE_DUMMY_LLM === '1';

/**
 * Zentrale Funktion, die vom API-Route aufgerufen wird.
 * Wenn USE_DUMMY_LLM=1 gesetzt ist, wird eine Dummy-Antwort zurückgegeben.
 */
export async function callLLM({
  modelId,
  messages,
}: CallLLMOptions): Promise<string> {
  if (USE_DUMMY_LLM) {
    const lastUser = messages.filter((m) => m.role === 'user').pop();
    return `(Dummy-Antwort)\n\nDu hast geschrieben:\n"${lastUser?.content ?? ''}"`;
  }

  switch (modelId) {
    case 'gpt-4o-mini':
      return callOpenAIChat({ model: 'gpt-4o-mini', messages });
    default:
      throw new Error(`Unsupported model: ${modelId}`);
  }
}

/**
 * OpenAI-Chat-API Call.
 * OPENAI_API_KEY muss in .env.local gesetzt sein.
 * Optional: OPENAI_BASE_URL falls du einen Proxy o.Ä. verwendest.
 */
async function callOpenAIChat({
  model,
  messages,
}: {
  model: string;
  messages: ChatMessage[];
}): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  const baseUrl = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';

  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not set');
  }

  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('OpenAI error:', res.status, text);
    throw new Error('LLM API error');
  }

  const data = await res.json();
  const answer: string =
    data.choices?.[0]?.message?.content ?? '(keine Antwort)';
  return answer;
}
