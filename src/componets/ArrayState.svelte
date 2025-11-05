<script lang="ts">
    // Demonstrates array state and $derived rune
    let numbers = $state([1, 2, 3, 4]);

    function addNumber() {
        numbers.push(numbers.length + 1);
        console.log($state.snapshot(numbers));
    }

    // $derived creates computed state from other state
    let total = $derived(numbers.reduce((acc, curr) => acc + curr, 0));

    // $inspect automatically logs state changes
    $inspect(total);
</script>

<div class="array-state">
    <h3>Array State & Derived State</h3>
    <button onclick={addNumber}>Add a number</button>
    <p><strong>Total:</strong> {total}</p>
    <div class="numbers-list">
        {#each numbers as num}
            <span class="number-badge">{num}</span>
        {/each}
    </div>
</div>

<style>
    .array-state {
        padding: 1rem;
        border: 2px solid #4caf50;
        border-radius: 8px;
        margin: 1rem 0;
    }

    button {
        margin: 0.5rem 0;
        padding: 0.5rem 1rem;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #66bb6a;
    }

    .numbers-list {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-top: 0.5rem;
    }

    .number-badge {
        background-color: #e8f5e9;
        color: #2e7d32;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-weight: bold;
    }
</style>
