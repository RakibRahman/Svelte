const focusable = (node: HTMLElement): HTMLElement[] => {
    return Array.from(
        node.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
    );
};


export const trapFocus = (node: HTMLElement) => {
    const previous = document.activeElement as HTMLElement | null;
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key !== "Tab") {
            return;
        }
        const current = document.activeElement;
        const elements = focusable(node);
        const first = elements.at(0);
        const last = elements.at(-1);
        if (event.shiftKey && current === first) {
            last?.focus();
            event.preventDefault();
        }

        if (!event.shiftKey && current === last) {
            first?.focus();
            event.preventDefault();
        }
    }

    $effect(() => {
        focusable(node)[0]?.focus();
        node.addEventListener('keydown', handleKeyDown)

        return () => {
            node.removeEventListener('keydown', handleKeyDown);
            previous?.focus();
        }
    })

}