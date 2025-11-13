# Advanced Svelte/SvelteKit Topics - Learning Roadmap

A practical checklist of advanced topics to master after learning the fundamentals. Each topic includes when/why you need it and real-world use cases.

---

## 1. Stores (Svelte State Management)

**Priority:** HIGH - Learn this first

**What:** Global state management without prop drilling

**When to use:**
- Sharing state across multiple components/routes
- Managing app-wide data (auth, theme, shopping cart)
- Avoiding deep prop drilling

**Why important:**
- Essential for any multi-route application
- Simpler than React Context/Redux
- Works seamlessly with Svelte's reactivity

**Key Concepts:**
- [ ] `writable()` - Mutable stores
- [ ] `readable()` - Read-only stores (time, geolocation)
- [ ] `derived()` - Computed values from other stores
- [ ] Custom stores with `set`, `update`, `subscribe`
- [ ] Auto-subscription with `$store` syntax

**Use Cases:**
- User authentication state
- Shopping cart
- Theme preferences (dark/light mode)
- Global notifications/toasts
- WebSocket connection state

---

## 2. SvelteKit Data Loading

**Priority:** HIGH - Essential for any real app

**What:** Server-side data fetching before page renders

**When to use:**
- Loading data from APIs or databases
- Pre-rendering content for SEO
- Passing data to pages

**Why important:**
- Makes data available before page renders (no loading spinners)
- SEO-friendly (content in initial HTML)
- Handles errors gracefully

**Key Concepts:**
- [ ] `+page.server.ts` - Server-only load functions
- [ ] `+page.ts` - Universal load functions (server + client)
- [ ] `+layout.server.ts` - Layout data loading
- [ ] `export async function load()` - The load function
- [ ] `$page.data` - Accessing loaded data
- [ ] `return { props }` - Returning data to pages
- [ ] Error handling with `throw error()`

**Use Cases:**
- Blog posts from CMS
- User profile data
- Product listings
- API data fetching
- Database queries

---

## 3. SvelteKit Layouts

**Priority:** HIGH - Learn alongside routing

**What:** Share UI and logic across multiple pages

**When to use:**
- Common navigation/header/footer
- Shared authentication checks
- Nested route structures

