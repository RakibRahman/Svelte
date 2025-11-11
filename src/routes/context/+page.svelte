<script lang="ts">
    import { setContext } from "svelte";
    import { SvelteMap } from "svelte/reactivity";
    import UserAvatar from "./components/UserAvatar.svelte";
    import UserProfileUpdate from "./components/UserProfileUpdate.svelte";

    const currentUser = {
        name: "Rakib",
        avatar: "https://picsum.photos/200/300",
    };

    const user = new SvelteMap(Object.entries(currentUser));
    setContext("currentUser", user);
</script>

<div class="container">
    <h1>Context API</h1>

    <section class="intro">
        <p>
            The Context API allows you to pass data through the component tree
            without having to pass props down manually at every level. Context
            is scoped to the component tree and supports reactive updates.
        </p>
    </section>

    <section class="demo">
        <h2>User Profile with Context</h2>
        <div class="demo-content">
            <div class="demo-item">
                <h3>Current User</h3>
                <UserAvatar />
            </div>
            <div class="demo-item">
                <h3>Update Context</h3>
                <p class="description">
                    Click the button below to update the user profile. Notice
                    how the UserAvatar component automatically updates even
                    though we're not passing props.
                </p>
                <UserProfileUpdate />
            </div>
        </div>
    </section>

    <section class="info">
        <h3>How It Works</h3>
        <ul>
            <li>
                <strong>Set Context:</strong> Use
                <code>setContext(key, value)</code> in the parent component
            </li>
            <li>
                <strong>Get Context:</strong> Use
                <code>getContext(key)</code> in child components
            </li>
            <li>
                <strong>Reactivity:</strong> Use reactive data structures like
                <code>SvelteMap</code> for automatic updates
            </li>
            <li>
                <strong>Scope:</strong> Context is scoped to the component tree,
                not global
            </li>
        </ul>
    </section>

    <section class="comparison">
        <h3>Context vs Stores vs Props</h3>
        <div class="comparison-grid">
            <div class="comparison-card">
                <h4>Props</h4>
                <p class="use-when">Use when:</p>
                <ul>
                    <li>Parent-child communication</li>
                    <li>Data flow is simple</li>
                    <li>Component reusability matters</li>
                </ul>
            </div>
            <div class="comparison-card">
                <h4>Context</h4>
                <p class="use-when">Use when:</p>
                <ul>
                    <li>Avoiding prop drilling</li>
                    <li>Building component libraries</li>
                    <li>Scoped to component tree</li>
                </ul>
            </div>
            <div class="comparison-card">
                <h4>Stores</h4>
                <p class="use-when">Use when:</p>
                <ul>
                    <li>Global state management</li>
                    <li>Cross-route data sharing</li>
                    <li>Outside component tree</li>
                </ul>
            </div>
        </div>
    </section>
</div>

<style>
    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
    }

    h1 {
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.1rem;
        margin-bottom: 0.75rem;
    }

    h4 {
        margin: 0 0 0.5rem 0;
        color: #ff3e00;
    }

    .intro {
        margin-bottom: 2rem;
    }

    .intro p {
        font-size: 1.05rem;
        line-height: 1.6;
        color: #555;
    }

    .demo {
        margin-bottom: 2rem;
    }

    .demo-content {
        background: #f5f5f5;
        padding: 2rem;
        border-radius: 8px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }

    .demo-item {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .demo-item h3 {
        margin: 0;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #666;
    }

    .description {
        font-size: 0.95rem;
        color: #666;
        line-height: 1.5;
        margin: 0;
    }

    .info {
        background: #fff3cd;
        padding: 1.5rem;
        border-radius: 8px;
        border-left: 4px solid #ffc107;
        margin-bottom: 2rem;
    }

    .info h3 {
        margin-top: 0;
    }

    .info ul {
        margin: 0;
        padding-left: 1.5rem;
    }

    .info li {
        margin-bottom: 0.5rem;
    }

    .comparison {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 8px;
    }

    .comparison h3 {
        margin-top: 0;
    }

    .comparison-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .comparison-card {
        background: white;
        padding: 1.25rem;
        border-radius: 6px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .use-when {
        font-weight: 600;
        font-size: 0.9rem;
        margin: 0.5rem 0 0.25rem 0;
        color: #666;
    }

    .comparison-card ul {
        margin: 0;
        padding-left: 1.25rem;
        font-size: 0.9rem;
    }

    .comparison-card li {
        margin-bottom: 0.25rem;
        color: #555;
    }

    code {
        background: #e9ecef;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: monospace;
        font-size: 0.9rem;
    }
</style>
