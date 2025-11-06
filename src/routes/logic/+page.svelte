<script lang="ts">
    import Thing from "../../componets/Thing.svelte";
    import { roll } from "../../utils/utils";

    let count = $state(0);

    function increment() {
        count += 1;
    }

    const colors = ["red", "green", "blue", "yellow"];
    let selectedColor = $state(colors[0]);

    let things = $state([
        { id: 1, name: "apple" },
        { id: 2, name: "banana" },
        { id: 3, name: "carrot" },
        { id: 4, name: "doughnut" },
        { id: 5, name: "egg" },
    ]);

    let promise = $state(roll());

    const getUsers = async () => {
        const res = await fetch("https://randomuser.me/api/?results=10");
        if (!res.ok) throw new Error("Failed to load users");
        return await res.json();
    };

    let userList = getUsers();
</script>

<div class="container">
    <button onclick={increment}>
        Clicked {count}
        {count === 1 ? "time" : "times"}
    </button>

    <!-- {#...} opens a block. {/...} closes a block. -->
    {#if count > 5}
        <p>{count} is greater than 5</p>
    {:else if count === 5}
        <p>Equal Number</p>
    {:else}
        <p>{count} is lesser than 5</p>
    {/if}

    <!-- each block - loop over items -->
    <h1 style="color: {selectedColor}">Pick a colour</h1>
    <div class="color-container">
        {#each colors as color}
            <button
                style="background: {selectedColor === color
                    ? color
                    : ''}; color:{selectedColor === color && color !== 'yellow'
                    ? 'white'
                    : 'black'}"
                onclick={() => {
                    selectedColor = color;
                }}>{color}</button
            >
        {/each}
    </div>
    <h1>Keyed each blocks</h1>
    {#each things as thing (thing.id)}
        <Thing name={thing.name} />
    {/each}
    <button onclick={() => things.shift()}> Remove first thing </button>

    <h1>Await blocks</h1>
    {#await promise}
        <p>...rolling</p>
    {:then number}
        <p>you rolled a {number}!</p>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

    <div class="user-container">
        {#await userList}
            <p>Loading Users</p>
        {:then data}
            {#each data.results as user (user.login.uuid)}
                <div class="user-card">
                    <img src={user.picture.medium} alt={user.name.first} />
                    <div class="name">{user.name.first} {user.name.last}</div>
                    <div class="email">{user.email}</div>
                </div>
            {/each}
        {:catch error}
            <p style="color: red;">Error: {error.message}</p>
        {/await}
    </div>
</div>

<style>
    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
    }

    .color-container {
        display: inline-flex;
        gap: 10px;
    }

    .color-container button {
        width: 150px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: var(--color, #fff);
        transform: translate(-2px, -2px);
        filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
        transition: all 0.1s;

        font-weight: 700;
        font-size: 2rem;
    }

    .user-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 1rem;
        padding: 1.5rem;
        background: #f8f9fa;
    }

    .user-card {
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        text-align: center;
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        cursor: pointer;
    }

    .user-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .user-card img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-bottom: 0.5rem;
    }

    .user-card .name {
        font-weight: 600;
        color: #333;
        font-size: 1.1rem;
    }

    .user-card .email {
        color: #666;
        font-size: 0.9rem;
    }

    button {
        margin: 1rem;
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.2s ease;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