**Why important:**
- DRY (Don't Repeat Yourself)
- Consistent UI across routes
- Nested layouts for complex apps

**Key Concepts:**
- [ ] `+layout.svelte` - Layout components
- [ ] Nested layouts
- [ ] `+layout.server.ts` - Layout data loading
- [ ] Layout inheritance
- [ ] `$page` and `$page.url` for active routes

**Use Cases:**
- App shell (header, nav, footer)
- Dashboard with sidebar
- Protected routes wrapper
- Multi-tenant apps with different layouts

---

## 4. Snippets (Svelte 5)

**Priority:** MEDIUM - Very useful for reusable UI

**What:** Reusable template chunks within components

**When to use:**
- Repeating UI patterns within a component
- Passing template blocks to child components
- Building flexible component APIs

**Why important:**
- Replaces slots in many cases
- More flexible than slots
- Pass templates as props

**Key Concepts:**
- [ ] `{#snippet name()}...{/snippet}` - Define snippets
- [ ] `{@render name()}` - Render snippets
- [ ] Snippets with parameters
- [ ] Passing snippets as props

**Use Cases:**
- Custom table column rendering
- Card headers/footers
- Modal content
- Dropdown menu items
- Tabs content

---

## 5. Context API

**Priority:** MEDIUM - Learn when building component libraries

**What:** Pass data to deeply nested components without props

**When to use:**
- Building reusable component libraries
- Avoiding prop drilling in complex component trees
- Theming systems

**Why important:**
- Cleaner than passing props through many levels
- Scoped to component tree (not global like stores)
- Type-safe with TypeScript

**Key Concepts:**
- [ ] `setContext(key, value)` - Provide data
- [ ] `getContext(key)` - Consume data
- [ ] Context keys (symbols for privacy)
- [ ] Context vs Stores (when to use which)

**Use Cases:**
- Component library theming
- Form context (shared validation state)
- Accordion/Tabs state management
- Modal/Dialog context

---

## 6. SvelteKit Form Actions

**Priority:** MEDIUM - Essential for forms

**What:** Server-side form handling with progressive enhancement

**When to use:**
- Processing form submissions
- Creating/updating data
- Forms that work without JavaScript

**Why important:**
- Progressive enhancement (works without JS)
- Server-side validation
- Simple API, no extra libraries needed

**Key Concepts:**
- [ ] `+page.server.ts` with `export const actions`
- [ ] Named actions vs default action
- [ ] `use:enhance` for progressive enhancement
- [ ] Form validation
- [ ] Returning `{ success, errors }` data
- [ ] `$page.form` - Access form response

**Use Cases:**
- Login/signup forms
- Contact forms
- CRUD operations
- Multi-step forms
- File uploads

---

## 7. SvelteKit Routing

**Priority:** MEDIUM - Learn as you build

**What:** File-based routing with advanced features

**When to use:**
- Dynamic routes
- Nested routes
- Optional parameters

**Why important:**
- Core to SvelteKit apps
- Powerful yet simple
- Handles complex URL patterns

**Key Concepts:**
- [ ] `[slug]` - Dynamic route parameters
- [ ] `[...rest]` - Rest parameters
- [ ] `[[optional]]` - Optional parameters
- [ ] `(groups)` - Route groups (layout control)
- [ ] `$params` - Access route parameters
- [ ] Route matching priority

**Use Cases:**
- Blog: `/blog/[slug]`
- E-commerce: `/products/[category]/[id]`
- User profiles: `/users/[username]`
- Docs: `/docs/[...path]`

---

## 8. SvelteKit Hooks

**Priority:** MEDIUM-LOW - Learn when needed

**What:** Intercept and modify requests/responses

**When to use:**
- Authentication middleware
- Request logging
- Adding custom headers
- Error handling

**Why important:**
- Run code for every request
- Modify requests before they reach pages
- Global error handling

**Key Concepts:**
- [ ] `hooks.server.ts` - Server hooks
- [ ] `handle()` - Request interception
- [ ] `handleFetch()` - Modify fetch requests
- [ ] `handleError()` - Global error handling
- [ ] `event.locals` - Shared request data

**Use Cases:**
- Auth middleware (check JWT on every request)
- Request logging/analytics
- Rate limiting
- CORS headers
- Setting user data in `event.locals`

---

## 9. Advanced Animations

**Priority:** LOW - Polish, not essential

**What:** Beyond basic transitions

**When to use:**
- Complex animation sequences
- List reordering animations
- Coordinated animations

**Why important:**
- Professional, polished UI
- Better UX for list changes
- Smooth state transitions

**Key Concepts:**
- [ ] `animate:flip` - FLIP animations for lists
- [ ] `animate` directive with custom functions
- [ ] Coordinating transitions
- [ ] Motion stores (`tweened`, `spring`)
- [ ] `crossfade` transitions

**Use Cases:**
- Drag-and-drop lists
- Todo list reordering
- Smooth chart animations
- Animated counters
- Morphing UI elements

---

## 10. Server-Side Rendering (SSR) Patterns

**Priority:** MEDIUM - Important for production apps

**What:** Handling server vs client differences

**When to use:**
- Using browser APIs
- Client-only libraries
- Optimizing for SEO

**Why important:**
- Avoid "window is not defined" errors
- Proper SEO
- Fast initial page loads

**Key Concepts:**
- [ ] `import { browser } from '$app/environment'`
- [ ] `onMount()` for client-only code
- [ ] `export const ssr = false` to disable SSR
- [ ] `export const prerender = true` for static generation
- [ ] Conditional imports (`await import()`)

**Use Cases:**
- Using `window`, `document`, `localStorage`
- Client-only libraries (maps, charts)
- Browser-specific features
- Static site generation

---

## 11. Environment Variables & Secrets

**Priority:** MEDIUM - Essential for production

**What:** Managing configuration and secrets

**When to use:**
- API keys
- Database credentials
- Environment-specific config

**Why important:**
- Security (don't expose secrets to client)
- Different config per environment
- Industry standard practice

**Key Concepts:**
- [ ] `$env/static/private` - Server-only secrets
- [ ] `$env/static/public` - Public env vars
- [ ] `$env/dynamic/private` - Runtime server vars
- [ ] `$env/dynamic/public` - Runtime public vars
- [ ] `.env` files
- [ ] Never expose secrets to client

**Use Cases:**
- API keys
- Database URLs
- Feature flags
- Third-party service credentials

---

## 12. SEO & Meta Tags

**Priority:** MEDIUM - Important for production

**What:** Search engine optimization

**When to use:**
- Every public-facing app
- Marketing sites
- Blogs/content sites

**Why important:**
- Discoverability
- Social sharing
- Professional appearance

**Key Concepts:**
- [ ] `<svelte:head>` for meta tags
- [ ] Dynamic meta tags from data
- [ ] Open Graph tags
- [ ] Twitter cards
- [ ] Structured data (JSON-LD)
- [ ] `sitemap.xml` generation
- [ ] `robots.txt`

**Use Cases:**
- Blog SEO
- Product pages
- Landing pages
- Social media sharing

---

## 13. Error Handling

**Priority:** MEDIUM - Important for production

**What:** Graceful error handling and custom error pages

**When to use:**
- 404 pages
- 500 errors
- Loading failures

**Why important:**
- Better UX
- Debugging
- Professional appearance

**Key Concepts:**
- [ ] `+error.svelte` - Error boundary pages
- [ ] `throw error(404, 'Not found')` in load functions
- [ ] `handleError` hook
- [ ] `$page.error` - Access error data
- [ ] Expected vs unexpected errors

**Use Cases:**
- Custom 404 pages
- API error handling
- Form validation errors
- Network failure handling

---

## 14. API Routes (Endpoints)

**Priority:** MEDIUM - Learn when building APIs

**What:** Server-side API endpoints

**When to use:**
- Building REST APIs
- Webhooks
- Form processing
- Proxying external APIs

**Why important:**
- Backend logic in same codebase
- No separate API server needed
- Type-safe with TypeScript

**Key Concepts:**
- [ ] `+server.ts` files
- [ ] `GET`, `POST`, `PUT`, `DELETE` exports
- [ ] `RequestEvent` parameter
- [ ] Returning `json()`, `text()`, `Response`
- [ ] Status codes and headers
- [ ] API authentication

**Use Cases:**
- REST API endpoints
- Webhook receivers
- File uploads
- Stripe/payment webhooks
- Proxy to hide API keys

---

## 15. Testing

**Priority:** MEDIUM-LOW - Learn for serious projects

**What:** Unit and integration testing

**When to use:**
- Production applications
- Team projects
- Critical business logic

**Why important:**
- Prevent regressions
- Confidence in refactoring
- Documentation via tests

**Key Concepts:**
- [ ] Vitest for unit tests
- [ ] Playwright for E2E tests
- [ ] Testing components
- [ ] Testing stores
- [ ] Testing load functions
- [ ] Mocking

**Use Cases:**
- Component behavior tests
- Form validation tests
- API route tests
- E2E user flows

---

## Learning Order Recommendation

### Phase 1: Essential (Learn before first project)
1. **Stores** - For global state
2. **SvelteKit Data Loading** - For fetching data
3. **SvelteKit Layouts** - For shared UI

### Phase 2: Build First Project
- Use Phase 1 knowledge to build a simple app
- Learn the rest on-demand as you encounter problems

### Phase 3: Level Up (Learn as needed)
4. **Snippets** - When you need reusable templates
5. **Form Actions** - When building forms
6. **Routing** - As your app grows
7. **SSR Patterns** - When you hit errors
8. **Environment Variables** - When deploying

### Phase 4: Production Ready
9. **SEO** - Before launch
10. **Error Handling** - Before launch
11. **Hooks** - For auth/middleware
12. **API Routes** - If building APIs

### Phase 5: Advanced (Optional)
13. **Context API** - For component libraries
14. **Advanced Animations** - For polish
15. **Testing** - For serious projects

---

## Progress Tracker

Mark topics as you learn them:

- [x] Stores
- [x] SvelteKit Data Loading
- [x] SvelteKit Layouts
- [x] Snippets
- [x] Context API
- [ ] Form Actions
- [ ] Advanced Routing
- [ ] Hooks
- [ ] Advanced Animations
- [ ] SSR Patterns
- [ ] Environment Variables
- [ ] SEO & Meta Tags
- [ ] Error Handling
- [ ] API Routes
- [ ] Testing

---

## Resources

- [Svelte Tutorial](https://svelte.dev/tutorial)
- [SvelteKit Docs](https://kit.svelte.dev/docs)
- [Svelte 5 Runes](https://svelte.dev/docs/svelte/what-are-runes)
- [Joy of Code - Svelte](https://joyofcode.xyz/sveltekit-for-beginners)

---


