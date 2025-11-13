<script lang="ts">
    let { children, data } = $props();
</script>

<div class="layout">
    <main class="main-content">
        {@render children()}
    </main>
    <aside class="sidebar">
        <h2>More posts</h2>
        <ul class="related-posts">
            {#each data.summaries as { slug, title }}
                <li class="related-item">
                    <a href="/blog/{slug}">{title}</a>
                </li>
            {/each}
        </ul>
    </aside>
</div>

<style>
    .layout {
        display: grid;
        grid-template-columns: 1fr 300px;
        gap: 3rem;
        align-items: start;
    }

    .main-content {
        min-width: 0;
    }

    .sidebar {
        position: sticky;
        top: 2rem;
        padding: 1.5rem;
        background-color: #f9f9f9;
        border-radius: 8px;
        border-left: 4px solid #ff3e00;
    }

    .sidebar h2 {
        color: #333;
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }

    .related-posts {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .related-item {
        margin-bottom: 0.75rem;
    }

    .related-item a {
        color: #555;
        text-decoration: none;
        font-size: 0.95rem;
        transition: color 0.2s ease;
    }

    .related-item a:hover {
        color: #ff3e00;
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        .layout {
            grid-template-columns: 1fr;
        }

        .sidebar {
            position: static;
        }
    }
</style>
