<script>
    let emojis = [
        { emoji: "🙈", description: "see no evil" },
        { emoji: "🙉", description: "hear no evil" },
        { emoji: "🙊", description: "speak no evil" },
        { emoji: "😂", description: "face with tears of joy" },
        { emoji: "😎", description: "smiling face with sunglasses" },
        { emoji: "❤️", description: "red heart" },
        { emoji: "🔥", description: "fire" },
        { emoji: "🌈", description: "rainbow" },
    ];
</script>

{#snippet emojiRow(emoji, description)}
    <tr>
        <td class="emoji-cell">{emoji}</td>
        <td>{description}</td>
        <td class="code-cell">
            \u{emoji.charCodeAt(0).toString(16)}\u{emoji
                .charCodeAt(1)
                .toString(16)}
        </td>
        <td class="code-cell">&#{emoji.codePointAt(0)}</td>
    </tr>
{/snippet}

<div class="container">
    <h1>Snippets</h1>

    <section class="intro">
        <p>
            Snippets allow you to reuse content within a component without
            extracting it into a separate file. They can accept parameters and
            be passed to components as props.
        </p>
    </section>

    <section class="demo">
        <h2>Emoji Reference Table</h2>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Emoji</th>
                        <th>Description</th>
                        <th>Unicode Escape</th>
                        <th>HTML Entity</th>
                    </tr>
                </thead>
                <tbody>
                    {#each emojis as emo}
                        {@render emojiRow(emo.emoji, emo.description)}
                    {/each}
                </tbody>
            </table>
        </div>
    </section>

    <section class="info">
        <h3>How It Works</h3>
        <ul>
            <li>
                <strong>Define:</strong> Use <code>{"{#snippet name(params)}...{/snippet}"}</code>
            </li>
            <li>
                <strong>Render:</strong> Use <code>{"{@render name(args)}"}</code>
            </li>
            <li>
                <strong>Parameters:</strong> Snippets can accept parameters like functions
            </li>
        </ul>
    </section>
</div>

<style>
    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
    }

    h1 {
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    .intro {
        margin-bottom: 2rem;
    }

    .intro p {
        font-size: 1.05rem;
        line-height: 1.6;
        color: #555;
    }

    .demo {
        margin-bottom: 2rem;
    }

    .table-wrapper {
        overflow-x: auto;
        background: #f5f5f5;
        padding: 1.5rem;
        border-radius: 8px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        background: white;
        border-radius: 4px;
        overflow: hidden;
    }

    thead {
        background: #ff3e00;
        color: white;
    }

    th,
    td {
        padding: 0.75rem 1rem;
        text-align: left;
    }

    th {
        font-weight: 600;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    tbody tr {
        border-bottom: 1px solid #eee;
    }

    tbody tr:hover {
        background: #f9f9f9;
    }

    tbody tr:last-child {
        border-bottom: none;
    }

    .emoji-cell {
        font-size: 1.5rem;
    }

    .code-cell {
        font-family: monospace;
        font-size: 0.9rem;
        color: #666;
    }

    .info {
        background: #fff3cd;
        padding: 1.5rem;
        border-radius: 8px;
        border-left: 4px solid #ffc107;
    }

    .info h3 {
        margin-top: 0;
        font-size: 1.1rem;
    }

    .info ul {
        margin: 0;
        padding-left: 1.5rem;
    }

    .info li {
        margin-bottom: 0.5rem;
    }

    code {
        background: #e9ecef;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: monospace;
        font-size: 0.9rem;
    }
</style>
