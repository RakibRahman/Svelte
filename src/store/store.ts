import { writable, readable, derived } from 'svelte/store';

export const count = writable(0);

count.subscribe((val) => {
    if (val === 5) {
        alert("Count is 5")
    }
})

export const resetCount = () => {
    count.set(0);
}

export const increaseCount = () => {
    count.update((n) => n + 1);
}

export const decreaseCount = () => {
    count.update((n) => n - 1);
}

export const double = derived(count, $count => $count * 2)


export const time = readable(new Date(), (set) => {
    const interval = setInterval(() => {
        set(new Date())
    }, 1000)

    return () => clearInterval(interval)
})