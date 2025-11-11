<script lang="ts">
    import ResetCount from "./components/ResetCount.svelte";
    import {
        count,
        increaseCount,
        decreaseCount,
        double,
        time,
    } from "../../store/store";
</script>

<div class="container">
    <h1>Stores</h1>

    <section class="store-demo">
        <h2>Readable Store - Time</h2>
        <p class="time-display">{$time.toLocaleTimeString()}</p>
    </section>

    <section class="store-demo">
        <h2>Writable Store - Counter</h2>
        <div class="counter-display">
            <p class="count">Count: <strong>{$count}</strong></p>
            <p class="derived">Double: <strong>{$double}</strong></p>
        </div>
        <div class="button-group">
            <button onclick={decreaseCount}>Decrease</button>
            <button onclick={increaseCount}>Increase</button>
            <ResetCount />
        </div>
    </section>

    <section class="info">
        <h3>Usage Notes</h3>
        <ul>
            <li>
                <strong>Inside components:</strong> Use <code>$store</code> to auto-subscribe
            </li>
            <li>
                <strong>Outside components:</strong> Use <code>store.subscribe()</code> and
                call the returned unsubscribe function
            </li>
        </ul>
    </section>
</div>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
    }

    h1 {
        margin-bottom: 2rem;
    }

    .store-demo {
        background: #f5f5f5;
        padding: 1.5rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
    }

    .store-demo h2 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #333;
    }

    .time-display {
        font-size: 1.5rem;
        font-weight: 500;
        color: #ff3e00;
    }

    .counter-display {
        display: flex;
        gap: 2rem;
        margin-bottom: 1rem;
    }

    .counter-display p {
        font-size: 1.1rem;
    }

    .button-group {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    button {
        padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: white;
        cursor: pointer;
        transition: all 0.2s;
    }

    button:hover {
        background: #ff3e00;
        color: white;
        border-color: #ff3e00;
    }

    .info {
        background: #fff3cd;
        padding: 1.5rem;
        border-radius: 8px;
        border-left: 4px solid #ffc107;
    }

    .info h3 {
        margin-top: 0;
        font-size: 1.1rem;
    }

    .info ul {
        margin: 0;
        padding-left: 1.5rem;
    }

    .info li {
        margin-bottom: 0.5rem;
    }

    code {
        background: #e9ecef;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: monospace;
    }
</style>
