<script lang="ts">
    // Component imports
    import Nested from "../componets/Nested.svelte";
    import Counter from "../componets/Counter.svelte";
    import User from "../componets/User.svelte";
    import BasicCounter from "../componets/BasicCounter.svelte";
    import ArrayState from "../componets/ArrayState.svelte";
    import TimerEffect from "../componets/TimerEffect.svelte";

    import type { User as UserInfo } from "../componets/User.svelte";

    // Welcome section data
    let name = "Svelte";
    const src = "https://picsum.photos/200/300";

    // User data for props example
    const user: UserInfo = {
        name: "Nusaiba",
        age: 29,
        gender: "Female",
    };
</script>

<div class="container">
    <section class="welcome">
        <h1>Hello {name}!</h1>
        <p>
            Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to
            read the documentation
        </p>
        <nav class="page-nav">
            <a href="/logic" class="nav-button">Go to Logic Page →</a>
            <a href="/events" class="nav-button">Go to Events Page →</a>
        </nav>
        <Nested />
        <img {src} alt="{name} dances." width="80px" />
    </section>

    <section class="learning-section">
        <h2>Svelte Runes Examples</h2>

        <!-- $state rune: local state management -->
        <BasicCounter />

        <!-- $state with arrays, $derived, and $inspect -->
        <ArrayState />

        <!-- $effect rune: side effects and cleanup -->
        <TimerEffect />
    </section>

    <section class="learning-section">
        <h2>Global State & Props</h2>

        <div class="subsection">
            <h3>Global State (Shared Store)</h3>
            <p>These counters share the same state via a store:</p>
            <Counter />
            <Counter />
            <Counter />
        </div>

        <div class="subsection">
            <h3>Props ($props rune)</h3>
            <p>Passing data to child components:</p>
            <User name="rakib" age={29} />
            <User {...user} />
            <!-- Spread props -->
        </div>
    </section>
</div>

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .welcome {
        text-align: center;
        margin-bottom: 3rem;
    }

    .welcome h1 {
        color: #ff3e00;
        font-size: 3rem;
    }

    .welcome p {
        color: goldenrod;
        font-family: "Comic Sans MS", cursive;
        font-size: 1.5rem;
    }

    .learning-section {
        margin: 3rem 0;
        padding: 2rem;
        background-color: #f9f9f9;
        border-radius: 12px;
    }

    .learning-section h2 {
        color: #333;
        border-bottom: 3px solid #ff3e00;
        padding-bottom: 0.5rem;
        margin-bottom: 1.5rem;
    }

    .subsection {
        margin: 2rem 0;
        padding: 1rem;
        background-color: white;
        border-radius: 8px;
    }

    .subsection h3 {
        color: #555;
        margin-bottom: 1rem;
    }

    .subsection p {
        color: #666;
        font-size: 1rem;
        font-family: inherit;
    }

    .page-nav {
        margin: 2rem 0;
    }

    .nav-button {
        display: inline-block;
        padding: 1rem 2rem;
        background-color: #ff3e00;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(255, 62, 0, 0.3);
    }

    .nav-button:hover {
        background-color: #ff5722;
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(255, 62, 0, 0.4);
    }
</style>
