<script>
    let yes = $state(false);
</script>

<section>
    <h2>Checkbox Binding</h2>
    <label>
        <input type="checkbox" bind:checked={yes} />
        Yes! Send me regular email spam
    </label>

    {#if yes}
        <p class="success">Thanks! You're subscribed</p>
    {:else}
        <p class="warning">You must subscribe</p>
    {/if}

    <button disabled={!yes}>Subscribe</button>
</section>

<style>
    section {
        margin-bottom: 2rem;
    }

    label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
    }

    .success {
        color: green;
    }

    .warning {
        color: orange;
    }

    button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
