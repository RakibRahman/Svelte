<script lang="ts">
    let count = $state(0);

    function increment() {
        count += 1;
    }

    const colors = ["red", "green", "blue", "yellow"];
    let selectedColor = $state(colors[0]);
</script>

<div class="container">
    <button onclick={increment}>
        Clicked {count}
        {count === 1 ? "time" : "times"}
    </button>

    <!-- {#...} opens a block. {/...} closes a block. -->
    {#if count > 5}
        <p>{count} is greater than 5</p>
    {:else if count === 5}
        <p>Equal Number</p>
    {:else}
        <p>{count} is lesser than 5</p>
    {/if}

    <h1 style="color: {selectedColor}">Pick a colour</h1>
    <div class="color-container">
        {#each colors as color}
            <button
                style="background: {selectedColor === color
                    ? color
                    : ''}; color:{selectedColor === color && color !== 'yellow'
                    ? 'white'
                    : 'black'}"
                onclick={() => {
                    selectedColor = color;
                }}>{color}</button
            >
        {/each}
    </div>
</div>

<style>
    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
    }

    .color-container {
        display: inline-flex;
        gap: 10px;
    }

    .color-container button {
        width: 150px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: var(--color, #fff);
        transform: translate(-2px, -2px);
        filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
        transition: all 0.1s;

        font-weight: 700;
        font-size: 2rem;
    }
</style>
