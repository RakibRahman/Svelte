<script lang="ts">
    import { enhance } from "$app/forms";

    let { data } = $props();
    console.log({ data });
</script>

<div class="centered">
    <h1>todos</h1>

    <form method="POST" action="?/create" use:enhance>
        <input
            name="description"
            placeholder="Add a new todo..."
            autocomplete="off"
            required
        />
        <button type="submit">Add</button>
    </form>

    <ul class="todos">
        <!-- {#each data.todos as todo (todo.id)}
            <li>
                <form method="POST" action="?/delete" use:enhance>
                    <input type="hidden" name="id" value={todo.id} />
                    <span>{todo.description}</span>
                    <button type="submit" aria-label="Delete todo"></button>
                </form>
            </li>
        {/each} -->
    </ul>

    {#if data.todos.length === 0}
        <p class="empty">No todos yet. Add one above!</p>
    {/if}
</div>

<style>
    .centered {
        max-width: 30em;
        margin: 2rem auto;
        padding: 2rem;
    }

    h1 {
        color: #333;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .error {
        color: #ff3e00;
        background-color: #ffe8e6;
        padding: 0.75rem;
        border-radius: 4px;
        margin-bottom: 1rem;
        font-size: 0.9rem;
    }

    form {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }

    input[type="text"],
    input:not([type]) {
        flex: 1;
        padding: 0.75rem;
        border: 2px solid #e0e0e0;
        border-radius: 6px;
        font-size: 1rem;
        transition: border-color 0.2s;
    }

    input[type="text"]:focus,
    input:not([type]):focus {
        outline: none;
        border-color: #ff3e00;
    }

    button[type="submit"]:not([aria-label]) {
        padding: 0.75rem 1.5rem;
        background-color: #ff3e00;
        color: white;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    button[type="submit"]:not([aria-label]):hover {
        background-color: #ff5722;
    }

    .todos {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 0.5rem;
    }

    li form {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem;
        background-color: #f9f9f9;
        border-radius: 6px;
        margin-bottom: 0;
        transition: background-color 0.2s;
    }

    li form:hover {
        background-color: #f0f0f0;
    }

    span {
        flex: 1;
        color: #333;
        font-size: 1rem;
    }

    button[aria-label] {
        width: 2rem;
        height: 2rem;
        border: none;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E")
            no-repeat center;
        background-size: 1.2rem;
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 0.2s;
        flex-shrink: 0;
    }

    button[aria-label]:hover {
        opacity: 1;
    }

    .empty {
        text-align: center;
        color: #999;
        font-style: italic;
        margin-top: 2rem;
    }
</style>
