<script>
    let a = $state(1);
    let b = $state(2);
</script>

<section>
    <h2>Numeric Inputs</h2>
    <p class="info">Svelte automatically coerces string numbers to numeric types</p>

    <label>
        <span>Value A: {a}</span>
        <input type="number" bind:value={a} min="0" max="10" />
        <input type="range" bind:value={a} min="0" max="10" />
    </label>

    <label>
        <span>Value B: {b}</span>
        <input type="number" bind:value={b} min="0" max="10" />
        <input type="range" bind:value={b} min="0" max="10" />
    </label>

    <p class="result">{a} + {b} = {a + b}</p>
</section>

<style>
    section {
        margin-bottom: 2rem;
    }

    label {
        display: block;
        margin: 1rem 0;
    }

    label span {
        display: block;
        margin-bottom: 0.5rem;
    }

    input[type="number"],
    input[type="range"] {
        margin-right: 1rem;
    }

    .info {
        font-style: italic;
        color: #666;
        font-size: 0.9rem;
    }

    .result {
        font-weight: bold;
        font-size: 1.2rem;
        margin-top: 1rem;
    }
</style>
