<script>
    import { trapFocus } from "../../actions/trapFocus.svelte";
    import Canvas from "../../componets/Canvas.svelte";

    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "white",
        "black",
    ];

    let selected = $state(colors[0]);
    let size = $state(10);
    let showMenu = $state(true);
</script>

<div class="header">
    <h1>Svelte Actions</h1>
    <p class="intro">
        Actions are element-level lifecycle functions that run when an element
        is created and cleaned up when it's destroyed.
    </p>

    <div class="info-box">
        <h3>Common Use Cases:</h3>
        <ul>
            <li>Interfacing with third-party libraries</li>
            <li>Lazy-loaded images</li>
            <li>Tooltips and popovers</li>
            <li>Custom event handlers</li>
        </ul>
    </div>
</div>

<div class="container">
    <Canvas color={selected} {size} />

    {#if showMenu}
        <div
            role="presentation"
            class="modal-background"
            onclick={(event) => {
                if (event.target === event.currentTarget) {
                    showMenu = false;
                }
            }}
            onkeydown={(e) => {
                if (e.key === "Escape") {
                    showMenu = false;
                }
            }}
        >
            <div class="menu" use:trapFocus>
                <div class="colors">
                    {#each colors as color}
                        <button
                            class="color"
                            aria-label={color}
                            aria-current={selected === color}
                            style="--color: {color}"
                            onclick={() => {
                                selected = color;
                            }}
                        ></button>
                    {/each}
                </div>

                <label>
                    small
                    <input type="range" bind:value={size} min="1" max="50" />
                    large
                </label>
            </div>
        </div>
    {/if}

    <div class="controls">
        <button class="show-menu" onclick={() => (showMenu = !showMenu)}>
            {showMenu ? "close" : "menu"}
        </button>
    </div>
</div>

<style>
    .header {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
    }

    h1 {
        margin-bottom: 0.5rem;
    }

    .intro {
        color: #666;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    .info-box {
        background: #f8f9fa;
        border-left: 4px solid #007bff;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        text-align: left;
        margin-bottom: 2rem;
    }

    .info-box h3 {
        margin-top: 0;
        margin-bottom: 0.75rem;
        color: #333;
    }

    .info-box ul {
        margin: 0;
        padding-left: 1.5rem;
    }

    .info-box li {
        margin: 0.5rem 0;
        color: #555;
    }

    .container {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .controls {
        position: absolute;
        left: 0;
        top: 0;
        padding: 1em;
    }

    .show-menu {
        width: 5em;
        cursor: pointer;
    }

    .modal-background {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(20px);
    }

    .menu {
        position: relative;
        background: var(--bg-2);
        width: calc(100% - 2em);
        max-width: 28em;
        padding: 1em 1em 0.5em 1em;
        border-radius: 1em;
        box-sizing: border-box;
        user-select: none;
    }

    .colors {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(9, 1fr);
        grid-gap: 0.5em;
    }

    .color {
        aspect-ratio: 1;
        border-radius: 50%;
        background: var(--color, #fff);
        transform: none;
        filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
        transition: all 0.1s;
        cursor: pointer;
    }

    .color[aria-current="true"] {
        transform: translate(1px, 1px);
        filter: none;
        box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.2);
    }

    .menu label {
        display: flex;
        width: 100%;
        margin: 1em 0 0 0;
    }

    .menu input {
        flex: 1;
    }
</style>
