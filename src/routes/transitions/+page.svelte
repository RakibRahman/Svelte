<script lang="ts">
    import { fade, fly, slide } from "svelte/transition";
    import { elasticOut } from "svelte/easing";
    import { flip } from "svelte/animate";

    const messages = [
        "reticulating splines...",
        "generating witty dialog...",
        "swapping time and space...",
        "640K ought to be enough for anybody",
        "checking the gravitational constant in your locale...",
        "keep calm and npm install",
        "counting backwards from Infinity",
        "I'm sorry Dave, I can't do that.",
        "adjusting flux capacitor...",
        "constructing additional pylons...",
        "rm -rf /",
    ];

    let visible = $state(true);
    let status = $state("waiting...");
    const spin = (node: HTMLElement, { duration }: { duration: number }) => {
        console.log(node);
        return {
            duration,
            css: (t: number, u: number) => {
                const eased = elasticOut(t);

                return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * u)}%,
						${Math.min(50, 500 * u)}%
					);`;
            },
        };
    };

    function typewriter(node: HTMLElement, { speed = 1 }) {
        const valid =
            node.childNodes.length === 1 &&
            node.childNodes[0].nodeType === Node.TEXT_NODE;

        if (!valid) {
            throw new Error(
                `This transition only works on elements with a single text node child`,
            );
        }

        const text = node.textContent;
        const duration = text.length / (speed * 0.01);

        return {
            duration,
            tick: (t: number) => {
                const i = Math.trunc(text.length * t);
                node.textContent = text.slice(0, i);
            },
        };
    }

    let i = $state(-1);

    $effect(() => {
        const interval = setInterval(() => {
            i += 1;
            i %= messages.length;
        }, 2500);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<div class="container">
    <h1>Svelte Transitions</h1>
    <p class="intro">
        Transitions in Svelte allow you to animate elements as they enter and
        leave the DOM.
    </p>

    <div class="info-box">
        <h3>Key Concepts:</h3>
        <ul>
            <li>Built-in transitions: fade, blur, fly, slide, scale, draw</li>
            <li>
                Directional control with <code>in:</code> and <code>out:</code>
            </li>
            <li>Custom transitions with CSS or JavaScript</li>
            <li>The <code>animate:</code> directive for FLIP animations</li>
        </ul>
    </div>

    <section class="demo-section">
        <h2>Built-in Transitions</h2>
        <label class="toggle">
            <input type="checkbox" bind:checked={visible} />
            <span>Toggle visibility</span>
        </label>

        {#if visible}
            <div class="examples">
                <p transition:fade>Fades in and out</p>
                <p transition:fly={{ y: 200, duration: 2000 }}>
                    Flies in and out
                </p>
                <p in:fly={{ y: 100, duration: 100 }} out:fade>
                    Flies in, fades out
                </p>
                <p transition:slide>Slides in and out</p>
                <p transition:slide|global>Global slide transition</p>
            </div>
        {/if}
    </section>

    <section class="demo-section">
        <h2>Custom CSS Transition</h2>
        <p class="description">
            Create custom transitions by returning CSS properties
        </p>
        {#if visible}
            <div class="centered" in:spin={{ duration: 8000 }} out:fade>
                <span>transitions!</span>
            </div>
        {/if}
    </section>

    <section class="demo-section">
        <h2>Custom JS Transition & Events</h2>
        <p class="description">
            Use JavaScript to control transitions and listen to transition
            events
        </p>
        <p class="status">Status: {status}</p>
        {#if visible}
            <p
                class="typewriter"
                transition:typewriter={{ speed: 2 }}
                onintrostart={() => (status = "intro started")}
                onoutrostart={() => (status = "outro started")}
                onintroend={() => (status = "intro ended")}
                onoutroend={() => (status = "outro ended")}
            >
                The quick brown fox jumps over the lazy dog
            </p>
        {/if}
    </section>

    <section class="demo-section">
        <h2>Key Blocks</h2>
        <p class="description">
            Trigger transitions on value changes using key blocks
        </p>
        {#key i}
            <p class="loading" in:typewriter={{ speed: 10 }}>
                {messages[i] || ""}
            </p>
        {/key}
    </section>
</div>

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    h1 {
        text-align: center;
        margin-bottom: 1rem;
    }

    h2 {
        margin-top: 0;
        margin-bottom: 1rem;
        color: #333;
    }

    .intro {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 3rem;
        color: #666;
        line-height: 1.6;
    }

    .info-box {
        background: #f8f9fa;
        border-left: 4px solid #007bff;
        padding: 1rem 1.5rem;
        border-radius: 4px;
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

    .info-box code {
        background: #e9ecef;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: monospace;
        font-size: 0.9em;
    }

    .demo-section {
        background: #fff;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 2rem;
    }

    .description {
        color: #666;
        margin-bottom: 1rem;
    }

    .toggle {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        cursor: pointer;
    }

    .toggle input {
        cursor: pointer;
    }

    .examples {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .examples p {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        margin: 0;
    }

    .status {
        color: #007bff;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    .typewriter {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        font-family: monospace;
    }

    .loading {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        min-height: 3rem;
        display: flex;
        align-items: center;
    }

    .centered {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .centered span {
        position: absolute;
        transform: translate(-50%, -50%);
        font-size: 4em;
    }
</style>
