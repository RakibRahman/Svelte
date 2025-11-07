<script>
    let value = $state("");
</script>

<section>
    <h2>Textarea Binding</h2>
    <textarea bind:value placeholder="Type something..."></textarea>
    <p><strong>You typed:</strong> {value || "(nothing yet)"}</p>
</section>

<style>
    section {
        margin-bottom: 2rem;
    }

    textarea {
        width: 100%;
        min-height: 100px;
        padding: 0.5rem;
        font-family: inherit;
        resize: vertical;
    }
</style>
