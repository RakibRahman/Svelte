# Svelte Learning Repository

A hands-on practice repository for learning Svelte 5 and SvelteKit fundamentals, featuring modern Svelte Runes and reactive state management.

## Topics Covered

### Svelte 5 Runes
- **`$state`** - Local reactive state management
- **`$derived`** - Computed/derived state from other reactive values
- **`$effect`** - Side effects and lifecycle management with cleanup
- **`$props`** - Component props with TypeScript types
- **`$inspect`** - Debugging reactive state changes
- **`$state.snapshot`** - Capturing state snapshots for logging

### Core Concepts
- Component composition and nested components
- Props passing and prop spreading (`{...props}`)
- **Event handling** - DOM events, inline handlers, event capture, component events
- Conditional rendering with `{#if}`, `{:else if}`, `{:else}`
- List rendering with `{#each}` blocks and keyed iterations
- Async handling with `{#await}` blocks (`:then`, `:catch`)
- Template expressions and dynamic attributes
- Component-scoped CSS styling
- **Classes and styles** - Dynamic class binding, style directives, CSS custom properties
- **Actions** - Element-level lifecycle functions for custom behavior
- **Transitions** - Animate elements entering and leaving the DOM
- **Snippets** - Reusable template chunks within components (Svelte 5)
- **Context API** - Pass data through component tree without prop drilling
- **Form Actions** - Server-side form handling with progressive enhancement (SvelteKit)
- **API Routes** - RESTful endpoints with `+server.ts` files (SvelteKit)

### State Management
- Local component state with `$state` rune
- Global shared state using shared modules
- Array state mutations and reactivity
- Derived/computed values with `$derived`
- **Stores** - Reactive stores for cross-component state management (writable, readable, derived)

### TypeScript Integration
- Type-safe component props
- Exported TypeScript types/interfaces
- Full TypeScript support configuration

### SvelteKit Features
- **File-based routing** - URL-based routing with `+page.svelte` files
- **Layout components** - Shared UI with `+layout.svelte` (root and nested layouts)
- **Dynamic routes** - Parameter-based routes using `[slug]` syntax
- **Server-side data loading** - Load functions in `+page.server.ts` and `+layout.server.ts`
- **Error handling** - Built-in 404 handling with SvelteKit's error function
- Page navigation and links
- Auto adapter configuration

## Project Structure

```
src/
├── routes/
│   ├── +page.svelte          # Homepage with component examples
│   ├── +layout.svelte         # Root layout component
│   ├── logic/
│   │   └── +page.svelte       # Logic/conditionals demo page
│   ├── events/
│   │   └── +page.svelte       # Event handling demo page
│   ├── bindings/
│   │   └── +page.svelte       # Form bindings demo page
│   ├── classes-styles/
│   │   └── +page.svelte       # Classes and styles demo page
│   ├── actions/
│   │   └── +page.svelte       # Actions demo page
│   ├── transitions/
│   │   └── +page.svelte       # Transitions demo page
│   ├── stores/
│   │   ├── +page.svelte       # Stores demo page
│   │   └── components/
│   │       └── ResetCount.svelte # Store consumer component
│   ├── snippets/
│   │   └── +page.svelte       # Snippets demo page
│   ├── context/
│   │   ├── +page.svelte       # Context API demo page
│   │   └── components/
│   │       ├── UserAvatar.svelte # Context consumer
│   │       └── UserProfileUpdate.svelte # Context updater
│   ├── blog/
│   │   ├── +layout.svelte     # Blog root layout with navigation
│   │   ├── +page.svelte       # Blog listing page
│   │   ├── +page.server.ts    # Load blog post summaries
│   │   └── [slug]/            # Dynamic route for individual posts
│   │       ├── +layout.svelte # Nested layout with sidebar
│   │       ├── +layout.server.ts # Load related posts
│   │       ├── +page.svelte   # Individual blog post page
│   │       └── +page.server.ts # Load specific post data
│   ├── form-actions/
│   │   ├── +page.svelte       # Form actions demo (todo app)
│   │   └── +page.server.ts    # Server-side form actions & data loading
│   └── api-routes/
│       └── +page.svelte       # API routes documentation page
├── actions/
│   └── trapFocus.svelte.ts    # Focus trap action
├── lib/
│   └── server/
│       └── db.ts              # Mock database for form actions demo
├── store/
│   └── store.ts               # Global stores (writable, readable, derived)
├── componets/                 # Component library
│   ├── BasicCounter.svelte    # Local state example
│   ├── Counter.svelte         # Global state example
│   ├── ArrayState.svelte      # Array state & $derived
│   ├── TimerEffect.svelte     # $effect rune with cleanup
│   ├── User.svelte            # Props & TypeScript
│   ├── Nested.svelte          # Component composition
│   ├── Stepper.svelte         # Component events (callback props)
│   ├── TextBinding.svelte     # Text input binding
│   ├── NumericBinding.svelte  # Numeric input binding
│   ├── TextareaBinding.svelte # Textarea binding
│   ├── CheckboxBinding.svelte # Checkbox binding
│   ├── SelectElement.svelte   # Select element binding
│   ├── GroupInputs.svelte     # Radio & checkbox groups
│   ├── Box.svelte             # Component with CSS custom properties
│   ├── Canvas.svelte          # Drawing canvas component
│   └── Snippets.svelte        # Component demonstrating snippets
└── shared/
    ├── shared.svelte.ts       # Global state store
    └── data.ts                # Mock blog post data
```

