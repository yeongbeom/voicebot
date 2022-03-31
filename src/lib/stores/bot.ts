import { readable, writable } from 'svelte/store';

export const currentExpression = writable('neutral');

export const currentStatus = writable('init');

export const emotion = readable({
	neutral: 'neutral',
	happiness: 'happiness',
	disgust: 'disgust',
	surprise: 'surprise',
	anger: 'anger',
	sadness: 'sadness',
	fear: 'fear',
	worry: 'worry',
	contempt: 'contempt'
});

export const status = readable({
	init: 'init',
	idle: 'idle',
	listen: 'listen',
	think: 'think',
	speak: 'speak'
});
