<script>
    import TextBinding from "../../componets/TextBinding.svelte";
    import NumericBinding from "../../componets/NumericBinding.svelte";
    import TextareaBinding from "../../componets/TextareaBinding.svelte";
    import CheckboxBinding from "../../componets/CheckboxBinding.svelte";
    import SelectElement from "../../componets/SelectElement.svelte";
    import GroupInputs from "../../componets/GroupInputs.svelte";
</script>

<div class="container">
    <h1>Svelte Bindings</h1>
    <p class="intro">
        Form bindings in Svelte create two-way data flow between UI elements and component state.
        The <code>bind:</code> directive keeps values in sync automatically.
    </p>

    <div class="bindings-grid">
        <TextBinding />
        <NumericBinding />
        <TextareaBinding />
        <CheckboxBinding />
        <SelectElement />
        <GroupInputs />
    </div>
</div>

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    h1 {
        text-align: center;
        margin-bottom: 1rem;
    }

    .intro {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 3rem;
        color: #666;
        line-height: 1.6;
    }

    .intro code {
        background: #f5f5f5;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: monospace;
    }

    .bindings-grid {
        display: grid;
        gap: 2rem;
    }

    @media (min-width: 768px) {
        .bindings-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    :global(section) {
        border: 1px solid #e0e0e0;
        padding: 1.5rem;
        border-radius: 8px;
        background: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    :global(section h2) {
        margin-top: 0;
        color: #333;
        border-bottom: 2px solid #007bff;
        padding-bottom: 0.5rem;
    }
</style>
