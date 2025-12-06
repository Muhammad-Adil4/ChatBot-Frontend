// src/lib/types.ts
export interface Message {
  id: number;
  content: string;
  sender: 'user' | 'ai';
}
