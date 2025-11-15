export type Todo = {
    id: string;
    title: string;
    done: boolean;
};

const db = new Map<string, Todo[]>();

export function getTodos(userId: string): Todo[] {
    if (!db.has(userId)) {
        db.set(userId, [
            {
                id: crypto.randomUUID(),
                title: "Learn Svelte",
                done: false
            }
        ]);
    }

    return db.get(userId)!;
}

export function createTodo(userId: string, title: string): void {
    if (!title || title.trim() === '') {
        throw new Error('Todo must have a title');
    }

    const todos = getTodos(userId);

    if (todos.some((todo) => todo.title === title)) {
        throw new Error('Todo already exists');
    }

    todos.push({
        id: crypto.randomUUID(),
        title,
        done: false
    });
}

export function deleteTodo(userId: string, todoId: string): void {
    const todos = getTodos(userId);
    const index = todos.findIndex((todo) => todo.id === todoId);

    if (index !== -1) {
        todos.splice(index, 1);
    }
}