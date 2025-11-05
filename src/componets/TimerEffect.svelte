<script lang="ts">
    // Demonstrates $effect rune for side effects
    let elapsed = $state(0);
    let interval = $state(1000);

    // Effects run when reactive dependencies change
    // Effects do not run during server-side rendering
    $effect(() => {
        const id = setInterval(() => {
            elapsed += 1;
        }, interval);

        // Cleanup function - clears old intervals when effect re-runs
        return () => {
            clearInterval(id);
        };
    });
</script>

<div class="timer-effect">
    <h3>Timer with $effect</h3>
    <p class="elapsed">Elapsed: {elapsed} seconds</p>
    <div class="controls">
        <button onclick={() => (interval /= 2)}>Speed up</button>
        <button onclick={() => (interval *= 2)}>Slow down</button>
    </div>
    <p class="info">Current interval: {interval}ms</p>
</div>

<style>
    .timer-effect {
        padding: 1rem;
        border: 2px solid #2196f3;
        border-radius: 8px;
        margin: 1rem 0;
    }

    .elapsed {
        font-size: 1.5rem;
        font-weight: bold;
        color: #1976d2;
    }

    .controls {
        display: flex;
        gap: 0.5rem;
        margin: 1rem 0;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #2196f3;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        flex: 1;
    }

    button:hover {
        background-color: #42a5f5;
    }

    .info {
        font-size: 0.9rem;
        color: #666;
        font-style: italic;
    }
</style>
