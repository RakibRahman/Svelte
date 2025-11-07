<script lang="ts">
    import Box from "../../componets/Box.svelte";

    let flipped = $state(false);
    let color = "red";
    let size = $state(50);
    let hue = $state(0);
    const rotate = () => (hue = (hue + 30) % 360);
</script>

<div class="container">
    <h1>Classes and Styles</h1>
    <p class="intro">
        Learn how to dynamically style Svelte components using class directives,
        style directives, and CSS custom properties.
    </p>

    <section class="demo-section">
        <h2>Class Directive</h2>
        <p class="description">
            Conditionally apply CSS classes based on reactive state
        </p>
        <div class="image-demo">
            <img
                class={flipped ? "flipped" : ""}
                src="https://www.w3schools.com/howto/img_paris.jpg"
                alt="demo"
            />
            <button
                class="btn btn-primary"
                onclick={() => (flipped = !flipped)}
            >
                {flipped ? "Unflip" : "Flip"} the image
            </button>
        </div>
        <div class="code-hint">
            <code>class={"{flipped ? 'flipped' : ''}"}</code>
        </div>
    </section>

    <section class="demo-section">
        <h2>Style Directive</h2>
        <p class="description">
            Apply inline styles reactively with the <code>style:</code> directive
        </p>
        <div class="style-demo">
            <div
                class="dynamic-text"
                style:color
                style:font-size={`${size}px`}
                style:font-weight={700}
            >
                Hello Svelte 5!
            </div>
            <div class="controls">
                <label>
                    Font Size: <strong>{size}px</strong>
                    <input
                        type="range"
                        bind:value={size}
                        min="20"
                        max="100"
                        class="slider"
                    />
                </label>
            </div>
        </div>
        <div class="code-hint">
            <code>style:font-size={"{`${size}px`}"}</code>
        </div>
    </section>

    <section class="demo-section">
        <h2>Dynamic Color Transitions</h2>
        <p class="description">
            Smooth color transitions using reactive HSL values
        </p>
        <div class="color-demo">
            <div
                class="color-box"
                style:background-color={`hsl(${hue}, 80%, 60%)`}
                style:transition="background-color 0.3s"
            >
                <span class="hue-value">HSL: {hue}°</span>
            </div>
            <button class="btn btn-secondary" onclick={rotate}>
                Rotate Color
            </button>
        </div>
        <div class="code-hint">
            <code>style:background-color={"{`hsl(${hue}, 80%, 60%)`}"}</code>
        </div>
    </section>

    <section class="demo-section">
        <h2>CSS Custom Properties</h2>
        <p class="description">
            Pass CSS variables to child components using the <code
                >--property</code
            >
            syntax
        </p>
        <div class="boxes">
            <div class="box-wrapper">
                <Box --color="green" />
                <span class="label">Green</span>
            </div>
            <div class="box-wrapper">
                <Box --color="#f14e0d" />
                <span class="label">Orange</span>
            </div>
            <div class="box-wrapper">
                <Box />
                <span class="label">Blue (global)</span>
            </div>
        </div>
        <div class="code-hint">
            <code>{'<Box --color="green" />'}</code>
            <br />
            <code class="global-note">
                /* :global modifier targets nested components */
            </code>
        </div>
    </section>
</div>

<style>
    .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem;
    }

    h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #333;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .intro {
        text-align: center;
        max-width: 700px;
        margin: 0 auto 3rem;
        color: #666;
        line-height: 1.6;
        font-size: 1.1rem;
    }

    .demo-section {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        margin-bottom: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
        border: 1px solid #e0e0e0;
    }

    .demo-section h2 {
        margin-top: 0;
        color: #333;
        border-bottom: 3px solid #667eea;
        padding-bottom: 0.5rem;
        display: inline-block;
    }

    .description {
        color: #666;
        margin-bottom: 1.5rem;
        font-style: italic;
    }

    .description code {
        background: #f5f5f5;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: "Courier New", monospace;
        color: #d63384;
    }

    .image-demo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 1.5rem;
        background: #f9f9f9;
        border-radius: 8px;
    }

    .image-demo img {
        max-width: 300px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        transition: transform 0.3s ease;
    }

    .flipped {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }

    .btn {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .btn-primary {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }

    .btn-secondary {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        margin-top: 1rem;
    }

    .btn-secondary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(245, 87, 108, 0.4);
    }

    .style-demo {
        padding: 1.5rem;
        background: #f9f9f9;
        border-radius: 8px;
    }

    .dynamic-text {
        text-align: center;
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: white;
        border-radius: 6px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .controls {
        max-width: 400px;
        margin: 0 auto;
    }

    .controls label {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        color: #555;
    }

    .slider {
        width: 100%;
        height: 8px;
        border-radius: 5px;
        background: #ddd;
        outline: none;
        cursor: pointer;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #667eea;
        cursor: pointer;
    }

    .slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #667eea;
        cursor: pointer;
        border: none;
    }

    .color-demo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
        background: #f9f9f9;
        border-radius: 8px;
    }

    .color-box {
        width: 200px;
        height: 200px;
        border-radius: 12px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hue-value {
        background: rgba(255, 255, 255, 0.9);
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-weight: bold;
        color: #333;
    }

    .boxes {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 2rem;
        padding: 1.5rem;
        background: #f9f9f9;
        border-radius: 8px;
    }

    .box-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    .label {
        font-weight: 600;
        color: #555;
        font-size: 0.9rem;
    }

    /*  :global CSS modifier - target elements inside other components*/
    .boxes .box-wrapper:nth-child(3) :global(.box) {
        background-color: blue;
    }

    .code-hint {
        margin-top: 1rem;
        padding: 1rem;
        background: #282c34;
        border-radius: 6px;
        font-family: "Courier New", monospace;
        font-size: 0.9rem;
        overflow-x: auto;
    }

    .code-hint code {
        color: #61dafb;
    }

    .global-note {
        color: #6a9955;
        font-style: italic;
    }
</style>
