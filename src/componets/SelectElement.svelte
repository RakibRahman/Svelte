<script lang="ts">
    type Question = { id: number; text: string };
    let questions: Question[] = [
        {
            id: 1,
            text: `Where did you go to school?`,
        },
        {
            id: 2,
            text: `What is your mother's name?`,
        },
        {
            id: 3,
            text: `What is another personal fact that an attacker could easily find with Google?`,
        },
    ];

    let selected = $state<Question | undefined>();

    let answer = $state("");
    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        alert(
            `answered question ${selected?.id} (${selected?.text}) with "${answer}"`,
        );
    }
</script>

<section>
    <h2>Select Binding (Objects)</h2>
    <p class="info">Binding select elements to object values</p>

    <form onsubmit={handleSubmit}>
        <select bind:value={selected} onchange={() => (answer = "")}>
            {#each questions as question}
                <option value={question}>
                    {question.text}
                </option>
            {/each}
        </select>
        <input type="text" bind:value={answer} placeholder="Enter your answer" />
        <button disabled={!answer} type="submit">Submit</button>
    </form>
    <p class="status">
        Selected question: {selected ? `#${selected?.id}` : "[waiting...]"}
    </p>
</section>

<style>
    section {
        margin-bottom: 2rem;
    }

    .info {
        font-style: italic;
        color: #666;
        font-size: 0.9rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 500px;
    }

    select, input {
        padding: 0.5rem;
    }

    button {
        padding: 0.5rem 1rem;
        cursor: pointer;
        align-self: flex-start;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .status {
        margin-top: 1rem;
        font-weight: bold;
    }
</style>
