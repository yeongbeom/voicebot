import { writable } from 'svelte/store';

const expressionWatcher = (watchFunction) => {
	const initialValue = '';
	const { subscribe } = writable(initialValue);
	return {
		subscribe,
		set: (expr: string) => {
			watchFunction();
			// return expr;
		}
	};
};

export default expressionWatcher;
