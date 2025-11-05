<script lang="ts">
    // Demonstrates local state using $state rune
    let count = $state(0);

    function increment() {
        count += 1;
    }

    function decrement() {
        if (count === 0) {
            alert("count cant be negative");
            return;
        }
        count -= 1;
    }
</script>

<div class="basic-counter">
    <h3>Basic Counter (Local State)</h3>
    <p>Count: {count}</p>
    <button onclick={increment}>Increment</button>
    <button onclick={decrement}>Decrement</button>
</div>

<style>
    .basic-counter {
        padding: 1rem;
        border: 2px solid #ff3e00;
        border-radius: 8px;
        margin: 1rem 0;
    }

    button {
        margin: 0 0.5rem;
        padding: 0.5rem 1rem;
        background-color: #ff3e00;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #ff5722;
    }
</style>
