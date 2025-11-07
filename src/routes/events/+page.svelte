<script lang="ts">
    import Stepper from "../../componets/Stepper.svelte";

    // Mouse tracking state
    let mouse = $state({ x: 0, y: 0 });

    // DOM event handler - listen to pointermove events
    const onPointerMove = (event: PointerEvent) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    };

    // Component event state
    let value = $state(0);
</script>

<div class="events-container">
    <h1>Svelte Events</h1>

    <!-- 1. DOM Event Handlers -->
    <section class="event-section">
        <h2>1. DOM Event Handlers</h2>
        <p>Track mouse movement with <code>onpointermove</code> event:</p>
        <div onpointermove={onPointerMove} class="mouse-event">
            The pointer is at {Math.round(mouse.x)} x {Math.round(mouse.y)}
        </div>
    </section>

    <!-- 2. Inline Event Handlers -->
    <section class="event-section">
        <h2>2. Inline Event Handlers</h2>
        <p>Use arrow functions directly in the template:</p>
        <button
            class="alert-btn"
            onclick={() => {
                alert(`Current Mouse Position: X:${mouse.x} & Y:${mouse.y}`);
            }}>
            Show Current Position
        </button>
    </section>

    <!-- 3. Event Capture -->
    <section class="event-section">
        <h2>3. Event Capture</h2>
        <p>
            Event capture reverses execution order (parent → child). Type in the input to see
            alerts:
        </p>
        <div onkeydowncapture={(e) => alert(`<div> ${e.key}`)} role="presentation">
            <input
                onkeydowncapture={(e) => alert(`<input> ${e.key}`)}
                placeholder="Type here to see capture phase"
            />
        </div>
    </section>

    <!-- 4. Component Events (Callback Props) -->
    <section class="event-section">
        <h2>4. Component Events (Callback Props)</h2>
        <p>Pass functions as props to child components:</p>
        <p class="value-display">Current value: <strong>{value}</strong></p>
        <Stepper increment={() => (value += 1)} decrement={() => (value -= 1)} />
    </section>
</div>

<style>
    .events-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
    }

    h1 {
        color: #ff3e00;
        margin-bottom: 2rem;
    }

    .event-section {
        margin-bottom: 3rem;
        padding: 1.5rem;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background-color: #f9f9f9;
    }

    .event-section h2 {
        color: #333;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    .event-section p {
        margin-bottom: 1rem;
        color: #666;
    }

    code {
        background-color: #f0f0f0;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: "Courier New", monospace;
    }

    .mouse-event {
        width: 100%;
        height: 200px;
        padding: 1rem;
        color: whitesmoke;
        background-color: #ff3e00;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: crosshair;
    }

    .alert-btn {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        background-color: #ff3e00;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .alert-btn:hover {
        background-color: #cc3200;
    }

    input {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        border: 2px solid #ccc;
        border-radius: 5px;
    }

    input:focus {
        outline: none;
        border-color: #ff3e00;
    }

    .value-display {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    .value-display strong {
        color: #ff3e00;
        font-size: 1.5rem;
    }
</style>
