const db = new Map();

type Todo = {
    id: string
    title: string
    done: boolean
}

export const getTodos = (userId: string): Todo[] => {
    if (!db.get(userId)) {
        db.set(userId, [
            {
                id: crypto.randomUUID(),
                title: "Learn Svelte",
                done: false
            }
        ])
    }

    return db.get(userId)
}


export function createTodo(userId: string, title: string) {
    if (title.trim() === '') {
        throw new Error('todo must have a description');
    }
    const todos: Todo[] = db.get(userId);
    console.log({ todos });

    if (todos?.length > 0 && todos.find((todo) => todo.title === title)) {
        throw new Error('todos must be unique');
    }
    todos.push({
        id: crypto.randomUUID(),
        title,
        done: false
    });

}

export function deleteTodo(userId: string, todoid: string) {
    const todos: Todo[] = db.get(userId);
    const index = todos.findIndex((todo) => todo.id === todoid);

    if (index !== -1) {
        todos.splice(index, 1);
    }
}