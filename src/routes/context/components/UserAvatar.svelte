<script lang="ts">
    import { getContext } from "svelte";
    import { SvelteMap } from "svelte/reactivity";

    const user = getContext<SvelteMap<string, string>>("currentUser");
</script>

<div class="user-card">
    <img src={user.get("avatar")} alt="avatar" width="80" height="80" />
    <p class="user-name">👤 {user.get("name")}</p>
</div>

<style>
    .user-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    img {
        border-radius: 50%;
        object-fit: cover;
    }

    .user-name {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 500;
    }
</style>
