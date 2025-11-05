# SvelteKit Routing Guide

## 📁 File-Based Routing

SvelteKit uses the file system for routing. The `src/routes` folder structure maps directly to URL paths.

---

## Basic Routes

### Static Routes

```
src/routes/
├── +page.svelte          → /           (home page)
├── about/
│   └── +page.svelte      → /about
├── contact/
│   └── +page.svelte      → /contact
└── blog/
    └── +page.svelte      → /blog
```

**Example:**
- File: `src/routes/about/+page.svelte`
- URL: `http://localhost:5173/about`

---

## Dynamic Routes

### Single Parameter

Use `[paramName]` in folder names to create dynamic routes:

```
src/routes/
└── blog/
    ├── +page.svelte           → /blog (list all posts)
    └── [slug]/
        └── +page.svelte       → /blog/any-slug-here
```

**Accessing the parameter:**

```svelte
<script lang="ts">
    import { page } from '$app/stores';

    // Get the dynamic parameter
    $: slug = $page.params.slug;
    // If URL is /blog/hello-world, slug = "hello-world"
</script>

<h1>Post: {slug}</h1>
```

### Multiple Parameters

```
src/routes/
└── users/
    └── [userId]/
        └── posts/
            └── [postId]/
                └── +page.svelte  → /users/123/posts/456
```

```svelte
<script lang="ts">
    import { page } from '$app/stores';

    $: userId = $page.params.userId;   // "123"
    $: postId = $page.params.postId;   // "456"
</script>
```

---

## Special Files

### +page.svelte
- Defines a page component
- Required for a route to be accessible

### +layout.svelte
- Wraps all child routes
- Useful for shared navigation, headers, footers
- Example:

```
src/routes/
├── +layout.svelte      → Wraps ALL pages
└── blog/
    ├── +layout.svelte  → Wraps /blog and /blog/[slug]
    ├── +page.svelte    → /blog
    └── [slug]/
        └── +page.svelte → /blog/[slug]
```

### +page.ts (or +page.js)
- Runs before the page loads
- Fetch data, set page options
- Example:

```typescript
// src/routes/blog/[slug]/+page.ts
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        slug: params.slug,
        // Fetch data here
    };
};
```

### +server.ts
- Create API endpoints
- Example:

```typescript
// src/routes/api/hello/+server.ts
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
    return new Response(JSON.stringify({ message: 'Hello!' }));
};
```

Access at: `/api/hello`

---

## Navigation

### Using Links

```svelte
<!-- Standard navigation (client-side routing) -->
<a href="/about">About</a>
<a href="/blog">Blog</a>
<a href="/blog/my-post">Specific Post</a>
```

### Programmatic Navigation

```svelte
<script>
    import { goto } from '$app/navigation';

    function handleClick() {
        goto('/about');
    }
</script>

<button onclick={handleClick}>Go to About</button>
```

---

## Your Current Project Structure

```
src/routes/
├── +page.svelte                    → /               (Home)
├── +layout.svelte                  → Wraps all pages
├── logic/
│   └── +page.svelte                → /logic          (Practice page)
├── about/
│   └── +page.svelte                → /about
└── blog/
    ├── +page.svelte                → /blog           (List posts)
    └── [slug]/
        └── +page.svelte            → /blog/:slug     (Individual post)
```

---

## Common Patterns

### 1. Blog with Dynamic Routes
```
/blog              → List all posts
/blog/first-post   → Show "first-post"
/blog/second-post  → Show "second-post"
```

### 2. User Profiles
```
/users/[username]  → /users/john, /users/jane, etc.
```

### 3. E-commerce
```
/products                    → All products
/products/[id]               → Product detail
/products/[id]/reviews       → Product reviews
```

### 4. Nested Layouts
```
src/routes/
├── +layout.svelte           → Site header/footer
└── dashboard/
    ├── +layout.svelte       → Dashboard sidebar
    ├── +page.svelte         → /dashboard
    ├── settings/
    │   └── +page.svelte     → /dashboard/settings
    └── profile/
        └── +page.svelte     → /dashboard/profile
```

---

## Tips

1. **Use regular `<a>` tags** - SvelteKit handles client-side routing automatically
2. **Dynamic routes are powerful** - Great for blogs, user profiles, product pages
3. **Layouts avoid repetition** - Share navigation, headers across pages
4. **$page store** - Access current route, params, URL info anywhere
5. **No index.svelte** - Use `+page.svelte` instead

---

## Try It Out!

Visit these pages in your browser:
- `http://localhost:5173/` (Home)
- `http://localhost:5173/about` (About)
- `http://localhost:5173/blog` (Blog listing)
- `http://localhost:5173/blog/first-post` (Dynamic route!)
- `http://localhost:5173/blog/anything-you-want` (Try any slug!)
- `http://localhost:5173/logic` (Your practice page)

---

## Learn More

- [SvelteKit Routing Docs](https://kit.svelte.dev/docs/routing)
- [Advanced Routing](https://kit.svelte.dev/docs/advanced-routing)
