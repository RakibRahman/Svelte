<script lang="ts">
    let { children } = $props();
</script>

<div class="blog-container">
    <nav class="blog-nav">
        <a href="/">← Home</a>
        <a href="/blog">Blog</a>
    </nav>

    {@render children()}
</div>

<style>
    .blog-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .blog-nav {
        display: flex;
        gap: 1.5rem;
        padding: 1rem 0;
        margin-bottom: 2rem;
        border-bottom: 2px solid #e0e0e0;
    }

    .blog-nav a {
        color: #ff3e00;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        transition: color 0.2s ease;
    }

    .blog-nav a:hover {
        color: #ff5722;
        text-decoration: underline;
    }
</style>
