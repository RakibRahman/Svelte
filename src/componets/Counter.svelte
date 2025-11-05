<script>
    import { counter } from '../shared/shared.svelte.ts';
</script>

<button onclick={() => counter.count += 1}>
    clicks: {counter.count}
</button>
