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

### State Management
- Local component state with `$state` rune
- Global shared state using shared modules
- Array state mutations and reactivity
- Derived/computed values with `$derived`

### TypeScript Integration
- Type-safe component props
- Exported TypeScript types/interfaces
- Full TypeScript support configuration

### SvelteKit Features
- File-based routing (`+page.svelte`)
- Layout components (`+layout.svelte`)
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
│   └── events/
│       └── +page.svelte       # Event handling demo page
├── componets/                 # Component library
│   ├── BasicCounter.svelte    # Local state example
│   ├── Counter.svelte         # Global state example
│   ├── ArrayState.svelte      # Array state & $derived
│   ├── TimerEffect.svelte     # $effect rune with cleanup
│   ├── User.svelte            # Props & TypeScript
│   ├── Nested.svelte          # Component composition
│   └── Stepper.svelte         # Component events (callback props)
└── shared/
    └── shared.svelte.ts       # Global state store
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
