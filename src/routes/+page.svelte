<script lang="ts">
    import Nested from "../componets/Nested.svelte";
    let name = "Svelte";
    const src = "https://picsum.photos/200/300";
    let count = $state(0); //called a rune, and it’s how you tell Svelte that count isn’t an ordinary variable.
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
    let numbers = $state([1, 2, 3, 4]);

    function addNumber() {
        numbers[numbers.length] = numbers.length + 1;
    }

    let total = $derived(numbers.reduce((acc, curr) => acc + curr, 0)); //derive state from other state
</script>

<h1>Hello {name}!</h1>
<p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
</p>
<Nested />
<img {src} alt="{name} dances." />

<div>
    <h3>{count}</h3>
    <button onclick={increment}> increment </button>
    <button onclick={decrement}> decrement </button>
</div>
<button onclick={addNumber}> Add a number </button>
<h3>{total}</h3>
<div>
    {#each numbers as num}
        <p>{num}</p>
    {/each}
</div>

<style>
    p {
        color: goldenrod;
        font-family: "Comic Sans MS", cursive;
        font-size: 2em;
    }
</style>
