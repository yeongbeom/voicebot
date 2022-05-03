import { readable } from 'svelte/store';

export const ttsApiKey = readable(import.meta.env.VITE_TTS_API_KEY);
