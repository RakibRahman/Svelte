<script lang="ts">
    import Box from "../../componets/Box.svelte";

    let flipped = $state(false);
    let color = "red";
    let size = 50;
    let hue = $state(0);
    const rotate = () => (hue = (hue + 30) % 360);
</script>

<div>
    <h1>Classes and styles</h1>

    <div>
        <img
            class={flipped ? "flipped" : ""}
            src="https://www.w3schools.com/howto/img_paris.jpg"
            alt="demo"
        />
        <button
            onclick={() => {
                flipped = !flipped;
            }}>Flip the image</button
        >
    </div>

    <h2>Style Directive</h2>
    <div style:color style:font-size={`${size}px`} style:font-weight={700}>
        Hello Svelte 5!
    </div>
    <div
        style:width="100px"
        style:height="100px"
        style:background-color={`hsl(${hue}, 80%, 60%)`}
        style:transition="background-color 0.3s"
    ></div>
    <button style:margin-top="10px" onclick={rotate}>Rotate color</button>
</div>

<div>
    <h2>Component styles</h2>

    <div class="boxes">
        <Box --color="green" />
        <Box --color="#f14e0d" />
        <Box />
    </div>
</div>

<style>
    .flipped {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }
    /*  :global CSS modifier - target elements inside other components*/
    .boxes :global(.box:nth-child(3)) {
        background-color: blue;
    }
</style>
