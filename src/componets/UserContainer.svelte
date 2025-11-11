<script lang="ts">
    import { setContext } from "svelte";
    import { SvelteMap } from "svelte/reactivity";
    import UserAvatar from "./UserAvatar.svelte";

    const currentUser = {
        name: "Rakib",
        avatar: "https://picsum.photos/200/300",
    };

    const user = new SvelteMap(Object.entries(currentUser));
    setContext("currentUser", user);
</script>

<div>
    <h1>Context API</h1>
    <UserAvatar />
</div>
