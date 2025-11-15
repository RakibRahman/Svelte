<script lang="ts">
    import { enhance } from "$app/forms";
    import { fly, slide } from "svelte/transition";
    import type { ActionData, PageData } from "./$types";

    let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<div class="container">
    <h1>Todos</h1>
    {#if form?.error}
        <p class="error">{form.error}</p>
    {/if}
    <form method="POST" action="?/create" use:enhance>
        <input
            type="text"
            name="title"
            placeholder="Add a new todo..."
            value={form?.title ?? ""}
            autocomplete="off"
            required
        />
        <button type="submit">Add</button>
    </form>

    <ul class="todos">
        {#each data.todos as todo (todo.id)}
            <li in:fly={{ y: 20 }} out:slide>
                <form method="POST" action="?/delete">
                    <input type="hidden" name="id" value={todo.id} />
                    <span>{todo.title}</span>
                    <button type="submit" aria-label="Delete todo"></button>
                </form>
            </li>
        {/each}
    </ul>

    {#if data.todos.length === 0}
        <p class="empty">No todos yet. Add one above!</p>
    {/if}
</div>

<style>
    .container {
        max-width: 36rem;
        margin: 0 auto;
        padding: 2rem 1rem;
    }

    h1 {
        color: #333;
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    .error {
        color: #d32f2f;
        background-color: #ffebee;
        padding: 0.75rem 1rem;
        border-radius: 6px;
        border-left: 4px solid #d32f2f;
        margin-bottom: 1rem;
        font-size: 0.875rem;
    }

    form {
        display: flex;
        gap: 0.75rem;
        margin-bottom: 2rem;
    }

    input[type="text"],
    input:not([type]) {
        flex: 1;
        padding: 0.625rem 0.875rem;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 1rem;
        transition: all 0.2s;
    }

    input[type="text"]:focus,
    input:not([type]):focus {
        outline: none;
        border-color: #ff3e00;
        box-shadow: 0 0 0 3px rgba(255, 62, 0, 0.1);
    }

    button[type="submit"]:not([aria-label]) {
        padding: 0.625rem 1.25rem;
        background-color: #ff3e00;
        color: white;
        border: none;
        border-radius: 6px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
    }

    button[type="submit"]:not([aria-label]):hover {
        background-color: #e63900;
        transform: translateY(-1px);
    }

    button[type="submit"]:not([aria-label]):active {
        transform: translateY(0);
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
        padding: 0.875rem 1rem;
        background-color: #f8f8f8;
        border: 1px solid #eee;
        border-radius: 6px;
        margin-bottom: 0;
        transition: all 0.2s;
    }

    li form:hover {
        background-color: #f0f0f0;
        border-color: #ddd;
    }

    span {
        flex: 1;
        color: #333;
        font-size: 0.9375rem;
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
