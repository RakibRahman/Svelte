<script lang="ts">
    let { data } = $props();
</script>

<div class="blog-list">
    <h1>Blog Posts</h1>
    <ul class="post-list">
        {#each data.summaries as post}
            <li class="post-item">
                <a href={`/blog/${post.slug}`} class="post-link">
                    {post.title}
                </a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .blog-list {
        max-width: 800px;
    }

    h1 {
        color: #333;
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    .post-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .post-item {
        margin-bottom: 1rem;
        padding: 1.25rem;
        background-color: #f9f9f9;
        border-radius: 8px;
        border-left: 4px solid #ff3e00;
        transition: all 0.2s ease;
    }

    .post-item:hover {
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transform: translateX(4px);
    }

    .post-link {
        color: #333;
        text-decoration: none;
        font-size: 1.25rem;
        font-weight: 600;
        display: block;
    }

    .post-link:hover {
        color: #ff3e00;
    }
</style>
