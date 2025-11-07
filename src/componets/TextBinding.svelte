<script>
    let name = $state("world");
</script>

<section>
    <h2>Text Input Binding</h2>
    <input bind:value={name} />
    <p>Hello {name}!</p>
</section>

<style>
    section {
        margin-bottom: 2rem;
    }
</style>