## Getting Started

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

### Installing Dependencies

```sh
npm install
# or
pnpm install
# or
yarn
```

### Developing

Start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Learning Resources

- [Svelte Documentation](https://svelte.dev/docs)
- [SvelteKit Documentation](https://svelte.dev/docs/kit)
- [Svelte 5 Runes Guide](https://svelte.dev/docs/svelte/what-are-runes)
- [Svelte Tutorial](https://svelte.dev/tutorial)

## Key Examples in This Repo

### Local State Management
See [BasicCounter.svelte](src/componets/BasicCounter.svelte) for a simple counter using `$state` rune.

### Global State Sharing
See [Counter.svelte](src/componets/Counter.svelte) and [shared.svelte.ts](src/shared/shared.svelte.ts) for shared state across multiple components.

### Derived State & Array Reactivity
See [ArrayState.svelte](src/componets/ArrayState.svelte) for `$derived` and array state management.

### Side Effects & Cleanup
See [TimerEffect.svelte](src/componets/TimerEffect.svelte) for `$effect` with interval cleanup.

### Props & TypeScript
See [User.svelte](src/componets/User.svelte) for typed component props using `$props` rune.

### Logic Blocks & Control Flow
See [logic/+page.svelte](src/routes/logic/+page.svelte) for comprehensive examples:
- Conditional rendering with `{#if}`, `{:else if}`, `{:else}` blocks
- List rendering with `{#each}` blocks
- Keyed each blocks for optimized list updates
- Async operations with `{#await}` blocks (promise handling, API calls)

### Event Handling
See [events/+page.svelte](src/routes/events/+page.svelte) for event handling patterns:
- **DOM event handlers** - Attach event listeners with `on:eventname` (e.g., `onpointermove`, `onclick`)
- **Inline handlers** - Use arrow functions directly in templates
- **Event capture** - Handle events in capture phase with `oneventnamecapture`
- **Component events** - Pass callback functions as props for child-to-parent communication
- **Event modifiers** - Use modifiers like `preventDefault`, `stopPropagation`, `once`, etc.

### Form Bindings
See [bindings/+page.svelte](src/routes/bindings/+page.svelte) for comprehensive binding examples:
- **Text input binding** - `bind:value` for two-way data binding with text inputs
- **Numeric inputs** - Automatic type coercion for number and range inputs
- **Textarea binding** - Multi-line text input binding
- **Checkbox binding** - `bind:checked` for boolean checkbox state
- **Select binding** - Binding select elements to objects and primitives
- **Group bindings** - `bind:group` for radio button groups and checkbox groups
- **Multi-select** - Binding multiple selections to arrays

### Classes and Styles
See [classes-styles/+page.svelte](src/routes/classes-styles/+page.svelte) for styling patterns:
- **Class directive** - Conditional CSS classes with `class={condition ? 'active' : ''}`
- **Style directive** - Inline reactive styles with `style:property={value}`
- **CSS custom properties** - Pass CSS variables to components with `--variable` props
- **Global CSS modifier** - Use `:global()` to target elements inside other components
- **Shorthand syntax** - Use `style:color` when variable name matches CSS property

### Actions
See [actions/+page.svelte](src/routes/actions/+page.svelte) for actions patterns:
- **Element lifecycle** - Run code when elements are created and destroyed
- **use directive** - Apply actions with `use:actionName` on any element
- **Focus management** - Trap focus within modal dialogs with custom `trapFocus` action
- **Canvas integration** - Interactive drawing canvas using pointer events
- **Cleanup** - Return cleanup functions from actions for proper teardown

### Transitions
See [transitions/+page.svelte](src/routes/transitions/+page.svelte) for transition patterns:
- **Built-in transitions** - Use `fade`, `fly`, `slide`, `scale`, `blur`, and `draw` transitions
- **Directional control** - Separate `in:` and `out:` directives for different enter/exit animations
- **Custom CSS transitions** - Create custom transitions by returning CSS properties over time
- **Custom JS transitions** - Use JavaScript to control transition behavior with the `tick` function
- **Transition events** - Listen to `onintrostart`, `onintroend`, `onoutrostart`, `onoutroend`
- **Key blocks** - Trigger transitions on value changes with `{#key}` blocks
- **Global modifier** - Use `transition:name|global` to play transitions on parent block changes

### Stores
See [stores/+page.svelte](src/routes/stores/+page.svelte) and [store/store.ts](src/store/store.ts) for store patterns:
- **Writable stores** - Create mutable stores with `writable()` for shared state
- **Readable stores** - Create read-only stores with `readable()` for streaming data (e.g., time updates)
- **Derived stores** - Compute values from other stores with `derived()`
- **Auto-subscription** - Use `$store` syntax in components to automatically subscribe/unsubscribe
- **Manual subscription** - Use `store.subscribe()` outside components (remember to unsubscribe)
- **Update methods** - Use `set()` to replace values or `update()` to transform values
- **Custom logic** - Add side effects in subscriptions (e.g., alert when count reaches a value)

### Snippets
See [snippets/+page.svelte](src/routes/snippets/+page.svelte) for snippet patterns:
- **Define snippets** - Use `{#snippet name(params)}...{/snippet}` to create reusable template chunks
- **Render snippets** - Use `{@render name(args)}` to render snippets
- **Parameters** - Snippets can accept parameters like functions
- **Passing as props** - Pass snippets to child components for flexible APIs
- **Reusability** - DRY principle within components without creating separate files
- **Use cases** - Table rows, list items, card templates, modal content

### Context API
See [context/+page.svelte](src/routes/context/+page.svelte) for context patterns:
- **setContext()** - Provide data to child components in the component tree
- **getContext()** - Retrieve data from parent components
- **Reactive context** - Use `SvelteMap` or other reactive data structures for automatic updates
- **Scoped state** - Context is scoped to component tree, not global like stores
- **Avoid prop drilling** - Pass data through multiple component levels without explicit props
- **Component libraries** - Perfect for theming, configuration, and shared component state
- **Context vs Stores** - Use context for component-tree-scoped data, stores for global state

### Routing & Layouts
See [blog/](src/routes/blog/) for comprehensive routing and layout patterns:
- **File-based routing** - Create routes by adding `+page.svelte` files in the routes directory
- **Root layouts** - Use `+layout.svelte` to wrap all pages with shared UI (navigation, footer)
- **Nested layouts** - Create layouts specific to route segments for additional structure
- **Dynamic routes** - Use `[param]` syntax to create parameter-based routes (e.g., `/blog/[slug]`)
- **Server-side data loading** - Use `+page.server.ts` and `+layout.server.ts` to fetch data before rendering
- **Load functions** - Return data from `load()` functions to make it available to pages via `$props()`
- **Error handling** - Use SvelteKit's `error()` function to throw 404 or other HTTP errors
- **Route organization** - Group related routes in folders, each with their own layouts and data loading

### Form Actions
See [form-actions/+page.svelte](src/routes/form-actions/+page.svelte) and [form-actions/+page.server.ts](src/routes/form-actions/+page.server.ts) for form action patterns:
- **Progressive enhancement** - Forms work without JavaScript, enhanced with JS when available
- **Server-side validation** - Validate form data on the server with form actions and return errors
- **Form actions** - Define actions in `+page.server.ts` to handle POST requests (create, delete, update)
- **ActionData** - Access form submission results and validation errors via `form` prop
- **Named actions** - Use multiple form actions on a single page with `?/actionName` syntax
- **use:enhance** - Add client-side enhancements like preventing full page reload
- **Error handling** - Return validation errors with `fail()` and display them to users
- **Cookies** - Manage user sessions and state persistence with cookies
- **TypeScript types** - Type-safe actions with `Actions` and `PageServerLoad` types

### API Routes
See [api-routes/+page.svelte](src/routes/api-routes/+page.svelte) for API routes documentation:
- **Server endpoints** - Create API endpoints with `+server.ts` files
- **HTTP methods** - Handle GET, POST, PUT, DELETE, PATCH requests
- **JSON responses** - Return JSON data using the `json()` helper
- **Request context** - Access request data, params, cookies, and more
- **Dynamic routes** - Create parameterized endpoints with `[param]` syntax
- **Error handling** - Return appropriate HTTP status codes and error messages
- **Use cases** - RESTful APIs, webhooks, file uploads, third-party integrations
