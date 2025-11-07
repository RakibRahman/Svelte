<script lang="ts">
    let scoops = $state(1);
    let flavours = $state<string[]>([]);

    const formatter = new Intl.ListFormat("en", {
        style: "long",
        type: "conjunction",
    });
</script>

<section>
    <h2>Group Bindings (Radio & Checkbox Groups)</h2>
    <p class="info">Using bind:group for radio buttons and checkbox groups</p>

    <div class="group">
        <h3>Size</h3>
        {#each [1, 2, 3] as size}
            <label>
                <input
                    type="radio"
                    name="scoops"
                    bind:group={scoops}
                    value={size}
                />
                {size}
                {size === 1 ? "scoop" : "scoops"}
            </label>
        {/each}
    </div>

    <div class="group">
        <h3>Flavours (Checkboxes)</h3>
        {#each ["cookies and cream", "mint choc chip", "raspberry ripple"] as flavour}
            <label>
                <input
                    type="checkbox"
                    name="flavours"
                    value={flavour}
                    bind:group={flavours}
                />
                {flavour}
            </label>
        {/each}
    </div>

    <div class="group">
        <h3>Flavours (Multi-select)</h3>
        <select multiple bind:value={flavours} size="3">
            {#each ["cookies and cream", "mint choc chip", "raspberry ripple"] as flavour}
                <option value={flavour}>{flavour}</option>
            {/each}
        </select>
    </div>

    <div class="result">
        {#if flavours.length === 0}
            <p class="warning">Please select at least one flavour</p>
        {:else if flavours.length > scoops}
            <p class="error">Can't order more flavours than scoops!</p>
        {:else}
            <p class="success">
                You ordered {scoops}
                {scoops === 1 ? "scoop" : "scoops"}
                of {formatter.format(flavours)}
            </p>
        {/if}
    </div>
</section>

<style>
    section {
        margin-bottom: 2rem;
    }

    .info {
        font-style: italic;
        color: #666;
        font-size: 0.9rem;
    }

    .group {
        margin: 1.5rem 0;
        padding: 1rem;
        background: #f5f5f5;
        border-radius: 4px;
    }

    .group h3 {
        margin-top: 0;
    }

    label {
        display: block;
        margin: 0.5rem 0;
        cursor: pointer;
    }

    select[multiple] {
        width: 100%;
        max-width: 300px;
        padding: 0.5rem;
    }

    .result {
        margin-top: 1.5rem;
        padding: 1rem;
        border-radius: 4px;
        font-weight: bold;
    }

    .warning {
        color: orange;
    }

    .error {
        color: red;
    }

    .success {
        color: green;
    }
</style>
