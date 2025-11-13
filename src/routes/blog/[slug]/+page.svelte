<script lang="ts">
    let { data } = $props();
</script>

<article class="blog-post">
    <h1>{data.post.title}</h1>
    <div class="post-content">{@html data.post.content}</div>
</article>

<style>
    .blog-post {
        max-width: 800px;
    }

    h1 {
        color: #333;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        line-height: 1.2;
    }

    .post-content {
        color: #555;
        font-size: 1.1rem;
        line-height: 1.8;
    }

    .post-content :global(p) {
        margin-bottom: 1rem;
    }
</style>
