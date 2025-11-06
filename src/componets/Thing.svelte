<script lang="ts">
    const emojis = {
        apple: "🍎",
        banana: "🍌",
        carrot: "🥕",
        doughnut: "🍩",
        egg: "🥚",
    };

    // `name` is updated whenever the prop value changes...
    let { name } = $props();

    // ...but `emoji` is fixed upon initialisation
    const emoji = emojis[name as keyof typeof emojis];
</script>

<p>{emoji} = {name}</p>
