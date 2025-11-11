<script lang="ts">
    import { getContext } from "svelte";
    import { SvelteMap } from "svelte/reactivity";

    const user = getContext<SvelteMap<string, string>>("currentUser");
</script>

<p>
    👤 {user.get("name")}
</p>
<img src={user.get("avatar")} alt="avatar" width="64" />
