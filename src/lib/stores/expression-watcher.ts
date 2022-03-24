import { writable } from 'svelte/store';

function expressionWatcher(initialValue, watchFunction) {
	const { subscribe } = writable(initialValue);
	return {
		subscribe,
		set: (expr: string) => {
			watchFunction();
			// return expr;
		}
	};
}

export default expressionWatcher;
