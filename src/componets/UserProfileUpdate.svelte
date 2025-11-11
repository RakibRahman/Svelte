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
