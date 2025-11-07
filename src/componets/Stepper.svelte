<script lang="ts">
    let { increment, decrement } = $props();
</script>

<div>
    <button onclick={decrement}>-1</button>
    <button onclick={increment}>+1</button>
</div>
