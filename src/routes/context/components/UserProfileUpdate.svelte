<script lang="ts">
    import { getContext } from "svelte";
    import { SvelteMap } from "svelte/reactivity";

    const user = getContext<SvelteMap<string, string>>("currentUser");

    const updateProfile = () => {
        user.set("name", "Rakibur Rahman");
        user.set("avatar", "https://picsum.photos/seed/picsum/200/300");
    };
</script>

<button onclick={updateProfile}>Update Profile</button>

<style>
    button {
        padding: 0.75rem 1.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: white;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.2s;
    }

    button:hover {
        background: #ff3e00;
        color: white;
        border-color: #ff3e00;
    }
</style>
