<script lang="ts">
</script>

<div class="container">
    <h1>API Routes</h1>

    <p class="intro">
        SvelteKit allows you to create API endpoints alongside your pages using
        <code>+server.ts</code> files. These endpoints can handle any HTTP method
        and return JSON or other data formats.
    </p>

    <section>
        <h2>What are API Routes?</h2>
        <p>
            API routes are server-side endpoints that can handle HTTP requests
            (GET, POST, PUT, DELETE, etc.) and return responses. They're perfect for:
        </p>
        <ul>
            <li>Creating RESTful APIs</li>
            <li>Handling webhooks</li>
            <li>Proxying requests to external APIs</li>
            <li>Processing file uploads</li>
            <li>Serving dynamic data as JSON</li>
        </ul>
    </section>

    <section>
        <h2>Key Concepts</h2>

        <div class="concept">
            <h3>Creating an Endpoint</h3>
            <p>
                Create a <code>+server.ts</code> file in your routes directory.
                The file path determines the API endpoint URL.
            </p>
        </div>

        <div class="concept">
            <h3>Request Handlers</h3>
            <p>
                Export functions named after HTTP methods: <code>GET</code>,
                <code>POST</code>, <code>PUT</code>, <code>DELETE</code>,
                <code>PATCH</code>.
            </p>
        </div>

        <div class="concept">
            <h3>Request Context</h3>
            <p>
                Each handler receives a <code>RequestEvent</code> object with:
                <code>request</code>, <code>params</code>, <code>url</code>,
                <code>cookies</code>, <code>locals</code>, and more.
            </p>
        </div>

        <div class="concept">
            <h3>Returning Responses</h3>
            <p>
                Return a <code>Response</code> object or use the
                <code>json()</code> helper to automatically serialize data.
            </p>
        </div>
    </section>

    <section>
        <h2>Common Patterns</h2>

        <div class="pattern">
            <h3>JSON API</h3>
            <p>Return JSON data for consumption by frontend or external clients.</p>
        </div>

        <div class="pattern">
            <h3>Dynamic Routes</h3>
            <p>Use <code>[param]</code> syntax to create parameterized endpoints like <code>/api/users/[id]</code>.</p>
        </div>

        <div class="pattern">
            <h3>Request Body Parsing</h3>
            <p>Parse JSON or FormData from the request body using <code>request.json()</code> or <code>request.formData()</code>.</p>
        </div>

        <div class="pattern">
            <h3>Error Handling</h3>
            <p>Return appropriate HTTP status codes (400, 404, 500) with error messages.</p>
        </div>

        <div class="pattern">
            <h3>CORS Headers</h3>
            <p>Add CORS headers to allow cross-origin requests from external domains.</p>
        </div>

        <div class="pattern">
            <h3>Authentication</h3>
            <p>Check authentication tokens or cookies before processing requests.</p>
        </div>
    </section>

    <section>
        <h2>Use Cases</h2>
        <div class="use-cases">
            <div class="use-case">
                <h4>RESTful CRUD Operations</h4>
                <p>Create full CRUD APIs for your data models</p>
            </div>
            <div class="use-case">
                <h4>Third-party Integrations</h4>
                <p>Proxy requests to external APIs while hiding API keys</p>
            </div>
            <div class="use-case">
                <h4>Webhooks</h4>
                <p>Receive and process webhooks from services like Stripe, GitHub, etc.</p>
            </div>
            <div class="use-case">
                <h4>File Uploads</h4>
                <p>Handle multipart form data and file processing</p>
            </div>
            <div class="use-case">
                <h4>Server-side Data Processing</h4>
                <p>Perform heavy computations or data transformations on the server</p>
            </div>
            <div class="use-case">
                <h4>Dynamic Content Generation</h4>
                <p>Generate RSS feeds, sitemaps, or other dynamic content</p>
            </div>
        </div>
    </section>

    <section>
        <h2>Response Types</h2>
        <ul>
            <li><strong>JSON:</strong> Use <code>json()</code> helper for structured data</li>
            <li><strong>Text:</strong> Return plain text responses</li>
            <li><strong>HTML:</strong> Generate and return HTML content</li>
            <li><strong>Binary:</strong> Serve files, images, or other binary data</li>
            <li><strong>Streaming:</strong> Stream large responses or real-time data</li>
        </ul>
    </section>

    <section>
        <h2>Best Practices</h2>
        <ul>
            <li>Use TypeScript types for request/response validation</li>
            <li>Return appropriate HTTP status codes</li>
            <li>Handle errors gracefully with try-catch blocks</li>
            <li>Validate and sanitize user input</li>
            <li>Use environment variables for sensitive configuration</li>
            <li>Implement rate limiting for public endpoints</li>
            <li>Add proper authentication and authorization</li>
            <li>Document your API endpoints</li>
        </ul>
    </section>
</div>

<style>
    .container {
        max-width: 48rem;
        margin: 0 auto;
        padding: 2rem 1rem;
    }

    h1 {
        color: #333;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    h2 {
        color: #444;
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #f0f0f0;
    }

    h3 {
        color: #555;
        font-size: 1.125rem;
        margin-bottom: 0.5rem;
    }

    h4 {
        color: #666;
        font-size: 1rem;
        margin-bottom: 0.25rem;
    }

    .intro {
        font-size: 1.0625rem;
        line-height: 1.6;
        color: #555;
        background-color: #f8f9fa;
        padding: 1rem 1.25rem;
        border-radius: 6px;
        border-left: 4px solid #ff3e00;
        margin-bottom: 2rem;
    }

    section {
        margin-bottom: 2rem;
    }

    p {
        line-height: 1.6;
        color: #666;
        margin-bottom: 1rem;
    }

    ul {
        margin-left: 1.5rem;
        margin-bottom: 1rem;
    }

    li {
        line-height: 1.8;
        color: #666;
        margin-bottom: 0.5rem;
    }

    code {
        background-color: #f5f5f5;
        padding: 0.125rem 0.375rem;
        border-radius: 3px;
        font-family: "Consolas", "Monaco", monospace;
        font-size: 0.875em;
        color: #d73a49;
    }

    .concept {
        background-color: #fafafa;
        border: 1px solid #eee;
        border-radius: 6px;
        padding: 1rem 1.25rem;
        margin-bottom: 1rem;
    }

    .concept p {
        margin-bottom: 0;
    }

    .pattern {
        padding: 0.875rem 0;
        border-bottom: 1px solid #f0f0f0;
    }

    .pattern:last-child {
        border-bottom: none;
    }

    .pattern h3 {
        margin-bottom: 0.25rem;
    }

    .pattern p {
        margin-bottom: 0;
        font-size: 0.9375rem;
    }

    .use-cases {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .use-case {
        background-color: #fafafa;
        border: 1px solid #eee;
        border-radius: 6px;
        padding: 1rem;
        transition: all 0.2s;
    }

    .use-case:hover {
        border-color: #ff3e00;
        box-shadow: 0 2px 8px rgba(255, 62, 0, 0.1);
    }

    .use-case h4 {
        color: #333;
        margin-bottom: 0.5rem;
    }

    .use-case p {
        margin-bottom: 0;
        font-size: 0.875rem;
    }

    strong {
        color: #333;
        font-weight: 600;
    }
</style>
