import { readable, writable } from 'svelte/store';

export const currentStatus = writable('init');

export const status = readable({
	init: 'init',
	idle: 'idle',
	listen: 'listen',
	think: 'think',
	speak: 'speak'
});
