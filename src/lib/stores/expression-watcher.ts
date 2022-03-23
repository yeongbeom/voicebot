import { writable } from 'svelte/store'

function expressionWatcher(initialValue, watchFunction) {
    const { subscribe, update } = writable(initialValue)
    return {
        subscribe,
        set: value => {
            update(() => {
                watchFunction()
                return value
            })
        }
    }
}

export default expressionWatcher